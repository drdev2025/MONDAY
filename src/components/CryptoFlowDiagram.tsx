'use client';
import React from 'react';
import { motion } from 'framer-motion';

const CryptoFlowDiagram = () => {
  const elementVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1 },
  };

  return (
    <div className="w-full p-4 md:p-8">
      <div className="w-full aspect-[705/764] relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 705 764"
          fill="none"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* MONDAY box - First to appear */}
          <motion.g
            initial="hidden"
            animate="visible"
            variants={elementVariants}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <rect
              width="128"
              height="55"
              x=".5"
              y=".898"
              stroke="#fff"
              rx="14.5"
            />
            <text
              x="64"
              y="30"
              className="font-mono"
              fill="white"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              MONDAY
            </text>
          </motion.g>

          {/* Line to Twitter Monitors */}
          <motion.path
            stroke="#fff"
            d="M132 28.398S244.5 34.496 275.5 115"
            initial="hidden"
            animate="visible"
            variants={lineVariants}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Twitter Monitors box */}
          <motion.g
            initial="hidden"
            animate="visible"
            variants={elementVariants}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <rect
              width="198"
              height="63"
              x="176.5"
              y="115.5"
              stroke="#fff"
              rx="13.5"
            />
            <text
              x="275.5"
              y="147"
              className="font-mono"
              fill="white"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              TWITTER MONITORS
            </text>
          </motion.g>

          {/* Three simultaneous lines to right boxes */}
          <motion.g
            initial="hidden"
            animate="visible"
            variants={lineVariants}
            transition={{ duration: 1, delay: 2 }}
          >
            <path
              stroke="#fff"
              d="M381.85 147s44.314-16.504 73.32-42.502C484.176 78.5 530 69.25 530 69.25"
            />
            <path stroke="#fff" d="M381.85 147.5H530" />
            <path
              stroke="#fff"
              d="M381.85 147.5s51.955 14.039 69.302 42.402C468.5 218.266 506.205 225.25 530 225.25"
            />
          </motion.g>

          {/* Right side boxes */}
          <motion.g
            initial="hidden"
            animate="visible"
            variants={elementVariants}
            transition={{ duration: 0.5, delay: 3 }}
          >
            <rect
              width="169"
              height="53"
              x="535.5"
              y="42.75"
              stroke="#fff"
              rx="13.5"
            />
            <text
              x="620"
              y="69"
              className="font-mono"
              fill="white"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              REALTIME NEWS
            </text>

            <rect
              width="169"
              height="53"
              x="535.5"
              y="120.5"
              stroke="#fff"
              rx="13.5"
            />
            <text
              x="620"
              y="147"
              className="font-mono"
              fill="white"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              TRENDS
            </text>

            <rect
              width="169"
              height="53"
              x="535.5"
              y="198.25"
              stroke="#fff"
              rx="13.5"
            />
            <text
              x="620"
              y="225"
              className="font-mono"
              fill="white"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              KOLS
            </text>
          </motion.g>

          {/* Line from Twitter Monitors to AI Stack */}
          <motion.path
            stroke="#fff"
            d="M285.5 179s38 80.5 38 132"
            initial="hidden"
            animate="visible"
            variants={lineVariants}
            transition={{ duration: 1, delay: 3.5 }}
          />

          {/* Line from MONDAY to AI Stack */}
          <motion.path
            stroke="#979797"
            strokeDasharray="5 5"
            d="M86 438.758H64.5V69.751"
            initial="hidden"
            animate="visible"
            variants={lineVariants}
            transition={{ duration: 1, delay: 3.5 }}
          />

          {/* AI STACK box */}
          <motion.g
            initial="hidden"
            animate="visible"
            variants={elementVariants}
            transition={{ duration: 0.5, delay: 4.5 }}
          >
            <rect
              width="475"
              height="223"
              x="86"
              y="311"
              stroke="#fff"
              rx="23"
            />
            <text
              x="323.5"
              y="341"
              className="font-mono"
              fill="white"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              AI STACK: DATA ANALYSIS
            </text>
          </motion.g>

          {/* AI Tools boxes - Staggered appearance */}
          <motion.g
            initial="hidden"
            animate="visible"
            variants={elementVariants}
            transition={{ duration: 0.5, delay: 5 }}
          >
            <rect
              width="105.695"
              height="105.695"
              x="121.652"
              y="399.5"
              stroke="#fff"
              rx="13.5"
            />
            <text
              x="174"
              y="385"
              className="font-mono"
              fill="white"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              DEEPSEEK
            </text>
            <g transform="translate(154, 436)">
              <DeepSeekLogo />
            </g>
          </motion.g>

          <motion.g
            initial="hidden"
            animate="visible"
            variants={elementVariants}
            transition={{ duration: 0.5, delay: 5.2 }}
          >
            <rect
              width="105.695"
              height="105.695"
              x="270.652"
              y="399.5"
              stroke="#fff"
              rx="13.5"
            />
            <text
              x="323"
              y="385"
              className="font-mono"
              fill="white"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              GROK
            </text>
            <g transform="translate(295, 420)">
              <GrokLogo />
            </g>
          </motion.g>

          <motion.g
            initial="hidden"
            animate="visible"
            variants={elementVariants}
            transition={{ duration: 0.5, delay: 5.4 }}
          >
            <rect
              width="105.695"
              height="105.695"
              x="419.652"
              y="399.5"
              stroke="#fff"
              rx="13.5"
            />
            <text
              x="472"
              y="385"
              className="font-mono"
              fill="white"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              Hive
            </text>
            <g transform="translate(452, 432)">
              <HiveLogo />
            </g>
          </motion.g>

          {/* Line to Pump fun token launch */}
          <motion.path
            stroke="#979797"
            strokeDasharray="5 5"
            d="M45.773 77.916V68.75v538.797H148"
            initial="hidden"
            animate="visible"
            variants={lineVariants}
            transition={{ duration: 1, delay: 5.6 }}
          />

          {/* Green bottom section */}
          <motion.g
            initial="hidden"
            animate="visible"
            variants={elementVariants}
            transition={{ duration: 0.5, delay: 6.6 }}
          >
            <rect
              width="314"
              height="64.5"
              x="170.5"
              y="575.25"
              fill="#000"
              stroke="#59D19B"
              rx="14"
            />
            <rect
              width="54.352"
              height="54.352"
              x="176.5"
              y="580.324"
              fill="#52D395"
              fillOpacity=".221"
              stroke="#53D294"
              rx="10"
            />
            <g transform="translate(182, 586) scale(0.11)">
              <PumpfunLogo />
            </g>
            <text
              x="350"
              y="602"
              className="font-mono"
              fill="#59D19B"
              textAnchor="middle"
            >
              Pump fun token launch
            </text>
            <text
              x="355"
              y="623"
              className="font-mono"
              fill="#59D19B"
              textAnchor="middle"
            >
              MONDAY BUYS 10% AS DEV
            </text>

            {/* Green flow lines and bottom text */}
            <path
              stroke="#59D19B"
              strokeDasharray="5 5"
              d="M202.35 656.518v-9.166 28.796h41.226M202.35 691.518v-9.166V734.148h41.226"
            />
            <text
              x="380"
              y="675"
              className="font-mono"
              fill="#59D19B"
              textAnchor="middle"
            >
              MONDAY takes profits along
            </text>
            <text
              x="355"
              y="695"
              className="font-mono"
              fill="#59D19B"
              textAnchor="middle"
            >
              any successful launch
            </text>
            <text
              x="360"
              y="730"
              className="font-mono"
              fill="#59D19B"
              textAnchor="middle"
            >
              MONDAY uses profits to
            </text>
            <text
              x="370"
              y="750"
              className="font-mono"
              fill="#59D19B"
              textAnchor="middle"
            >
              buyback and burn $MONDAY
            </text>
          </motion.g>
        </svg>
      </div>
    </div>
  );
};

