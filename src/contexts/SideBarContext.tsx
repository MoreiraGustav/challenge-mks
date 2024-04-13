import React, { createContext, useContext, useState } from "react";

const SidebarContext = createContext({
  isOpen: false,
  toggleSidebar: () => {},
});



export default function useSidebar() {
  return useContext(SidebarContext);
}

interface ISideBarProps {
  children: React.ReactNode;
}
export function SidebarProvider({ children }: ISideBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}
