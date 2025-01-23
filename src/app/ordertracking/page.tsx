'use client';

import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../topnav/page";

const OrderTracking = () => {
  const [orderStatus, setOrderStatus] = useState({
    status: "Loading...",
    location: "Fetching location...",
    estimatedDelivery: "Fetching date...",
    progress: 0,
  });

  const mockData = [
    {
      status: "Order Placed",
      location: "Warehouse",
      estimatedDelivery: "2025-01-20 05:00 PM",
      progress: 25,
    },
    {
      status: "Order Packed",
      location: "Processing Center",
      estimatedDelivery: "2025-01-20 04:30 PM",
      progress: 50,
    },
    {
      status: "Out for Delivery",
      location: "Near Your Location",
      estimatedDelivery: "2025-01-20 04:00 PM",
      progress: 75,
    },
    {
      status: "Delivered",
      location: "Your Address",
      estimatedDelivery: "2025-01-20 03:45 PM",
      progress: 100,
    },
  ];

  // Fetch tracking updates using mock data
  const fetchTrackingData = () => {
    const index = Math.floor(Date.now() / 5000) % mockData.length;
    const data = mockData[index];

    setOrderStatus({
      status: data.status,
      location: data.location,
      estimatedDelivery: data.estimatedDelivery,
      progress: data.progress,
    });

    // Show toast notification for status updates
    toast.success(`Order status updated: ${data.status}`);
  };

  useEffect(() => {
    // Fetch initial tracking data
    fetchTrackingData();

    // Poll every 5 seconds for updates
    const interval = setInterval(fetchTrackingData, 5000);
    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Order Placed":
        return "🛒";
      case "Order Packed":
        return "📦";
      case "Out for Delivery":
        return "🚚";
      case "Delivered":
        return "✅";
      default:
        return "❓";
    }
  };

  return (
    <div className=" h-screen   ">
        <Navbar/>
        <div className="ml-96">
    <div className="bg-white shadow-lg rounded-lg p-6 w-full   mt-28 ml-52  max-w-md">
      <h1 className="text-2xl font-bold text-center mb-4">Order Tracking</h1>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Status:</span>
          <span className="text-orange-500 font-bold flex items-center space-x-2">
            <span>{getStatusIcon(orderStatus.status)}</span>
            <span>{orderStatus.status}</span>
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Current Location:</span>
          <span className="text-gray-700">{orderStatus.location}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Estimated Delivery:</span>
          <span className="text-green-600">{orderStatus.estimatedDelivery}</span>
        </div>
        <div>
          <span className="font-semibold block mb-2">Progress:</span>
          <div className="w-full bg-gray-300 rounded-full h-4">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: `${orderStatus.progress}%` }}
            ></div>
          </div>
        </div>
      </div>
      <ToastContainer /></div>
    </div></div>
  );
};

export default OrderTracking;
