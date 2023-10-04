import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"

interface ContactFormProps {
  closeModal: () => void
}

type ContactFormValues = {
  fullname: string
  email: string
  phone: string
  company: string
}

const PHONE_REG_EXP =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const ContactForm = ({ closeModal }: ContactFormProps) => {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Full name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    company: Yup.string().required("Company is required"),
    phone: Yup.string().matches(PHONE_REG_EXP, "Phone number is not valid"),
  })
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = (data: ContactFormValues) => {
    console.log(JSON.stringify(data, null, 2))
    handleReset()
  }
  const handleReset = () => {
    reset()
    closeModal()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-black flex flex-col gap-y-4"
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
