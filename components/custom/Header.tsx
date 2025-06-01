import { ModeToggle } from "@/components/ui/mode-toggle";
import { TypographyH1 } from "@/components/custom/Typography";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b pb-4">
      <TypographyH1 className="hover:text-primary">
        <Link href="/">Blog SEO</Link>
      </TypographyH1>
      <ModeToggle />
    </header>
  );
};
export default Header;
