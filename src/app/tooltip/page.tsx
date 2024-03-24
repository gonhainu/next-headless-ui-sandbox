"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../_components/Tooltip";
import styles from "./page.module.css";

export default function TooltipPage() {
  return (
    <div>
      {/* <h1 style={{ marginBottom: "30px" }}>Floating UI - Tooltip</h1> */}
      <h1 style={{ fontSize: "32px" }}>Floating UI - Tooltip</h1>
      <Tooltip>
        <TooltipTrigger>My trigger</TooltipTrigger>
        <TooltipContent className={styles.Tooltip}>My tooltip</TooltipContent>
      </Tooltip>
    </div>
  );
}
