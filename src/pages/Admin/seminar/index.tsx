import Admin_Sidebar from "components/Admin_Sidebar";
import React from "react";
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import axios from "axios";
import Swal from 'sweetalert2';
import Link from "next/link";

export default function Seminar(){
    const [seminarData, setSeminarData] = useState(null);
    const router = useRouter();
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        
        const options = {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        };
        
        return date.toLocaleDateString('id-ID', options);
    };

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://walrus-app-elpr8.ondigitalocean.app/api/seminars/upcoming');
            if (response) {
              setSeminarData(response.data); // Assuming the actual data is stored in response.data
            }
          } catch (error) {
            console.log(error);
          }
        };
      
        fetchData();
      }, []);
      
      useEffect(() => {
        if (seminarData !== null) {
          console.log(seminarData);
          // Perform any other operations that depend on seminarData
        }
      }, [seminarData]);

    return(
        <>
            <div className="flex">
                <aside className="h-screen sticky top-0">
                    <Admin_Sidebar/>
                </aside>
                <div className="w-full flex flex-col p-8 gap-6">
                    <h1 className="text-3xl font-semibold px-2.5">Manajemen Seminar</h1>
                    <div className="container flex flex-row p-2.5 gap-5">
                        <div className="w-[35.125rem] flex flex-col gap-[1.875rem]">
                            {/* Card */}
                            <Link href="/Admin/seminar/create" className="w-full flex justify-center bg-primary-300 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-primary-400">
                                <div className="flex flex-row items-center py-7 px-[4.188rem] leading-normal">
                                    <img src="/icon/seminar.svg" alt="" />
                                    <h5 className="ml-3 text-2xl font-bold tracking-tight text-black">Buat Seminar Baru</h5>
                                </div>
                            </Link>
                            <div className="w-full flex flex-col p-5 gap-2.5 bg-primary-300 rounded-lg justify-between">
                                <div className="w-full flex justify-between">
                                    <h2 className="font-bold text-xl">Upcoming Seminar</h2>
                                    <Link href="/Admin/seminar/upcoming"><button type="button" className="font-bold text-medium underline underline-offset-1">see all</button></Link>
                                </div>
                                {/* Bagian Bawah */}
                                {seminarData && seminarData.slice(0, 4).map((seminar) => (
                                <div className="flex flex-col border-t-2 border-black">
                                    <div className="flex justify-between">
                                        <div className="flex flex-col">
                                            <h2 className="font-bold text-base">{seminar.name}</h2>
                                            <h3 className="font-medium text-sm">{seminar.speaker}</h3>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-base">Tanggal Dilaksanakan</h2>
                                            <h3 className="font-medium text-sm text-right">{formatDate(seminar.date_and_time)}</h3>
                                        </div>    
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                        {/* Kanan */}
                        {/* <div className="flex flex-col">
                            <div className="w-[27.875rem] bg-primary-300 rounded-lg p-5">
                                <div className="w-full flex justify-between mb-2.5">
                                    <h2 className="font-bold text-xl">Tiket</h2>
                                    <Link href="/Admin/seminar/tiket"><button><h3 className="font-bold text-medium underline underline-offset-1">see all</h3></button></Link>
                                </div>
                                <div className="flex flex-col gap-2.5">
                                    <div className="flex justify-between">
                                        <h2 className="font-bold text-base">Judul Seminar</h2>
                                        <h3 className="font-medium text-sm text-right">57 Tiket Tersisa</h3>
                                    </div>
                                    <div className="flex justify-between">
                                        <h2 className="font-bold text-base">Judul Seminar</h2>
                                        <h3 className="font-medium text-sm text-right">57 Tiket Tersisa</h3>
                                    </div>
                                    <div className="flex justify-between">
                                        <h2 className="font-bold text-base">Judul Seminar</h2>
                                        <h3 className="font-medium text-sm text-right">57 Tiket Tersisa</h3>
                                    </div>
                                    <div className="flex justify-between">
                                        <h2 className="font-bold text-base">Judul Seminar</h2>
                                        <h3 className="font-medium text-sm text-right">57 Tiket Tersisa</h3>
                                    </div>
                                    <div className="flex justify-between">
                                        <h2 className="font-bold text-base">Judul Seminar</h2>
                                        <h3 className="font-medium text-sm text-right">57 Tiket Tersisa</h3>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div> 
                </div>
            </div>
        </>
    );
}