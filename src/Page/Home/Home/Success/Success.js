import React from 'react';

const Success = () => {
    return (
        <section className='text-center my-16 mx-auto max-w-screen-xl'>
            <div>
                <p className='text-blue-500 font-semibold mb-2'>PEOPLE BEHIND THE SUCCESS</p>
                <h1 className='text-3xl font-bold'>Meet Our Expert People
                    <br />
                    of Payonline</h1>
            </div>
            <div className='my-6 grid lg:grid-cols-4 md:grid-cols-2 gap-0'>
                <div className='my-6'>
                    <div className="avatar">
                        <div className="w-48 rounded-full">
                            <img src="https://placeimg.com/192/192/people" alt='' />
                        </div>
                    </div>
                    <p className='text-xl font-semibold'>Jessica Brown</p>
                    <p>Employer</p>
                </div>
                <div className='my-6'>
                    <div className="avatar">
                        <div className="w-48 rounded-full">
                            <img src="https://placeimg.com/192/192/people" alt='' />
                        </div>
                    </div>
                    <p className='text-xl font-semibold'>Chris Micheal</p>
                    <p>Employer</p>
                </div>
                <div className='my-6'>
                    <div className="avatar">
                        <div className="w-48 rounded-full">
                            <img src="https://placeimg.com/192/192/people" alt='' />
                        </div>
                    </div>
                    <p className='text-xl font-semibold'>Sara Albert</p>
                    <p>Employer</p>
                </div>
                <div className='my-6'>
                    <div className="avatar">
                        <div className="w-48 rounded-full">
                            <img src="https://placeimg.com/192/192/people" alt='' />
                        </div>
                    </div>
                    <p className='text-xl font-semibold'>Ruben Tavil</p>
                    <p>Employer</p>
                </div>
            </div>
        </section>
    );
};

export default Success;