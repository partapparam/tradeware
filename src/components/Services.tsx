const Services = () => {
  return (
    <div className="py-16 px-8 flex flex-col gap-y-9">
      <p className="text-xl font-bold font-serif py-5">Our Services</p>
      <div className="p-10 h-72 border hover:bg-white hover:text-gray-800 border-white flex flex-col gap-y-6 duration-300 transition-all rounded justify-center">
        <p className="text-4xl hover:text-blue-700">Safe Data Transfer</p>
        <div>
          <p>Prototyping and Testing</p>
          <p>Data Transfer</p>
          <p>Data Cleanup</p>
          <p>Attachments Transfer</p>
        </div>
      </div>
      <div className="p-10 h-72 border hover:bg-white hover:text-gray-800 border-white flex flex-col gap-y-6 duration-300 transition-all rounded justify-center">
        <p className="text-4xl hover:text-blue-700">
          Contractor Software Consultation
        </p>
        <div>
          <p>Workflow Discovery</p>
          <p>Capacity Needs</p>
          <p>CRM Details</p>
          <p>Guided help in narrowing options</p>
        </div>
      </div>
    </div>
  )
}

export default Services
