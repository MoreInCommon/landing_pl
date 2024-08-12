"use client";
const SocialMediaIcons = ({ children, xUrl, linkedinUrl, facebookUrl, emailUrl, inverted }) => {
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
              <g clipPath="url(#clip0_1891_9076)">
                <circle
                  cx="18"
                  cy="18"
                  r="17.5"
                  className="fill-themeableColors-darkBlue stroke-themeableColors-darkBlue"
                />
                <path
                  d="M19.3126 16.7749L25.1379 10H23.7575L18.6994 15.8826L14.6595 10H10L16.1091 18.8955L10 26H11.3805L16.722 19.7878L20.9884 26H25.6479L19.3123 16.7749H19.3126ZM17.4219 18.9738L16.8029 18.0881L11.8779 11.0397H13.9982L17.9728 16.728L18.5918 17.6137L23.7582 25.0075H21.6378L17.4219 18.9742V18.9738Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1891_9076">
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
              <g clipPath="url(#clip0_273_3386)">
                <path
                  d="M19.3126 16.7749L25.1379 10H23.7575L18.6994 15.8826L14.6595 10H10L16.1091 18.8955L10 26H11.3805L16.722 19.7878L20.9884 26H25.6479L19.3123 16.7749H19.3126ZM17.4219 18.9738L16.8029 18.0881L11.8779 11.0397H13.9982L17.9728 16.728L18.5918 17.6137L23.7582 25.0075H21.6378L17.4219 18.9742V18.9738Z"
                  className="fill-themeableColors-darkBlue"
                />
                <circle cx="18" cy="18" r="17.5" className="stroke-themeableColors-darkBlue" />
              </g>
              <defs>
                <clipPath id="clip0_273_3386">
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
            <g clipPath="url(#clip0_2480_13927)">
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
      {emailUrl && (
        <a href={`mailto:${emailUrl}`}>
          <span className="sr-only">email</span>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2497_7472)">
              <circle
                cx="18"
                cy="18"
                r="17.5"
                className="fill-themeableColors-darkBlue stroke-themeableColors-darkBlue"
              />
              <mask
                id="mask0_2497_7472"
                styles="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="6"
                y="6"
                width="24"
                height="24"
              >
                <rect x="6" y="6" width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_2497_7472)">
                <path
                  d="M18 26.5C16.8254 26.5 15.7208 26.2769 14.6864 25.8307C13.6519 25.3846 12.7521 24.779 11.9869 24.0142C11.2217 23.2493 10.6159 22.3499 10.1696 21.3159C9.72319 20.2819 9.5 19.1771 9.5 18.0015C9.5 16.8259 9.72309 15.7208 10.1693 14.6864C10.6154 13.6519 11.221 12.7521 11.9858 11.9869C12.7507 11.2217 13.6501 10.6159 14.6841 10.1696C15.7181 9.72319 16.8229 9.5 17.9985 9.5C19.1741 9.5 20.2792 9.72313 21.3136 10.1694C22.3481 10.6156 23.2479 11.2213 24.0131 11.9863C24.7783 12.7513 25.3841 13.6508 25.8304 14.685C26.2768 15.7192 26.5 16.8242 26.5 18V19.0909C26.5 19.9076 26.2196 20.601 25.6588 21.1711C25.098 21.7412 24.4091 22.0263 23.5921 22.0263C23.0644 22.0263 22.5752 21.8973 22.1244 21.6392C21.6736 21.381 21.3174 21.026 21.0559 20.5741C20.6693 21.0352 20.2125 21.3925 19.6854 21.646C19.1583 21.8995 18.5965 22.0263 18 22.0263C16.8827 22.0263 15.9324 21.6346 15.1489 20.8511C14.3654 20.0676 13.9737 19.1173 13.9737 18C13.9737 16.8827 14.3654 15.9324 15.1489 15.1489C15.9324 14.3654 16.8827 13.9737 18 13.9737C19.1173 13.9737 20.0676 14.3654 20.8511 15.1489C21.6346 15.9324 22.0263 16.8827 22.0263 18V19.0909C22.0263 19.5302 22.1774 19.9056 22.4797 20.2171C22.7819 20.5285 23.1528 20.6842 23.5921 20.6842C24.0314 20.6842 24.4023 20.5285 24.7045 20.2171C25.0068 19.9056 25.1579 19.5302 25.1579 19.0909V18C25.1579 16.0017 24.4645 14.3092 23.0776 12.9224C21.6908 11.5355 19.9983 10.8421 18 10.8421C16.0017 10.8421 14.3092 11.5355 12.9224 12.9224C11.5355 14.3092 10.8421 16.0017 10.8421 18C10.8421 19.9983 11.5355 21.6908 12.9224 23.0776C14.3092 24.4645 16.0017 25.1579 18 25.1579H22.4737V26.5H18ZM18 20.6842C18.7456 20.6842 19.3794 20.4233 19.9013 19.9013C20.4233 19.3794 20.6842 18.7456 20.6842 18C20.6842 17.2544 20.4233 16.6206 19.9013 16.0987C19.3794 15.5767 18.7456 15.3158 18 15.3158C17.2544 15.3158 16.6206 15.5767 16.0987 16.0987C15.5767 16.6206 15.3158 17.2544 15.3158 18C15.3158 18.7456 15.5767 19.3794 16.0987 19.9013C16.6206 20.4233 17.2544 20.6842 18 20.6842Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_2497_7472">
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
