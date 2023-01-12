import React from 'react';
import HrBusiness from './HrBusiness/HrBusiness';
import CustomerReview from './CustomerReview/CustomerReview';
import PricePlans from './PricePlans/PricePlans';
import Success from './Success/Success';

const Home = () => {
    return (
        <div>
            <HrBusiness></HrBusiness>
            
            <CustomerReview />
            <Success />
            <PricePlans />
        </div>
    );
};

export default Home;