const skeleton = `
  <svg
    role="img"
    width="320"
    height="80"
    aria-labelledby="loading-aria"
    viewBox="0 0 320 80"
    preserveAspectRatio="none"
  >
    <title id="loading-aria">Loading...</title>
    <rect
      x="0"
      y="0"
      width="100%"
      height="100%"
      clip-path="url(#clip-path)"
      style='fill: url("#fill");'
    ></rect>
    <defs>
      <clipPath id="clip-path">
          <rect x="15" y="16" rx="100" ry="100" width="40" height="40" /> 
          <rect x="70" y="15" rx="3" ry="3" width="235" height="50" />
      </clipPath>
      <linearGradient id="fill">
        <stop
          offset="0.599964"
          stop-color="#d6e4e5"
          stop-opacity="1"
        >
          <animate
            attributeName="offset"
            values="-2; -2; 1"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
        <stop
          offset="1.59996"
          stop-color="#cbe5e7"
          stop-opacity="1"
        >
          <animate
            attributeName="offset"
            values="-1; -1; 2"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
        <stop
          offset="2.59996"
          stop-color="#d6e4e5"
          stop-opacity="1"
        >
          <animate
            attributeName="offset"
            values="0; 0; 3"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
      </linearGradient>
    </defs>
  </svg>`;

export {skeleton};
