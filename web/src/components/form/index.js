import React from "react";
import FormInputs from "./form";
import Child from "../images/child.png";

const Form = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-32 md:mt-60 mb-20 text-white  w-full">
      <FormInputs />
      <img src={Child} alt="Child" />
    </section>
  );
};

export default Form;
