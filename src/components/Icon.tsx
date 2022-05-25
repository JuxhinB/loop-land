import React from "react";

type IconProps = {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
};

function Icon({ src, alt, className = "", style = {} }: IconProps) {
  return (
    <div className={`icon-wrap ${className}`} style={style}>
      <img alt={alt} src={src} />
    </div>
  );
}

export default Icon;
