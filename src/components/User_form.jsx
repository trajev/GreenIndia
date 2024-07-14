import React, { useEffect, useState } from "react";
import "./User_form.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLocationArrow, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from "react-hook-form";


library.add(faLocationArrow, faPlus, faTrashAlt);

export default function User_form() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const [wasteInputs, setWasteInputs] = useState([]);
  const [locationSuccess, setLocationSuccess] = useState(false);
  const [approxPrice, setApproxPrice] = useState(0);

  function showPosition(position) {
    setLocationSuccess(true);
  }

  function getLocation(event) {
    event.preventDefault(); // Prevent form submission
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      setLocationSuccess(false);
    }
  }

  function addMore() {
    setWasteInputs([
      ...wasteInputs,
      { id: `wasteQty${wasteInputs.length + 2}`, typeId: `wasteType${wasteInputs.length + 2}`, key: `waste${wasteInputs.length + 2}` }
    ]);
  }

  function removeInput(key) {
    setWasteInputs(wasteInputs.filter(input => input.key !== key));
  }

  function validateInput(event) {
    const input = event.target;
    if (input.checkValidity()) {
      input.classList.add('valid');
    } else {
      input.classList.remove('valid');
    }
  }

  function calculateApproxPrice() {
    let total = 0;
    wasteInputs.forEach(input => {
      const qty = parseFloat(document.getElementById(input.id)?.value) || 0;
      const type = parseFloat(document.getElementById(input.typeId)?.value) || 0;
      if (!isNaN(qty) && !isNaN(type)) {
        total += qty * type;
      }
    });
    const initialQty = parseFloat(document.getElementById("wasteQty1")?.value) || 0;
    const initialType = parseFloat(document.getElementById("wasteType1")?.value) || 0;
    if (!isNaN(initialQty) && !isNaN(initialType)) {
      total += initialQty * initialType;
    }
    setApproxPrice(total);
  }

  useEffect(() => {
    calculateApproxPrice();
  }, [wasteInputs]);

  useEffect(() => {
    calculateApproxPrice();
  });

  return (
    <div id="outsideBox" className="py-10 flex flex-col items-center gap-6">

      <h1 className="font-semibold text-emerald-900 text-2xl">Make a Request</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name" className="text-black">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name.." onBlur={validateInput} required />
        </div>
        <div>
          <label htmlFor="email" className="text-black">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email.."
            onBlur={validateInput}
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-black">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="Your Phone Number.." onBlur={validateInput} required />
        </div>
        <div>
          <label htmlFor="locBtn" className="text-black">Location</label>
          <button id="locBtn" onClick={getLocation} className="py-2 px-3 ml-5 rounded-full">
            <FontAwesomeIcon icon="location-arrow" />
          </button>
          {locationSuccess && <div className="success-message">Location taken successfully!</div>}
        </div>
        <div>
          <label htmlFor="wasteQty1" className="text-black">Waste</label>
          <div id="wasteContainer" >
            <div className="flex items-center">
              <input type="number" id="wasteQty1" min={1} placeholder="in Kg..." onBlur={validateInput} required onChange={calculateApproxPrice} className="px-2 py-4" />
              <select name="wasteType" id="wasteType1" onBlur={validateInput} required onChange={calculateApproxPrice} className="px-2 py-4">
                <option id="plastic" value="15">Plastic</option>
                <option id="paper" value="10">Paper</option>
                <option id="metal" value="70">Metal</option>
              </select>
            </div>
            {wasteInputs.map((input) => (
              <div key={input.key} className="flex items-center">
                <input type="number" id={input.id} min={1} placeholder="in Kg..." onBlur={validateInput} required onChange={calculateApproxPrice} className="px-2 py-4" />
                <select name="wasteType" id={input.typeId} onBlur={validateInput} required onChange={calculateApproxPrice} className="px-2 py-4">
                  <option id="plastic" value="15">Plastic</option>
                  <option id="paper" value="10">Paper</option>
                  <option id="metal" value="70">Metal</option>
                </select>
                <button type="button" onClick={() => removeInput(input.key)}>
                  <FontAwesomeIcon icon="trash-alt" />
                </button>
              </div>
            ))}
          </div>
          <button type="button" onClick={addMore}>
            <FontAwesomeIcon icon="plus" />
          </button>
        </div>
        <div>
          <div id="approxPrice">
            Approximate Price: ${approxPrice.toFixed(2)}
          </div>
          <button type="submit" className="px-10 py-3 hover:bg-gray-200 text-white my-2 rounded-lg  hover:text-green-600 transition-all duration-500 ease-in-out bg-green-600 font-semibold text-lg">Submit</button>
        </div>
      </form>
    </div>
  );
}
