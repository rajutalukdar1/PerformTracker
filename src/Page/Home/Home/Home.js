import React from 'react';
import CustomerReview from './CustomerReview/CustomerReview';
import Success from './Success/Success';

const Home = () => {
    return (
        <div>
            <h2>This is Home Page</h2>
            <Success />
            <CustomerReview />
        </div>
    );
};

export default Home;