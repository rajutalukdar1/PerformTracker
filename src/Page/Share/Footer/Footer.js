import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;