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
          <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-violet-300 transition duration-300">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-10 w-10" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-10 w-10" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-baseline justify-center sm:items-end sm:justify-between">
                <div className="flex flex-shrink-0 items-center md:text-left">
                  TradeWare
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <p
                      onClick={openModal}
                      className="text-black bg-yellow-400 hover:bg-yellow-600 border-2 border-white transition hover:cursor-pointer duration-300 rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Need Help?
                    </p>
                  </div>
                </div>
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
            <Disclosure.Panel className="sm:hidden z-50 absolute bg-purple-800  w-full shadow-lg">
              <div className="space-y-1 px-2 pb-3 pt-2">
                <Disclosure.Button>
                  <p className="text-slate-100 hover:bg-violet-400 transition duration-300 rounded-md px-3 py-2 text-sm font-medium">
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
