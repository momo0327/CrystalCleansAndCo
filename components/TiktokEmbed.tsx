"use client";
import React, { useEffect } from "react";

const TikTokEmbed = ({ videoUrl }: { videoUrl: string }) => {
  useEffect(() => {
    if (!videoUrl) return;

    // Load TikTok embed script
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [videoUrl]);

  // If no URL, show a placeholder
  if (!videoUrl) {
    return (
      <div className="w-full h-[500px] bg-gray-100 flex items-center justify-center text-gray-500">
        No TikTok video URL provided
      </div>
    );
  }

  // Extract video ID safely
  const match = videoUrl.match(/video\/(\d+)/);
  const videoId = match ? match[1] : "";

  return (
    <div className="flex justify-center">
      <blockquote
        className="tiktok-embed"
        cite={videoUrl}
        data-video-id={videoId}
        style={{
          maxWidth: "400px",
          minWidth: "300px",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <section></section>
      </blockquote>
    </div>
  );
};

export default TikTokEmbed;
