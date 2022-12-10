import { FiMenu } from "react-icons/fi";

export default function ButtomMenu() {
  return (
    <div className="flex items-center gap-2 bg-amazon_blue-light p-2 text-white">
      <p className="link flex items-center">
        <FiMenu className="mr-1 h-6 text-4xl" />
        All
      </p>
      <p className="link">Prime Video</p>
      <p className="link">Amazon Business</p>
      <p className="link">Today Deals</p>
      <p className="link hidden lg:inline-flex">Electronics</p>
      <p className="link hidden lg:inline-flex">Food & Grocery</p>
      <p className="link hidden lg:inline-flex">Prime</p>
      <p className="link hidden lg:inline-flex">Buy Again</p>
      <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
      <p className="link hidden lg:inline-flex">Health & Personal Care</p>
    </div>
  );
}
