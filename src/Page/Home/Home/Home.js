import React from 'react';
import HrBusiness from './HrBusiness/HrBusiness';
import CustomerReview from './CustomerReview/CustomerReview';

const Home = () => {
    return (
        <div>
            <HrBusiness></HrBusiness>
            
            <CustomerReview />
        </div>
    );
};

export default Home;