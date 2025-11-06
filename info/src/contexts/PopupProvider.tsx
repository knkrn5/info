import { useState } from "react";
import type { ReactNode } from "react";
import { PopupContext } from "./popupContext";

// Create a provider component
export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [popupMsg, setPopupMsg] = useState("");

  return (
    <PopupContext.Provider value={{ popupMsg, setPopupMsg }}>
      {children}
    </PopupContext.Provider>
  );
};
