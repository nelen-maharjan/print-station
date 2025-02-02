export default function AdminDashboard() {
    return (
      <div className="flex flex-col p-6 w-full">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">
            Welcome back, Admin!
          </h1>
          <p className="text-lg text-gray-600">
            Here’s an overview of your dashboard. You can manage your settings, services, and monitor activities.
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">Total Users</h3>
            <p className="text-2xl font-bold text-gray-900">1,245</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">Active Services</h3>
            <p className="text-2xl font-bold text-gray-900">32</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">Pending Tasks</h3>
            <p className="text-2xl font-bold text-gray-900">5</p>
          </div>
        </div>
  
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700">Recent Activity</h3>
          <ul className="mt-4 space-y-4 text-gray-600">
            <li className="flex items-center">
              <span className="text-gray-900 font-semibold">New Service Added:</span> Service XYZ
            </li>
            <li className="flex items-center">
              <span className="text-gray-900 font-semibold">User Registered:</span> John Doe
            </li>
          </ul>
        </div>
      </div>
    );
  }
  