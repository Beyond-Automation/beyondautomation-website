"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { youtubeEmbedUrl, youtubeThumbnail, youtubeWatchUrl } from "@/content/journal";

type YouTubeEmbedProps = {
  videoId: string;
  title: string;
  placement: string;
};

/**
 * Privacy-friendly YouTube player.
 *
 * Renders a static thumbnail with a play button. No YouTube player, cookies, or
 * scripts load until the visitor chooses to play. The player then loads from
 * youtube-nocookie.com (privacy-enhanced mode) with captions and fullscreen
 * available through the standard YouTube controls. Nothing autoplays on page load.
 */
export default function YouTubeEmbed({ videoId, title, placement }: YouTubeEmbedProps) {
  const [active, setActive] = useState(false);
  const [thumb, setThumb] = useState(youtubeThumbnail(videoId, "maxresdefault"));
  const watchUrl = youtubeWatchUrl(videoId);

  return (
    <figure className="ba-video">
      <div className="ba-video-frame">
        {active ? (
          <iframe
            src={`${youtubeEmbedUrl(videoId)}?autoplay=1&rel=0&modestbranding=1`}
            title={`YouTube video player: ${title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            loading="lazy"
          />
        ) : (
          <button
            type="button"
            className="ba-video-facade"
            onClick={() => {
              setActive(true);
              trackEvent("video_play", { video_id: videoId, placement });
            }}
            aria-label={`Play video: ${title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- static export; remote YouTube thumbnail */}
            <img
              src={thumb}
              alt=""
              loading="lazy"
              decoding="async"
              width={1280}
              height={720}
              onError={() => setThumb(youtubeThumbnail(videoId, "hqdefault"))}
            />
            <span className="ba-video-play" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </span>
          </button>
        )}
      </div>
      <figcaption className="ba-video-caption">
        <span>{title}</span>
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("outbound_click", { destination: "youtube", placement, url: watchUrl })}
        >
          Watch on YouTube ↗
        </a>
      </figcaption>
      <p className="ba-video-note">
        The player loads from YouTube in privacy-enhanced mode only after you press play. English captions are available from the CC button.
      </p>
    </figure>
  );
}
