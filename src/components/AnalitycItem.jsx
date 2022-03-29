import React from "react";

export default function AnalitycItem({ title, amount, logo }) {
  return (
    <div className="analytic">
      <div className="content">
        <h5>{title}</h5>
        <h2>{amount}</h2>
      </div>
      <div className="logo">{logo}</div>
    </div>
  );
}
