import React from "react";
import Editorialboard from "../components/Editorialboard";
import Banner from "../components/Banner";

const page = () => {
  return (
    <>
      <Banner title="Editorial Board" />
      <div className="py-10 px-5 lg:px-20">
        <Editorialboard />
      </div>
    </>
  );
};

export default page;
