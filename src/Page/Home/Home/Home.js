import React from 'react';
import Bennar from '../Bennar/Bennar';
import CustomerReview from './CustomerReview/CustomerReview';
import FAQSection from './FAQSection/FAQSection';
import PricePlans from './PricePlans/PricePlans';
import Success from './Success/Success';
import Counter from '../../Counter/Counter';
import HrBusiness from './HrBusiness/HrBusiness';

const Home = () => {
    return (
        <div>
            <Bennar></Bennar>
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
