import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Menu() {
  return (
    <div className="mx-6 flex items-center space-x-6 whitespace-nowrap text-xs text-white">
      <div className="link">
        <p>Hello Tanvir</p>
        <p className="font-extrabold md:text-sm">Account & List</p>
      </div>
      <div className="link">
        <p>Returns</p>
        <p className="font-extrabold md:text-sm">& Order</p>
      </div>
      <div className="link relative flex items-center">
        <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-yellow-400 text-center font-bold text-black md:right-10">
          0
        </span>
        <AiOutlineShoppingCart className="text-4xl" />
        <p className="mt-2 hidden font-extrabold md:inline md:text-sm">
          Basket
        </p>
      </div>
    </div>
  );
}
