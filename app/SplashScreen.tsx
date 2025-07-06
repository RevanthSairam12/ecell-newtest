"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}>
        <div style={{ maxWidth: "80vw", maxHeight: "80vh", position: "relative" }}>
          <Image 
            src="/ecellanim.gif" 
            alt="Loading..." 
            width={400}
            height={400}
            style={{ 
              maxWidth: "100%", 
              maxHeight: "100%", 
              objectFit: "contain" 
            }}
            priority
          />
        </div>
      </div>
    );
  }

  return <>{children}</>;
} 
