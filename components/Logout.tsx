"use client";
import { Button } from "@/components/ui/button";
import { handleSignOut } from "@/lib/action";

const Logout = () => {
  const handleSignOutBtn = async () => {
    await handleSignOut();
  };

  return (
    <div className="flex justify-center">
      <Button variant="destructive" onClick={handleSignOutBtn}>
        Sign Out
      </Button>
    </div>
  );
};

export { Logout };
