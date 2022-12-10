import SearchInput from "./SearchInput";
import Logo from "./Logo";
import Menu from "./Menu";
import ButtomMenu from "./ButtomMenu";

export default function Header() {
  return (
    <header>
      <div className="flex flex-grow items-center gap-4 bg-amazon_blue p-1 py-2">
        <Logo />
        <SearchInput />
        <Menu />
      </div>
      <ButtomMenu />
    </header>
  );
}
