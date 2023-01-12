import React from 'react';
import CustomerReview from './CustomerReview/CustomerReview';
import PricePlans from './PricePlans/PricePlans';

const Home = () => {
    return (
        <div>
            <CustomerReview />
            <PricePlans />
        </div>
    );
};

export default Home;