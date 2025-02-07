import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactInformation = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4 py-8 md:mt-16">
        <div className="py-14 pl-24 bg-sky-900 md:rounded-r-3xl ">
          <h1 className="text-gray-200 text-2xl py-3">Contact Information</h1>
          <p className="text-gray-400 text-sm py-2">Feel free to contact us</p>
          <div className="space-y-8 mt-6">
            <p className="flex items-center gap-3 text-gray-300 text-sm">
              <Phone size={15} fill="white" className="text-gray-500" />{' '}
              <span>+977 9803214411</span>
            </p>
            <p className="flex items-center gap-3 text-gray-300 text-sm">
              <Mail size={15} fill="white" className="text-gray-500" />{' '}
              mail@gmail.com
            </p>
            <p className="flex items-center gap-3 text-gray-300 text-sm">
              <MapPin size={15} fill="white" className="text-gray-500" />{' '}
              Kathmandu, Nepal
            </p>
          </div>
        </div>
        <div className="mx-8">
          <form action="">
            <h1 className="text-lg font-light">Get in Touch With Us</h1>
            <div className="relative mt-4 space-x-0.5 md:w-3/4">
              <span className="space-y-0.5">
                <p className="text-sky-900 text-xs">Full Name</p>
                <Input className="border-sky-700" />
              </span>
              <span className="space-y-0.5">
                <p className="text-sky-900 text-xs">Email</p>
                <Input className="border-blue-500" />
              </span>
              <span className="space-y-0.5">
                <p className="text-sky-900 text-xs">Phone Number</p>
                <Input className="border-blue-500" />
              </span>
              <span className="space-y-0.5">
                <p className="text-sky-900 text-xs">Message</p>
                <Input className="border-blue-500" />
              </span>
              <Button
                variant="default"
                className="absolute w-full md:w-36 right-0 mt-4"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactInformation;
