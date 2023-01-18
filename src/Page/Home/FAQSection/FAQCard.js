import React from 'react';

const FAQCard = ({question}) => {
    const {title, desc} = question;
    return (
        <div className='pt-3'>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 shadow rounded-box">
                <div className="collapse-title text-2xl font-medium">
                   {title}
                </div>
                <div className="collapse-content text-xl"> 
                    {desc}
                </div>
            </div>
        </div>
    );
};

export default FAQCard;