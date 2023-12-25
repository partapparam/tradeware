import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import postForm from "../formService"

interface ContactFormProps {
  closeModal: () => void
}

type ContactFormValues = {
  fullname: string
  email: string
  phone?: string | undefined
  company: string
  message: string
}

const PHONE_REG_EXP =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const ContactForm = ({ closeModal }: ContactFormProps) => {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Full name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    company: Yup.string().required("Company is required"),
    phone: Yup.string().matches(PHONE_REG_EXP, "Phone number is not valid"),
    message: Yup.string().required(
      "Please provide some information about what you are looking for"
    ),
  })
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      fullname: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactFormValues) => {
    console.log(JSON.stringify(data, null, 2))
    try {
      const status: number = await postForm(data)
      if (status === 200) {
        alert("Thank you, we will be in touch shortly")
        closeModal()
      } else {
        throw Error("There was an error, please submit again")
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message)
      }
    } finally {
      reset()
    }
  }

  const handleReset = () => {
    reset()
    closeModal()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-black flex flex-col gap-y-4 z-50"
    >
      <div className="text-black">
        <label>Full Name</label>
        <input
          type="text"
          id="fullname"
          {...register("fullname")}
          className={`${errors.fullname ? "is-invalid" : ""}`}
        />
        <div className="invalid-feedback">{errors.fullname?.message}</div>
      </div>
      <div className="">
        <label>Email</label>
        <input
          type="text"
          {...register("email")}
          className={`${errors.email ? "is-invalid" : ""}`}
        />
        <div className="invalid-feedback">{errors.email?.message}</div>
      </div>
      <div className="">
        <label>Phone Number</label>
        <input
          type="text"
          {...register("phone")}
          className={` ${errors.phone ? "is-invalid" : ""}`}
        />
        <div className="invalid-feedback">{errors.phone?.message}</div>
      </div>
      <div className="">
        <label>Company</label>
        <input
          type="text"
          {...register("company")}
          className={`${errors.company ? "is-invalid" : ""}`}
        />
        <div className="invalid-feedback">{errors.company?.message}</div>
      </div>
      <div className="">
        <label>How can we help you?</label>
        <textarea
          maxLength={300}
          // name="review"
          {...register("message")}
          rows={6}
          cols={30}
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5 ${
            errors.company ? "is-invalid" : ""
          }`}
        />
        <div className="invalid-feedback">{errors.message?.message}</div>
      </div>
      <div className="flex flex-row gap-4">
        <button
          type="button"
          onClick={handleReset}
          className="btn-secondary basis-1/2"
        >
          Reset
        </button>
        <input className="btn-primary basis-1/2" type="submit" />
      </div>
    </form>
  )
}
