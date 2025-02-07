import Sidebar from '@/components/Sidebar';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
    // if(session?.user?.email !== 'printxadmin@gmail.com'){
    //   redirect('/sign-in');
    // }
    console.log(session?.user?.role);
    
    if(!session){
      redirect('/sign-in');
    }

  return (
    <div className="flex gap-2 min-h-screen my-12">
      <Sidebar />
      {children}
    </div>
  );
}
