import React, { useState } from "react";
import HomeNav from "./HomeNav";
import Men from "./Men";
import Women from "./Women";
import Kid from "./Kid";

export default function HomeShop() {
  const [activeTab, setActiveTab] = useState("men");
  return (
    <div>
      <HomeNav activeTab={activeTab} setActiveTab={setActiveTab} />
      <div>
        {activeTab === "men" && <Men />}
        {activeTab === "women" && <Women />}
        {activeTab === "kid" && <Kid />}
      </div>
    </div>
  );
}
