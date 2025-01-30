'use client'
import { useMobile } from "@/hooks/useMobile";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  mobile?: string
}
export const YouTubeEmbed = ({ videoId, title = "YouTube video", mobile = "dual"}:YouTubeEmbedProps) => {
  const isMobile = useMobile()

  if(mobile == "mobile"){
   return isMobile ? (
    <div className="relative pb-[56.25%] h-0 overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
    </div>
  ):<div></div>
  }

  if ( mobile == "desktop"){
    return !isMobile && (
    <div className="relative pb-[56.25%] h-0 overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
    </div>
  );
  }

  return (
    <div className="relative pb-[56.25%] h-0 overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
    </div>
  );
};
