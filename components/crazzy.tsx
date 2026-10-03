import { useRef, useEffect } from "react";

export function useHorizontalScroll() {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      
      // Stop the main page from scrolling vertically
      e.preventDefault(); 
      
      // Move the element horizontally instead
      el.scrollTo({
        left: el.scrollLeft + e.deltaY,
        behavior: "auto" // Change to "smooth" if you want a glide effect
      });
    };

    // { passive: false } is required to allow e.preventDefault()
    el.addEventListener("wheel", onWheel, { passive: false });
    
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return elRef;
}
