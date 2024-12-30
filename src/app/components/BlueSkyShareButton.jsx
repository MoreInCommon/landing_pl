import React from "react";

export function BlueskyShareButton({ text, url }) {
  const messageToShare = url ? `${text} ${url}` : text;
  const blueskyIntentLink = `https://bsky.app/intent/compose?text=${encodeURIComponent(
    messageToShare
  )}`;

  return (
    <a href={blueskyIntentLink} className="pointer" target="_blank" rel="noopener noreferrer">
      <span className="sr-only">bluesky</span>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2536_7475)">
          <circle cx="18" cy="18" r="17.5" className="stroke-themeableColors-darkBlue" />
          <path
            d="M12.5352 11.3943C14.7487 13.0561 17.1297 16.4256 18.0039 18.2338C18.8781 16.4257 21.2589 13.0561 23.4726 11.3943C25.0698 10.1952 27.6577 9.26741 27.6577 12.2197C27.6577 12.8093 27.3196 17.1728 27.1213 17.8812C26.4322 20.344 23.9208 20.9722 21.6869 20.592C25.5917 21.2565 26.5851 23.4579 24.4398 25.6592C20.3656 29.84 18.584 24.6102 18.1272 23.2702C18.0436 23.0245 18.0044 22.9096 18.0038 23.0073C18.0032 22.9096 17.9641 23.0245 17.8804 23.2702C17.4239 24.6102 15.6423 29.8401 11.5678 25.6592C9.42254 23.4579 10.4159 21.2564 14.3207 20.592C12.0868 20.9722 9.57537 20.344 8.88629 17.8812C8.68802 17.1727 8.34998 12.8093 8.34998 12.2197C8.34998 9.26741 10.938 10.1952 12.5352 11.3943Z"
            className="fill-themeableColors-darkBlue "
          />
        </g>
        <defs>
          <clipPath id="clip0_2536_7475">
            <rect width="36" height="36" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
}

export default BlueskyShareButton;
