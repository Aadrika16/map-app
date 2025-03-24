import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from "js-cookie"
import { useNavigate } from 'react-router-dom';
import './index.css'; 

const Dashboard = (props) => {
    const [data, setData] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/dashboard', {
                    headers: { Authorization: `Bearer ${Cookies.get("jwt_token")}` }
                });
                setData(response.data);
            } catch (error) {
                navigate('/'); // If error occurs, navigate to login page
            }
        };
        fetchData();
    }, [navigate]);
    const handleCardClick = (stateId) =>{
        navigate(`/map/${stateId}`);
    }
    return (
        <div className="dashboard-container">
            <h1 className="dashboard">Dashboard</h1>
            {data.map((item) => (
                <div
                    key={item.id}
                    className="dashboard-item"
                    onClick={() => handleCardClick(item.id)}
                >
                    <p>{item.state}</p>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;
