import React from "react";

const WeightLayout = ({ children }: { children: React.ReactNode }) => {
  return <article className={"h-full w-full"}>{children}</article>;
};

export default WeightLayout;
