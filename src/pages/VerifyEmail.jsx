import React from 'react';

const EmailVerificationPage = () => {
  const {token} = req.body
  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Left side - Image */}
      <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-800">
        <div className="h-full flex items-center justify-center p-12">
          <div className="text-white text-center">
            <h2 className="text-4xl font-bold mb-4">Almost There!</h2>
            <p className="text-xl opacity-90">Verify your email to complete your registration</p>
          </div>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 text-center">
          {/* Success State Example */}
          <div className="space-y-6">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
              <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800">Email Verified Successfully!</h3>
            
            <p className="text-gray-600">
              Thank you for verifying your email address. Your account is now active.
            </p>
            
            <div className="pt-4">
              <button  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition">
                Continue to Dashboard
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Need help?</span>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            Didn't receive the email? <button className="text-blue-600 hover:text-blue-500 font-medium">Resend verification</button> or check your spam folder.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailVerificationPage;