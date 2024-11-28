import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const AvatarBox = () => {
  const storedProfilePicture = localStorage.getItem("profilePicture");
  const profilePicture = storedProfilePicture
    ? `${storedProfilePicture}.png`
    : "https://github.com/github.png";

  return (
    <Avatar>
      <AvatarImage src={profilePicture} alt="Profile Picture" />
      <AvatarFallback>AC</AvatarFallback>
    </Avatar>
  );
};
