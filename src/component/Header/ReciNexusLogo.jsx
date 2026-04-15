const ReciNexusLogo = ({ size = 36 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 55C20 71.5685 33.4315 85 50 85C66.5685 85 80 71.5685 80 55"
      className="stroke-current"
      strokeWidth="8"
      strokeLinecap="round"
    />

    <circle cx="50" cy="45" r="6" className="fill-current" />
    <path
      d="M35 30L46 41"
      className="stroke-current opacity-80"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M65 30L54 41"
      className="stroke-current opacity-80"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <circle cx="30" cy="25" r="4" className="fill-current opacity-60" />
    <circle cx="70" cy="25" r="4" className="fill-current opacity-60" />
  </svg>
);
export default ReciNexusLogo;
