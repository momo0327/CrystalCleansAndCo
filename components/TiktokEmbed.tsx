"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TikTokEmbedProps {
  videoUrl: string;
  className?: string;
}

interface TikTokVideoContainerProps {
  videos: { url: string; title?: string }[];
  className?: string;
}

// Single TikTok video embed component
export const TikTokEmbed = ({ videoUrl, className }: TikTokEmbedProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [embedHtml, setEmbedHtml] = useState<string>('');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Extract video ID from TikTok URL
  const extractVideoId = (url: string): string | null => {
    const patterns = [
      /tiktok\.com\/@[\w.-]+\/video\/(\d+)/,
      /tiktok\.com\/v\/(\d+)/,
      /vm\.tiktok\.com\/(\w+)/,
      /tiktok\.com\/t\/(\w+)/,
      /tiktok\.com.*\/(\d{19})/  // 19-digit video IDs
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  // Convert TikTok URL to embed URL
  const getEmbedUrl = (url: string): string => {
    const videoId = extractVideoId(url);
    if (videoId) {
      return `https://www.tiktok.com/embed/v2/${videoId}`;
    }
    // Fallback: try to construct embed URL from original URL
    const cleanUrl = url.split('?')[0]; // Remove query params
    return `https://www.tiktok.com/embed/v2${cleanUrl.split('tiktok.com')[1]}`;
  };

  // Alternative: Use TikTok's oEmbed API
  const fetchOEmbedData = async (url: string) => {
    try {
      const response = await fetch(
        `https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`
      );
      if (response.ok) {
        const data = await response.json();
        return data.html;
      }
    } catch (err) {
      console.error('oEmbed fetch failed:', err);
    }
    return null;
  };

  useEffect(() => {
    const loadTikTokVideo = async () => {
      try {
        // Try oEmbed first
        const oEmbedHtml = await fetchOEmbedData(videoUrl);
        if (oEmbedHtml) {
          setEmbedHtml(oEmbedHtml);
          setIsLoaded(true);
          return;
        }

        // Fallback to direct iframe embed
        const embedUrl = getEmbedUrl(videoUrl);
        setEmbedHtml(`
          <iframe 
            src="${embedUrl}"
            width="100%" 
            height="100%"
            frameborder="0" 
            scrolling="no" 
            allowfullscreen
            allow="encrypted-media;"
            style="border: none; width: 100%; height: 100%;"
          ></iframe>
        `);
        setIsLoaded(true);
      } catch (err) {
        console.error('Failed to load TikTok video:', err);
        setError(true);
      }
    };

    loadTikTokVideo();
  }, [videoUrl]);

  if (error) {
    return (
      <div className={cn(
        "relative z-10 flex h-80 w-56 md:h-[40rem] md:w-96",
        "items-center justify-center rounded-3xl bg-gray-100 dark:bg-neutral-900",
        className
      )}>
        <div className="text-center p-4">
          <div className="mb-4">
            <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-red-500 font-medium">Failed to load TikTok video</p>
          <p className="text-gray-500 text-sm mt-2">Please check the URL</p>
          <a 
            href={videoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 text-sm mt-2 block"
          >
            Open on TikTok
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "relative z-10 h-80 w-56 md:h-[40rem] md:w-96",
      "overflow-hidden rounded-3xl bg-black",
      className
    )}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-neutral-900">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600 mx-auto mb-2"></div>
            <p className="text-gray-600 text-sm">Loading TikTok video...</p>
          </div>
        </div>
      )}
      
      {embedHtml && (
        <div 
          className="w-full h-full"
          dangerouslySetInnerHTML={{ __html: embedHtml }}
          style={{
            // Override TikTok's default styles
            '--tiktok-embed-width': '100%',
            '--tiktok-embed-height': '100%'
          } as React.CSSProperties}
        />
      )}
      
      {/* Fallback iframe if embed HTML doesn't work */}
      {!embedHtml && isLoaded && (
        <iframe
          ref={iframeRef}
          src={getEmbedUrl(videoUrl)}
          className="w-full h-full border-0"
          allow="encrypted-media; autoplay;"
          allowFullScreen
          onLoad={() => setIsLoaded(true)}
          onError={() => setError(true)}
        />
      )}
    </div>
  );
};

