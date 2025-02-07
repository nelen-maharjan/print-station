'use client';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { getAllServices } from '@/lib/action';
import ServiceForm from '@/components/ServicesForm';

type Service = {
  id: string;
  title: string;
  image: string;
};

const ServicesPage = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false); 

  useEffect(() => {
      const fetchServices = async () => {
      try {
        const response = await getAllServices();
        setServices(response);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching services:', error);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <div className="space-y-8 mt-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Our Services</h1>
        <Button onClick={openDialog}>Add New Service</Button>
      </div>

      {isDialogOpen && <ServiceForm closeDialog={closeDialog} />}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {loading ? (
          <p>Loading services...</p>
        ) : services.length === 0 ? (
          <p>No services available.</p>
        ) : (
          services.map((service) => (
            <div key={service.id} className="border p-4 rounded-md shadow-md">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ServicesPage;
