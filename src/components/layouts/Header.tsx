import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Sun, Moon } from "lucide-react";

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", JSON.stringify(true));
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", JSON.stringify(false));
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="flex h-16 w-full shrink-0 items-center gap-2 border-b px-3">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          Crypto Sample
          <Separator orientation="vertical" className="mr-2 h-4" />
        </div>
        <div className="flex items-center gap-2">
          <button onClick={toggleDarkMode} aria-label="Toggle dark mode">
            {isDarkMode ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
          <Avatar>
            <AvatarImage
              src="https://github.com/andycastro.png"
              alt="@andycastro"
            />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};
