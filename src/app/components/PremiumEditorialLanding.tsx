import React from 'react';
import { LeadForm } from '@/app/components/LeadForm';

export function PremiumEditorialLanding() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Full-bleed hero image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1724080447591-1022032d10ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMHJlYWwlMjBlc3RhdGUlMjBhZ2VudHxlbnwxfHx8fDE3Njk3MDA5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
        }}
      >
        {/* Overlay for better text contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(11, 35, 64, 0.75) 0%, rgba(11, 35, 64, 0.5) 50%, rgba(11, 35, 64, 0.35) 100%)',
          }}
        />
      </div>

      {/* Content layer */}
      <div className="relative z-10 min-h-screen">
        {/* Top navigation bar */}
        <header className="px-8 py-6 flex justify-between items-start">
          {/* CR Equity Logo */}
          <div
            className="px-6 py-3 rounded-lg backdrop-blur-sm"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded"
                style={{ backgroundColor: '#0B2340' }}
              />
              <span
                className="text-2xl tracking-tight"
                style={{ color: '#0B2340' }}
              >
                CR Equity
              </span>
            </div>
          </div>
        </header>

        {/* Main content grid */}
        <div className="container mx-auto px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column - Editorial content */}
            <div className="space-y-8 max-w-2xl">
              {/* Headline with safe zone */}
              <div className="space-y-6">
                <h1
                  className="text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight"
                  style={{ color: '#ffffff' }}
                >
                  Sell Smarter with CR Equity
                </h1>
                <p
                  className="text-lg lg:text-xl leading-relaxed max-w-xl"
                  style={{ color: '#ffffff', opacity: 0.95 }}
                >
                  CR Equity connects you to motivated buyers and reduces time on
                  market. We partner with Dovly AI to help buyers qualify faster so
                  offers convert sooner.
                </p>
              </div>

              {/* Progress indicator with Dovly teal accent */}
              <div className="flex items-center gap-4 pt-4">
                <div className="flex gap-2">
                  <div
                    className="w-12 h-1 rounded-full"
                    style={{ backgroundColor: '#2AB0B0' }}
                  />
                  <div
                    className="w-12 h-1 rounded-full"
                    style={{ backgroundColor: 'rgba(42, 176, 176, 0.3)' }}
                  />
                  <div
                    className="w-12 h-1 rounded-full"
                    style={{ backgroundColor: 'rgba(42, 176, 176, 0.3)' }}
                  />
                </div>
                <span
                  className="text-sm tracking-wide uppercase"
                  style={{ color: '#ffffff', opacity: 0.8 }}
                >
                  Premium Service
                </span>
              </div>
            </div>

            {/* Right column - Lead form card */}
            <div className="flex justify-center lg:justify-end">
              <LeadForm />
            </div>
          </div>
        </div>

        {/* Dovly Partner Badge - Bottom right */}
        <div className="absolute bottom-8 right-8">
          <div
            className="px-5 py-3 rounded-lg backdrop-blur-sm flex items-center gap-3 shadow-lg"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '2px solid #2AB0B0',
            }}
          >
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: '#2AB0B0' }}
            />
            <div className="flex items-center gap-2">
              <span className="text-sm" style={{ color: '#2E2E2E' }}>
                Powered by
              </span>
              <span
                className="text-base tracking-tight"
                style={{ color: '#2AB0B0' }}
              >
                Dovly AI
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
