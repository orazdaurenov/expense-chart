import React from "react";

const MyBalance = () => {
  return (
    <div className="flex w-full justify-between gap-4 rounded-xl bg-soft-red p-5">
      <div className="text-white">
        <h1 className="text-sm text-cream">My balance</h1>
        <p className="text-lg font-bold tracking-wide">$981,23</p>
      </div>
      <div>
        <img className="h-12 w-12" src="./logo.svg" alt="logo" />
      </div>
    </div>
  );
};

export default MyBalance;
