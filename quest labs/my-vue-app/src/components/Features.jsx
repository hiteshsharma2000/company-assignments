// src/components/Features.js
import React from 'react';

const features = [
  {
    icon: '🔍',
    title: 'Feature One',
    description: 'Description for feature one.',
  },
  {
    icon: '⚙️',
    title: 'Feature Two',
    description: 'Description for feature two.',
  },
  {
    icon: '💡',
    title: 'Feature Three',
    description: 'Description for feature three.',
  },
];

const Features = () => {
  return (
    <section className=" py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white-800">Our Features</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index}  className="bg-gradient-to-r from-[#3e237c] to-[#1e0a35] p-6 rounded-lg">
              <div className="text-5xl">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-bold text-white-800">{feature.title}</h3>
              <p className="mt-2 text-white-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
