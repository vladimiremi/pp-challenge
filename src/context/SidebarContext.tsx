import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
} from "react";

interface SidebarNavProviderProps {
  children: ReactNode;
}

type SidebarNavData = {
  isOpen: boolean;
  togglePanel: () => void;
};

const SidebarNavContext = createContext({} as SidebarNavData);

export function SidebarNavProvider({ children }: SidebarNavProviderProps) {
  const [isOpen, setIsOpen] = useState(true);

  const togglePanel = useCallback(() => {
    setIsOpen((ps) => !ps);
  }, []);

  return (
    <SidebarNavContext.Provider value={{ togglePanel, isOpen }}>
      {children}
    </SidebarNavContext.Provider>
  );
}

export const useSidebarNav = () => useContext(SidebarNavContext);
