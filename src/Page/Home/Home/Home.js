import React from 'react';
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import FAQSection from '../FAQSection/FAQSection';
import PricePlans from '../PricePlans/PricePlans';
import Success from '../Success/Success';
import Counter from '../../Counter/Counter';
import HrBusiness from '../HrBusiness/HrBusiness';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HrBusiness />
            <CustomerReview />
            <Success />
            <PricePlans />
            <FAQSection />
            <Counter></Counter>
        </div>
    );
};

export default Home;
