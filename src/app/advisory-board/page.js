import React from "react";
import AdvisoryBoard from "../components/AdvisoryBoard";
import Banner from "../components/Banner";

const page = () => {
  return (
    <>
      <Banner title="Advisory Board" />
      <div className="py-10 px-5 lg:px-20">
        <AdvisoryBoard />
      </div>
    </>
  );
};

export default page;
