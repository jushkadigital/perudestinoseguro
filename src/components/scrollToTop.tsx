"use client";
import { useEffect } from "react";
import React from "react";

export function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}
