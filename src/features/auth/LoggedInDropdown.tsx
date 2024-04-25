"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { PropsWithChildren } from "react";
import { signOutAction } from "./auth.action";

const LoggedInDropdown = (props: PropsWithChildren) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {props.children}
      </DropdownMenuTrigger>
      <DropdownMenuContent onClick={() => signOutAction()}>
        <DropdownMenuItem>
          <LogOut size={16} className="mr-2" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LoggedInDropdown;
