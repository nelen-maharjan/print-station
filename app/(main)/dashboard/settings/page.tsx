"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input"; 
import { Button } from "@/components/ui/button";
import { getUser, updateProfile, handleChangePassword } from "@/lib/action";
import { toast } from "@/hooks/use-toast";

const SettingsPage = () => {
  
  const [user, setUser] = useState<any>({});
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
  });
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
  });

  const getUserDetails = async () => {
    const res = await getUser();
    if (res?.result) {
      setUser(res.result);
      setProfileData({
        name: res.result.name || "",
        email: res.result.email || "",
      });
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const updateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await updateProfile(profileData);
    if (res?.success) { 
      toast({ title: "User updated successfully!" });
    } else {
      toast({ variant: "destructive", title: res?.error || "User not updated!" });
    }
  };

  const changePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await handleChangePassword(passwordData);
    
    if (res?.success) {
      toast({ title: "Password changed successfully!" });
    } else if (res?.error) {
      toast({ variant: "destructive", title: res.error });
    } else {
      toast({ variant: "destructive", title: "An unexpected error occurred." });
    }
  };
  

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setPasswordData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="w-full flex flex-col min-h-screen mx-2 md:mx-12">
      <main className="flex flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div>
          <h1 className="font-semibold text-3xl">Account</h1>
          <p className="text-sm text-gray-400">Update your account settings below</p>
        </div>
        <div className="grid w-full items-start gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>You can update your profile information here</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={updateUser} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={profileData.name}
                    type="text"
                    className="h-10"
                    onChange={handleProfileChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    value={profileData.email}
                    type="email"
                    className="h-10"
                    onChange={handleProfileChange}
                  />
                </div>
                <Button type="submit" className="w-20 text-white bg-black hover:bg-slate-700">
                  Save
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>You can change/update your password here</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={changePassword} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700">
                    Old Password
                  </label>
                  <Input
                    id="oldPassword"
                    type="password"
                    className="h-10"
                    value={passwordData.oldPassword}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                    New Password
                  </label>
                  <Input
                    id="newPassword"
                    type="password"
                    className="h-10"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                  />
                </div>
                <Button type="submit" className="w-20 text-white bg-black hover:bg-slate-700">
                  Save
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
