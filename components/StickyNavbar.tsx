"use client";
import React from "react";

import Link from "next/link";
import { useUserContext } from "@/context/userContext/userContext";
// import LogOutButton from "./registration/LogOutButton";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const {user} =useUserContext()
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);



  return (
    <div className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link onClick={() => setOpenNav(false)} aria-label={`Next-JS`} href="/">
          <div className="mr-4 cursor-pointer py-1.5 font-medium">
            Next JS {user}
          </div>
        </Link>
        <div className="flex items-center gap-4">

          {user ? (
            <>
            <div className="hidden lg:inline-block">
              {/* <LogOutButton /> */}
              </div>
            </>
          ) : (
            <>
              <Link
                onClick={() => setOpenNav(false)}
                aria-label={`Docs`}
                href="/registration/login"
                className="flex items-center"
              >
                <button
                  className="hidden lg:inline-block"
                >
                  <span>Log in</span>
                </button>
              </Link>
            </>
          )}

   
        </div>
      </div>
  
    </div>
  );
}
