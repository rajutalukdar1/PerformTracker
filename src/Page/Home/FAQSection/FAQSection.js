import React from "react";
import FAQCard from "./FAQCard";
import FAQ from "../../../Assets/Home-Images/FAQ.jpg";
import "./FAQSection.css";

const questions = [
  {
    id: 1,
    title: "How to market your business online?",
    desc: "Offer your customers a full range of integrated payment solutions such as credit and debit card processing, and ring up sales with our state-of-the-art point-of-sale solutions.",
  },

  {
    id: 2,
    title: "Payment processing and POS solutions",
    desc: "Offer your customers a full range of integrated payment solutions such as credit and debit card processing, and ring up sales with our state-of-the-art point-of-sale solutions.",
  },

  {
    id: 3,
    title: "Get help with payroll, payments, and accounting",
    desc: "Offer your customers a full range of integrated payment solutions such as credit and debit card processing, and ring up sales with our state-of-the-art point-of-sale solutions.",
  },
  {
    id: 4,
    title: "Assess your risk and choose a business entity",
    desc: "Offer your customers a full range of integrated payment solutions such as credit and debit card processing, and ring up sales with our state-of-the-art point-of-sale solutions.",
  },
  {
    id: 5,
    title: "Manage the employee experience from one platform",
    desc: "Offer your customers a full range of integrated payment solutions such as credit and debit card processing, and ring up sales with our state-of-the-art point-of-sale solutions.",
  },
];

const FAQSection = () => {
  return (
    <div className="blog-container py-12">
      <div className="text-center flex justify-center">
        <div>
          <div className="section-cap text-align">
            <span className=" text-blue-700 font-semibold text-xl">FAQS</span>
          </div>
          <h2 className="exercies-headiang pb-10 text-5xl font-bold ">
            Frequently asked questions <br />
            answers
          </h2>
        </div>
      </div>

      <div className="grid  md:grid-cols-2 gap-6 items-center">
        <div className="img-pearent">
          <img
            style={{
              width: "100%",
              height: "500px",
              display: "felx",
              alignItems: "center",
              borderRadius: "10px",
            }}
            src={FAQ}
            alt=""
          />
          <div className="img-child">
            <p className=" w-40">Let's discuss all the benefits</p>
          </div>
        </div>
        <div className="Blogs-question flex flex-col items-stretch">
          {questions.map((question) => (
            <FAQCard key={question.id} question={question} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
