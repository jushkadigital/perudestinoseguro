import React from "react";

interface TriangleProps {
  height: string;
  bgColor: string;
}

const Triangle: React.FC<TriangleProps> = ({ height, bgColor }) => {
  return (
   
    <div className={`relative w-full ${height} overflow-hidden`}>
      {/* Parte superior con ángulo de 45 grados */}
      <div
        className={`absolute top-0 left-0 w-full ${height} ${bgColor}`}
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 100%)",
        }}
      />
    </div>
  );
};

export default Triangle;