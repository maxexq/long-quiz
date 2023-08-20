"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

const Providers = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      {" "}
      <SessionProvider>{children}</SessionProvider>
    </NextThemeProvider>
  );
};

export default Providers;
