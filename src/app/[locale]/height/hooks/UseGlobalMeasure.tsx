import { useState } from "react";

export function useGlobalMeasure() {
  const [globalItemText, setGlobalItemText] = useState("");
  const [globalScale, setGlobalScale] = useState(1);
  const [globalItem, setGlobalItem] = useState(0);
  const [isGlobalMode, setIsGlobalMode] = useState(false);

  const handleGlobalItemChange = (data: number) => {
    setGlobalItemText(data.toString());
    setGlobalItem(data);
  };

  const handleGlobalScaleChange = (data: number) => {
    setGlobalItemText("");
    setGlobalItem(0);
    setGlobalScale(data);
  };

  const handleIsGlobalModeChange = (data: boolean) => {
    setIsGlobalMode(!isGlobalMode);
  };

  return {
    globalItem,
    globalItemText,
    globalScale,
    isGlobalMode,
    handleGlobalItemChange,
    handleGlobalScaleChange,
    handleIsGlobalModeChange,
    setGlobalItem,
  };
}
