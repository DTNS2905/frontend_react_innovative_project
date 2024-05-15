import React from 'react'
import { BiTimeFive } from "react-icons/bi";
import logo1 from '../../Assets/logo (1).png'
import logo2 from '../../Assets/logo (2).png'
import logo3 from '../../Assets/logo (3).png'
import logo4 from '../../Assets/logo (4).png'
import logo5 from '../../Assets/logo (5).png'
import logo6 from '../../Assets/logo (6).png'

const Data = [
  {
    id:1,
    image: logo1,
    title: 'Home',
    time: 'Now',
    location:'Stay',
    desc:'Detail for your home',
    room: 'See more',
    detail: 'Your Room',
  },
  {
    id:2,
    image: logo2,
    title: 'Map',
    time: 'Now',
    location:'Location',
    desc:'Way from you need',
    room: 'See more',
    detail: 'Your Location',
  },
  {
    id:3,
    image: logo3,
    title: 'Bill',
    time: 'Now',
    location:'Price',
    desc:'Cost of living',
    room: 'See more',
    detail: 'Your Bill',
  },
  {
    id:4,
    image: logo4,
    title: 'Interact',
    time: 'Now',
    location:'Chatting',
    desc:'Chat here',
    room: 'See more',
    detail: 'Interact',
  },
  {
    id:5,
    image: logo5,
    title: 'Weather',
    time: 'Now',
    location:'VietNam',
    desc:'The weather today',
    room: 'See more',
    detail: 'Weather'
  },
  {
    id:6,
    image: logo6,
    title: 'Request',
    time: 'Now',
    location:'Feedback or Request',
    desc:'Q&A',
    room: 'See more',
    detail: 'Your Request',
  },
]

const Rent = () => {
  return (
    <div>
      <div className="rentContainer flex gap-10 justify-center flex-wrap items-center py-10">
       
          {
            Data.map(({id, image, title, time, location, desc, room, detail}) => {
              return (
                <div key={id} className="group group/item singleRent w-[250px] p-[20px] bg-white rounded[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

                <span className="flex justify-between items-center gap-4"> 
                          <h1 className="test-[16px] font-semibold text-textColor gourp-hover:text-white">{title}</h1>
      
                          <span className="flex items-center text-[#ccc] gap-1">
                          <BiTimeFive/>{time}
                          </span>
                          
                </span>
                <h6 className="text-[#ccc]">{location}</h6>
      
                <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                      {desc}
                </p>
                    
      
                  <div className="house flex items-center gap-2">
                       <img src={image} alt="House Logo" className="w-[10%]"/>
                      <span className="text-[14px] py-[1rem] block group-hover:test-white">{detail}</span>
                  </div>
      
                  <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] fonts-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white">
                   {room}
                  </button>
                   
      
              </div>
              )
            })
          }
        
      </div>
    </div>
  )
}

export default Rent
