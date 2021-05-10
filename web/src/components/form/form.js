import React from "react";
import { useForm } from "react-hook-form";
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const FormInputs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [succes, setSucces] = React.useState(false);
  const [disable, setDisable] = React.useState(false);

  const onSubmit = (data, e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...data
      })
    })
      .then(res => {
        console.log(res);
        setSucces(true);
        setDisable(true);
      })
      .catch(error => alert(error));
  };
  // const onSubmit = data => console.log(data);

  return (
    // <form
    //   onSubmit={handleSubmit(onSubmit)}
    //   className="flex flex-col justify-between font-body py-2"
    //   autoComplete="off"
    //   name="contact"
    //   method="POST"
    //   data-netlify-honeypot="bot-field"
    //   netlify
    // >

    //   {succes && <span>Thank you!</span>}

    //   <button
    //     type="submit"
    //     className={
    //       disable
    //         ? "self-end py-5 px-20 rounded-2xl bg-primary font-semibold text-black text-lg opacity-40 cursor-auto"
    //         : "self-end py-5 px-20 rounded-2xl bg-primary font-semibold text-black text-lg"
    //     }
    //     disabled={disable}
    //   >
    //     Send
    //   </button>
    // </form>
    <div>
      <h1 className="text-3xl font-yasser text-black mb-0">اسأل رياض عيد</h1>
      <p className="font-cairo my-4 text-black opacity-75">
        نسبة النجاح في هذا الامر تصل إلي 95% في حال التزام الزوجين بجميع التوصيات المذكورة في
        التوصيات
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-black flex flex-col font-yasser"
        autoComplete="off"
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        netlify
      >
        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
        <label className="mb-5 w-full">
          <input
            name="question"
            type="text"
            placeholder="السؤال"
            {...register("question", { required: true })}
            className="py-8 px-6 border rounded-2xl focus:ring-1 focus:ring-primary focus:outline-none block w-full"
          />
          {errors.question && <span>This field is required</span>}
        </label>
        <label className="mb-5 w-full">
          <input
            name="phone number"
            type="text"
            placeholder="رقم الهاتف"
            {...register("phoneNumber", {
              required: "This field is required",
              pattern: {
                value: /[0-9]{9}/,
                message: "Only numbers"
              }
            })}
            className="py-8 px-6 border rounded-2xl focus:ring-1 focus:ring-primary-DEFAULT focus:outline-none block w-full"
          />
          {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
        </label>
        <label className="w-full mb-8">
          <textarea
            placeholder="توضيح للسؤال (اختياري)"
            name="declaration"
            {...register("declaration", { required: false })}
            className="resize-none border rounded-2xl h-48 py-8 px-6  focus:ring-1 focus:ring-primary-DEFAULT focus:outline-none w-full block"
          />
        </label>
        {succes && <span>شكراً.</span>}

        <button
          type="submit"
          className={
            disable
              ? "self-start p-6   rounded-2xl  bg-primary-DEFAULT font-semibold text-black text-lg opacity-50 cursor-auto"
              : "self-start p-6   rounded-2xl  bg-primary-DEFAULT font-semibold text-black text-lg"
          }
          disabled={disable}
        >
          الإرسال الأن
        </button>
      </form>
    </div>
  );
};
export default FormInputs;
