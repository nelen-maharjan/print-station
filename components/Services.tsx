'use client'; 

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { getAllServices } from '@/lib/action'; 

type Service = {
  id: string;
  title: string;
  image: string;
};

function Services() {
  const [services, setServices] = useState<Service[]>([]);  
  const [loading, setLoading] = useState<boolean>(true); 

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const fetchedServices = await getAllServices();
  
        if ('error' in fetchedServices) {
          console.error('Error fetching services:', fetchedServices.error);
          setServices([]);
        } else {
          setServices(fetchedServices);
        }
  
        setLoading(false);
      } catch (error) {
        console.error('Error fetching services:', error);
        setLoading(false); 
      }
    };
  
    fetchServices();
  }, []);
  

  return (
    <section className="px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8">
        {loading ? (
          <p>Loading services...</p>
        ) : services.length === 0 ? (
          <p>No services available.</p>
        ) : (
          services.map((service) => (
            <Card key={service.id} className="overflow-hidden border-none shadow-none">
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-center">{service.title}</h3>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </section>
  );
}

export default Services;
