import React from 'react';  
import { useAuthStore } from '../Store/authStore';

function Dashboard() {
    const { logout } = useAuthStore();

    return (
        <div>
            <button onClick={() => (window.location.href = "/")}>Home</button>
            <button onClick={logout}>Logout</button>
            <h1>Dashboard</h1>
        </div>
    );
}
export default Dashboard;