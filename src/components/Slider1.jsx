import React, { useEffect, useRef } from 'react';

const Slider1 = () => {
  const scrollRef = useRef(null);

  const items = [
    { id: 1, label: 'Technical Guidance', icon: 'fa-solid fa-laptop-code' },
    { id: 2, label: 'Mentorship', icon: 'fa-solid fa-handshake' },
    { id: 3, label: 'Profile Rebranding', icon: 'fa-solid fa-user-astronaut' },
    { id: 4, label: 'Interview Preparation', icon: 'fa-solid fa-comments' },
    { id: 5, label: 'Resume Optimization', icon: 'fa-solid fa-file-pen' },
  ];

  const duplicatedItems = [...items, ...items];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId;
    let position = 0;
    const speed = 1.8; // pixels per frame

    const animate = () => {
      position -= speed;
      
      const firstSetWidth = container.scrollWidth / 2;
      if (Math.abs(position) >= firstSetWidth) {
        position = 0;
      }
      
      container.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className=" bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 flex items-center justify-center">
      <div className="">
        <div className="relative overflow-hidden rounded-2xl bg-black/20 p-1 shadow-inner">
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 whitespace-nowrap will-change-transform"
            style={{ width: 'max-content' }}
          >
            {duplicatedItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex items-center gap-3 px-4 py-3 md:py-4 shadow-lg"
              >
                <span className="text-white font-medium text-base md:text-lg tracking-wide">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider1;