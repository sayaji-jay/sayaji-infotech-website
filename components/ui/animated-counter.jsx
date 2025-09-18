'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NumberFlow from '@number-flow/react';

const MotionNumberFlow = motion.create(NumberFlow);

export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  className = '',
  delay = 0,
  duration = 1.5,
  startAnimation = true
}) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    const timer = setTimeout(() => {
      setCurrentValue(value);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [value, delay, startAnimation]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      <span className="flex items-center justify-center text-white">
        {prefix && <span className="text-white">{prefix}</span>}
        <MotionNumberFlow
          value={currentValue}
          className="font-inherit text-white"
          format={{
            notation: 'compact',
            maximumFractionDigits: 0
          }}
          transformTiming={{
            duration: duration * 1000,
            easing: 'ease-out'
          }}
          willChange
        />
        {suffix && <span className="text-white">{suffix}</span>}
      </span>
    </motion.div>
  );
}

export default AnimatedCounter;