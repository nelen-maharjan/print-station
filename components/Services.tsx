import Image from 'next/image';
import { Card, CardContent } from './ui/card';

const services = [
  { name: 'Graphic Designing', image: '/graphic-design.jpg' },
  { name: 'Sublimation Print', image: '/sublimation.jpg' },
  { name: 'Offset Print', image: '/offset.jpg' },
  { name: 'DTF Printing', image: '/dtf.jpg' },
  { name: 'Flex Print', image: '/flex.jpg' },
  { name: 'Graphic Designing', image: '/graphic-design.jpg' },
  { name: 'Sublimation Print', image: '/sublimation.jpg' },
  { name: 'Offset Print', image: '/offset.jpg' },
  { name: 'DTF Printing', image: '/dtf.jpg' },
  { name: 'Flex Print', image: '/flex.jpg' },
];

import React from 'react';

function Services() {
  return (
    <section className="px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-12">
        {services.map((service, index) => (
          <Card
            key={index}
            className={`overflow-hidden border-none shadow-none  rounded-sm ${
              index % 2 !== 0 && 'mt-8'
            }`}
          >
            <div className="relative min-h-64">
              <Image
                src="/service-img.png"
                alt={service.name}
                fill
                className="object-cover rounded-sm"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold text-center">
                {service.name}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Services;
