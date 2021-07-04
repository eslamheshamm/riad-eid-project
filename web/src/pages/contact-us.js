import React from "react";

import SEO from "../components/seo";
import Layout from "../containers/layout";
import Child from "../components/images/child.png";
import FormInputs from "../components/form/form";

const ContactUs = props => {
  return (
    <Layout>
      <SEO title={"تواصل معنا"} description={"طریقة تحدید جنس المولود قبل الحمل بشكل عملي"} />
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-16 ite  w-full">
        <FormInputs
          title={"أرسل لنا رسالة"}
          placeHolder1={"عنوان البريد الالكتروني"}
          placeHolder2={`رقم الهاتف`}
          placeHolder3={"الرسالة"}
          formId="8Ln943Nr"
        />
        <img src={Child} alt="Child" className="row-start-1 lg:row-auto" />
      </section>
    </Layout>
  );
};

export default ContactUs;
