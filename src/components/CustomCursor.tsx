import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const cursorX = useSpring(0, { damping: 28, stiffness: 350 });
  const cursorY = useSpring(0, { damping: 28, stiffness: 350 });
  const ringX = useSpring(0, { damping: 20, stiffness: 180 });
  const ringY = useSpring(0, { damping: 20, stiffness: 180 });

  useEffect(() => {
    // Only enable on desktop devices with fine pointer
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('button, a, input, [role="button"], .clickable');
        setIsPointer(!!interactive);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, ringX, ringY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300">
      {/* Outer subtle ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPointer ? 1.6 : 1,
          borderColor: isPointer ? 'rgba(74, 136, 169, 0.8)' : 'rgba(18, 29, 40, 0.25)',
          backgroundColor: isPointer ? 'rgba(74, 136, 169, 0.12)' : 'transparent',
        }}
        transition={{ duration: 0.15 }}
        className="h-8 w-8 rounded-full border border-[#121D28]/30 backdrop-blur-[0.5px]"
      />
      {/* Center solid dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPointer ? 0.6 : 1,
          backgroundColor: isPointer ? '#3B7A9E' : '#121D28',
        }}
        transition={{ duration: 0.1 }}
        className="h-1.5 w-1.5 rounded-full bg-[#121D28]"
      />
    </div>
  );
}
