export const MPLogo = ({ width = 240, height = 80 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 240 80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(10,8)">
        <path
          d="M32 0C18.7 0 8 10.7 8 24c0 18 24 48 24 48s24-30 24-48C56 10.7 45.3 0 32 0z"
          fill="#E60023"
        />
        <circle cx="32" cy="24" r="7" fill="#fff" />
      </g>

      <text
        x="90"
        y="52"
        fontFamily="Inter, Poppins, Arial, sans-serif"
        fontSize="36"
        fontWeight="600"
        fill="#111"
      >
        Moodpin
      </text>
    </svg>
  );
};
