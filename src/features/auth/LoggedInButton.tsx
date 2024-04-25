import { auth } from "@/auth/auth";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import LoggedInDropdown from "./LoggedInDropdown";
import SigninButton from "./SignInButton";

const LoggedInButton = async () => {
  const session = await auth();

  if (!session?.user) {
    return <SigninButton />;
  }

  return (
    <LoggedInDropdown>
      <Button variant="outline" size="sm">
        <Avatar className="size-6">
          <AvatarFallback>
            {session.user.name?.[0]}

            {session.user.image ? (
              <AvatarImage
                src={session.user.image}
                alt={`${
                  session.user.name ?? "-"
                }'s profile picture`}
              />
            ) : null}
          </AvatarFallback>
        </Avatar>
      </Button>
    </LoggedInDropdown>
  );
};

export default LoggedInButton;
