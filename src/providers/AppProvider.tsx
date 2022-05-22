import React, { createContext } from "react";

interface AppProviderProps {
  children: JSX.Element;
}
interface AppContextTypes {}

const APP_CONTEXT_INITIAL_VALUES = {};

export const AppContext = createContext<AppContextTypes>({
  ...APP_CONTEXT_INITIAL_VALUES,
});

function AppProvider({ children }: AppProviderProps) {
  const providerValue = {};

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
}

export default AppProvider;
