"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function Footer() {
  const path = usePathname();
  const isWebApp = path === "/webapp";
  const isAi = path === "/ai";
  const isChatV2 = path === "/chat-v2";
  return (
    <div
      className={`${isWebApp || isAi || isChatV2 ? "webfilm-class" : ""} h-[60px] border-t`}
    ></div>
  );
}
