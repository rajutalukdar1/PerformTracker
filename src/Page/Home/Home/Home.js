import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import FAQSection from '../FAQSection/FAQSection';
import PricePlans from '../PricePlans/PricePlans';
import Success from '../Success/Success';
import HrBusiness from '../HrBusiness/HrBusiness';
import Counter from '../Counter/Counter';
import { AuthContext } from '../../../context/AuthContext';
import Loading from '../../Others/Loading/Loading';

const Home = () => {

    const { loading } = useContext(AuthContext);

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
