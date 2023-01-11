import React from 'react';
import HrBusiness from './HrBusiness/HrBusiness';
import CustomerReview from './CustomerReview/CustomerReview';

const Home = () => {
    return (
        <div>
            <HrBusiness></HrBusiness>
            <h2>This is Home Page</h2>
            <CustomerReview />
        </div>
    );
};

export default Home;