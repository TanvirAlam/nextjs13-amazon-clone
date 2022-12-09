import SearchInput from "./SearchInput";
import { FiMenu } from "react-icons/fi";
import Logo from "./Logo";
import Menu from "./Menu";

export default function Header() {
  return (
    <header>
      <div className="flex flex-grow items-center gap-4 bg-amazon_blue p-1 py-2">
        <Logo />
        <SearchInput />
        <Menu />
      </div>
      <div></div>
    </header>
  );
}
