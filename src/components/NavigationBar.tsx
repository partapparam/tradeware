import { useState, Fragment } from "react"
import { Disclosure, Transition, Dialog } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { ContactForm } from "./ContactForm"

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }
  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <Disclosure as="nav" className="relative z-30">
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
                    className="px-5 py-2 rounded-full hover:bg-yellow-600 duration-300 transition-all bg-white border-2 border-white text-blue-800 hover:text-white"
                  >
                    Contact Us
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
            <Disclosure.Panel className="md:hidden z-50 absolute w-full shadow-lg text-center bg-blue-800 p-5">
              <div>
                <Disclosure.Button>
                  <p>Services</p>
                  <p>Projects</p>
                  <p>Partners</p>
                  <p>Insights</p>
                  <p
                    onClick={openModal}
                    className="px-8 py-2 rounded-full hover:bg-yellow-600 duration-300 transition-all bg-white border-2 border-white text-blue-800 hover:text-white"
                  >
                    Contact Us
                  </p>
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </Transition>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>
              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title className="text-3xl font-extrabold py-5 text-gray-900">
                        Contact Us
                      </Dialog.Title>
                      <ContactForm closeModal={closeModal} />
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

export default NavigationBar
