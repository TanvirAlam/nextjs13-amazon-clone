import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-grow items-center sm:flex-grow-0">
      <Image
        src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg"
        alt="logo"
        className="cursor-pointer"
        width={100}
        height={50}
        quality={80}
      />
    </div>
  );
}
