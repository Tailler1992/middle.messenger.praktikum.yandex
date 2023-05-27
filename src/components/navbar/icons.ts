const icon = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#839EA0" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 2C0 0.895508 0.895508 0 2 0H22C23.1045 0 24 0.895508 24 2C24 3.10449 23.1045 4 22
  4H2C0.895508 4 0 3.10449 0 2Z"
      />
      <path d="M0 22C0 20.8955 0.895508 20 2 20H22C23.1045 20 24 20.8955 24 22C24 23.1045 23.1045 24 22
  24H2C0.895508 24 0 23.1045 0 22Z"
      />
      <path d="M2 10C0.895508 10 0 10.8955 0 12C0 13.1045 0.895508 14 2 14H14C15.1045 14 16 13.1045 16
  12C16 10.8955 15.1045 10 14 10H2Z"
      />
  </svg>`;

const icon2 = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#839EA0" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12C24 15.0433 24 21.5 24 24C21 24 15.5841 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258
  5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z"
      />
  </svg>`;

const icon3 = `
  <svg width="25" height="25" viewBox="0 0 25 25" fill="#839EA0" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.41416 14.1423C0.633107 13.3613 0.633107 12.0949 1.41416 11.3139L11.3137 1.4144C12.0947
  0.633351 13.361 0.633351 14.1421 1.4144L24.0416 11.3139C24.8226 12.0949 24.8226 13.3613 24.0416
  14.1423L14.1421 24.0418C13.361 24.8229 12.0947 24.8229 11.3137 24.0418L1.41416 14.1423Z"/>
  </svg>`;

const icon4 = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#839EA0" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 0C0.895508 0 0 0.895508 0 2V9C0 10.1045 0.895508 11 2 11H9C10.1045 11 11 10.1045 11
  9V2C11 0.895508 10.1045 0 9 0H2Z"
      />
      <path d="M15 0C13.8955 0 13 0.895508 13 2V9C13 10.1045 13.8955 11 15 11H22C23.1045 11 24 10.1045 24
  9V2C24 0.895508 23.1045 0 22 0H15Z"
      />
      <path d="M0 15C0 13.8955 0.895508 13 2 13H9C10.1045 13 11 13.8955 11 15V22C11 23.1045 10.1045 24 9
  24H2C0.895508 24 0 23.1045 0 22V15Z"
      />
      <path d="M15 13C13.8955 13 13 13.8955 13 15V22C13 23.1045 13.8955 24 15 24H22C23.1045 24 24 23.1045
  24 22V15C24 13.8955 23.1045 13 22 13H15Z"
      />
  </svg>`;

const icon5 = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#839EA0" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.8734 12.7283C15.0507 11.8098 17 9.16992 17 6C17 2.41016 14.7614 0 12 0C9.23859 0 7 2.41016
  7 6C7 9.22314 8.61224 11.8984 11.113 12.7732C11.6849 12.9731 12.3151 12.9639 12.8734 12.7283Z"
      />
      <path d="M5.61798 15.8933C2.23874 17.1604 0 20.3909 0 24H24C24 20.3909 21.7613 17.1604 18.382 15.8933L16
  15L15 15.75C13.2222 17.0833 10.7778 17.0833 9 15.75L8 15L5.61798 15.8933Z"
      />
  </svg>`;

