import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Poster from "../../../assets/Poster.svg";
import Ellipse from "../../../assets/Ellipse.svg";

const DescriptionPageCancel = () => {
  const [eventData, setEventData] = useState(null);
  const [isCrossVisible, setIsCrossVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Dummy event data
  const dummyEventData = {
    poster: Poster,
    title: "How To Maximize Our Foreign Language Skills",
    type: "Webinar",
    date: "12 Februari 2024",
    time: "19.00-21.00 WIB",
    location: "Online",
    seatsAvailable: 36,
    lecturer: {
      name: "Sutarman Widiyanto",
      position: "Dosen Bahasa Inggris, Universitas Brawijaya",
      profileImage: "src/assets/lecturer.svg",
    },
    description:
      "Tahukah kamu? Zaman sekarang mempelajari bahasa asing itu ternyata sangat penting loh! Uniknya, kita juga bisa belajar di berbagai platform dengan akses yang cukup mudah! Apalagi di era globalisasi ini, tentunya kita gamau kalah saing sama teman-teman lainnya yang sudah bisa berbahasa asing.",
  };

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setIsCrossVisible(true);
    }, 1000);

    // Use dummy data instead of fetching from an API
    setEventData(dummyEventData);
    setLoading(false);
  }, []);

  // If still loading, show loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail-event h-[1024px] pt-10 mx-20">
      <div className="container">
        <div className="breadcrumb pt-auto flex ml-2 pb-10">
          <ol className="list-none flex text-black text-medium">
            <li>
              <Link to="#" className="hover:underline">
                MyEvents
              </Link>
            </li>
            <li className="mx-2"> &gt; </li>
            <li>
              <Link to="#" className="hover:underline">
                Registered
              </Link>
            </li>
          </ol>
        </div>
        <div className="content-box flex">
          <div className="PosterEvent w-full md:w-1/2 h-1/2">
            <img
              className="w-full h-full object-cover rounded-2xl shadow-lg brightness-50"
              src={eventData?.poster || Poster}
              alt="Poster Event"
            />
          </div>
          <div className="description text-left mx-8">
            <span className="bg-customBlue font-regular px-8 py-1 rounded-full text-white text-[14px]">
              {eventData?.type || "Webinar"}
            </span>
            <h1 className="font-bold text-[32px] py-4">
              {eventData?.title || "How To Maximize Our Foreign Language Skills"}
            </h1>
            <div className="border-b-2 border-[#003266] w-[486px] my-4"></div>
            <div className="flex gap-2 ml-2">
              <img
                src="src/assets/Calendar.svg"
                alt="Calendar"
                className="text-4xl"
              />
              <span className="font-medium text-[16px] mt-2">{eventData?.date || "12 Februari 2024"}</span>
              <span className="font-medium text-[16px] mt-2 ml-auto mr-2">
                {eventData?.time || "19.00-21.00 WIB"}
              </span>
            </div>
            <div className="flex gap-2 ml-1 my-4">
              <i className="ri-map-pin-2-fill text-4xl"></i>
              <span className="font-medium text-[16px] mt-2">{eventData?.location || "Online"}</span>
              <img
                src="src/assets/chair.svg"
                alt="Location"
                className="text-4xl ml-auto"
              />
              <span className="font-medium text-[16px] mt-2 mr-2">{eventData?.seatsAvailable || 36} Kursi</span>
            </div>
            <div className="border-b-2 border-[#003266] w-[486px] my-4"></div>
            <div className="lecturer flex gap-2 ml-2">
              <img
                src={eventData?.lecturer?.profileImage || "src/assets/lecturer.svg"}
                alt="Profile"
                className="text-4xl"
              />
              <div className="lecturername flex flex-col ml-4">
                <span className="font-semibold text-[16px]">
                  {eventData?.lecturer?.name || "Sutarman Widiyanto"}
                </span>
                <span className="text-regular text-[14px]">
                  {eventData?.lecturer?.position || "Dosen Bahasa Inggris, Universitas Brawijaya"}
                </span>
              </div>
            </div>
            <div className="border-b-2 border-[#003266] w-[486px] my-4"></div>
            <div>
              <p className="eventdescription font-regular text-wrap text-[16px] block w-full max-w-[486px]">
                {eventData?.description || "Deskripsi event dummy..."}
              </p>
            </div>
          </div>
          <div className="booking w-4/12 h-full px-6 py-6 mx-8 bg-white shadow-lg rounded-2xl flex flex-col">
            <div className="unique-code-output flex justify-center items-center">
              <div className={`relative w-32 h-32 flex items-center justify-center rounded-full border-4 transition-all duration-1000 ${isCrossVisible ? 'bg-red-500 border-red-500' : 'bg-transparent border-gray-400'}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`w-16 h-16 transform transition-all duration-1000 ${isCrossVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
            <div className="confirmation-message flex flex-col items-center py-4">
              <span className="font-medium text-[20px] text-center justify-center py-2">Dibatalkan</span>
              <p className="font-regular text-[16px] text-center py-2">Kamu sudah membatalkan acara ini, segera daftar ulang atau cari acara serupa</p>
            </div>
            <button className="bg-customBlue font-regular w-full h-11 my-2 rounded-lg text-medium text-white text-[16px]"
            onClick={() => navigate("/my-events")}
            >
              Kembali
            </button>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 -z-10">
        <img src={Ellipse} alt="Background" className="w-[300px]" />
      </div>
    </div>
  );
};

export default DescriptionPageCancel;
