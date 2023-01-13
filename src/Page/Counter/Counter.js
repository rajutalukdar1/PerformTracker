import React from 'react';
import CountUp from 'react-countup';
import './Counter.css'
const Counter = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid row-gap-8 sm:grid-cols-4">
                    <div className='leading-[1]'>
                        <p className='text-xl font-bold'>FUN FACTS </p><br />
                        <p className='text-3xl font-bold'>Secure, Compliant</p> <br />
                        <p className='text-xl font-bold'>and easy</p>
                    </div>
                    <div className="text-center">
                        <h6 className="text-5xl font-bold text-deep-purple-accent-400 red"><CountUp end={25000} /></h6>
                        <p className="font-bold red">CAR SOLD</p>
                    </div>
                    <div className="text-center">
                        <h6 className="text-5xl font-bold text-deep-purple-accent-400 red"><CountUp end={2500} /></h6>
                        <p className="font-bold red">BUYERS</p>
                    </div>
                    <div className="text-center">
                        <h6 className="text-5xl font-bold text-deep-purple-accent-400 red"><CountUp end={1500} /></h6>
                        <p className="font-bold red">SELLERS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;