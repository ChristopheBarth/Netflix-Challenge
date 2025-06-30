import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import netflixLogo from "../assets/images/NetflixLogo.png";

type WithNetflixLogoProps = {
  children: ReactNode;
  style?: CSSProperties;
  logoSize?: number;
  logoOffset?: number;
} & HTMLAttributes<HTMLDivElement>;

export function WithNetflixLogo({
  children,
  style = {},
  logoSize = 32,
  logoOffset = 8,
  ...rest
}: WithNetflixLogoProps) {
  // style du container qui wrappe ton image
  const wrapperStyle: React.CSSProperties = {
    position: "relative",
    display: "inline-block",
    ...style,
  };

  // style du logo
  const logoStyle: React.CSSProperties = {
    position: "absolute",
    top: logoOffset,
    right: logoOffset,
    width: logoSize,
    height: logoSize,
    opacity: 0.8,
    pointerEvents: "none",
  };

  return (
    <div style={wrapperStyle} {...rest}>
      {children}
      <img src={netflixLogo} alt="N" style={logoStyle} />
    </div>
  );
}
