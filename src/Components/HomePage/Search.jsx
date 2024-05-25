import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsHouseDoor, BsTelephone } from 'react-icons/bs';

const Search = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState('');
    const [roomNumber, setRoomNumber] = useState('');
    const [phoneValue, setPhoneValue] = useState('');
    const [roomStatus, setRoomStatus] = useState('');
    const [areaSizeFrom, setAreaSizeFrom] = useState('0');
    const [areaSizeTo, setAreaSizeTo] = useState('');
    const [numBeds, setNumBeds] = useState('');
    const [numKitchens, setNumKitchens] = useState('');
    const [numBathrooms, setNumBathrooms] = useState('');

    const clearSearchValue = () => {
        setSearchValue('');
    };

    const clearRoomValue = () => {
        setRoomNumber('');
    }

    const clearRoomStatus = () => {
        setRoomStatus('');
    };

    const clearAreaSize = () => {
        setAreaSizeFrom('');
        setAreaSizeTo('');
    };

    const clearNumberOfBeds = () => {
        setNumBeds('');
    };

    const clearNumberOfKitchens = () => {
        setNumKitchens('');
    };

    const clearNumberOfBathrooms = () => {
        setNumBathrooms('');
    };

    const clearPhoneValue = () => {
        setPhoneValue('');
    };

    const clearAll = () => {
        clearSearchValue();
        clearRoomValue();
        clearPhoneValue();
        clearRoomStatus();
        clearAreaSize();
        clearNumberOfBeds();
        clearNumberOfKitchens();
        clearNumberOfBathrooms();
    };

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch({
            searchValue,
            roomNumber,
            phoneValue,
            roomStatus,
            areaSizeFrom,
            areaSizeTo,
            numBeds,
            numKitchens,
            numBathrooms
        });
    };

    return (
        <div className="searchDiv grid gap-10 bg-gray-200 rounded-lg p-6 md:p-12">
            <form onSubmit={handleSearch} className="flex flex-col items-center">
                <div className="grid gap-6 md:grid-cols-3">

                    <div className="flex items-center rounded-lg bg-white p-3 shadow-lg shadow-gray-700">
                        <BsHouseDoor className="text-3xl text-gray-500 mr-2" />
                        <input
                            type="text"
                            className="bg-transparent text-blue-500 focus:outline-none flex-1"
                            placeholder="Search Room....."
                            value={roomNumber}
                            onChange={(e) => setRoomNumber(e.target.value)}
                        />
                        <AiOutlineCloseCircle className="text-4xl text-gray-500 hover:text-blue-500 cursor-pointer" onClick={clearRoomValue} />
                    </div>

                    <div className="flex items-center rounded-lg bg-white p-3 shadow-lg shadow-gray-700">
                        <label htmlFor="roomStatus" className="text-gray-500 mr-2">Room Status:</label>
                        <select
                            id="roomStatus"
                            className="bg-transparent text-blue-500 focus:outline-none flex-1"
                            value={roomStatus}
                            onChange={(e) => setRoomStatus(e.target.value)}
                        >
                            <option value="">Select Status</option>
                            <option value="Available">Available</option>
                            <option value="Not Available">Not Available</option>
                            <option value="Maintenance">Maintenance</option>
                            <option value="Booked">Booked</option>
                        </select>
                        <AiOutlineCloseCircle className="text-4xl text-gray-500 hover:text-blue-500 cursor-pointer" onClick={clearRoomStatus} />
                    </div>

                    <div className="flex items-center rounded-lg bg-white p-3 shadow-lg shadow-gray-700">
                        <label htmlFor="areaSizeFrom" className="text-gray-500 mr-2">Area Size From:</label>
                        <input
                            type="number"
                            id="areaSizeFrom"
                            className="bg-transparent text-blue-500 focus:outline-none flex-1"
                            placeholder="Area Size From"
                            value={areaSizeFrom}
                            onChange={(e) => setAreaSizeFrom(e.target.value)}
                        />
                        <AiOutlineCloseCircle className="text-4xl text-gray-500 hover:text-blue-500 cursor-pointer" onClick={clearAreaSize} />
                    </div>

                    <div className="flex items-center rounded-lg bg-white p-3 shadow-lg shadow-gray-700">
                        <label htmlFor="areaSizeTo" className="text-gray-500 mr-2">Area Size To:</label>
                        <input
                            type="number"
                            id="areaSizeTo"
                            className="bg-transparent text-blue-500 focus:outline-none flex-1"
                            placeholder="Area Size To"
                            value={areaSizeTo}
                            onChange={(e) => setAreaSizeTo(e.target.value)}
                        />
                        <AiOutlineCloseCircle className="text-4xl text-gray-500 hover:text-blue-500 cursor-pointer" onClick={clearAreaSize} />
                    </div>

                    <div className="flex items-center rounded-lg bg-white p-3 shadow-lg shadow-gray-700">
                        <label htmlFor="numBeds" className="text-gray-500 mr-2">Beds:</label>
                        <input
                            type="number"
                            id="numBeds"
                            className="bg-transparent text-blue-500 focus:outline-none flex-1"
                            placeholder="Number of Beds"
                            value={numBeds}
                            onChange={(e) => setNumBeds(e.target.value)}
                        />
                        <AiOutlineCloseCircle className="text-4xl text-gray-500 hover:text-blue-500 cursor-pointer" onClick={clearNumberOfBeds} />
                    </div>

                    <div className="flex items-center rounded-lg bg-white p-3 shadow-lg shadow-gray-700">
                        <label htmlFor="numKitchens" className="text-gray-500 mr-2">Kitchens:</label>
                        <input
                            type="number"
                            id="numKitchens"
                            className="bg-transparent text-blue-500 focus:outline-none flex-1"
                            placeholder="Number of Kitchens"
                            value={numKitchens}
                            onChange={(e) => setNumKitchens(e.target.value)}
                        />
                        <AiOutlineCloseCircle className="text-4xl text-gray-500 hover:text-blue-500 cursor-pointer" onClick={clearNumberOfKitchens} />
                    </div>

                    <div className="flex items-center rounded-lg bg-white p-3 shadow-lg shadow-gray-700">
                        <label htmlFor="numBathrooms" className="text-gray-500 mr-2">Bathrooms:</label>
                        <input
                            type="number"
                            id="numBathrooms"
                            className="bg-transparent text-blue-500 focus:outline-none flex-1"
                            placeholder="Number of Bathrooms"
                            value={numBathrooms}
                            onChange={(e) => setNumBathrooms(e.target.value)}
                        />
                        <AiOutlineCloseCircle className="text-4xl text-gray-500 hover:text-blue-500 cursor-pointer" onClick={clearNumberOfBathrooms} />
                    </div>
                </div>

                <button className="bg-blue-500 text-white rounded-lg py-3 px-6 mt-6 md:col-span-3">
                    Search
                </button>

                <button
                    type="button"
                    className="bg-red-500 text-white rounded-lg py-3 px-6 mt-6 md:col-span-3"
                    onClick={clearAll}
                >
                    Clear All
                </button>
            </form>
        </div>
    );
};

export default Search;
