"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "80vh",
  maxWidth: "650px",
  height: "590px",
};

const mapContainerStyle2 = {
  width: "300px",
  height: "300px",
};
const center = {
  lat: 52.25390552129795,
  lng: 21.00220448139299,
};

const mapOptions = {
  styles: [
    {
      featureType: "all",
      elementType: "all",
      stylers: [{ saturation: -100 }], // This makes the map black and white
    },
  ],
  disableDefaultUI: true, // This hides all map options
  zoomControl: false, // Optionally, explicitly disable zoom controls
};

export default function ContactInfo() {
  return (
    <>
      <div className="text-black mt-24 max-w-[1020px] m-auto flex-col flex gap-4 max-xl:mt-10 max-xl:px-tablet max-sm:px-mobile">
        <h4 className={`text-h4 text-black mb-3 max-xl:px-0 max-sm:px-0 font-bold`}>Nasze biuro</h4>
        <div className="flex gap-4 max-lg:flex-col">
          <div>
            <div className="max-w-[285px]">
              <h5 className={`text-bodyRegular text-black mb-2 max-xl:px-0 max-sm:px-0 font-bold`}>
                Fundacja More in Common Polska
              </h5>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ minWidth: 24 }}
                >
                  <path
                    d="M12.0019 11.8654C12.4995 11.8654 12.9249 11.6882 13.2781 11.3339C13.6313 10.9795 13.8079 10.5536 13.8079 10.056C13.8079 9.55839 13.6307 9.133 13.2764 8.7798C12.922 8.4266 12.4961 8.25 11.9985 8.25C11.5009 8.25 11.0755 8.42717 10.7223 8.7815C10.3691 9.13583 10.1925 9.56179 10.1925 10.0594C10.1925 10.557 10.3697 10.9824 10.724 11.3356C11.0784 11.6888 11.5043 11.8654 12.0019 11.8654ZM12.0002 19.5135C13.9566 17.7622 15.4537 16.0824 16.4915 14.474C17.5294 12.8657 18.0483 11.457 18.0483 10.2481C18.0483 8.42498 17.4691 6.92627 16.3108 5.7519C15.1524 4.57753 13.7156 3.99035 12.0002 3.99035C10.2848 3.99035 8.84796 4.57753 7.68962 5.7519C6.53129 6.92627 5.95212 8.42498 5.95212 10.2481C5.95212 11.457 6.47103 12.8657 7.50885 14.474C8.54668 16.0824 10.0438 17.7622 12.0002 19.5135ZM12.0002 21.5096C9.48355 19.3288 7.59637 17.2993 6.33867 15.4211C5.08099 13.5429 4.45215 11.8186 4.45215 10.2481C4.45215 7.94038 5.19862 6.07213 6.69157 4.64328C8.18451 3.21443 9.95405 2.5 12.0002 2.5C14.0463 2.5 15.8159 3.21443 17.3088 4.64328C18.8018 6.07213 19.5482 7.94038 19.5482 10.2481C19.5482 11.8186 18.9194 13.5429 17.6617 15.4211C16.404 17.2993 14.5168 19.3288 12.0002 21.5096Z"
                    fill="#1C1B1F"
                  />
                </svg>
                <p className="text-bodyRegular">ul. Sapieżyńska 10a, p. 131 00-215 Warszawa</p>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ minWidth: 24 }}
                >
                  <mask
                    id="mask0_1700_6328"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1700_6328)">
                    <path
                      d="M12 21.5C10.6872 21.5 9.45268 21.2506 8.29655 20.752C7.1404 20.2533 6.13472 19.5765 5.2795 18.7217C4.42427 17.8669 3.74721 16.8616 3.24833 15.706C2.74944 14.5504 2.5 13.3156 2.5 12.0017C2.5 10.6877 2.74933 9.45268 3.248 8.29655C3.74667 7.1404 4.42342 6.13472 5.27825 5.2795C6.1331 4.42427 7.13834 3.74721 8.29398 3.24833C9.44959 2.74944 10.6844 2.5 11.9983 2.5C13.3122 2.5 14.5473 2.74938 15.7034 3.24813C16.8596 3.74688 17.8652 4.42375 18.7205 5.27875C19.5757 6.13375 20.2527 7.13917 20.7516 8.295C21.2505 9.45082 21.5 10.6858 21.5 12V13.2192C21.5 14.132 21.1866 14.907 20.5598 15.5442C19.933 16.1814 19.1631 16.5 18.25 16.5C17.6602 16.5 17.1134 16.3557 16.6096 16.0673C16.1057 15.7788 15.7077 15.382 15.4154 14.8769C14.9833 15.3922 14.4727 15.7916 13.8836 16.0749C13.2945 16.3583 12.6666 16.5 12 16.5C10.7513 16.5 9.6891 16.0621 8.81345 15.1865C7.93782 14.3109 7.5 13.2487 7.5 12C7.5 10.7513 7.93782 9.6891 8.81345 8.81345C9.6891 7.93782 10.7513 7.5 12 7.5C13.2487 7.5 14.3109 7.93782 15.1865 8.81345C16.0621 9.6891 16.5 10.7513 16.5 12V13.2192C16.5 13.7102 16.6689 14.1298 17.0067 14.4779C17.3445 14.8259 17.7589 15 18.25 15C18.741 15 19.1554 14.8259 19.4933 14.4779C19.8311 14.1298 20 13.7102 20 13.2192V12C20 9.76664 19.225 7.87498 17.675 6.32498C16.125 4.77498 14.2333 3.99998 12 3.99998C9.76664 3.99998 7.87498 4.77498 6.32498 6.32498C4.77498 7.87498 3.99998 9.76664 3.99998 12C3.99998 14.2333 4.77498 16.125 6.32498 17.675C7.87498 19.225 9.76664 20 12 20H17V21.5H12ZM12 15C12.8333 15 13.5416 14.7083 14.125 14.125C14.7083 13.5416 15 12.8333 15 12C15 11.1666 14.7083 10.4583 14.125 9.87498C13.5416 9.29164 12.8333 8.99998 12 8.99998C11.1666 8.99998 10.4583 9.29164 9.87498 9.87498C9.29164 10.4583 8.99998 11.1666 8.99998 12C8.99998 12.8333 9.29164 13.5416 9.87498 14.125C10.4583 14.7083 11.1666 15 12 15Z"
                      fill="#1C1B1F"
                    />
                  </g>
                </svg>
                <a
                  className="underline text-bodyRegular text-brand-darkBlue"
                  href="polska@moreincommon.com"
                >
                  polska@moreincommon.com
                </a>
              </div>
            </div>
          </div>

          <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_MAP_KEY}
            language="pl"
            loadingElement={<div className="text-transparent">ładowanie mapy</div>}
          >
            <div className="border border-[#DADDE1] w-fit">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                mapContainerClassName={"max-sm:hidden"}
                center={center}
                zoom={16}
                options={mapOptions}
              >
                <Marker
                  position={center}
                  icon={{
                    url: "/pin.svg",
                  }}
                />
              </GoogleMap>
              <GoogleMap
                mapContainerStyle={mapContainerStyle2}
                mapContainerClassName={"sm:hidden"}
                center={center}
                zoom={16}
                options={mapOptions}
              >
                <Marker
                  position={center}
                  icon={{
                    url: "/pin.svg",
                  }}
                />
              </GoogleMap>
            </div>
          </LoadScript>
        </div>
      </div>
    </>
  );
}
