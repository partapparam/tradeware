const Banner = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="border-b-2">
        <p className="text-5xl font-extrabold sm:text-9xl py-24 px-10 font-serif border-white">
          We Can Help With That
        </p>
      </div>
      <div className="md:border-b-2 flex flex-col md:flex-row">
        <p className="text-xl sm:text-2xl p-10 md:basis-2/3">
          Trade expertise meets approachability. Tradeware Consulting's in-house
          team of specialists is the go-to for quality. And with years of
          experience in the trades, we’re more than just your consultants -
          we're your partners.
        </p>
        <button className="bg-yellow-500 font-serif text-2xl font-thin p-10   md:basis-1/3">
          About Us
        </button>
      </div>
    </div>
  )
}

export default Banner
