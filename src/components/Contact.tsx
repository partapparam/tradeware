import React, { Fragment, useState } from "react"
import { Transition, Dialog } from "@headlessui/react"
import { ContactForm } from "./ContactForm"

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }
  const openModal = () => {
    setIsOpen(true)
  }
  return (
    <div className="py-16 px-8 flex flex-col gap-y-9 border-t-2 border-white">
      <p className="text-5xl md:text-9xl font-bold font-serif py-5 text-right">
        We are a team of experts ready to help.
      </p>
      <div className="text-right">
        <button
          className="btn-secondary px-10 rounded-full hover:bg-yellow-600 duration-300 transition-all hover:shadow-lg text-xl"
          onClick={openModal}
        >
          Contact Us
        </button>
      </div>
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
    </div>
  )
}

export default Contact
