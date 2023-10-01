'use client'
import * as React from "react";

// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";
import Header from "@/components/header";
export default function NextUI({children}) {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
        <Header></Header>
      {children}
    </NextUIProvider>
  );
}