import React from "react";

const InfoRow = props => {
  return (
    <div
      className={
        "flex items-start p-4 pt-6 pb-8 text-black shadow-lg font-yasser flex-col rounded-3xl"
      }
    >
      <div className="px-6 py-1 text-4xl bg-teal-400 rounded-xl  ">{props.number}</div>
      <p className="text-black my-6 text-2xl">{props.text}</p>
    </div>
  );
};
function AboutProgramSteps() {
  return (
    <section className="bg-white py-8 ">
      <h1 className="w-full my-6 text-6xl  leading-snug text-center text-black font-yasser">
        كيف يعمل البرنامج
      </h1>
      <p className="w-6/12 mx-auto text-center text-black leading-snug mb-16">
        بولد او بنت بحيث عند حدوث الحمل بمشيئة الله يكون حسب رغبة الزوجين ان شاء الله وبنسبة نجاح
        95️ % بشكل تقريبي، وأيضًا عدد ايام بين كل دوره والاخرى، وبعدها يعطيكي تواريخ الجماع المناسبة
        للحمل
      </p>
      <div className="  mx-auto m-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <InfoRow
          number="1"
          text="بشكل تقريبي، وأيضًا عدد ايام بين كل دوره والاخرى، وبعدها يعطيكي تواريخ الجماع المناسبة للحمل"
        />
        <InfoRow
          number="2"
          text="بشكل تقريبي، وأيضًا عدد ايام بين كل دوره والاخرى، وبعدها يعطيكي تواريخ الجماع المناسبة للحمل"
        />
        <InfoRow
          number="3"
          text="بشكل تقريبي، وأيضًا عدد ايام بين كل دوره والاخرى، وبعدها يعطيكي تواريخ الجماع المناسبة للحمل"
        />
      </div>
    </section>
  );
}

export default AboutProgramSteps;
