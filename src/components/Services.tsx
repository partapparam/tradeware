const Services = () => {
  return (
    <div className="p-10 flex flex-col gap-y-9">
      <p className="text-xl font-bold font-serif py-5">Our Services</p>
      <div className="p-10 h-72 border hover:bg-white hover:text-gray-800 border-white flex flex-col gap-y-6 duration-300 transition-all rounded justify-center">
        <p className="text-4xl hover:text-blue-700">Safe Data Transfer</p>
        <div>
          <p>Discovery & Research</p>
          <p>Prototyping and Testing</p>
          <p>Data Engineering</p>
        </div>
      </div>
      <div className="p-10 h-72 border hover:bg-white hover:text-gray-800 border-white flex flex-col gap-y-6 duration-300 transition-all rounded justify-center">
        <p className="text-4xl hover:text-blue-700">
          Contractor Software Consulting
        </p>
        <div>
          <p>Workflow Discovery</p>
          <p>Change Management </p>
          <p>Software Optimization</p>
        </div>
      </div>
    </div>
  )
}

export default Services
