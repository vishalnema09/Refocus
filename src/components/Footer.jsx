import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32 ">
        <div className="basis-1/2">
          <h1 className="text-[11rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500">socials</h4>
            {["instagram", "facebook", "twitter (x?)"].map((item, index) => (
              <a key={index} className="block mt-2 capitalize text-zinc-600">
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500">socials</h4>
            {["instagram", "facebook", "twitter (x?)"].map((item, index) => (
              <a key={index} className="block mt-2 capitalize text-zinc-600">
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
              unde sit incidunt nam voluptates doloremque.
            </p>
            <img
              src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
              className="w-32 mt-10"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
