import React from "react";
import { url, productName } from "../shared/meta";

export const FacebookButton = () => (
  <a
    href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
    target="_blank"
    rel="noopener noreferrer"
    className="facebook"
  >
    <div size="24">
      <svg
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="facebook"
        viewBox="0 0 32 32"
        preserveAspectRatio="xMidYMid meet"
        class="Icon__InlineSvg-sc-1v7dhh0-0 ebnHfh"
      >
        <title>facebook</title>
        <g>
          <path d="M19.491,27.944c7.731,-0.319 8.509,-2.242 8.509,-11.944c0,-11 -1,-12 -12,-12c-11,0 -12,1 -12,12c0,10.985 0.997,11.997 11.956,12l0,-7.667l-2.956,0l0,-3.377l2.956,0l0,-2.491c0,-2.891 1.789,-4.465 4.403,-4.465c1.251,0 2.327,0.092 2.641,0.133l0,3.021l-1.813,0.001c-1.421,0 -1.696,0.666 -1.696,1.644l0,2.157l3.39,0l-0.442,3.377l-2.948,0l0,7.611Z"></path>
        </g>
      </svg>
    </div>
  </a>
);

export const TwitterButton = () => (
  <a
    href={`http://twitter.com/share?text=Check out the ${productName}, a checklist to help people and businesses cope with COVID-19;url=${url}`}
    target="_blank"
    rel="noopener noreferrer"
    className="twitter"
  >
    <div size="24">
      <svg
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="twitter"
        viewBox="0 0 32 32"
        preserveAspectRatio="xMidYMid meet"
        class="Icon__InlineSvg-sc-1v7dhh0-0 ebnHfh"
      >
        <title>twitter</title>
        <g>
          <path d="M16,28c11,0 12,-1 12,-12c0,-11 -1,-12 -12,-12c-11,0 -12,1 -12,12c0,11 1,12 12,12Zm5.825,-13.901c0,3.669 -2.889,7.901 -8.172,7.901l0,0c-1.622,0 -3.132,-0.46 -4.403,-1.248c0.225,0.026 0.454,0.039 0.685,0.039c1.346,0 2.585,-0.444 3.568,-1.189c-1.258,-0.022 -2.318,-0.825 -2.684,-1.928c0.175,0.032 0.355,0.05 0.54,0.05c0.262,0 0.516,-0.034 0.758,-0.098c-1.315,-0.255 -2.305,-1.377 -2.305,-2.722c0,-0.013 0,-0.024 0.001,-0.036c0.387,0.208 0.829,0.333 1.301,0.348c-0.772,-0.498 -1.279,-1.348 -1.279,-2.312c0,-0.509 0.143,-0.985 0.389,-1.396c1.417,1.681 3.534,2.786 5.921,2.902c-0.049,-0.204 -0.074,-0.416 -0.074,-0.633c0,-1.533 1.286,-2.777 2.872,-2.777c0.826,0 1.573,0.338 2.097,0.877c0.654,-0.124 1.269,-0.356 1.824,-0.674c-0.215,0.649 -0.67,1.192 -1.263,1.536c0.581,-0.067 1.134,-0.216 1.649,-0.437c-0.384,0.557 -0.872,1.046 -1.433,1.438c0.006,0.119 0.008,0.239 0.008,0.359Z"></path>
        </g>
      </svg>
    </div>
  </a>
);
