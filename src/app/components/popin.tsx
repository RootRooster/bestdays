'use client';
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
export default function Popin({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      console.log("Hello")
    }
  }, [isInView, mainControls]);
  return (
    <>
      <div ref={ref} className="relative overflow-hidden">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{duration: 0.5, delay: 0.25}}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
}
