import React from 'react';
import f_logo from '../../../Assets/logo (1).png'

const Footer = () => {
    return (
        <div className='bg-base-200 text-base-content'>
            <footer className="footer p-10 justify-between w-full max-w-[1440px] mx-auto">
                <div>
                    <img className='w-1/4' src={f_logo} alt="" />
                    <p >
                        <span className='font-bold text-black'>PERFORM TRACKER</span>
                        <br />
                        <span>Platform to evaluate company performance</span>
                    </p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;