export const CheckIcon = ({
  className = "",
  width = "1em",
  height = "1em",
  color = "currentColor",
  opacity = 1,
  strokeWidth = 0,
  style = {},
  ...rest
}) => {
  const mergedStyle = { color, opacity, ...style };

  return (
    <svg
      {...rest}
      className={className}
      width={width}
      height={height}
      viewBox="0 0 448 512"
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={strokeWidth}
      xmlns="http://www.w3.org/2000/svg"
      style={mergedStyle}
      aria-hidden="true"
    >
      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
    </svg>
  );
};

export default CheckIcon;
