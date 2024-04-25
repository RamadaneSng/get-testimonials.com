import { signIn } from "@/auth/auth";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

const SigninButton = () => {
  return (
    <form>
      <Button
        variant="secondary"
        size={"sm"}
        formAction={async () => {
          "use server";
          await signIn();
        }}
      >
        <LogIn size={16} className="mr-2" />
        Sign In
      </Button>
    </form>
  );
};

export default SigninButton;
