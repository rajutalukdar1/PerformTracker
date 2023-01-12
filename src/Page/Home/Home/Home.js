import React from 'react';
import CustomerReview from './CustomerReview/CustomerReview';
import FAQSection from './FAQSection/FAQSection';
import PricePlans from './PricePlans/PricePlans';
import Success from './Success/Success';


const Home = () => {
    return (
        <div>
            <CustomerReview />
            <Success />
            <PricePlans />
            <FAQSection />
        </div>
    );
};

export default Home;