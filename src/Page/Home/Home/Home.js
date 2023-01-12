import React from 'react';
import CustomerReview from './CustomerReview/CustomerReview';
import PricePlans from './PricePlans/PricePlans';
import Success from './Success/Success';

const Home = () => {
    return (
        <div>
            <CustomerReview />
            <Success />
            <PricePlans />
        </div>
    );
};

export default Home;