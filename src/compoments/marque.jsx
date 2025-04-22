
'use client'; 

import { useEffect, useRef } from 'react';

export default function MarqueeText() {
  const marqueeRef = useRef(null);
  
  useEffect(() => {
    const marqueeAnimation = () => {
      if (marqueeRef.current) {
        if (marqueeRef.current.scrollLeft >= marqueeRef.current.scrollWidth / 2) {
          marqueeRef.current.scrollLeft = 0;
        } else {
          marqueeRef.current.scrollLeft += 1;
        }
      }
    };
    
    const animationInterval = setInterval(marqueeAnimation, 20);
    
    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  const marqueeText = "Education is the foundation of greatness; let's build it together — Learning today, leading tomorrow — the Educare way — Turning dreams into achievements";
  
  return (
    <div className="w-full overflow-hidden bg-red-50 py-3 border border-red-200 rounded-md">
      <div 
        ref={marqueeRef}
        className="whitespace-nowrap overflow-hidden"
      >
        <span className="inline-block pr-4 text-red-600 font-medium text-lg">
          {marqueeText}
        </span>
        <span className="inline-block pr-4 text-red-600 font-medium text-lg">
          {marqueeText}
        </span>
      </div>
    </div>
  );
}