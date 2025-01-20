import React, { useEffect } from "react";

const CalendlyEmbed = ({ url }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget h-full"
      data-url={url}
      style={{ maxHeight: "750px", width: "100%" }}
    ></div>
  );
};

export default CalendlyEmbed;
