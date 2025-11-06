import React, { createContext, useContext } from "react";

// Define the context type
export interface PopupContextType {
  popupMsg: { status: "error" | "success" | null; msg: string | null};
  setPopupMsg: React.Dispatch<
    React.SetStateAction<{ status: "error" | "success" | null; msg: string | null }>
  >;
}

// Create the context with default values
export const PopupContext = createContext<PopupContextType>({
  popupMsg: { status: null, msg: null },
  setPopupMsg: () => {},
});

// Custom hook for easy access
export const usePopup = () => useContext(PopupContext);
