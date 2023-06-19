import React, { useState } from 'react'
import Sidebar_2 from 'components/Sidebar_2'
import Seminar from 'components/Seminar'

export default function list_seminar() {
    const selectStyle: React.CSSProperties = {
        WebkitAppearance: 'none',
        MozAppearance: 'none',
      };
    return (
        <>
            <div className="flex">
                <aside className="h-screen sticky top-0">
                    <Sidebar_2/>
                </aside>
                <div className="p-8 flex-col space-y-6 w-full">
                <div className="flex flex-row justify-between">
                {/* Judul */}
                <h1 className="text-3xl font-semibold">List Seminar</h1>
                {/* Search Bar */}
                    <div className="flex flex-row justify-end">
                        <div className="relative">
                            <input
                            type="text"
                            className="block px-4 py-2 w-80 text-black-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="Search"
                            style={{ paddingRight: '2rem'}} // Adjust the value as needed
                            />
                            <img
                            src="../icon/search.svg"
                            className="absolute right-3 top-2.5 text-purple-700"
                            style={{ pointerEvents: 'none' }}
                            alt="Search icon"
                            />
                        </div>
                    </div>

                </div>
                
                

                {/* Judul */}
                <div className="flex flex-row justify-between">
                <h2 className="text-2xl font-semibold">Seminar yang akan datang</h2>  
                    <div className="flex flex-row justify-end">
                        {/* Filter Dropdown */}
                        <div className="relative">
                            <select style={selectStyle} className="block px-4 py-2 w-30 text-black-700/25 bg-white rounded-md shadow-2xl focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                <option selected disabled>Filter Kategori</option>
                                <option value="1">Seminar yang sudah lewat</option>
                                <option value="2">Seminar yang akan datang</option>
                            </select>
                            <img
                            src="../icon/arrow-down.svg"
                            className="absolute right-3 top-3.5 text-purple-700 w-4"
                            style={{ pointerEvents: 'none' }}
                            alt="Search icon"
                            />
                        
                        </div>
                    </div>
                </div>

                
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {/* Card */}
                        <Seminar/>
                        {/* Card */}
                        <Seminar/>
                        {/* Card */}
                        <Seminar/>
                        {/* Card */}
                        <Seminar/>
                        {/* Card */}
                        <Seminar/>
                    </div>
                </div>
            </div>
        </>
      )
  }