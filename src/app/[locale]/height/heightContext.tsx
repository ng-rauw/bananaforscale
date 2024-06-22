"use client";
import React, { createContext, useContext, useMemo } from "react";
import { useGlobalMeasure } from "@/app/[locale]/height/hooks/UseGlobalMeasure";
import ConfigMeasure from "@/app/[locale]/height/components/ConfigMeasure";

const GlobalHeightContext = createContext({
  isGlobalMode: false,
  globalItemText: "",
  globalItem: 0,
  globalScale: 1,
  handleIsGlobalModeChange: (data: boolean) => {},
  handleGlobalScaleChange: (data: number) => {},
  handleGlobalItemChange: (data: number) => {},
  setGlobalItem: (data: number) => {},
});
export const GlobalHeightContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const {
    globalItemText,
    isGlobalMode,
    globalScale,
    globalItem,
    handleIsGlobalModeChange,
    handleGlobalScaleChange,
    handleGlobalItemChange,
    setGlobalItem,
  } = useGlobalMeasure();
  const values = useMemo(
    () => ({
      globalItemText,
      isGlobalMode,
      globalScale,
      globalItem,
      handleIsGlobalModeChange,
      handleGlobalItemChange,
      handleGlobalScaleChange,
      setGlobalItem,
    }),
    [globalItemText, isGlobalMode, globalScale, globalItem],
  );
  return (
    <GlobalHeightContext.Provider value={values}>
      <div className={`flex ${isGlobalMode ? "flex-row" : "flex-col"}`}>
        <div
          className={`${isGlobalMode ? "sticky top-0 self-start" : ""} flex-1 `}
        >
          <ConfigMeasure />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </GlobalHeightContext.Provider>
  );
};

export const useGlobalHeightContext = () => {
  const context = useContext(GlobalHeightContext);

  if (!context) {
    console.error("Error deploying App Context!!!");
  }

  return context;
};

export default useGlobalHeightContext;
