import React, { useState, useEffect } from 'react';
import { Constants } from '../../Constants/Constansts.jsx'
import api from "../../Api/Api.jsx";

const RoomBooking = () => {
    const [rooms, setRooms] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalRooms, setTotalRooms] = useState(0);
    const roomsPerPage = 10;

    useEffect(() => {
        fetchRooms();
    }, [currentPage, searchTerm]);

    const fetchRooms = async () => {
        try {
            const token = sessionStorage.getItem("atoken");
            const response = await api.get(`${Constants.API_URL}${Constants.API_ENDPOINTS.ROOM.Rooms}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    search: searchTerm,
                    page: currentPage,
                    page_size: roomsPerPage,
                },
            });

            console.log("Response:", response.data); // Log response data for debugging

            setRooms(response.data); // Access the 'data' property for rooms
            setTotalRooms(response.data.total);
        } catch (error) {
            console.error('Error fetching rooms:', error);
        }
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to first page on new search
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(totalRooms / roomsPerPage);

    return (
        <div className="max-w-4xl mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4 text-blue-600">Room Booking</h1>
            <input
                type="text"
                placeholder="Search for rooms..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {rooms.map((room) => (
                    <div key={room.id} className="border border-gray-300 rounded-lg p-4 shadow-lg bg-white">
                        <h2 className="text-xl font-bold mb-2 text-blue-600">Room {room.number}</h2>
                        <p><strong className="text-blue-600">Description:</strong> {room.description}</p>
                        <p><strong className="text-blue-600">Type:</strong> {room.type}</p>
                        <p><strong className="text-blue-600">Status:</strong> {room.status}</p>
                        <p><strong className="text-blue-600">Area Size:</strong> {room.area_size} sqm</p>
                        <p><strong className="text-blue-600">Number of Beds:</strong> {room.number_of_beds}</p>
                        <p><strong className="text-blue-600">Number of Bathrooms:</strong> {room.number_of_bathrooms}</p>
                        <p><strong className="text-blue-600">Number of Kitchens:</strong> {room.number_of_kitchens}</p>
                    </div>
                ))}
            </div>
            <div className="mt-4 flex justify-center space-x-2">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        disabled={currentPage === index + 1}
                        className={`px-4 py-2 border rounded ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} hover:bg-blue-600 hover:text-white focus:outline-none focus:bg-blue-600 focus:text-white`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default RoomBooking;