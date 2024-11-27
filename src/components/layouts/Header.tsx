import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";

import { Sun, Moon } from "lucide-react";
import { AvatarBox } from "../AvatarBox/AvatarBox";
import { DrawerBottom } from "../DrawerBottom/DrawerBottom";
import { Button } from "../ui/button";
import { DrawerClose } from "../ui/drawer";
import { Input } from "../ui/input";

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const [profilePicture, setProfilePicture] = useState(() => {
    return localStorage.getItem("profilePicture") || "";
  });

  const [inputValue, setInputValue] = useState(profilePicture);
  const [drawerOpen, setDrawerOpen] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    localStorage.setItem("profilePicture", inputValue);
    setProfilePicture(inputValue);
    setDrawerOpen(false);
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
              <div className="flex items-center space-x-2">
                <div className="text-sm ">Ativar modo claro</div>
                <Sun className="h-6 w-6 border rounded p-1 hover:bg-gray-200 transition-colors duration-200" />
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <div className="text-sm"> Ativar modo dark</div>
                <Moon className="h-6 w-6 border rounded p-1 hover:bg-gray-200 transition-colors duration-200" />
              </div>
            )}
          </button>

          <DrawerBottom
            trigger={
              <div
                role="button"
                tabIndex={0}
                onClick={() => setDrawerOpen(true)}
                className="cursor-pointer"
              >
                <AvatarBox />
              </div>
            }
            title="Altere a sua foto do avatar"
            description="Utilize o input abaixo para alterar a sua foto do avatar."
            footerButtons={
              <>
                <Button onClick={handleSubmit}>Submit</Button>
                <DrawerClose asChild>
                  <Button
                    variant="outline"
                    onClick={() => setDrawerOpen(false)}
                  >
                    Cancel
                  </Button>
                </DrawerClose>
              </>
            }
            open={drawerOpen}
            onOpenChange={setDrawerOpen}
          >
            <Input
              type="url"
              placeholder="Profile Github URL"
              value={inputValue}
              onChange={handleInputChange}
            />
          </DrawerBottom>
        </div>
      </div>
    </header>
  );
};
