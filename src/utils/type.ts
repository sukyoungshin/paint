import { ChangeEvent, MouseEvent } from "react";

// Canvas
export type CanvasMouseEvent = MouseEvent<HTMLCanvasElement>;

// Color
export type InputRangeEvent = ChangeEvent<HTMLInputElement>;

export type BackgroundColorType = { backgroundColor: string };