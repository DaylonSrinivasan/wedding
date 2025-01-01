'use client'

import { useState } from 'react';
import { Parisienne } from 'next/font/google'
import Image from 'next/image'
import engagementShot from '../public/engagement-shot.jpg'

 
const parisienne = Parisienne({ weight: '400', subsets: ['latin']})

export default function WeddingInvitation() {
  const [activeTab, setActiveTab] = useState<string>('Homepage');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Homepage':
        return (
          <div className="text-center">
            <p className="text-4xl font-serif font-bold text-black">Rika Yokoji</p>
            <p className="text-4xl font-serif font-bold text-black">and</p>
            <p className="text-4xl font-serif font-bold text-black">Daylon Srinivasan</p>
            <p className="text-2xl font-serif text-black mt-4">August 15, 2025</p>
            <p className="text-xl font-serif text-black mt-2">Saratoga, CA</p>
            <p className="mt-6 text-black">Welcome to Rika & Daylon&apos;s wedding website!</p>
          </div>
        );
      case 'Schedule':
        return <div className="text-center text-black">Details about the wedding schedule will go here.</div>;
      case 'Travel':
        return <div className="text-center text-black">Travel information and accommodations will go here.</div>;
      case 'FAQ':
        return <div className="text-center text-black">Answers to frequently asked questions will go here.</div>;
      default:
        return null;
    }
  };

  return (
    <div
      className={`${parisienne.className} min-h-screen bg-gray-50 p-6`}
      style={{ backgroundImage: 'url(/background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold text-black">Rika & Daylon</h1>
        <p className="text-black">We can&apos;t wait to celebrate our special day with you!</p>
      </header>
      <div className="flex justify-center py-4">
        <Image
          src={engagementShot}
          alt="Bride and Groom"
          className="w-60 h-60 object-cover rounded-full shadow-lg"
        />
      </div>

      <nav className="flex justify-center space-x-4 py-6">
        {['Homepage', 'Schedule', 'Travel', 'FAQ'].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 font-medium rounded-lg transition-colors duration-300 ${
              activeTab === tab
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-black hover:bg-gray-300'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      <main className="p-6 max-w-3xl mx-auto">
        {renderTabContent()}
      </main>

      <footer className="text-center text-black text-sm py-6">
        Made with ❤️ for Rika & Daylon’s special day.
      </footer>
    </div>
  );
}