// Simplified TikTok embed using direct iframe (most reliable)
export const SimpleTikTokEmbed = ({ videoUrl, className }: TikTokEmbedProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const extractVideoId = (url: string): string | null => {
    const match = url.match(/\/video\/(\d+)/);
    return match ? match[1] : null;
  };

  const videoId = extractVideoId(videoUrl);
  const embedUrl = videoId ? `https://www.tiktok.com/embed/v2/${videoId}` : null;

  if (!embedUrl) {
    return (
      <div className={cn(
        "relative z-10 flex h-80 w-56 md:h-[40rem] md:w-96",
        "items-center justify-center rounded-3xl bg-gray-100 dark:bg-neutral-900",
        className
      )}>
        <div className="text-center p-4">
          <p className="text-red-500 font-medium">Invalid TikTok URL</p>
          <p className="text-gray-500 text-sm mt-2">Please provide a valid TikTok video URL</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "relative z-10 h-80 w-56 md:h-[40rem] md:w-96",
      "overflow-hidden rounded-3xl bg-black",
      className
    )}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-neutral-900 z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-2"></div>
            <p className="text-gray-600 text-sm">Loading TikTok video...</p>
          </div>
        </div>
      )}
      
      <iframe
        src={embedUrl}
        className="w-full h-full border-0"
        allow="encrypted-media; autoplay; picture-in-picture"
        allowFullScreen
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
        sandbox="allow-scripts allow-same-origin allow-presentation"
      />
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-neutral-900">
          <div className="text-center p-4">
            <p className="text-red-500 font-medium">Could not load video</p>
            <a 
              href={videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 text-sm mt-2 block"
            >
              Open on TikTok
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

// Container component for multiple TikTok videos
export const TikTokVideoContainer = ({ videos, className }: TikTokVideoContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <div className={cn("relative w-full", className)}>
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 overflow-hidden [scrollbar-width:none] hide-scrollbar md:py-20"
        ref={containerRef}
        onScroll={checkScrollability}
      >
        <div className={cn(
          "flex flex-row justify-start gap-4 pl-4",
          "mx-auto max-w-7xl"
        )}>
          {videos.map((video, index) => (
            <div
              key={`tiktok-${index}`}
              className="flex-shrink-0"
            >
              <SimpleTikTokEmbed 
                videoUrl={video.url}
                className=" hover:shadow-xl transition-shadow duration-300"
              />
              {video.title && (
                <div className="mt-3 px-2 max-w-56 md:max-w-96">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 line-clamp-2">
                    {video.title}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mr-10 flex justify-end gap-2">
        <button
          className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-[#002657] disabled:opacity-50 transition-opacity hover:bg-[#003875]"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m0 0l7 7m-7-7l7-7" />
          </svg>
        </button>
        <button
          className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-[#002657] disabled:opacity-50 transition-opacity hover:bg-[#003875]"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m0 0l-7-7m7 7l-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// Utility function to validate and clean TikTok URLs
export const isValidTikTokUrl = (url: string): boolean => {
  const patterns = [
    /^https?:\/\/(www\.)?tiktok\.com\/@[\w.-]+\/video\/\d+/,
    /^https?:\/\/(vm\.)?tiktok\.com\/[\w-]+/,
  ];
  
  return patterns.some(pattern => pattern.test(url));
};

// Function to convert short TikTok URLs to full URLs
export const expandTikTokUrl = async (shortUrl: string): Promise<string> => {
  if (shortUrl.includes('/video/')) {
    return shortUrl; // Already a full URL
  }
  
  try {
    const response = await fetch(shortUrl, { method: 'HEAD', redirect: 'follow' });
    return response.url;
  } catch {
    return shortUrl; // Return original if expansion fails
  }
};