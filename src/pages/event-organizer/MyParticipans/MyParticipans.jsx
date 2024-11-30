import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Samantha from "../../../assets/Samantha.svg";
import Johan from "../../../assets/Johan.svg";
import Ymir from "../../../assets/Ymir.svg";
import David from "../../../assets/David.svg";
import Bahlil from "../../../assets/Bahlil.svg";

const MyParticipans = () => {
  const [events, setEvents] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const dummyEvents = [
        {
          id: 1,
          title: "Samantha Becker",
          date: "20/03/2024",
          image: Samantha,
          status: "Registered",
        },
        {
          id: 2,
          title: "Johan Yars",
          date: "20/03/2024",
          image: Johan,
          status: "Canceled",
        },
        {
          id: 3,
          title: "Muhamad Ymir",
          date: "20/03/2024",
          image: Ymir,
          status: "Canceled",
        },
        {
          id: 4,
          title: "David Sarutobi",
          date: "20/03/2024",
          image: David,
          status: "Registered",
        },
        {
          id: 5,
          title: "Bahlil Yusii",
          date: "20/03/2024",
          image: Bahlil,
          status: "Registered",
        },
      ];
      setEvents(dummyEvents);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = (status) => {
    setStatusFilter(status);
  };

  const allCount = events.length;
  const webinarCount = events.filter((event) => event.status === "Registered").length;
  const lombaCount = events.filter((event) => event.status === "Canceled").length;

  const filteredEvents =
    statusFilter === "All"
      ? events
      : events.filter((event) => event.status === statusFilter);

  return (
    <div className="myevents h-[1024px]">
      <div className="container">
        <div className="content-box flex flex-col">
          <div className="page-features flex justify-between px-20 pt-16">
          <div className="title flex flex-col">
              <h1 className="text-5xl font-bold py-4">MyParticipants</h1>
              <span className="event-title font-regular text-2xl py-4">
                Pengoptimalan IoT
              </span>
            </div>
          </div>
          <div className="event-status px-20 py-4">
            <ul className="flex gap-16">
              <li
                className={`cursor-pointer ${
                  statusFilter === "All" ? "font-bold underline" : ""
                }`}
                onClick={() => handleStatusChange("All")}
              >
                All ({allCount})
              </li>
              <li
                className={`cursor-pointer ${
                  statusFilter === "Registered" ? "font-bold underline" : ""
                }`}
                onClick={() => handleStatusChange("Registered")}
              >
                Registered ({webinarCount})
              </li>
              <li
                className={`cursor-pointer ${
                  statusFilter === "Canceled" ? "font-bold underline" : ""
                }`}
                onClick={() => handleStatusChange("Canceled")}
              >
                Canceled ({lombaCount})
              </li>
            </ul>
          </div>
          <div className="event-list flex flex-col gap-6 px-20 py-2">
            {loading ? (
              <div>Loading...</div>
            ) : filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="event-box p-4 border border-customBlue rounded-2xl shadow-md hover:shadow-lg transition duration-300 px-4 py-2 flex justify-between items-center"
                >
                  <div className="event-data flex items-center">
                    <img
                      src={event.image || "https://via.placeholder.com/150"}
                      alt={event.title}
                      className="w-20 h-20 object-cover mb-4 rounded-md pt-2 px-1"
                    />
                    <div className="event-details flex flex-col px-4">
                      <span className="event-title block font-semibold text-lg mb-2">
                        {event.title}
                      </span>
                      <span className="event-date text-sm text-gray-500 mb-1 block">
                        Join date: {event.date}
                      </span>
                    </div>
                  </div>
                  <a href="#" key={event.id}>
                    <i className="ri-more-fill text-4xl"></i>
                  </a>
                </div>
              ))
            ) : (
              <div>No events found for this status.</div>
            )}
          </div>
          <div className="back-button py-8 flex justify-end px-20">
            <button className="bg-customBlue font-regular w-1/5 h-11 my-2 rounded-lg font-medium text-white text-[16px]">
                Kembali
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyParticipans;
