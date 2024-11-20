import Image from 'next/image';
import React from 'react';

const ServiceCards = ({ service }) => {

    const { id, title, description, img, price} = service;
    console.log(img);

    console.log(service.img);
    return (
        <div>
            <div className="card bg-base-100  shadow-xl">
                <figure>
                <Image height={120} width={430} src={img} alt={title}/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                   
                    <div className="card-actions flex justify-between">
                        <h2 className='text-orange-600 text-xl font-semibold'>{price}</h2>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCards;