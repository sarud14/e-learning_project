import React, { useState, useEffect } from "react";
import { lessonApi } from "../../services/lessonService";

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

  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
  }
  return "";
};

function LandingPageVideo() {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const getVideo = async () => {
      try {
        const resp = await lessonApi.get("/courses/1/lessons");

        if (
          resp.data &&
          Array.isArray(resp.data.result) &&
          resp.data.result.length > 0
        ) {
          setVideoData(resp.data.result[0]);
        } 
       
      } catch (err) {
        console.error("Failed to fetch landing page video:", err); 
      }
    };

    getVideo();
  }, []);

  const embedUrl = videoData ? getYoutubeEmbedUrl(videoData.video_url) : "";
  if (!embedUrl) {
    return (
      <div className="w-360 h-200 border-10 border-accent rounded-xl mx-auto mt-30 flex justify-center items-center">
        <h1 className="text-3xl text-warning">No valid URL found.</h1>
      </div>
    );
  }
  return (
    <div className="w-360 h-200 border-10 border-accent rounded-xl mx-auto mt-30 flex justify-center items-center">
      <iframe
        width="100%"
        height="100%"
        src={embedUrl}
        title={videoData?.title || "YouTube video player"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="rounded-xl"
      ></iframe>
    </div>
  );
}
export default LandingPageVideo;
