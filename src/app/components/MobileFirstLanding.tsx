import React from 'react';
import { ShortLeadForm } from '@/app/components/ShortLeadForm';
import { Check } from 'lucide-react';

export function MobileFirstLanding() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f9fa' }}>
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded"
              style={{ backgroundColor: '#0B2340' }}
            />
            <span className="text-xl tracking-tight" style={{ color: '#0B2340' }}>
              CR Equity
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight"
                style={{ color: '#0B2340' }}
              >
                Get Top Dollar, Close Faster
              </h1>
              <p
                className="text-lg sm:text-xl leading-relaxed max-w-xl"
                style={{ color: '#2E2E2E' }}
              >
                CR Equity brings buyer demand and partners with Dovly AI to help
                buyers clear credit hurdles. Submit a short request and we'll match
                your home to ready buyers.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div
                  className="rounded-full p-1 mt-0.5 flex-shrink-0"
                  style={{ backgroundColor: '#C9A24A' }}
                >
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3
                    className="text-base mb-1"
                    style={{ color: '#0B2340' }}
                  >
                    Motivated Buyers Ready to Purchase
                  </h3>
                  <p className="text-sm" style={{ color: '#2E2E2E', opacity: 0.8 }}>
                    We connect you with pre-qualified buyers actively searching
                    for properties.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="rounded-full p-1 mt-0.5 flex-shrink-0"
                  style={{ backgroundColor: '#C9A24A' }}
                >
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3
                    className="text-base mb-1"
                    style={{ color: '#0B2340' }}
                  >
                    Faster Credit Qualification with Dovly AI
                  </h3>
                  <p className="text-sm" style={{ color: '#2E2E2E', opacity: 0.8 }}>
                    Our partnership helps buyers overcome credit obstacles
                    quickly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="rounded-full p-1 mt-0.5 flex-shrink-0"
                  style={{ backgroundColor: '#C9A24A' }}
                >
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3
                    className="text-base mb-1"
                    style={{ color: '#0B2340' }}
                  >
                    Reduced Time on Market
                  </h3>
                  <p className="text-sm" style={{ color: '#2E2E2E', opacity: 0.8 }}>
                    Get matched to serious buyers and close deals in record time.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-6">
              <div className="text-center">
                <div
                  className="text-3xl mb-1"
                  style={{ color: '#C9A24A' }}
                >
                  2,500+
                </div>
                <div className="text-sm" style={{ color: '#2E2E2E', opacity: 0.7 }}>
                  Homes Sold
                </div>
              </div>
              <div
                className="h-12 w-px"
                style={{ backgroundColor: '#2E2E2E', opacity: 0.2 }}
              />
              <div className="text-center">
                <div
                  className="text-3xl mb-1"
                  style={{ color: '#C9A24A' }}
                >
                  18 Days
                </div>
                <div className="text-sm" style={{ color: '#2E2E2E', opacity: 0.7 }}>
                  Avg. Time to Offer
                </div>
              </div>
              <div
                className="h-12 w-px"
                style={{ backgroundColor: '#2E2E2E', opacity: 0.2 }}
              />
              <div className="text-center">
                <div
                  className="text-3xl mb-1"
                  style={{ color: '#C9A24A' }}
                >
                  98%
                </div>
                <div className="text-sm" style={{ color: '#2E2E2E', opacity: 0.7 }}>
                  Satisfaction Rate
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex justify-center lg:justify-end">
            <ShortLeadForm />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        className="py-16 lg:py-20"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl text-center mb-12"
              style={{ color: '#0B2340' }}
            >
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white text-2xl"
                  style={{ backgroundColor: '#C9A24A' }}
                >
                  1
                </div>
                <h3 className="text-lg" style={{ color: '#0B2340' }}>
                  Submit Request
                </h3>
                <p className="text-sm" style={{ color: '#2E2E2E', opacity: 0.8 }}>
                  Fill out the quick form with your property details
                </p>
              </div>
              <div className="text-center space-y-3">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white text-2xl"
                  style={{ backgroundColor: '#2AB0B0' }}
                >
                  2
                </div>
                <h3 className="text-lg" style={{ color: '#0B2340' }}>
                  Get Matched
                </h3>
                <p className="text-sm" style={{ color: '#2E2E2E', opacity: 0.8 }}>
                  We connect you with qualified buyers in your area
                </p>
              </div>
              <div className="text-center space-y-3">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white text-2xl"
                  style={{ backgroundColor: '#0B2340' }}
                >
                  3
                </div>
                <h3 className="text-lg" style={{ color: '#0B2340' }}>
                  Close Fast
                </h3>
                <p className="text-sm" style={{ color: '#2E2E2E', opacity: 0.8 }}>
                  Receive offers and close on your timeline
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
