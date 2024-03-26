import BananaIcon from "@/components/icons/Banana";

export default function Footer() {
  return (
    <footer className="flex w-full justify-center bg-yellow-400 p-4">
      <p className=" flex flex-row align-middle text-black">
        Made with
        <span className="h-8 w-8">
          <BananaIcon />
        </span>
        by Raúl Cabrejas
      </p>
    </footer>
  );
}
