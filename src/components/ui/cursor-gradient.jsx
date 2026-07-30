import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 

export const useMouse = () => {
  const [mouseState, setMouseState] = useState({ x: null, y: null });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseState({
        x: event.clientX,
        y: event.clientY,
      });
    };

    const handleMouseLeave = () => {
      setMouseState({ x: null, y: null });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return [mouseState];
};

export const CursorGradient = () => {
  const [mouseState] = useMouse();
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (mouseState.x !== null && mouseState.y !== null) {
      // Create trailing particles when mouse moves
      const newParticles = Array.from({ length: 2 }, () => ({
        id: Date.now() + Math.random(), 
        x: mouseState.x + (Math.random() - 0.5) * 15,
        y: mouseState.y + (Math.random() - 0.5) * 15,
        size: Math.random() * 2 + 1, // Smaller particles
        intensity: Math.random() * 0.5 + 0.4, 
        isYellow: Math.random() > 0.5 // Randomly choose between green and yellow for particles
      }));
      
      setParticles((prev) => [...prev, ...newParticles].slice(-25));
    }
  }, [mouseState.x, mouseState.y]); 

  return (
    <div className='fixed inset-0 pointer-events-none z-[9999]'>
      {mouseState.x !== null && mouseState.y !== null && (
        <>
          <motion.div
            className='fixed pointer-events-none z-[9999]'
            style={{
              left: mouseState.x,
              top: mouseState.y,
              x: '-50%', 
              y: '-50%',
              width: '14px', // Reduced size
              height: '14px', // Reduced size
            }}
            transition={{ duration: 0.15, ease: 'easeOut' }} 
          >
            <div
              className='w-full h-full rounded-full' 
              style={{
                background: `radial-gradient(
                  circle at center,
                  #43A047 0%,
                  #2E7D32 100%
                )`, // Choco Code greens
                boxShadow: `0 0 12px rgba(67, 160, 71, 0.4)`,
              }}
            />
          </motion.div>

          <AnimatePresence>
            {particles.map((particle) => (
              <motion.div
                key={particle.id} 
                className='fixed pointer-events-none'
                style={{
                  left: particle.x,
                  top: particle.y,
                  x: '-50%', 
                  y: '-50%',
                  zIndex: 9998,
                }}
                initial={{ opacity: particle.intensity, scale: 0 }}
                animate={{ opacity: 0, scale: particle.size }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <div
                  className='rounded-full'
                  style={{
                    width: `${particle.size * 0}px`,
                    height: `${particle.size * 0}px`,
                    background: `radial-gradient(
                      circle at center,
                      ${particle.isYellow ? `rgba(249, 168, 37, ${particle.intensity})` : `rgba(67, 160, 71, ${particle.intensity})`},
                      transparent
                    )`,
                    filter: 'blur(1px)', 
                    boxShadow: `0 0 ${particle.size * 1.5}px ${particle.isYellow ? `rgba(249, 168, 37, ${particle.intensity})` : `rgba(67, 160, 71, ${particle.intensity})`}`,
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};
