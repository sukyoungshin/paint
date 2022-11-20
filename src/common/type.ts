import { ChangeEvent, MouseEvent } from "react";

// Canvas
export type CanvasRef = React.MutableRefObject<HTMLCanvasElement>;
export type CanvasMouseEvent = MouseEvent<HTMLCanvasElement>;

// Color
export type InputRangeEvent = ChangeEvent<HTMLInputElement>;
