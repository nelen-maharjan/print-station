import Sidebar from '@/components/Sidebar';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
    
    if(session?.user?.role !== 'admin'){
      redirect('/sign-in');
    }

  return (
    <div className="flex gap-2 min-h-screen my-12 mx-56">
      <Sidebar />
      {children}
    </div>
  );
}
