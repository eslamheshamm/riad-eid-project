import React from "react";
import { useForm } from "react-hook-form";
import { useFormspark } from "@formspark/use-formspark";

const FormInputs = props => {
  const { title, description, placeHolder1, placeHolder2, placeHolder3, formId } = props;
  const FORMSPARK_FORM_ID = formId;
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [succes, setSucces] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [submit] = useFormspark({
    formId: FORMSPARK_FORM_ID
  });
  const onSubmit = async (data, e) => {
    e.preventDefault();
    await submit({ ...data })
      .then(() => {
        setSucces(true);
      })
      .catch(error => setError(error));
  };

  return (
    <div>
      <h1 className="text-3xl font-yasser text-black mb-0">{title}</h1>
      <p className="font-cairo my-4 text-black opacity-75">{description}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col" autoComplete="off">
        <input type="hidden" name="form-name" value="contact" />
        <label className="mb-5 w-full text-black">
          <input
            type="text"
            placeholder={placeHolder1}
            {...register("fieldOne", { required: true })}
            className="py-8 px-6 border rounded-2xl focus:ring-1 focus:ring-primary focus:outline-none block w-full"
          />
          {errors.fieldOne && <span>This field is required</span>}
        </label>
        <label className="mb-5 w-full text-black">
          <input
            type="text"
            placeholder={placeHolder2}
            {...register("fieldTwo", {
              required: "This field is required",
              pattern: {
                value: /[0-9]{9}/,
                message: "Only numbers"
              }
            })}
            className="py-8 px-6 border focus:text-black rounded-2xl focus:ring-1 focus:ring-primary-DEFAULT focus:outline-none block w-full"
          />
          {errors.fieldTwo && <span>{errors.fieldTwo.message}</span>}
        </label>
        <label className="w-full mb-8 text-black">
          <textarea
            placeholder={placeHolder3}
            name="declaration"
            {...register("declaration", { required: false })}
            className="resize-none border rounded-2xl h-48 py-8 px-6  focus:ring-1 focus:ring-primary-DEFAULT focus:outline-none w-full block"
          />
        </label>
        {succes && <span className="text-black my-2 text-xl font-bold ">شكراً.</span>}
        {succes ? null : error && <p className="font-bold my-2">Sorry something wrong happened.</p>}
        <button
          type="submit"
          className={
            succes
              ? "self-start p-6   rounded-2xl  bg-primary-DEFAULT font-semibold text-black text-lg opacity-50 cursor-auto"
              : "self-start p-6   rounded-2xl  bg-primary-DEFAULT font-semibold text-black text-lg"
          }
          disabled={succes}
        >
          الإرسال الأن
        </button>
      </form>
    </div>
  );
};
export default FormInputs;
