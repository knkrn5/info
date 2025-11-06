import React, { createContext, useContext } from "react";

// Define the context type
interface PopupContextType {
  popupMsg: string;
  setPopupMsg: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with default values
export const PopupContext = createContext<PopupContextType>({
  popupMsg: "",
  setPopupMsg: () => {},
});



// Custom hook for easy access
export const usePopup = () => useContext(PopupContext);