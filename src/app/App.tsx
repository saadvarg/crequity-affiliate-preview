import React, { useState } from 'react';
import { PremiumEditorialLanding } from '@/app/components/PremiumEditorialLanding';
import { MobileFirstLanding } from '@/app/components/MobileFirstLanding';
import { TrustFocusedLanding } from '@/app/components/TrustFocusedLanding';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';

export default function App() {
  const [activeTab, setActiveTab] = useState('premium');

  return (
    <div className="min-h-screen">
      {/* Tab switcher for comparison */}
      <div className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full sm:w-auto grid grid-cols-3 h-14">
              <TabsTrigger
                value="premium"
                className="text-xs sm:text-sm px-3 sm:px-6 data-[state=active]:bg-[#0B2340] data-[state=active]:text-white"
              >
                Premium Editorial
              </TabsTrigger>
              <TabsTrigger
                value="mobile-first"
                className="text-xs sm:text-sm px-3 sm:px-6 data-[state=active]:bg-[#C9A24A] data-[state=active]:text-white"
              >
                Mobile-First
              </TabsTrigger>
              <TabsTrigger
                value="trust-focused"
                className="text-xs sm:text-sm px-3 sm:px-6 data-[state=active]:bg-[#2AB0B0] data-[state=active]:text-white"
              >
                Trust-Focused
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'premium' && <PremiumEditorialLanding />}
      {activeTab === 'mobile-first' && <MobileFirstLanding />}
      {activeTab === 'trust-focused' && <TrustFocusedLanding />}
    </div>
  );
}