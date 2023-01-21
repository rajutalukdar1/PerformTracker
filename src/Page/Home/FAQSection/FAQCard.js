import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import React from "react";

const FAQCard = ({ question }) => {
  const { title, desc } = question;
  return (
    // <div className="max-w-screen-2xl mx-auto mb-2">
    //   <div
    //     tabIndex={0}
    //     className="collapse collapse-plus border border-base-300 shadow rounded-box"
    //   >
    //     <div className="collapse-title text-2xl font-medium">{title}</div>
    //     <div className="collapse-content text-xl">{desc}</div>
    //   </div>
    // </div>
    <div>
      <div className="px-4 pt-2">
        <div className=" w-full rounded-2xl p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-xl font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>{title}</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  {desc}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>

  );
};

export default FAQCard;
