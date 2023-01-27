import React from 'react';
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import FAQSection from '../FAQSection/FAQSection';
import PricePlans from '../PricePlans/PricePlans';
import Success from '../Success/Success';
import HrBusiness from '../HrBusiness/HrBusiness';
import Counter from '../Counter/Counter';
import Loading from '../../Others/Loading/Loading';
import { useSelector } from 'react-redux';

const Home = () => {

    const { loading } = useSelector(state => state.userReducer);

    if (loading) {
        return <Loading></Loading>
    }
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
