import BananaMeasure from "@/app/[locale]/height/components/BananaMeasure";
import FuetMeasure from "@/app/[locale]/height/components/FuetMeasure";
import { GlobalHeightContextProvider } from "@/app/[locale]/height/heightContext";

export default function Height() {
  return (
    <>
      <GlobalHeightContextProvider>
        <BananaMeasure />
        <FuetMeasure />
      </GlobalHeightContextProvider>
    </>
  );
}
