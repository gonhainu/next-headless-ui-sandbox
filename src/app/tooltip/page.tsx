"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../_components/Tooltip";
import { css } from "../../../styled-system/css";
import { SystemStyleObject } from "../../../styled-system/types";

export default function TooltipPage() {
  return (
    <div>
      {/* <h1 style={{ marginBottom: "30px" }}>Floating UI - Tooltip</h1> */}
      <h1 style={{ fontSize: "32px" }}>Floating UI - Tooltip</h1>
      <Tooltip open={true}>
        <TooltipTrigger>My trigger</TooltipTrigger>
        <TooltipContent className={css(styles.tooltip)}>
          My tooltip
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

const styles: Record<string, SystemStyleObject> = {
  tooltip: {
    backgroundColor: "#444",
    color: "white",
    padding: "4px 8px",
    borderRadius: "4px",
    boxSizing: "border-box",
    width: "max-content",
    maxWidth: "calc(100vw - 10px)",
    "&[data-placement='top']::after": {
      content: "''",
      position: "absolute",
      height: "10px",
      width: "20px",
      bottom: "-9px",
      left: "50%",
      transform: "translate(-50%, 0)",
      clipPath: "polygon(0 0, 100% 0, 50% 100%)",
      backgroundColor: "#444",
    },
  },
};
