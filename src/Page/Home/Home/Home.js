import React from 'react';
import CustomerReview from './CustomerReview/CustomerReview';
import FAQSection from './FAQSection/FAQSection';
import PricePlans from './PricePlans/PricePlans';
import Success from './Success/Success';


const Home = () => {
    return (
        <div>
            <FAQSection />
            <CustomerReview />
            <CustomerReview />
            <Success />
            <PricePlans />
        </div>
    );
};

export default Home;