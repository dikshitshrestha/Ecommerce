import React from "react";

export default function HomeNav({ activeTab, setActiveTab }) {
  return (
    <div>
      <button onClick={() => setActiveTab("men")}>Men</button>
      <button onClick={() => setActiveTab("women")}>Women</button>
      <button onClick={() => setActiveTab("kid")}>Kid</button>
    </div>
  );
}
