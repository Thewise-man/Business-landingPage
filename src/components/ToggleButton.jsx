import React, { useState } from "react";

const SwitchToggle = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div
      onClick={() => setEnabled(!enabled)}
      className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-all
        ${enabled ? "bg-pink-200" : "bg-gray-400"}
      `}
    >
      <div
        className={`bg-pink-400 w-6 h-6 rounded-full shadow-md transform transition-all
          ${enabled ? "translate-x-7" : "translate-x-0"}
        `}
      />
    </div>
  );
};

export default SwitchToggle;
