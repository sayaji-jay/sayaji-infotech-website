import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [selectedPlan, setSelectedPlan] = useState('yearly');
  const [diceRotation, setDiceRotation] = useState({ dice1: 0, dice2: 0, dice3: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setDiceRotation({
        dice1: Math.random() * 360,
        dice2: Math.random() * 360,
        dice3: Math.random() * 360
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const plans = [
    { id: 'yearly', duration: 'YEARLY', price: '₹840.00', originalPrice: '₹1,400.00', discount: 'SAVE 40%', discountBg: 'bg-green-600' },
    { id: '6months', duration: '6 MONTHS', price: '₹980.00', originalPrice: '₹1,400.00', discount: 'SAVE 30%', discountBg: 'bg-gray-500' },
    { id: '3months', duration: '3 MONTHS', price: '₹1,120.00', originalPrice: '₹1,400.00', discount: 'SAVE 20%', discountBg: 'bg-red-900' },
    { id: 'monthly', duration: 'MONTHLY', price: '₹1,400.00', originalPrice: '', discount: '', discountBg: '' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 font-mono">
      <div className="px-8 py-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm text-gray-600 tracking-wider">
                •• A NEW LESSON EVERY MONTH, YOU WILL MASTER WEB ANIMATIONS
              </p>
              
              <h1 className="text-6xl font-bold text-red-900 leading-tight tracking-tight">
                CREATIVE CODE
              </h1>
              
              <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
                Discover new ways to incorporate animations and interactions into your projects. With new lessons every month, you'll stay up-to-date on the latest techniques and trends.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2 text-red-800">
                <span className="text-red-600">⚡</span>
                <span>Monthly Updates</span>
              </div>
              <div className="flex items-center space-x-2 text-red-800">
                <span className="text-red-600">📊</span>
                <span>Progress Tracking</span>
              </div>
              <div className="flex items-center space-x-2 text-red-800">
                <span className="text-red-600">📥</span>
                <span>Downloadable Material</span>
              </div>
              <div className="flex items-center space-x-2 text-red-800">
                <span className="text-red-600">🌍</span>
                <span>Language: English</span>
              </div>
              <div className="flex items-center space-x-2 text-red-800">
                <span className="text-red-600">🚀</span>
                <span>Real Projects</span>
              </div>
            </div>

            {/* Purchase Options */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-700">Purchase options:</p>
              
              <div className="space-y-3">
                {plans.map((plan) => (
                  <div key={plan.id} className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-red-300 transition-colors">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="plan"
                        value={plan.id}
                        checked={selectedPlan === plan.id}
                        onChange={() => setSelectedPlan(plan.id)}
                        className="w-5 h-5 text-red-600 border-2 border-red-800"
                      />
                      <div className="flex items-center space-x-4">
                        <span className="font-medium text-gray-800">{plan.duration}</span>
                        <span className="text-lg font-bold text-red-900">{plan.price}</span>
                        <span className="text-sm text-gray-500">/month</span>
                        {plan.discount && (
                          <span className={`px-2 py-1 text-xs font-bold text-white rounded ${plan.discountBg}`}>
                            {plan.discount}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full py-4 bg-red-900 text-white font-bold text-lg tracking-wider rounded-lg hover:bg-red-800 transform hover:scale-105 transition-all duration-200 shadow-lg">
              START LEARNING
            </button>
          </div>

          {/* Right Side - Video/Animation Area */}
          <div className="relative">
            {/* Main Video Container */}
            <div className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-900 rounded-2xl aspect-video shadow-2xl overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
              </div>
              
              {/* Video Content Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all cursor-pointer transform hover:scale-110">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-4 border-l-red-800 border-y-2 border-y-transparent ml-1"></div>
                  </div>
                </div>
              </div>

              {/* Top UI Elements */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-white text-sm">
                <span>Course List</span>
                <div className="flex space-x-2">
                  <span>Menu</span>
                  <div className="w-6 h-1 bg-white rounded"></div>
                </div>
              </div>

              {/* Bottom Brand */}
              <div className="absolute bottom-4 right-4 text-white font-bold tracking-wider">
                BOUNCE
              </div>
            </div>

            {/* Floating Dice Animation */}
            <div className="absolute -bottom-8 -right-8 space-y-4">
              {/* Dice 1 - Orange */}
              <div 
                className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl shadow-lg transform transition-transform duration-1000 ease-in-out hover:scale-110"
                style={{ transform: `rotate(${diceRotation.dice1}deg)` }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-1">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-2 h-2 bg-red-900 rounded-full"></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dice 2 - Purple */}
              <div 
                className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl shadow-lg transform transition-transform duration-1000 ease-in-out hover:scale-110 ml-8"
                style={{ transform: `rotate(${diceRotation.dice2}deg)` }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-1">
                    {[1,2,3,4,5,6].map(i => (
                      <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dice 3 - Dark Blue */}
              <div 
                className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl shadow-lg transform transition-transform duration-1000 ease-in-out hover:scale-110 ml-4"
                style={{ transform: `rotate(${diceRotation.dice3}deg)` }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-1">
                    {[1,2,3,4,5].map(i => (
                      <div key={i} className={`w-1.5 h-1.5 bg-white rounded-full ${i === 5 ? 'col-span-2 justify-self-center' : ''}`}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce shadow-lg"></div>
            <div className="absolute top-16 -right-2 w-6 h-6 bg-pink-400 rounded-full animate-pulse shadow-lg"></div>
            <div className="absolute -bottom-4 left-8 w-10 h-10 bg-blue-400 rounded-full animate-bounce delay-300 shadow-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;