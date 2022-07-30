import { createContext, useContext, useState } from "react";

const ExtensionContext = createContext();

const ExtensionProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [mainFocus, setMainFocus] = useState("");

  return (
    <ExtensionContext.Provider
      value={{ userName, setUserName, mainFocus, setMainFocus }}
    >
      {children}
    </ExtensionContext.Provider>
  );
};

const useExtension = () => useContext(ExtensionContext);

export { useExtension, ExtensionProvider };
