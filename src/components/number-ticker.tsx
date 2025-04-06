import { cc } from "@/libs/classes-combine";
import type { HTMLAttributes } from "react";

interface NumberTickerProps extends HTMLAttributes<HTMLSpanElement> {}

export default function NumberTicker({ className, ...props }: NumberTickerProps) {
  

  return (
    <span ref={ref} className={cc('', className)} {...props}>
      
    </span>
  )
}