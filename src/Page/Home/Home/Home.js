import React from 'react';
import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';
import CustomerReview from '../CustomerReview/CustomerReview';
import FAQSection from '../FAQSection/FAQSection';
import PricePlans from '../PricePlans/PricePlans';
import Success from '../Success/Success';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CustomerReview />
            <Success />
            <PricePlans />
            <FAQSection />
            <Counter></Counter>
        </div>
    );
};

export default Home;