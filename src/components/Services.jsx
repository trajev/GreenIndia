import React from 'react'

const Services = () => {
  return (
    <div className=' w-full flex flex-col items-center px-[10vw] pt-[6vw] pb-[4vw] '>

      <p className='text-md mb-3 italic text-green-500 tracking-wider font-bold '> SERVICES </p>

      <h1 className='text-5xl font-bold'>What’s Your Waste Problem?</h1>

      <p className='text-gray-500 mt-6 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nam debitis corrupti.</p>

      <div className=' w-full h-full flex flex-wrap gap-10 justify-left'>

        <div className='w-[22vw] hover:scale-110 transition-all duration-400 ease shadow-xl rounded-lg border py-2 px-2 '>
          <div className='flex items-center justify-center mb-3'>
            <img src="https://www.thestatesman.com/wp-content/uploads/2019/03/plastic.jpg" alt="" className='w-[32vw] h-[30vh] object-cover rounded-md' />
          </div>
          <div className='flex justify-between items-start px-2 py-3'>
            <div >
              <h1 className='font-semibold text-xl'>Plastic Waste</h1>
              <h6 className='w-[90%] text-sm '>ex: Bottles, bags, packaging materials etc. </h6>
            </div>
            <h1 className='text-lg font-bold text-green-800 '>&#8377;70/kg</h1>
          </div>
        </div>


        <div className='w-[22vw] hover:scale-110 transition-all duration-400 ease shadow-xl rounded-lg border py-2 px-2 '>
          <div className='flex items-center justify-center mb-3'>
            <img src="https://www.hindusthanrecycling.com/images/service-9.jpg" alt="" className='w-[32vw] h-[30vh] object-cover rounded-md' />
          </div>
          <div className='flex justify-between items-start px-2 py-3'>
            <div >
              <h1 className='font-semibold text-xl'>Electronic Waste</h1>
              <h6 className='w-[90%] text-sm '>ex: Computer parts, Television, Batteries etc. </h6>
            </div>
            <h1 className='text-lg font-bold text-green-800 '>&#8377;100/kg</h1>
          </div>
        </div>

        <div className='w-[22vw] hover:scale-110 transition-all duration-400 ease shadow-xl rounded-lg border py-2 px-2 '>
          <div className='flex items-center justify-center mb-3'>
            <img src="https://cdn.pixabay.com/photo/2014/04/25/16/04/garbage-331929_1280.jpg" alt="" className='w-[32vw] h-[30vh] object-cover rounded-md' />
          </div>
          <div className='flex justify-between items-start px-2 py-3'>
            <div >
              <h1 className='font-semibold text-xl'>Metal Waste</h1>
              <h6 className='w-[90%] text-sm '>ex: Aluminum cans, scrap metal, food cans etc. </h6>
            </div>
            <h1 className='text-lg font-bold text-green-800 '>&#8377;150/kg</h1>
          </div>
        </div>

        <div className='w-[22vw] hover:scale-110 transition-all duration-400 ease shadow-xl rounded-lg border py-2 px-2 '>
          <div className='flex items-center justify-center mb-3'>
            <img src="https://www.rubicon.com/wp-content/uploads/2022/01/newspaper-bundles-for-paper-recycling.jpg" alt="" className='w-[32vw] h-[30vh] object-cover rounded-md' />
          </div>
          <div className='flex justify-between items-start px-2 py-3'>
            <div >
              <h1 className='font-semibold text-xl'>Paper Waste</h1>
              <h6 className='w-[90%] text-sm '>ex: Newspapers, cardboard, office paper, pamphlets etc. </h6>
            </div>
            <h1 className='text-lg font-bold text-green-800 '>&#8377;50/kg</h1>
          </div>
        </div>

        <div className='w-[22vw] hover:scale-110 transition-all duration-400 ease shadow-xl rounded-lg border py-2 px-2 '>
          <div className='flex items-center justify-center mb-3'>
            <img src="https://images.surferseo.art/3f030f04-67d1-4b0e-acb5-1344dc825301.jpeg" alt="" className='w-[32vw] h-[30vh] object-cover rounded-md' />
          </div>
          <div className='flex justify-between items-start px-2 py-3'>
            <div >
              <h1 className='font-semibold text-xl'>Glass Waste</h1>
              <h6 className='w-[90%] text-sm '>ex: Bottles, jars, broken glass etc. </h6>
            </div>
            <h1 className='text-lg font-bold text-green-800 '>&#8377;150/kg</h1>
          </div>
        </div>

        <div className='w-[22vw] hover:scale-110 transition-all duration-400 ease shadow-xl rounded-lg border py-2 px-2 '>
          <div className='flex items-center justify-center mb-3'>
            <img src="https://checksammy.com/wp-content/uploads/2023/04/blog-foodwaste.webp" alt="" className='w-[32vw] h-[30vh] object-cover rounded-md' />
          </div>
          <div className='flex justify-between items-start px-2 py-3'>
            <div >
              <h1 className='font-semibold text-xl'>Organic Waste</h1>
              <h6 className='w-[90%] text-sm '>ex: Food scraps, garden waste, compostable materials etc. </h6>
            </div>
            <h1 className='text-lg font-bold text-green-800 '>&#8377;70/kg</h1>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Services