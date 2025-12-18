import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "../../lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => {
  const progressValue = value || 0;

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn("relative h-[3.4px] w-full bg-secondary", className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full flex-1 bg-primary transition-all"
        style={{
          transform: `translateX(-${100 - progressValue}%)`,
        }}
      >
        <div
          className="absolute right-0 -top-1 h-[12px] w-[12px] -translate-y-1/2 rounded-full bg-blue flex items-center justify-center"
          style={{
            transform: `translateX(${progressValue}%)`,
          }}
        >
          <span className="bg-white w-[7px] h-[7px] rounded-full ml-[0.6px]" />
        </div>
      </ProgressPrimitive.Indicator>
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
