import React from "react";

export default function ProfileIcon({ size }) {
  return (
    <div style={{ cursor: "pointer" }}>
      <img
        style={{ width: size * 2, borderRadius: "100%" }}
        src="../../public/images/pfp.jpg"
        alt="Hey"
      />
    </div>
  );
}
