import Sidebar from '@/components/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-2 min-h-screen my-12">
      <Sidebar />
      {children}
    </div>
  );
}
