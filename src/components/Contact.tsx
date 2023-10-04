import React from "react"

const Contact = () => {
  return (
    <div className="py-16 px-8 flex flex-col gap-y-9 border-t-2 border-white">
      <p className="text-5xl md:text-9xl font-bold font-serif py-5 text-right">
        We are a team of experts ready to help.
      </p>
      <div className="text-right">
        <button className="btn-secondary px-10 rounded-full hover:bg-yellow-600 duration-300 transition-all hover:shadow-lg text-xl">
          Contact Us
        </button>
      </div>
    </div>
  )
}

export default Contact
