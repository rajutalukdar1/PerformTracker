import React from "react";
import HrBusiness from "./HrBusiness/HrBusiness";
import CustomerReview from "./CustomerReview/CustomerReview";
import FAQSection from "./FAQSection/FAQSection";
import PricePlans from "./PricePlans/PricePlans";
import Success from "./Success/Success";
import Counter from "../../Counter/Counter";

const Home = () => {
    return (
        <div>
        <h2>This is Home Page</h2>
      <HrBusiness></HrBusiness>
      <FAQSection />
      <CustomerReview />
      <Success />
      <PricePlans />
      <Counter />
    </div>
  );
};

export default Home;
