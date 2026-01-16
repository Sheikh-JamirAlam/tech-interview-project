import { MailIcon, MenuIcon, SearchIcon } from "lucide-react"

export function NavButtons() {
  return (
    <div className="flex gap-x-7.5">
        <SearchIcon size={32} className="text-[#9C9C9D] hover:text-black transition-colors cursor-pointer" />
        <MailIcon size={32} className="text-[#9C9C9D] hover:text-black transition-colors cursor-pointer" />
        <MenuIcon size={32} className="text-[#9C9C9D] hover:text-black transition-colors cursor-pointer" />
    </div>
  );
}
