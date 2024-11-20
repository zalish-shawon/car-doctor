import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className='text-slate-900 h-screen'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div>
                        Image
                    </div>
                    <div>
                        content
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default About;