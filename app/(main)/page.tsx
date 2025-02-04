'use client';

import Services from '@/components/Services';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

const clients = [
  'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
  'https://th.bing.com/th/id/R.28036ab53bde890eb6a1cde32a0da1ad?rik=b2JBJzDJqjn1VA&pid=ImgRaw&r=0',
  'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
  'https://th.bing.com/th/id/R.28036ab53bde890eb6a1cde32a0da1ad?rik=b2JBJzDJqjn1VA&pid=ImgRaw&r=0',
  'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
  'https://th.bing.com/th/id/R.28036ab53bde890eb6a1cde32a0da1ad?rik=b2JBJzDJqjn1VA&pid=ImgRaw&r=0',
  'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-16 bg-white">
        <div className="space-y-6 flex flex-col justify-center p-4">
          <h1 className="text-6xl font-bold leading-tight">
            Bringing Your
            <span className="text-blue-600"> Ideas </span>
            to
            <span className="text-red-600"> Life </span>
            in Print
          </h1>
          <p className="text-gray-600">
            High-quality, precision-driven printing solutions that transform
            your vision into stunning reality
          </p>
        </div>
        <div className="relative min-h-96">
          <Image
            src="/hero-image.png"
            alt="Printing machine"
            fill
            className="object-cover rounded-l-3xl"
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="grid grid-cols-1 md:grid-cols-2  gap-8 px-6 py-16 p-4 bg-[#FBF4F4]">
        <div className="relative min-h-96">
          <Image
            src="/second-img.jpeg"
            alt="Branded items"
            fill
            className="object-cover "
          />
        </div>
        <div className="space-y-6 text-[#3F3D3D]">
          <p className="text-gray-600">
            We{' '}
            <span className="text-blue-600 font-bold">
              Print Station <span className="text-red-600">Nepal</span>
            </span>
            , specialize in transforming ideas into high-quality prints that
            leave a lasting impression. With state-of-the-art technology and a
            commitment to excellence, we offer a wide range of printing
            solutions, including business cards, brochures, banners, flyers,
            packaging, and more.
          </p>
          <p className="text-gray-600">
            Our team of skilled professionals ensures precision, vibrant colors,
            and premium finishes, bringing your creative vision to life with
            unmatched quality. We are dedicated to delivering results that
            exceed expectations.
          </p>
          <div className="mt-8">
            <h2 className="text-3xl font-bold mb-6 text-black">
              Why Choose <span className="text-red-600">Us</span>?
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>High-Quality Printing & Finishing</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Fast Turnaround & Reliable Service</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Customized Solutions for Every Need</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Separator color="#C3C3C3" className="h-1" />
      <Services />

      <section className="px-6 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Our Clients</h2>
        <div className="flex flex-wrap justify-center gap-12 overflow-auto">
          {clients.map((client, index) => (
            <div key={index} className="relative w-32 h-12">
              <Image
                src={client}
                alt={`Client ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