const icon6 = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#839EA0" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M8.59622 3.62467C9.15587 3.3987 9.63593 2.99265 9.87273 2.4375L10.1968 1.67788L10.2358
        1.58587C10.4247 1.14018 10.621 0.677031 11 0.380881C11.6499 -0.12696 12.3501 -0.12696 13
        0.380881C13.379 0.67703 13.5753 1.14018 13.7642 1.58586L13.8032 1.67788L14.1393 2.46577C14.374
        3.01588 14.8477 3.41987 15.4008 3.64753C15.4294 3.65933 15.458 3.67128 15.4866 3.68338C16.042
        3.91881 16.6683 3.97099 17.228 3.74599L18.0238 3.4261L18.1165 3.38867C18.5652 3.20709 19.0315
        3.01839 19.5089 3.07696C20.3276 3.17739 20.8227 3.67255 20.9231 4.49117C20.9817 4.96855 20.793
        5.43484 20.6114 5.88356L20.574 5.97628L20.2378 6.81264C20.0157 7.36515 20.0636 7.98303 20.2908
        8.53349C20.2961 8.54646 20.3015 8.55944 20.3068 8.57244C20.5335 9.12926 20.9386 9.60661 21.4916
        9.8425L22.3221 10.1968L22.4141 10.2358C22.8598 10.4247 23.323 10.621 23.6191 11C24.127 11.6499
        24.127 12.3501 23.6191 13C23.323 13.379 22.8598 13.5753 22.4141 13.7642L22.3221 13.8032L21.4633
        14.1696C20.9153 14.4033 20.5126 14.8733 20.2843 15.4236C20.0553 15.9757 20.0028 16.6027 20.2257
        17.1573L20.574 18.0237L20.6114 18.1164C20.793 18.5651 20.9817 19.0314 20.9231 19.5088C20.8227
        20.3274 20.3275 20.8226 19.5089 20.923C19.0315 20.9816 18.5652 20.7929 18.1165 20.6113L18.0238
        20.5738L17.1576 20.2257C16.603 20.0027 15.9758 20.0553 15.4237 20.2844C14.8734 20.5127 14.4033
        20.9155 14.1695 21.4635L13.8032 22.3221L13.7642 22.4141C13.5753 22.8598 13.379 23.323 13
        23.6191C12.3501 24.127 11.6499 24.127 11 23.6191C10.621 23.323 10.4247 22.8598 10.2358
        22.4141L10.1968 22.3221L9.84267 21.492C9.60678 20.939 9.12938 20.5338 8.57252 20.3071C8.55936
        20.3018 8.54621 20.2964 8.53307 20.291C7.9826 20.0638 7.36471 20.0159 6.81218 20.238L5.97633
        20.574L5.88363 20.6114C5.43491 20.793 4.96861 20.9817 4.49123 20.9231C3.6726 20.8227 3.17744
        20.3275 3.07701 19.5089C3.01845 19.0315 3.20714 18.5652 3.38872 18.1165L3.42615 18.0238L3.74584
        17.2285C3.97085 16.6687 3.91866 16.0424 3.68321 15.487C3.67103 15.4583 3.65901 15.4295 3.64715
        15.4007C3.41949 14.8476 3.0155 14.3738 2.46535 14.1391L1.67788 13.8032L1.58587 13.7642C1.14018
        13.5753 0.677031 13.379 0.380881 13C-0.12696 12.3501 -0.12696 11.6499 0.380881 11C0.67703 10.621
        1.14018 10.4247 1.58586 10.2358L1.67788 10.1968L2.43732 9.87281C2.99246 9.63601 3.39851 9.15596
        3.62448 8.59633C3.6406 8.5564 3.65702 8.51656 3.67374 8.47681C3.90682 7.92279 3.95779 7.29888
        3.73362 6.74119L3.4261 5.97617L3.38867 5.88347C3.20709 5.43475 3.01839 4.96846 3.07696
        4.49107C3.17739 3.67244 3.67255 3.17729 4.49117 3.07686C4.96856 3.01829 5.43486 3.20698
        5.88358 3.38857L5.97628 3.426L6.74153 3.73361C7.29918 3.95777 7.92303 3.90682 8.47703
        3.67379C8.51667 3.65712 8.5564 3.64075 8.59622 3.62467ZM9.17149 14.8283C10.7358 16.3612
        13.2466 16.3514 14.7989 14.7991C16.361 13.237 16.361 10.7044 14.7989 9.14228C14.1413 8.48474
        13.3118 8.10398 12.4551 8H11.4858C10.8102 8.082 10.1515 8.33613 9.58069 8.7624L8.76216
        9.58093C8.33631 10.1511 8.08226 10.8091 8 11.484V12.4574C8.10278 13.3006 8.47373 14.1174 9.11287
        14.7697L9.17149 14.8283Z"
      />
  </svg>`;

const icon7 = `
  <svg width="22" height="18" viewBox="0 0 22 18" fill="#839EA0" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 7V0.5C14 0.5 18.6805 5.68054 22 9L14 17.5V11H7V7H11.5H14Z"/>
      <path d="M4 4H11V0H2C0.895431 0 0 0.89543 0 2V16C0 17.1046 0.895431 18 2 18H11V14H4V4Z"/>
  </svg>`;

export {icon, icon2, icon3, icon4, icon5, icon6, icon7};
