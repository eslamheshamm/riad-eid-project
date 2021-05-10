import React from "react";
import FormInputs from "./form";
import Child from "../images/child.png";

const Form = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-6 text-white  w-full">
      <FormInputs />
      <img src={Child} alt="Child" className="row-start-1 lg:row-auto" />
    </section>
  );
};

export default Form;
