import React from "react";
import "./map.css";
const Map = ({ darkMode }) => {
  return (
    <div>
      <div className={darkMode ? "dark-mode" : "container"}>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.2395127517407!2d29.924887324029893!3d31.214093062209386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c47c8305b617%3A0xe67342fbbc269285!2z2KPZhNio2KfZhiDYs9mI2YrYs9ix2Kc!5e0!3m2!1sar!2seg!4v1712229684358!5m2!1sar!2seg"
          frameBorder="4"
          scrolling="none"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10845.192112178946!2d8.894814!3d47.191179!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ac9f21b004d51%3A0xa0638e9a28a0dded!2sWangen%20Pizza%20kebab!5e0!3m2!1sen!2sus!4v1712258068752!5m2!1sen!2sus"
          scrolling="none"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
