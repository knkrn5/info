import { useState } from "react";
import type { ReactNode } from "react";
import { PopupContext } from "./popupContext";
import type { PopupContextType } from "./popupContext";

// Create a provider component
export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [popupMsg, setPopupMsg] = useState<PopupContextType["popupMsg"]>({
    status: null,
    msg: null,
  });

  return (
    <PopupContext.Provider value={{ popupMsg, setPopupMsg }}>
      {children}
    </PopupContext.Provider>
  );
};
