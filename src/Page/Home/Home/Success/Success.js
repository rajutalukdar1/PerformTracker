import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import img1 from '../../../../Assets/success_img/christian-buehner-DItYlc26zVI-unsplash.jpg'
import img2 from '../../../../Assets/success_img/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg'
import img3 from '../../../../Assets/success_img/michael-dam-mEZ3PoFGs_k-unsplash.jpg'
import img4 from '../../../../Assets/success_img/vicky-hladynets-C8Ta0gwPbQg-unsplash.jpg'
import './Sucess.css'

const Success = () => {
    return (
        <section className="text-center my-16 mx-auto max-w-screen-xl">
            <div>
                <div className="section-cap text-align">
                    <span className=" text-blue-700 font-semibold">
                        PEOPLE BEHIND THE SUCCESS
                    </span>
                </div>
                <p className="text-blue-500 font-semibold mb-2"></p>
                <h1 className="text-3xl font-bold">
                    Meet Our Expert People
                    <br />
                    of Payonline
                </h1>
            </div>
            <div className="my-6 grid lg:grid-cols-4 md:grid-cols-2 gap-0">
                <div className="my-6">
                    <div className="avatar">
                        <div className="w-48 rounded-full">
                            <img
                                src={img1}
                                alt=""
                            />
                        </div>
                    </div>
                    <p className="text-xl font-semibold">Christian Buehner</p>
                    <p>Employer</p>
                </div>
                <div className="my-6">
                    <div className="avatar">
                        <div className="w-48 rounded-full">
                            <img
                                src={img2}
                                alt=""
                            />
                        </div>
                    </div>
                    <p className="text-xl font-semibold">Joseph Gonzalez</p>
                    <p>Employer</p>
                </div>
                <div className="my-6">
                    <div className="avatar">
                        <div className="w-48 rounded-full">
                            <img
                                src={img3}
                                alt=""
                            />
                        </div>
                    </div>
                    <p className="text-xl font-semibold">Michael</p>
                    <p>Employer</p>
                </div>
                <div className="my-6">
                    <div className="avatar">
                        <div className="w-48 rounded-full">
                            <img
                                src={img4}
                                alt=""
                            />
                        </div>
                    </div>
                    <p className="text-xl font-semibold">Vicky</p>
                    <p>Employer</p>
                </div>
            </div>
        </section>
    );
};

export default Success;
