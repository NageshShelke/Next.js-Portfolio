import Image from "next/image";

export default function Home() {
  return (
    <Image 
      src="/ns-logo1.png" 
      alt="Nagesh Logo" 
      width={120}   // set width
      height={120}  // set height
      priority      // (optional) for faster loading
    />
  );
}
