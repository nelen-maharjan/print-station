import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactInformation = () => {
    return ( 
        <>
        <Navbar/>
        <div className="flex pt-8"> 
            <div className="bg-sky-900">
                <h1 className="text-gray-200">Contact Information</h1>
                <p className="text-gray-400 text-sm">Feel free to contact us</p>
                <div className="space-y-4 mt-4">
                    <p className="flex items-center gap-3 text-gray-300 text-sm"><Phone size={15} fill="white" className="text-gray-500"/> <span>+977 9803214411</span></p>
                    <p className="flex items-center gap-3 text-gray-300 text-sm"><Mail size={15} fill="white" className="text-gray-500"/> mail@gmail.com</p>
                    <p className="flex items-center gap-3 text-gray-300 text-sm"><MapPin size={15} fill="white" className="text-gray-500"/> Kathmandu, Nepal</p>
                </div>
            </div>
            <div>  
                <form action="">
                    <h1 className="text-lg font-light">Get in Touch With Us</h1>
                    <Input type="text" placeholder="anme"/>
                    <Button variant='destructive'>Send Message</Button>
                </form>
            </div>
        </div>
        </>
 
     );
}
 
export default ContactInformation;