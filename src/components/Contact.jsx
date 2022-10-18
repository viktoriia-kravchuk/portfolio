import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import markerIconPng from "leaflet/dist/images/marker-icon-2x.png"
// import { Icon } from "leaflet";

const Contact = () => {
  const refForm = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e8hco4k",
        "template_hzplb4l",
        refForm.current,
        "ObBsng-m7X1ksyS6s"
      )
      .then(
        (result) => {
          console.log(result);
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        function (error) {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <div
      name="contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'
    >
     
          <form
            ref={refForm}
            onSubmit={sendEmail}
            className='flex flex-col max-w-[600px] w-full'
          >
            <div className="sm:text-left pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
                Contact
              </p>
              <p className="text-gray-300 py-4">
                Submit the form below or contact me by an email -
                vikakravchuk2@gmail.com{" "}
              </p>
            </div>
            <input
              type="text"
              className="bg-[#ccd6f6] p-2"
              placeholder="Name"
              name="name"
              required
            />
            <input
              type="text"
              className="my-4 p-2 bg-[#ccd6f6]"
              placeholder="Email"
              name="email"
              required
            />
            <input
              type="text"
              className="mb-4 p-2 bg-[#ccd6f6]"
              placeholder="Subject"
              name="subject"
              required
            />
            <textarea
              className="bg-[#ccd6f6] p-2"
              name="message"
              rows="10"
              placeholder="Leave your message here"
              required
            ></textarea>
            <button
              className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
              type="submit"
              value="SEND"
            >
              Let's Collaborate
            </button>
          </form>

          {/* <div className="mt-11">
            <MapContainer center={[50.0781947, 19.9227871]} zoom={13} scrollWheelZoom={false}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[50.0781947, 19.9227871]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
                <Popup>Viktoriia Kravchuk</Popup>
              </Marker>
            </MapContainer>
          </div> */}
        </div>
  );
};

export default Contact;
