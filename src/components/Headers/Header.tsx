import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="flex flex-grow items-center bg-amazon_blue p-1 py-2">
        <div className="flex flex-grow items-center sm:flex-grow-0">
          <Image
            src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg"
            alt="logo"
            width={100}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
      </div>
      <div></div>
    </header>
  );
}
