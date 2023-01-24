import React from 'react';
import CountUp from 'react-countup';
import './Counter.css'
const Counter = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid row-gap-8 sm:grid-cols-5 items-center mx-auto">
                    <div className='leading-[1]'>
                        <p className='text-xl font-bold'>FUN FACTS </p><br />
                        <p className='text-3xl font-bold'>Secure, Compliant</p> <br />
                        <p className='text-xl font-bold'>and easy</p>
                    </div>
                    <div className="text-center">
                        <h6 className="text-3xl font-bold text-deep-purple-accent-400 red"><CountUp end={6870} /></h6>
                        <p className="font-bold red">Businesses Choose <br/> Payonline</p>
                    </div>
                    <div className="text-center">
                        <h6 className="text-3xl font-bold text-deep-purple-accent-400 red"><CountUp end={5257} /></h6>
                        <p className="font-bold red ">Our Business <br/> Partners</p>
                    </div>
                    <div className="text-center">
                        <h6 className="text-3xl font-bold text-deep-purple-accent-400 red"><CountUp end={45} />+</h6>
                        <p className="font-bold red">Years Industry <br/>Experience</p>
                    </div>
                    <div className="text-center">
                        <h6 className="text-5xl font-bold text-deep-purple-accent-400 red"><CountUp end={69} />+</h6>
                        <p className="font-bold red">HR & Payroll <br/> Solutions</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;