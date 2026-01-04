import Image from "next/image";

export default function Splash() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans dark:bg-black">
      <Image
        src="/logo.png"
        alt="Christful Logo"
        width={300}
        height={300}
        className="animate-fade-in"
      />
    </div>
  );
}