export default CryptoFlowDiagram;

const DeepSeekLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={46}
    height={46}
    viewBox="0 0 62 62"
  >
    <path
      fill="#FEFEFE"
      d="M0 0H63.563c.287.436.385.846.41 1.36.168 3.52.036 7.105.037 10.63v20.203c-.001 2.864.412 11.61-.086 13.959-.063.3-.194.592-.361.848H0V0Zm44.047 0c.565.993 1.171 2.338 1.933 3.172 1.187 1.299 3.244 1.8 4.441 3.128.561.622.367 1.548 1.134 1.797 2.13-.743 4.342-1.327 6.45-2.11 1.248-.464 2.538-1.28 3.823-1.575.577-.132.784-.146 1.318.098.478 1.86-.7 5.17-1.655 6.79-1.553 2.635-4.22 4.098-7.112 4.84q-.722.18-1.456.304c1.038 3.852-1.586 10.646-3.493 13.957q-1.054 1.814-2.346 3.466-1.292 1.652-2.798 3.112c1.576.571 5.013 1.483 5.758 3.099.088.19.139.393.168.6-.283.66-.648.967-1.33 1.24-2.873 1.152-6.897.641-9.751-.277-5.55 4.032-11.532 5.585-18.373 4.5q-.596-.1-1.187-.229-.59-.129-1.174-.286-.583-.157-1.159-.343-.575-.185-1.141-.397-.566-.213-1.121-.453-.555-.24-1.098-.505-.543-.266-1.072-.558-.53-.291-1.045-.608-.514-.317-1.014-.658-.499-.341-.98-.706-.483-.365-.947-.753-.464-.387-.908-.796-.445-.41-.87-.84t-.828-.88q-.403-.45-.785-.92-.381-.469-.74-.955C2.281 32.927 1.01 29.46.3 25.464L0 25.491V47h63.563c.167-.256.298-.548.361-.848.498-2.35.085-11.095.086-13.959V11.99c-.001-3.525.13-7.11-.038-10.63-.024-.514-.122-.924-.41-1.36H44.047Zm-36.9 17.104-2.716.32c1.376 7.905 2.822 14.606 9.847 19.552 1.937 1.363 4.085 2.188 6.478 1.989.34-.343.411-.377.406-.864-.018-1.55-1.596-3.434-.793-4.876.585-.271 1.224-.08 1.799.131 2.746 1.012 5.538 3.133 7.695 5.07 2.677 1.635 4.7 2.001 7.787 2.327-11.915-8.973-11.854-22.346-30.502-23.65ZM0 0v18.089l.312-.087c.205-2.442 1.124-4.723 2.367-6.815 3.048-5.13 8.195-8.024 14.167-8.254 2.089-.081 4.211.262 6.292.048 1.904-.196 3.91-.991 5.773-1.466 1.047-.266 3.274-.84 4.252-.243.23.14.234.445.297.698-.287 1.329-1.318 2.598-2.065 3.723 1.239 1.499 3.022 2.66 4.47 3.964 2.22 2 4.283 4.239 6.651 6.06.953.732 2.177 1.684 3.365 1.959.292-.1.487-.444.664-.686.214-1.525-3.745-5.711-4.45-8.28-.847-3.082-.306-5.97 1.257-8.71H0Zm33.947 18.73-.642.463.057.408c1.33.638 2.495 1.006 3.024 2.499.476 1.346.02 3.645 1.48 4.36.868.425 2.182.174 3.084-.046l.571-.422c.058-1.402-1.266-2.955-2.187-3.954-1.633-1.773-2.937-2.98-5.387-3.308Z"
    />
    <path
      fill="#BEC0E3"
      d="m0 18.089.312-.087q-.07 3.731-.014 7.462L0 25.491V18.09Z"
    />
  </svg>
);

const GrokLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 163.53 163.53"
    width={60}
    height={60}
  >
    <path
      d="M0 0h163.53v163.53H0z"
      style={{
        fill: '#0a0a0a',
      }}
    />
    <path
      d="M38.72 129.19h19.96l66.3-94.68h-19.96z"
      style={{
        fill: '#fff',
      }}
    />
  </svg>
);

const HiveLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 62 62"
  >
    <path
      fill="#FEFEFE"
      d="M0 0h61v61H0V0Zm0 0v61h61V0H44.268l-.293.748q.283.077.553.191c.538.227 1.213.575 1.433 1.146.291.756.19 1.879-.145 2.606-1.52 3.296-6.756 1.002-9.352 1.973-.35.437-.353.467-.293 1.024 2.283 1.666 10.851-.726 13.97 1.13.493.292.887.784 1.026 1.343.329 1.315-.43 2.45-1.08 3.523-7.362 1.434-18.108-.765-25.527.626l-.384.877-.295-.535c.352.552.522.764 1.18.94 1.625.437 3.619.166 5.305.181 4.248.038 22.694-.775 25.348.998.39.26.654.597.74 1.063.253 1.372-.721 2.556-1.46 3.604-5.92.705-12.317.12-18.297.157-1.168.007-3.812-.19-4.668.694-.092.094-.046.34-.043.473 1.442 1.473 20.96.355 24.455.77 1.152.138 2.668.483 3.415 1.463.317.416.446.911.38 1.428-.774 6.078-14.633 1.178-17.677 3.566-.17.132-.142.383-.165.591 1.472 1.306 9.445.245 11.908.664.597.102 1.25.588 1.598 1.081.44.625.6 1.464.466 2.213-.88 4.897-14.496.747-17.883 3.113l-.07.414c1.304 1.32 8.714.588 10.975 1.04.676.134.978.407 1.347.963.39.59.628 1.423.48 2.124-.953 4.495-10.048 1.074-12.723 2.906-.296.202-.288.288-.348.63.954.863 3.63.548 4.897.655 1.008.086 1.84.486 2.497 1.273.442.53.561 1.382.5 2.057-.497 5.461-13.729.989-16.617 3.395.634 1.67 7.944.221 10.598 2.017.728.492 1.139 1.044 1.306 1.91-.072.61-.272.984-.698 1.409-2.359 2.352-12.493 1.551-16.054 1.543-1.346-.003-2.812-.16-3.81-1.174-.468-.476-.776-1.16-.768-1.832.043-3.81 4.754-1.977 6.36-3.568l-.01-.45-.083.315-.249-.66.107.08c-.861-.716-7.367.094-9.36-.705-.768-.308-1.447-.759-1.776-1.548-.27-.65-.18-1.514.098-2.156 1.138-2.626 5.015-1.29 7.058-2.114.418-.169.454-.313.624-.7-1.126-1.86-9.657.247-12.218-1.913-.52-.438-.96-1.043-1.005-1.743-.038-.574.234-1.12.607-1.54 2.096-2.362 8.68-1.373 11.725-1.562.542-.35.58-.342.72-.969-.16-.25-.217-.422-.504-.536-.669-.267-1.936-.12-2.677-.124-3.78-.022-10.736.67-14.062-1.065-.583-.304-.91-.65-1.11-1.289-.018-.478.119-.818.362-1.217.636-1.044 1.462-1.86 2.659-2.204 1.618-.465 4.029-.122 5.743-.118l16.62-.001c2.613-.003 6.056.386 8.546-.236.518-.13.79-.22 1.07-.69-.16-.353-.198-.569-.602-.693-1.926-.594-4.756-.12-6.794-.107l-19.082.012c-2.709.003-5.742.343-8.409.018-.91-.11-1.912-.444-2.613-1.053-.561-.486-.99-1.264-1.032-2.013-.03-.522.156-.982.5-1.37.786-.89 2.127-1.279 3.257-1.467 2.15-.358 4.463-.19 6.635-.173 5.115.04 11.714.424 16.67.008.636-.054.824-.318 1.204-.775l-.058-.472c-1.743-1.6-19.695.492-22.688-.844-.898-.4-1.397-1.327-1.726-2.209-.186-.498-.187-.98.041-1.46 1.576-3.32 13.367-.93 16.318-2.066.43-.165.432-.33.603-.731-.072-.128-.195-.432-.295-.52-.523-.463-7.825-.246-9.54-.783-.853-.267-1.632-.662-2.054-1.483-.168-.327-.127-.824-.014-1.165.261-.788.817-1.688 1.581-2.063 2.748-1.35 14.46-.71 18.093-.758.752-.01 2.37.154 3.018-.19.38-.201.38-.394.49-.779-1.22-1.701-13.504.335-16.593-1.367-.643-.354-1.109-1.06-1.305-1.76a2.11 2.11 0 0 1 .198-1.647c.643-1.114 1.726-1.435 2.894-1.76L17.678 0H0Zm28.966 37.023c-2.056 1.381-2.818 2.346-3.411 4.794.52 1.643 1.016 3.302 2.663 4.164 1.13.591 2.287.553 3.515.395.92-.49 1.875-.953 2.705-1.588.336-.953.715-1.91.998-2.88-.488-1.698-.98-3.46-2.647-4.38-1.192-.658-2.51-.611-3.823-.505ZM17.678 0l.26.597c8.642.151 17.419-.285 26.037.15L44.268 0h-26.59Z"
    />
    <path
      fill="#F0D6B3"
      fillOpacity={0.039}
      d="M17.678 0h26.59l-.293.748c-8.618-.436-17.395 0-26.038-.15L17.678 0Z"
    />
  </svg>
);

const PumpfunLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="389" height="389">
    <path
      fill="#1C3835"
      d="M261.28 4.35795C261.6 4.32955 261.918 4.30776 262.24 4.29661C271.322 3.98188 281.653 3.89572 290.639 5.34927C309.358 8.37684 328.102 18.8913 341.849 31.7351C359.446 48.1761 372.722 70.0151 377.107 93.8777C378.167 99.6468 378.543 105.517 378.739 111.373C378.897 116.059 378.636 120.744 378.4 125.423C377.532 142.579 374.561 155.166 366.507 170.495C358.299 186.119 345.394 199.077 333.519 211.969L301.313 246.716C276.111 274.126 251.407 301.959 225.93 329.12Q216.369 339.299 206.528 349.209C189.607 366.231 176.852 376.582 152.983 382.648C145.918 384.443 138.24 385.817 130.939 386.049Q130.566 386.079 130.193 386.1C101.559 387.717 74.2542 378.888 52.8075 359.754Q51.2153 358.356 49.6751 356.901Q48.135 355.446 46.649 353.935Q45.163 352.425 43.7331 350.861Q42.3033 349.298 40.9315 347.683Q39.5597 346.068 38.2477 344.404Q36.9358 342.74 35.6855 341.03Q34.4352 339.319 33.2482 337.564Q32.0611 335.809 30.939 334.011Q29.8169 332.214 28.7611 330.377Q27.7053 328.54 26.7173 326.665Q25.7293 324.791 24.8104 322.882Q23.8915 320.973 23.0429 319.031Q22.1944 317.09 21.4172 315.118Q20.6401 313.147 19.9355 311.149Q19.2309 309.151 18.5996 307.128Q17.9684 305.105 17.4115 303.061C15.7319 296.913 14.4285 290.624 14.0888 284.246C13.1613 266.832 13.8082 254.236 18.994 237.446C21.2899 230.012 24.1865 222.958 28.048 216.193C38.8592 197.252 56.7925 180.271 71.5183 164.27L128.309 102.321Q147.007 81.6681 166.162 61.4379Q174.677 52.4303 183.475 43.6983C198.98 28.249 212.573 16.8119 233.604 9.48963C238.697 7.71638 244.03 6.11228 249.367 5.27111C253.296 4.65183 257.312 4.55781 261.28 4.35795Z"
    />
    <path
      fill="#B7CACA"
      d="M306.696 28.653C311.463 30.5571 315.89 33.1607 320.158 35.9928C335.949 46.4712 346.664 60.8619 354.071 78.1493C364.251 101.909 363.519 132.349 353.966 156.164C346.862 173.873 334.493 183.965 321.811 197.474Q305.066 215.241 288.612 233.278C282.351 240.045 275.528 246.623 269.875 253.899C263.92 247.018 256.93 240.753 250.167 234.678C253.043 232.048 255.536 228.941 258.21 226.103L279.41 203.309L306.932 174.449C310.698 170.511 314.626 166.677 318.269 162.629C319.067 161.743 319.616 161.006 319.874 159.809C320.313 157.774 322.313 156.093 323.547 154.463C338.376 134.866 342.442 109.668 339.132 85.7195C336.749 68.4826 329.132 50.6888 316.595 38.3949C314.327 36.1707 311.887 34.2123 309.356 32.2961C308.501 31.6492 307.413 31.0792 306.635 30.3747C306.137 29.9241 306.06 29.6535 305.993 29.004L306.696 28.653Z"
    />
    <path
      fill="#34815E"
      d="M237.345 250.845C239.56 252.78 241.586 254.94 243.707 256.977C246.454 259.616 249.296 262.158 252.03 264.81C253.743 266.472 255.375 268.373 257.214 269.882Q235.12 293.972 212.513 317.582C204.412 326.109 196.935 335.23 188.468 343.418C171.891 359.45 151.72 368.656 128.565 369.63C108.781 370.462 90.691 365.823 74.1324 354.887C70.2988 352.355 66.5001 349.689 63.1174 346.569C50.1486 334.604 41.1137 319.663 35.9694 302.86C35.1354 300.136 33.6503 296.704 33.612 293.832C33.6064 293.42 33.6837 293.042 33.7923 292.648C37.7639 300.307 42.3718 307.947 48.3377 314.217C65.0796 331.812 88.3134 343.139 112.741 343.707Q117.551 343.802 122.345 343.399Q127.139 342.996 131.866 342.099C159.275 336.929 174.072 318.521 191.985 299.192L220.57 268.93C226.129 262.973 231.468 256.471 237.345 250.845Z"
    />
    <path
      fill="#5FCB88"
      d="M120.756 138.829C127.83 146.051 135.423 152.857 142.752 159.825L172.555 188.531L226.276 240.082C230.002 243.633 233.593 247.324 237.345 250.845C231.468 256.471 226.129 262.973 220.57 268.93L191.985 299.192C174.072 318.521 159.275 336.929 131.866 342.099Q127.139 342.996 122.345 343.399Q117.551 343.802 112.741 343.707C88.3134 343.139 65.0796 331.812 48.3377 314.217C42.3718 307.947 37.7639 300.307 33.7923 292.648C31.747 288.354 31.3374 279.223 31.2549 274.431C30.8899 253.239 36.5624 231.266 49.6208 214.278C54.3931 208.07 59.9101 202.577 65.3675 196.989L79.6337 182.18C93.3838 167.778 106.912 153.133 120.756 138.829Z"
    />
    <path
      fill="#FEFEFE"
      d="M79.5713 235.436C79.9244 235.455 80.2992 235.509 80.6384 235.611C82.2974 236.109 83.2706 238.138 84.0694 239.524C82.2507 242.809 78.5047 247.188 75.173 248.872Q74.8273 248.788 74.4891 248.677C72.4346 248.021 71.6438 246.739 70.7128 244.938C72.1643 242.069 76.838 237.101 79.5713 235.436Z"
    />
    <path
      fill="#FEFEFE"
      d="M78.1573 309.999C78.552 309.989 78.9684 309.976 79.3574 310.054C81.1904 310.418 87.6213 316.755 88.5673 318.513C89.0751 319.457 89.272 320.564 88.9237 321.598C88.4336 323.052 87.2354 323.814 85.9292 324.437C85.6604 324.486 85.3716 324.502 85.0991 324.467C83.0542 324.202 77.4173 317.874 76.124 316.073C75.5949 315.337 74.7992 314.187 75.0091 313.242C75.3535 311.692 76.9153 310.778 78.1573 309.999Z"
    />
    <path
      fill="#FEFEFE"
      d="M67.324 260.493C68.0619 260.545 68.7495 260.637 69.4321 260.942C70.0734 261.229 70.5784 261.748 70.7967 262.423C71.6465 265.049 70.5844 270.749 70.4888 273.643C70.3307 278.435 70.4136 283.317 71.5309 287.996C72.0394 290.126 73.9237 295.154 72.9167 297.148C72.268 298.434 70.9305 298.938 69.6501 299.354C69.2792 299.336 68.8811 299.316 68.533 299.175C67.2407 298.654 66.398 296.662 65.9326 295.428C63.4154 288.752 61.7681 268.738 64.8699 262.508C65.4632 261.316 66.102 260.946 67.324 260.493Z"
    />
    <path
      fill="#FEFEFE"
      d="M133.815 121.921C139.643 116.011 145.113 109.801 150.774 103.738L185.608 66.608C194.359 57.3122 202.708 47.4647 212.765 39.5201C219.027 34.5737 225.92 30.7826 233.253 27.674Q235.024 26.9354 236.823 26.2706Q238.623 25.6059 240.448 25.0163Q242.274 24.4266 244.123 23.913Q245.971 23.3994 247.839 22.9628Q249.707 22.5262 251.592 22.1673Q253.477 21.8083 255.374 21.5277Q257.272 21.2471 259.18 21.0453Q261.088 20.8435 263.002 20.7208Q264.917 20.5982 266.835 20.5549Q268.753 20.5116 270.671 20.5477Q272.589 20.5838 274.504 20.6993Q276.419 20.8148 278.328 21.0095Q280.236 21.2041 282.135 21.4776Q284.034 21.7511 285.92 22.103Q287.806 22.4549 289.676 22.8845Q291.546 23.3141 293.396 23.8208C297.967 25.0896 302.307 26.8756 306.696 28.653L305.993 29.004C306.06 29.6535 306.137 29.9241 306.635 30.3747C307.413 31.0792 308.501 31.6492 309.356 32.2961C311.887 34.2123 314.327 36.1707 316.595 38.3949C329.132 50.6888 336.749 68.4826 339.132 85.7195C342.442 109.668 338.376 134.866 323.547 154.463C322.313 156.093 320.313 157.774 319.874 159.809C319.616 161.006 319.067 161.743 318.269 162.629C314.626 166.677 310.698 170.511 306.932 174.449L279.41 203.309L258.21 226.103C255.536 228.941 253.043 232.048 250.167 234.678C241.233 227.097 233.107 218.248 224.766 210.017L191.153 177.419C188.204 174.523 185.274 171.576 182.222 168.788C180.11 166.86 177.885 165.054 175.806 163.09Q160.197 148.316 145.108 133.012C141.372 129.278 137.477 125.735 133.815 121.921Z"
    />
  </svg>
);
