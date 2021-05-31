import React from "react";
import FormInputs from "./form";
import Child from "../images/child.png";

const Form = props => {
  const { title, description, placeHolder1, placeHolder2, placeHolder3 } = props;
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-6 text-white  w-full">
      <FormInputs
        title={title}
        description={description}
        placeHolder1={placeHolder1}
        placeHolder2={placeHolder2}
        placeHolder3={placeHolder3}
      />
      <img src={Child} alt="Child" className="row-start-1 lg:row-auto" />
    </section>
  );
};

export default Form;
