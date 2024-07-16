"use client";
const SocialMediaIcons = ({ children, xUrl, linkedinUrl, facebookUrl, inverted }) => {
  return (
    <div className="flex gap-3">
      {xUrl && (
        <a href={xUrl} target="_blank" rel="noopener noreferrer">
          <span className="sr-only">X</span>
          {inverted ? (
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_1855)">
                <circle
                  cx="18"
                  cy="18"
                  r="17.5"
                  className="stroke-themeableColors-darkBlue fill-themeableColors-darkBlue"
                />
                <path
                  d="M19.4767 16.6218L26.0302 9H24.4772L18.7869 15.6179L14.242 9H9L15.8727 19.0074L9 27H10.553L16.5622 20.0113L21.3619 27H26.6039L19.4763 16.6218H19.4767ZM17.3496 19.0956L16.6533 18.0991L11.1126 10.1697H13.498L17.9694 16.5689L18.6657 17.5655L24.4779 25.8835H22.0926L17.3496 19.096V19.0956Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1855">
                  <rect width="36" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_308_1948)">
                <path
                  className="fill-themeableColors-darkBlue"
                  d="M19.4767 16.6218L26.0302 9H24.4772L18.7869 15.6179L14.242 9H9L15.8727 19.0074L9 27H10.553L16.5622 20.0113L21.3619 27H26.6039L19.4763 16.6218H19.4767ZM17.3496 19.0956L16.6533 18.0991L11.1126 10.1697H13.498L17.9694 16.5689L18.6657 17.5655L24.4779 25.8835H22.0926L17.3496 19.096V19.0956Z"
                />
                <circle className="stroke-themeableColors-darkBlue" cx="18" cy="18" r="17.5" />
              </g>
              <defs>
                <clipPath id="clip0_308_1948">
                  <rect width="36" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
          )}
        </a>
      )}
      {linkedinUrl && (
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <span className="sr-only">facebook</span>
          {inverted ? (
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_1859)">
                <circle
                  cx="18"
                  cy="18"
                  r="17.5"
                  className="stroke-themeableColors-darkBlue fill-themeableColors-darkBlue"
                />
                <g clipPath="url(#clip1_1_1859)">
                  <path
                    d="M13.82 11.5026C13.82 12.4233 13.08 13.1693 12.1667 13.1693C11.2533 13.1693 10.5133 12.4233 10.5133 11.5026C10.5133 10.5826 11.2533 9.83594 12.1667 9.83594C13.08 9.83594 13.82 10.5826 13.82 11.5026ZM13.8333 14.5026H10.5V25.1693H13.8333V14.5026ZM19.1547 14.5026H15.8427V25.1693H19.1553V19.5699C19.1553 16.4566 23.1747 16.2019 23.1747 19.5699V25.1693H26.5V18.4153C26.5 13.1619 20.552 13.3533 19.1547 15.9393V14.5026Z"
                    fill="white"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1_1859">
                  <rect width="36" height="36" fill="white" />
                </clipPath>
                <clipPath id="clip1_1_1859">
                  <rect width="16" height="16" fill="white" transform="translate(10.5 9.5)" />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_308_1952)">
                <g clipPath="url(#clip1_308_1952)">
                  <path
                    d="M13.82 11.5046C13.82 12.4252 13.08 13.1712 12.1667 13.1712C11.2533 13.1712 10.5133 12.4252 10.5133 11.5046C10.5133 10.5846 11.2533 9.83789 12.1667 9.83789C13.08 9.83789 13.82 10.5846 13.82 11.5046ZM13.8333 14.5046H10.5V25.1712H13.8333V14.5046ZM19.1547 14.5046H15.8427V25.1712H19.1553V19.5719C19.1553 16.4586 23.1747 16.2039 23.1747 19.5719V25.1712H26.5V18.4172C26.5 13.1639 20.552 13.3552 19.1547 15.9412V14.5046Z"
                    className="fill-themeableColors-darkBlue"
                  />
                </g>
                <circle cx="18" cy="18" r="17.5" className="stroke-themeableColors-darkBlue" />
              </g>
              <defs>
                <clipPath id="clip0_308_1952">
                  <rect width="36" height="36" fill="white" />
                </clipPath>
                <clipPath id="clip1_308_1952">
                  <rect width="16" height="16" fill="white" transform="translate(10.5 9.5)" />
                </clipPath>
              </defs>
            </svg>
          )}
        </a>
      )}
      {facebookUrl && (
        <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
          <span className="sr-only">linkedin</span>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2480_13927)">
              <circle cx="18" cy="18" r="17.5" className="stroke-themeableColors-darkBlue" />
              <path
                d="M22.9345 19.165L23.4854 15.5728H20.0388V13.2417C20.0388 12.2589 20.5203 11.301 22.064 11.301H23.6311V8.24273C23.6311 8.24273 22.2089 8 20.8493 8C18.0106 8 16.1554 9.72039 16.1554 12.835V15.5728H13V19.165H16.1554V27.849C16.788 27.9483 17.4365 28 18.0971 28C18.7577 28 19.4061 27.9483 20.0388 27.849V19.165H22.9345Z"
                className="fill-themeableColors-darkBlue"
              />
            </g>
            <defs>
              <clipPath id="clip0_2480_13927">
                <rect width="36" height="36" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      )}
      {children}
    </div>
  );
};

export default SocialMediaIcons;
