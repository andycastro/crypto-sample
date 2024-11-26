import { Separator } from "@/components/ui/separator";

export const Header = () => {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b">
      <div className="flex items-center gap-2 px-3">
        Crypto Sample
        <Separator orientation="vertical" className="mr-2 h-4" />
      </div>
    </header>
  );
};
