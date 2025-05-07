import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';

export default function Dashboard() {
  return (
    <>
      <header className=" text-center py-4 mb-5 bg-blue-600 text-white">
        <h1 className=" text-[60px] font-bold ">Secure System Dashboard</h1>
        <p className="text-[30px] text-white-300">Real-time Monitoring and Security</p>
      </header>

      <div className=" m-4 p-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-[40px] font-bold">SECURITY ALERTS</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 text-[25px]">
              <li>Potential Brute-Force Attack Detected</li>
              <li>Suspicious Network Activity from Unknown IP</li>
              <li>High Number of Failed Login Attempts</li>
              <li>Unauthorized Access Attempt to Restricted System</li>
              <li>Unusual Data Transfer Detected Outside Business Hours</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-[40px] font-bold">RECENT SYSTEM LOGS</CardTitle>
          </CardHeader>
          <CardContent className="pl-5 overflow-auto max-h-96">
            <ul className="list-none pl-0 text-sm">
              <li className="font-semibold">[INFO] 2025-05-07 14:45:21 - User 'admin' logged in successfully.</li>
              <li className="font-semibold">[WARNING] 2025-05-07 14:42:55 - Firewall blocked inbound connection on port 80.</li>
              <li className="font-semibold">[ERROR] 2025-05-07 14:39:10 - Authentication service unavailable.</li>
              <li className="font-semibold">[INFO] 2025-05-07 14:35:01 - Scheduled backup initiated.</li>
              <li className="font-semibold">[INFO] 2025-05-07 14:30:15 - System update check completed.</li>
              <li className="font-semibold">[DEBUG] 2025-05-07 14:28:45 - System resource usage analysis completed.</li>
              <li className="font-semibold">[CRITICAL] 2025-05-07 14:25:10 - Database connection lost unexpectedly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-[40px] font-bold">SYSTEM STATISTICS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-[25px]">
              <p><span className="font-semibold ">CPU Usage:</span> 35%</p>
              <p><span className="font-semibold ">Memory Usage:</span> 60%</p>
              <p><span className="font-semibold ">Disk Space:</span> 70% / 200GB</p>
              <p><span className="font-semibold ">Network Traffic (In/Out):</span> 12 Mbps / 8 Mbps</p>
              <p><span className="font-semibold ">Temperature:</span> 62°C</p>
              <p><span className="font-semibold ">Battery Level:</span> 85%</p>
              <p><span className="font-semibold ">Uptime:</span> 15 hours 32 minutes</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <footer className="text-center text-sm text-[20px] text-white bg-blue-600 py-3 mt-8">
        &copy; 2025 Secure Dashboard. All Rights Reserved. | Protecting Your Digital Assets.
      </footer>
    </>
  );
}