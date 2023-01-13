import React from "react";

const CustomerReview = () => {

  const clients = [
    {
      c_name: "rakib ahmed ",
      designation: "CEO of BJI group",
      review:
        "Your employee management software is very good. It is very useful to evaluate all employees of my company",
      date: "11/10/1022",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/My-Passport-Size%28Small-Beard%29-1MB.jpg/800px-My-Passport-Size%28Small-Beard%29-1MB.jpg",
    },
    {
      c_name: "ahmed rakib ",
      designation: "HR of NewTechnology",
      review:
        "Your software is very good. Using this software will save a lot of HR's time. And employees can be managed.",
      date: "05/10/1022",
      img: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/passport/1-change.jpg",
    },
    {
      c_name: "Piyanka Chupra ",
      designation: "MD of explorBdLTD",
      review:
        "I am very happy to service your product. Your work skills are amazing, I highly recommend working with you",
      date: "07/10/1022",
      img: "https://visafoto.com/img/source355x388_in.jpg",
    },

  ];
  return (
    <div className="my-14 px-2 md:px-20 pb-10 w-full max-w-[1440px] mx-auto">
      <div className="text-center py-5">
        <h2 className="text-4xl font-bold pb-2">
          Our Happy <span className="text-orange-600  ">Client </span>
        </h2>
        <p>We provide our servicing for our client satisfaction</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   gap-5">
        {clients.map((client, i) => (
          <div key={i}>
            <div className="text-center rounded-lg bg-indigo-400 text-white shadow-xl p-4">
              <div className=" flex justify-between">
                <div className=" font-bold flex items-center ">
                  <img
                    className="h-16 w-16 rounded-full object-cover"
                    src={client.img}
                    alt=""
                  />
                  <div className="text-start pl-2">
                    <p className="text-xl">{client.c_name}</p>
                    <p className="text-xs">{client.designation}</p>

                  </div>
                </div>
              </div>
              <p className="font-bold text-xs">{client.date}</p>
            </div>
            <p className="py-4 text-base">{client.review}</p>
          </div>
        ))}
      </div>
    </div >
  );
};
export default CustomerReview;