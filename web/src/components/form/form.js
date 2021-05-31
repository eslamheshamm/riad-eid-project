import React from "react";
import { useForm } from "react-hook-form";
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const FormInputs = props => {
  const { title, description, placeHolder1, placeHolder2, placeHolder3 } = props;
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

  return (
    <div>
      <h1 className="text-3xl font-yasser text-black mb-0">{title}</h1>
      <p className="font-cairo my-4 text-black opacity-75">{description}</p>
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
            placeholder={placeHolder1}
            {...register("question", { required: true })}
            className="py-8 px-6 border rounded-2xl focus:ring-1 focus:ring-primary focus:outline-none block w-full"
          />
          {errors.question && <span>This field is required</span>}
        </label>
        <label className="mb-5 w-full">
          <input
            name="phone number"
            type="text"
            placeholder={placeHolder2}
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
            placeholder={placeHolder3}
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
