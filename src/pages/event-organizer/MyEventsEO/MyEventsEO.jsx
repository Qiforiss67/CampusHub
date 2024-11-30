import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Figma from "../../../assets/Event-Figma.svg";
import Maximize from "../../../assets/Maximize.svg";
import IOT from "../../../assets/IOT.svg";
import CTF from "../../../assets/CTF.svg";
import Maximize2 from "../../../assets/Maximize2.svg";
import Edit from "../../../assets/edit.svg";

const MyEventsEO = () => {
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
          title: "Figma UI/UX Design",
          date: "20/03/2024",
          image: Figma,
          status: "Webinar",
        },
        {
          id: 2,
          title: "Maximize Our Language",
          date: "20/03/2024",
          image: Maximize,
          status: "Webinar",
        },
        {
          id: 3,
          title: "Pengoptimalan IOT",
          date: "20/03/2024",
          image: IOT,
          status: "Webinar",
        },
        {
          id: 4,
          title: "Capture The Flag: To The Moon!",
          date: "20/03/2024",
          image: CTF,
          status: "Lomba",
        },
        {
          id: 5,
          title: "Maximize Our Foreign Language Skills",
          date: "20/03/2024",
          image: Maximize2,
          status: "Webinar",
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
  const webinarCount = events.filter((event) => event.status === "Webinar").length;
  const lombaCount = events.filter((event) => event.status === "Lomba").length;

  const filteredEvents =
    statusFilter === "All"
      ? events
      : events.filter((event) => event.status === statusFilter);

  return (
    <div className="myevents h-[1024px]">
      <div className="container">
        <div className="content-box flex flex-col">
          <div className="page-features flex justify-between px-20 pt-16">
            <h1 className="text-5xl font-bold py-4">MyEvents</h1>
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
                  statusFilter === "Webinar" ? "font-bold underline" : ""
                }`}
                onClick={() => handleStatusChange("Webinar")}
              >
                Webinar ({webinarCount})
              </li>
              <li
                className={`cursor-pointer ${
                  statusFilter === "Lomba" ? "font-bold underline" : ""
                }`}
                onClick={() => handleStatusChange("Lomba")}
              >
                Lomba ({lombaCount})
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
                        Uploaded: {event.date}
                      </span>
                    </div>
                  </div>
                  <a href="#" key={event.id}>
                    <img src={Edit} alt="Edit" />
                  </a>
                </div>
              ))
            ) : (
              <div>No events found for this status.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEventsEO;
