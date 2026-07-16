"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type LoadingContextType = {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  loadedCount: number;
  setLoadedCount: (count: number) => void;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCount, setLoadedCount] = useState(0);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading, loadedCount, setLoadedCount }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}
