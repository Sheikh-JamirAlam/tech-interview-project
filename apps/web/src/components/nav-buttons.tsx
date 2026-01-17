import { HamburgerhMenu, InboxMenu, SearchMenu } from "./navbar-icons";

export function NavButtons() {
  return (
    <div className="flex items-center gap-x-7.5">
        <SearchMenu className="text-[#9C9C9D] hover:text-black transition-colors cursor-pointer"/>
        <InboxMenu className="text-[#9C9C9D] hover:text-black transition-colors cursor-pointer"/>
        <HamburgerhMenu className="text-[#9C9C9D] hover:text-black transition-colors cursor-pointer"/>
    </div>
  );
}
