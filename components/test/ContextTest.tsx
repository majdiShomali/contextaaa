"use client";
import { useUserContext } from "@/context/userContext/userContext";
import { useState, ChangeEvent } from "react";

const ContextTest = () => {
  const { user, setUser } = useUserContext();
  const [value, setValue] = useState<string>(""); // Assuming value is of type string

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setUser(e.target.value);
  };

  return (
    <>
      <input title="a" value={value} onChange={handleInputChange} />
      {user ? (
        <div> welcome: {user} </div>
      ) : (
        <div> welcome: User </div>
      )}
    </>
  );
};

export default ContextTest;
