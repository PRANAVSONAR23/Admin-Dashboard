// Home.js or Home.jsx
'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
// import styles from "../../ui/dashboard/notifications/notifications.module.css";

export default function Home() {
  const [notifications, setNotifications] = useState([]);
  const senderApiUrl = process.env.NEXT_PUBLIC_SENDER_API_URL;

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(senderApiUrl);
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div >
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>
            <div>{notification.message}</div>
            <div >
              {new Date(notification.timestamp).toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
