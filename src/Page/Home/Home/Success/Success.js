import React from 'react';

const Success = () => {
    return (
        <section className='text-center my-16 mx-auto max-w-screen-xl'>
            <div>
                <div className="section-cap text-align">
                    <span className=" text-blue-700 font-semibold">PEOPLE BEHIND THE SUCCESS</span>
                </div>
                <p className='text-blue-500 font-semibold mb-2'></p>
                <h1 className='text-3xl font-bold'>Meet Our Expert People
                    <br />
                    of Payonline</h1>
            </div>
            <div className='my-6 grid lg:grid-cols-4 md:grid-cols-2 gap-0'>
                <div className='my-6'>
                    <div className="avatar">
                        <div className="w-48 rounded-full">
                            <img src='https://i.ibb.co/fnjWvW3/christian-buehner-DIt-Ylc26z-VI-unsplash.jpg' alt='' />
                        </div>
                    </div>
                    <p className='text-xl font-semibold'>Christian Buehner</p>
                    <p>Employer</p>
                </div>
                <div className='my-6'>
                    <div className="avatar">
                        <div className="w-48 rounded-full">
                            <img src='https://i.ibb.co/0B0Smqy/joseph-gonzalez-i-Fg-Rcq-Hznqg-unsplash.jpg' alt='' />
                        </div>
                    </div>
                    <p className='text-xl font-semibold'>Joseph Gonzalez</p>
                    <p>Employer</p>
                </div>
                <div className='my-6'>
                    <div className="avatar">
                        <div className="w-48 rounded-full">
                            <img src='https://i.ibb.co/Zcyb7dZ/julian-wan-WNo-Ln-Jo7t-S8-unsplash.jpg' alt='' />
                        </div>
                    </div>
                    <p className='text-xl font-semibold'>Michael</p>
                    <p>Employer</p>
                </div>
                <div className='my-6'>
                    <div className="avatar">
                        <div className="w-48 rounded-full">
                            <img src='https://i.ibb.co/9ZwQ5Xv/vicky-hladynets-C8-Ta0gw-Pb-Qg-unsplash.jpg' alt='' />
                        </div>
                    </div>
                    <p className='text-xl font-semibold'>Vicky</p>
                    <p>Employer</p>
                </div>
            </div>
        </section>
    );
};

export default Success;