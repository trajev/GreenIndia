import React, { useState } from 'react';
import './User_Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const initialUserInfo = {
    name: "John Doe",
    phone: "123-456-7890",
    email: "john.doe@example.com",
    photo: "https://via.placeholder.com/150"
  };

  const initialRequests = [
    { id: 1, date: "2024-07-14", details: "Steel(2kg), Glass(3kg)", totalAmount: 150 },
    { id: 2, date: "2024-07-13", details: "Plastic(5kg)", totalAmount: 75 },
    { id: 3, date: "2024-07-12", details: "Metal(1kg), Paper(4kg)", totalAmount: 120 },
  ];

  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const [requests, setRequests] = useState(initialRequests);

  const deleteRequest = (id) => {
    const updatedRequests = requests.filter(request => request.id !== id);
    setRequests(updatedRequests);
  };

  const handleProfileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserInfo({ ...userInfo, photo: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="dashboard">
      <div className="sidebar flex flex-col items-center">
        <img src={userInfo.photo} alt="User" className="profile-photo" />
        <h2 className='text-black' >{userInfo.name}</h2>
        <p className='text-black' >{userInfo.phone}</p>
        <p className='text-black' >{userInfo.email}</p>
        <input type="file" accept="image/*" id="profileUpload" style={{ display: 'none' }} onChange={handleProfileUpload} />
        <button onClick={() => document.getElementById('profileUpload').click()}>Upload Profile</button>
      </div>
      <div className="content">
        <h1 className=' text-black text-xl my-2'>My Requests</h1>
        <div className="request-list">
          {requests.map(request => (
            <div className="request-item" key={request.id}>
              <div className="request-date">{request.date}</div>
              <div className="request-details">{request.details}</div>
              <div className="request-amount">Total Amount: ${request.totalAmount}</div>
              <button className="delete-button" onClick={() => deleteRequest(request.id)}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
