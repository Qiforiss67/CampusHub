import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Poster from "../../../assets/Poster.svg";
import Ellipse from "../../../assets/Ellipse.svg";
import Lecturer from "../../../assets/lecturer.svg";
import PopUpCancel from "../../../components/PopUpCancel";
import "../DescriptionPageRegistered/DescriptionPageRegistered.css";

const DescriptionPageRegistered = () => {
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
      profileImage: Lecturer,
    },
    description:
      "Tahukah kamu? Zaman sekarang mempelajari bahasa asing itu ternyata sangat penting loh! Uniknya, kita juga bisa belajar di berbagai platform dengan akses yang cukup mudah! Apalagi di era globalisasi ini, tentunya kita gamau kalah saing sama teman-teman lainnya yang sudah bisa berbahasa asing.",
  };

  const [eventData, setEventData] = useState(dummyEventData);
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState(["A", "B", "C", "D"]);
  const [showPopUp, setShowPopUp] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    const storedCode = localStorage.getItem("uniqueCode");
    if (storedCode) {
      setCode(storedCode.split(""));
    }

    // const fetchEventData = async () => {
    //   try {
    //     const response = await fetch("https://backend-api.com/event/1");

    //     if (response.ok) {
    //       const data = await response.json();
    //       setEventData(data);
    //     } else {
    //       setEventData(dummyEventData);
    //     }
    //   } catch (error) {
    //     console.error("Error fetching event data:", error);
    //     setEventData(dummyEventData);
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // fetchEventData();

    setEventData(dummyEventData);
    setLoading(false);

  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleCancel = () => {
    setShowPopUp(true);
  };

  const handleBack = () => {
    navigate("/my-events");
  };

  return (
    <div className="detail-event h-[1024px] pt-10 mx-20">
      <div className="container">
        <div className="breadcrumb pt-auto flex ml-2 pb-10">
          <ol className="list-none flex text-black text-medium">
            <li>
              <Link to="/my-events" className="hover:underline">
                MyEvents
              </Link>
            </li>
            <li className="mx-2"> &gt; </li>
            <li>
              <Link to="/description-registered" className="hover:underline">
                Registered
              </Link>
            </li>
          </ol>
        </div>
        <div className="content-box flex">
          <div className="PosterEvent w-full md:w-1/2 h-1/2">
            <img
              className="w-full h-full object-cover rounded-2xl shadow-lg"
              src={eventData.poster || Poster}
              alt="Poster Event"
            />
          </div>
          <div className="description text-left mx-8">
            <span className="bg-customBlue font-regular px-8 py-1 rounded-full text-white text-[14px]">
              {eventData.type}
            </span>
            <h1 className="font-bold text-[32px] py-4">{eventData.title}</h1>
            <div className="border-b-2 border-[#003266] w-[486px] my-4"></div>
            <div className="flex gap-2 ml-2">
              <img
                src="src/assets/Calendar.svg"
                alt="Calendar"
                className="text-4xl"
              />
              <span className="font-medium text-[16px] mt-2">{eventData.date}</span>
              <span className="font-medium text-[16px] mt-2 ml-auto mr-2">
                {eventData.time}
              </span>
            </div>
            <div className="flex gap-2 ml-1 my-4">
              <i className="ri-map-pin-2-fill text-4xl"></i>
              <span className="font-medium text-[16px] mt-2">{eventData.location}</span>
              <img
                src="src/assets/chair.svg"
                alt="Location"
                className="text-4xl ml-auto"
              />
              <span className="font-medium text-[16px] mt-2 mr-2">{eventData.seatsAvailable} Kursi</span>
            </div>
            <div className="border-b-2 border-[#003266] w-[486px] my-4"></div>
            <div className="lecturer flex gap-2 ml-2">
              <img
                src={eventData.lecturer.profileImage || "src/assets/lecturer.svg"}
                alt="Profile"
                className="text-4xl"
              />
              <div className="lecturername flex flex-col ml-4">
                <span className="font-semibold text-[16px]">
                  {eventData.lecturer.name}
                </span>
                <span className="text-regular text-[14px]">
                  {eventData.lecturer.position}
                </span>
              </div>
            </div>
            <div className="border-b-2 border-[#003266] w-[486px] my-4"></div>
            <div>
              <p className="eventdescription font-regular text-wrap text-[16px] block w-full max-w-[486px]">
                {eventData.description}
              </p>
            </div>
          </div>

          <div className="booking w-4/12 h-full px-6 py-6 mx-8 bg-white shadow-lg rounded-2xl flex flex-col">
            <div className="unique-code bg-customBlue mb-4 items-center px-6 py-5 rounded-xl">
              <div className="unique-code-output flex gap-4">
                {code.map((char, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={char}
                    readOnly
                    className="w-12 h-14 text-center text-2xl font-bold border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ))}
              </div>
            </div>
            <div className="confirmation-message flex flex-col items-center py-8">
              <span className="font-medium text-[20px] text-center justify-center py-2">Terdaftar!</span>
              <p className="font-regular text-[16px] text-center py-2">
                Tunjukan kode unik ini kepada panitia atau narahubung terkait
              </p>
            </div>
            <div className="checkout flex flex-col">
              <button
                className="bg-customBlue font-regular w-full h-11 my-2 rounded-lg text-medium text-white text-[16px]"
                onClick={handleBack}>
                Kembali
              </button>
              <button
                className="bg-transparent border-2 border-customBlue font-regular w-full h-11 my-2 rounded-lg text-medium text-black text-[16px] hover:bg-red-300 hover:border-red-500"
                onClick={handleCancel}>
                Batalkan
              </button>
            </div>
          </div>
        </div>
      </div>
      {showPopUp && <PopUpCancel setShowPopUp={setShowPopUp} />}
      <div className="fixed bottom-0 left-0 -z-10">
        <img src={Ellipse} alt="Background" className="w-[300px]" />
      </div>
    </div>
  );
};

export default DescriptionPageRegistered;
