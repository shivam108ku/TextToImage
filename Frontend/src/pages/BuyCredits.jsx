import React from 'react';
import { motion } from 'framer-motion';

const BuyCredits = () => {
  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Select the option that works best for you
          </p>
        </div>

        <div className="mt-16 space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
          {/* Basic Plan */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="px-6 py-8">
              <div className="flex items-center">
                <h3 className="text-2xl font-medium text-white">Basic</h3>
                <p className="ml-4 px-3 py-1 text-sm font-semibold text-green-800 bg-green-100 rounded-full">
                  Most popular
                </p>
              </div>
              <p className="mt-4 text-white">
                Perfect for getting started with our platform.
              </p>
              <div className="mt-6 flex items-baseline">
                <span className="text-5xl font-extrabold text-white">0</span>
                <span className="ml-1 text-xl font-medium text-white">/mo</span>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="ml-3 text-base text-white">15 Images per day</p>
                </li>
              </ul>
              <button
                type="button"
                className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 border border-transparent rounded-md py-3 px-4 text-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Get started
              </button>
            </div>
          </motion.div>

          {/* Coming Soon Plan */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-gray-800 text-white text-xs font-semibold px-3 py-1 transform translate-x-2 -translate-y-2 rotate-6">
              Coming Soon
            </div>
            <div className="px-6 py-8">
              <h3 className="text-2xl font-medium text-white">Pro</h3>
              <p className="mt-4 text-white">
                Advanced features for power users.
              </p>
              <div className="mt-6 flex items-baseline">
                <span className="text-5xl font-extrabold text-white">49 ₹</span>
                <span className="ml-1 text-xl font-medium text-white">/mo</span>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="ml-3 text-base text-white">100 Images per day</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BuyCredits;
