import React, { useEffect, useState } from 'react';
import api from "../../Api/Api.jsx";
import { Constants } from "../../Constants/Constansts.jsx";
import Search from "./Search.jsx";

const Rent = () => {
  const [rooms, setRooms] = useState([]);
  const [searchParams, setSearchParams] = useState({
    roomNumber: '',
    roomStatus: '',
    areaSizeFrom:'',
    areaSizeTo:'',
    areaSize: '',
    numBeds: '',
    numKitchens: '',
    numBathrooms: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRooms, setTotalRooms] = useState(0);
  const roomsPerPage = 10;

  useEffect(() => {
    fetchRooms();
  }, [currentPage, searchParams]);

  const fetchRooms = async () => {
    try {
      const token = sessionStorage.getItem("atoken");
      const response = await api.get(`${Constants.API_URL}${Constants.API_ENDPOINTS.ROOM.Rooms}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        params: {
          number: searchParams.roomNumber,
          status: searchParams.roomStatus,
          area_size__lte: searchParams.areaSizeTo,
          area_size__gte:searchParams.areaSizeFrom,
          number_of_beds: searchParams.numBeds,
          number_of_kitchens: searchParams.numKitchens,
          number_of_bathrooms: searchParams.numBathrooms,
          page: currentPage,
          page_size: roomsPerPage,
        },
      });

      console.log("Response:", response.data); // Log response data for debugging

      setRooms(response.data || [] ); // Ensure rooms is always an array
      setTotalRooms(response.data.total || 0);
    } catch (error) {
      console.error('Error fetching rooms:', error);
      setRooms([]); // Set rooms to an empty array on error
    }
  };

  const handleSearch = (params) => {
    setSearchParams(params);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(totalRooms / roomsPerPage);

  return (
      <div>
        <Search onSearch={handleSearch}/> {/* Pass handleSearch function as prop */}
        <div className="rentContainer flex gap-10 justify-center flex-wrap items-center py-10">
          {rooms && rooms.length > 0 ? (
              rooms.map(({
                           id,
                           type,
                           area_size,
                           number_of_kitchens,
                           number_of_bathrooms,
                           number_of_beds,
                           number,
                           status,
                           description
                         }) => (
                  <div
                      key={id}
                      className="group group/item singleRent w-[250px] p-[20px] bg-white rounded-[10px] shadow-lg hover:shadow-lg transition duration-300 ease-in-out"
                  >
                    <h1 className="text-lg font-semibold text-gray-800">Room {number}</h1>
                    <p className="text-sm text-gray-500">{description}</p>
                    <div className="house mt-2">
                      <div className="info-item">
                        <span className="text-sm text-gray-600">Area: {area_size} sq.ft.</span>
                      </div>
                      <div className="info-item">
                        <span className="text-sm text-gray-600">Kitchens: {number_of_kitchens}</span>
                      </div>
                      <div className="info-item">
                        <span className="text-sm text-gray-600">Bathrooms: {number_of_bathrooms}</span>
                      </div>
                      <div className="info-item">
                        <span className="text-sm text-gray-600">Beds: {number_of_beds}</span>
                      </div>
                      <div className="info-item">
                        <span className="text-sm text-gray-600">Type: {type}</span>
                      </div>
                      <div className="info-item">
            <span className={`text-sm ${status === 'Available' ? 'text-green-600' : 'text-red-600'}`}>
              Status: {status}
            </span>
                      </div>
                    </div>
                    <button
                        className="mt-4 border-2 border-gray-800 rounded-md block px-4 py-2 w-full text-sm font-semibold text-gray-800 bg-transparent hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out">
                      See more
                    </button>
                  </div>
              ))
          ) : (
              <div className="text-center text-gray-500 font-semibold">No rooms available</div>
          )}
        </div>

      </div>
  );
}

export default Rent;
