import React from 'react';
import { ProcessForm } from '@/app/components/ProcessForm';
import { Home, UserCheck, Key } from 'lucide-react';

export function TrustFocusedLanding() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundColor: '#0B2340',
        backgroundImage: `
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(201, 162, 74, 0.03) 10px,
            rgba(201, 162, 74, 0.03) 20px
          ),
          radial-gradient(
            circle at 20% 50%,
            rgba(201, 162, 74, 0.05) 0%,
            transparent 50%
          ),
          radial-gradient(
            circle at 80% 50%,
            rgba(42, 176, 176, 0.03) 0%,
            transparent 50%
          )
        `,
      }}
    >
      {/* Header */}
      <header className="relative z-20 px-8 py-6">
        <div className="container mx-auto flex justify-center">
          <div
            className="px-6 py-3 rounded-lg backdrop-blur-sm"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded"
                style={{ backgroundColor: '#0B2340' }}
              />
              <span className="text-2xl tracking-tight" style={{ color: '#0B2340' }}>
                CR Equity
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main centered content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Centered hero content */}
          <div className="text-center space-y-6 mb-12">
            {/* Gold accent line */}
            <div className="flex justify-center mb-6">
              <div
                className="h-1 w-24 rounded-full"
                style={{ backgroundColor: '#C9A24A' }}
              />
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight"
              style={{ color: '#ffffff' }}
            >
              From Listing to Close with Confidence
            </h1>

            <p
              className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
              style={{ color: '#ffffff', opacity: 0.9 }}
            >
              CR Equity manages the sale end‑to‑end while Dovly AI supports buyer
              credit readiness. Fewer delays, clearer timelines, better outcomes.
            </p>
          </div>

          {/* Three-step infographic */}
          <div className="mb-12">
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {/* Step 1 */}
              <div className="relative">
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center relative"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    >
                      <Home className="w-8 h-8" style={{ color: '#C9A24A' }} />
                      {/* Progress dot */}
                      <div
                        className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                        style={{ backgroundColor: '#2AB0B0' }}
                      />
                    </div>
                  </div>
                  <div>
                    <h3
                      className="text-lg mb-2"
                      style={{ color: '#C9A24A' }}
                    >
                      List Your Property
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: '#ffffff', opacity: 0.8 }}
                    >
                      Submit details and we'll create a tailored marketing plan
                    </p>
                  </div>
                </div>
                {/* Connector line (hidden on mobile) */}
                <div
                  className="hidden md:block absolute top-8 left-1/2 w-full h-0.5"
                  style={{
                    backgroundColor: 'rgba(201, 162, 74, 0.3)',
                    transform: 'translateX(50%)',
                  }}
                />
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    >
                      <UserCheck className="w-8 h-8" style={{ color: '#C9A24A' }} />
                    </div>
                  </div>
                  <div>
                    <h3
                      className="text-lg mb-2"
                      style={{ color: '#C9A24A' }}
                    >
                      Dovly Qualifies Buyers
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: '#ffffff', opacity: 0.8 }}
                    >
                      Our partner helps buyers clear credit obstacles quickly
                    </p>
                  </div>
                </div>
                {/* Connector line (hidden on mobile) */}
                <div
                  className="hidden md:block absolute top-8 left-1/2 w-full h-0.5"
                  style={{
                    backgroundColor: 'rgba(201, 162, 74, 0.3)',
                    transform: 'translateX(50%)',
                  }}
                />
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    >
                      <Key className="w-8 h-8" style={{ color: '#C9A24A' }} />
                    </div>
                  </div>
                  <div>
                    <h3
                      className="text-lg mb-2"
                      style={{ color: '#C9A24A' }}
                    >
                      Close on Schedule
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: '#ffffff', opacity: 0.8 }}
                    >
                      Receive offers and finalize the sale with minimal delays
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="mt-16">
            <ProcessForm />
          </div>

          {/* Dovly Partner Badge */}
          <div className="mt-12 flex justify-center">
            <div
              className="px-6 py-3 rounded-lg backdrop-blur-sm flex items-center gap-3"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(42, 176, 176, 0.3)',
              }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: '#2AB0B0' }}
              />
              <span className="text-sm" style={{ color: '#ffffff', opacity: 0.9 }}>
                In partnership with{' '}
                <span style={{ color: '#2AB0B0' }}>Dovly AI</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom trust signals */}
      <div className="relative z-10 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div
                  className="text-3xl mb-2"
                  style={{ color: '#C9A24A' }}
                >
                  $2.4B+
                </div>
                <div
                  className="text-xs uppercase tracking-wide"
                  style={{ color: '#ffffff', opacity: 0.7 }}
                >
                  Total Sales Volume
                </div>
              </div>
              <div>
                <div
                  className="text-3xl mb-2"
                  style={{ color: '#C9A24A' }}
                >
                  15 Days
                </div>
                <div
                  className="text-xs uppercase tracking-wide"
                  style={{ color: '#ffffff', opacity: 0.7 }}
                >
                  Avg. Time to Close
                </div>
              </div>
              <div>
                <div
                  className="text-3xl mb-2"
                  style={{ color: '#C9A24A' }}
                >
                  4,200+
                </div>
                <div
                  className="text-xs uppercase tracking-wide"
                  style={{ color: '#ffffff', opacity: 0.7 }}
                >
                  Happy Sellers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
