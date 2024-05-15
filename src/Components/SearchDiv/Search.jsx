import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsHouseDoor, BsTelephone } from 'react-icons/bs';

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [roomValue, setRoomValue] = useState('');
    const [phoneValue, setPhoneValue] = useState('');

    const clearSearchValue = () => {
        setSearchValue('');
    };

    const clearRoomValue = () => {
        setRoomValue('');
    };

    const clearPhoneValue = () => {
        setPhoneValue('');
    };

    return (
        <div className="searchDiv grid gap-10 bg-gray-200 rounded-lg p-6 md:p-12">
            <form action="">
                <div className="grid gap-6 md:grid-cols-3">
                    <div className="flex items-center rounded-lg bg-white p-3 shadow-lg shadow-gray-700">
                        <AiOutlineSearch className="text-3xl text-gray-500 mr-2" />
                        <input
                            type="text"
                            className="bg-transparent text-blue-500 focus:outline-none flex-1"
                            placeholder="Search Here....."
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <AiOutlineCloseCircle className="text-4xl text-gray-500 hover:text-blue-500 cursor-pointer" onClick={clearSearchValue} />
                    </div>

                    <div className="flex items-center rounded-lg bg-white p-3 shadow-lg shadow-gray-700">
                        <BsHouseDoor className="text-3xl text-gray-500 mr-2" />
                        <input
                            type="text"
                            className="bg-transparent text-blue-500 focus:outline-none flex-1"
                            placeholder="Search Room....."
                            value={roomValue}
                            onChange={(e) => setRoomValue(e.target.value)}
                        />
                        <AiOutlineCloseCircle className="text-4xl text-gray-500 hover:text-blue-500 cursor-pointer" onClick={clearRoomValue} />
                    </div>

                    <div className="flex items-center rounded-lg bg-white p-3 shadow-lg shadow-gray-700">
                        <BsTelephone className="text-3xl text-gray-500 mr-2" />
                        <input
                            type="text"
                            className="bg-transparent text-blue-500 focus:outline-none flex-1"
                            placeholder="Search Phone....."
                            value={phoneValue}
                            onChange={(e) => setPhoneValue(e.target.value)}
                        />
                        <AiOutlineCloseCircle className="text-4xl text-gray-500 hover:text-blue-500 cursor-pointer" onClick={clearPhoneValue} />
                    </div>
                </div>

                <button className="bg-blue-500 text-white rounded-lg py-3 px-6 mt-6 md:col-span-3">
                    Search
                </button>
            </form>

            <div className="grid gap-6 md:grid-cols-3">
                <div className="flex items-center">
                    <label htmlFor="relevance" className="text-gray-600 font-semibold mr-2">
                        Sort by:
                    </label>
                    <select name="relevance" id="relevance" className="bg-white rounded-md px-4 py-2">
                        <option value="">Relevance</option>
                        <option value="">Inclusive</option>
                        <option value="">Start with</option>
                        <option value="">Contains</option>
                    </select>
                </div>

                <div className="flex items-center">
                    <label htmlFor="type" className="text-gray-600 font-semibold mr-2">
                        Type:
                    </label>
                    <select name="type" id="type" className="bg-white rounded-md px-4 py-2">
                        <option value="">Relevance</option>
                        <option value="">Inclusive</option>
                        <option value="">Start with</option>
                        <option value="">Contains</option>
                    </select>
                </div>

                <div className="flex items-center">
                    <span className="text-gray-600 cursor-pointer">Clear all</span>
                </div>
            </div>
        </div>
    );
};

export default Search;
