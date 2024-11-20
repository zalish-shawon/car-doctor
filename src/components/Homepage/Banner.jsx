import React from 'react';

const Banner = () => {
    return (
    <div className='container mx-auto'>
        <div className="carousel w-full ">
        {
          banners.map((banner, index)=> (
            <div style={{backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${index+1}.jpg)`}} key={index}  id={`slide${index + 1}`} className="carousel-item relative w-full h-[90vh] bg-bottom bg-no-repeat bg-cover">
            <div className='h-full w-full flex items-center pl-36'>
                <div>
                <h1 className='text-5xl font-bold text-white'>{banner.title}</h1>
                  <p className='text-white'>{banner.description}.</p>
                  <button className='btn btn-primary mt-4'>Discover more</button>
                  <button className='btn btn-primary btn-outline ml-3 mt-4'>Latest more</button>
                </div>
            </div>
            <div className="absolute flex justify-between transform bottom-12 right-12 gap-4">
              <a href={banner.prev} className="btn btn-circle">❮</a>
              <a href={banner.next} className="btn btn-circle">❯</a>
            </div>
          </div>
          
          ))
        }  
    </div>
    </div>
    );
};

const banners = [
  
  {
    title: "Affordable Price For Car Servicing",
    description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide2",
    prev: "#slide4",
  },
  {
    title: "Affordable Price For Car Servicing",
    description: "There are many variations of passages of available, but the majority have suffered alteration in some form",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    title: "Affordable Price For Car Servicing",
    description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    title: "Affordable Price For Car Servicing",
    description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide1",
    prev: "#slide3",
  },
 
]

export default Banner;