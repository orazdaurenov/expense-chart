import React from "react";

const MyBalance = () => {
  return (
    <div className="flex w-full justify-between gap-4 rounded-xl bg-soft-red p-5">
      <div className="text-white">
        <h1 className="text-cream text-sm">My balance</h1>
        <p className="text-lg font-bold">$989.8989</p>
      </div>
      <div>
        <img className="h-12 w-12" src="./logo.svg" alt="logo" />
      </div>
    </div>
  );
};

export default MyBalance;
