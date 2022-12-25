import { ReactNode } from "react";

export interface IGlassBackground {
  children: ReactNode;
  height?: string;
  width?: string;
}

export interface ISocialsProps {
  iconSize: "regular" | "small";
}
