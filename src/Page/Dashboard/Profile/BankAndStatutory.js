import React from 'react';

const BankAndStatutory = () => {
    return (
        <div>
            <div className='bg-[#16191C] p-4 mt-8 rounded-md mb-[-80px] text-white'>
                <div>
                    <p className='text-xl font-semibold'>Basic Salary Information</p>
                    <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 font-semibold gap-6'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Salary basis</span>
                            </label>
                            <select className="select select-bordered">
                                <option selected>Select salary basis type</option>
                                <option>Hourly</option>
                                <option>Daily</option>
                                <option>Weekly</option>
                                <option>Monthly</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Salary amount per month</span>
                            </label>
                            <input type="text" placeholder="$ 0.00" className="input input-bordered w-full 
                        " />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Payment type</span>
                            </label>
                            <select className="select select-bordered">
                                <option selected>Select payment type</option>
                                <option>Bank transfer</option>
                                <option>Check</option>
                                <option>Cash</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='mt-8'>
                    <p className='text-xl font-semibold'>PF Information</p>
                    <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 font-semibold 
                    gap-x-6 gap-y-2'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">PF contribution</span>
                            </label>
                            <select className="select select-bordered">
                                <option selected>Select PF contribution</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">PF No. <span
                                    className='text-[#F62C4E]'>*</span></span>
                            </label>
                            <select className="select select-bordered">
                                <option selected>Select PF contribution</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <div>

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Employee PF rate</span>
                            </label>
                            <select className="select select-bordered">
                                <option selected>Select PF contribution</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Additional rate <span
                                    className='text-[#F62C4E]'>*</span></span>
                            </label>
                            <select className="select select-bordered">
                                <option selected>Select additional rate</option>
                                <option>0%</option>
                                <option>1%</option>
                                <option>2%</option>
                                <option>3%</option>
                                <option>4%</option>
                                <option>5%</option>
                                <option>6%</option>
                                <option>7%</option>
                                <option>8%</option>
                                <option>9%</option>
                                <option>10%</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Total rate</span>
                            </label>
                            <input type="text" placeholder="11%" className="input input-bordered w-full 
                        " />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Employee PF rate</span>
                            </label>
                            <select className="select select-bordered">
                                <option selected>Select PF contribution</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Additional rate <span
                                    className='text-[#F62C4E]'>*</span></span>
                            </label>
                            <select className="select select-bordered">
                                <option selected>Select additional rate</option>
                                <option>0%</option>
                                <option>1%</option>
                                <option>2%</option>
                                <option>3%</option>
                                <option>4%</option>
                                <option>5%</option>
                                <option>6%</option>
                                <option>7%</option>
                                <option>8%</option>
                                <option>9%</option>
                                <option>10%</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Total rate</span>
                            </label>
                            <input type="text" placeholder="11%" className="input input-bordered w-full 
                        " />
                        </div>
                    </div>
                </div>
                <div className='mt-8'>
                    <p className='text-xl font-semibold'>ESI Information</p>
                    <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 font-semibold 
                    gap-x-6 gap-y-2'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">ESI contribution</span>
                            </label>
                            <select className="select select-bordered">
                                <option selected>Select ESI contribution</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">ESI No. <span
                                    className='text-[#F62C4E]'>*</span></span>
                            </label>
                            <select className="select select-bordered">
                                <option selected>Select ESI contribution</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <div>

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Employee ESI rate</span>
                            </label>
                            <select className="select select-bordered">
                                <option selected>Select ESI contribution</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Additional rate <span
                                    className='text-[#F62C4E]'>*</span></span>
                            </label>
                            <select className="select select-bordered">
                                <option selected>Select additional rate</option>
                                <option>0%</option>
                                <option>1%</option>
                                <option>2%</option>
                                <option>3%</option>
                                <option>4%</option>
                                <option>5%</option>
                                <option>6%</option>
                                <option>7%</option>
                                <option>8%</option>
                                <option>9%</option>
                                <option>10%</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Total rate</span>
                            </label>
                            <input type="text" placeholder="11%" className="input input-bordered w-full 
                        " />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-16'>
                    <button className="btn rounded-full btn-warning bg-[#FF851A] focus:bg-[#FF851A]
                     text-white font-bold px-16">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default BankAndStatutory;