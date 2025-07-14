import React, { useState, useEffect } from "react";
import axios from "axios";

const getYoutubeEmbedUrl = (youtubeWatchUrl) => {
  if (!youtubeWatchUrl) return "";

  let videoId = "";

  // Case 1: Standard watch URL (e.g., https://www.youtube.com/watch?v=VIDEO_ID)
  if (youtubeWatchUrl.includes("youtube.com/watch?v=")) {
    const parts = youtubeWatchUrl.split("v=");
    if (parts.length > 1) {
      const idPart = parts[1];
      videoId = idPart.split("&")[0];
    }
  }
  // Case 2: Shortened URL (e.g., https://youtu.be/VIDEO_ID)
  else if (youtubeWatchUrl.includes("youtu.be/")) {
    const parts = youtubeWatchUrl.split("youtu.be/");
    if (parts.length > 1) {
      const idPart = parts[1];
      videoId = idPart.split("?")[0];
    }
  }

  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
  }
  return "";
};

function LandingPageVideo() {
  return (
    <div className="w-360 h-200 border-10 border-accent rounded-xl mx-auto mt-30 flex justify-center items-center">
      {/* <iframe
        width="100%"
        height="100%"
        src={embedUrl}
        title={videoData?.title || "YouTube video player"}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="rounded-xl"
      ></iframe> */}
    </div>
  );
}
export default LandingPageVideo;
