import Link from 'next/link'
import { useMenu } from '../components/SideMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export const Sidebar = () => {
  const { state, dispatch } = useMenu()

  function closeModal() {
    dispatch({ type: 'off' })
  }

  return (
    <Transition.Root show={state.toggle} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 z-10 overflow-hidden"
        open={state.toggle}
        onClose={closeModal}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-y-0 left-0 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="-translate-x-full"
              enterTo="-translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="-translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative w-56 flex flex-col bg-gray-100 dark:bg-gray-900 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <button className="py-5" onClick={closeModal}>
                    <FontAwesomeIcon
                      className="text-2xl"
                      icon={['fas', 'times']}
                    />
                  </button>
                </Transition.Child>
                <div className="h-full flex flex-col   shadow-xl overflow-y-scroll">
                  <Link href="/">
                    <a
                      onClick={closeModal}
                      className="py-6 font-semibold hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      Home
                    </a>
                  </Link>
                  <Link href="/blog">
                    <a
                      onClick={closeModal}
                      className="py-6 font-semibold hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      Blog
                    </a>
                  </Link>
                  <Link href="/about">
                    <a
                      onClick={closeModal}
                      className="py-6 font-semibold hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      About
                    </a>
                  </Link>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
