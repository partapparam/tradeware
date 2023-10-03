import React, { useState } from "react"
import { Disclosure, Transition } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }
  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <Disclosure as="nav" className="relative z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-8xl py-4 border-b-2">
            <div className="flex items-center justify-between">
              <div className="flex flex-1 items-center sm:justify-between">
                <div className="text-2xl sm:text-4xl  font-thin uppercase border-r-2 px-6 border-white">
                  TradeWare
                </div>
                <div className="md:flex px-4 items-center justify-around w-full font-serif hidden md:visible">
                  <p>Services</p>
                  <p>Projects</p>
                  <p>Partners</p>
                  <p>Insights</p>
                  <p
                    onClick={openModal}
                    className="text-blue-500 rounded-full hover:bg-blue-200 transition duration-300 bg-white px-4 py-2"
                  >
                    Need Help?
                  </p>
                </div>
              </div>
              <div className="inset-y-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-yellow-600 transition duration-300">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-10 w-10" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-10 w-10" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Transition
            enter="transition duration-400 ease-out"
            enterFrom="transform  opacity-0"
            enterTo="transform  opacity-100"
            leave="transition duration-350 ease-out"
            leaveFrom="transform opacity-100"
            leaveTo="transform opacity-0"
          >
            <Disclosure.Panel className="md:hidden z-50 absolute w-full shadow-lg text-right bg-blue-800 p-5">
              <div>
                <Disclosure.Button>
                  <p>Services</p>
                  <p>Projects</p>
                  <p>Partners</p>
                  <p>Insights</p>
                  <p className="text-blue-500 rounded-full hover:bg-blue-200 transition duration-300 bg-white px-4 py-2">
                    Need help?
                  </p>
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

export default NavigationBar
