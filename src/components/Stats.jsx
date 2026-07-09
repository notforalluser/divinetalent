// import { useEffect, useRef, useState } from "react";

// const stats = [
//   { value: '4200+', label: 'Candidates placed' },
//   { value: '180+', label: 'Partner companies across the US' },
//   { value: '3.4x', label: 'Average salary growth' },
//   { value: '24X7', label: 'Support availability, incl. weekends' },
// ];

// export default function Stats() {
//   const [counts, setCounts] = useState(stats.map(() => '0'));
//   const sectionRef = useRef(null);
//   const [hasAnimated, setHasAnimated] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting && !hasAnimated) {
//             setHasAnimated(true);
//             animateNumbers();
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, [hasAnimated]);

//   const animateNumbers = () => {
//     const duration = 2000;
//     const startTime = Date.now();

//     // Parse all target values
//     const targets = stats.map((s) => {
//       const cleanValue = s.value.replace(/[^0-9.]/g, '');
//       return parseFloat(cleanValue) || 0;
//     });

//     const animate = () => {
//       const elapsed = Date.now() - startTime;
//       const progress = Math.min(elapsed / duration, 1);
//       const eased = 1 - Math.pow(1 - progress, 3);

//       const newCounts = targets.map((target, index) => {
//         const current = target * eased;
//         const originalValue = stats[index].value;

//         // For 24X7 - special handling
//         if (originalValue === '24X7') {
//           if (progress >= 1) {
//             return '24X7';
//           }
//           // Hours: 0 to 24
//           const hours = Math.min(Math.floor(current), 24);
//           // Days: 0 to 7 (based on same progress)
//           const days = Math.min(Math.floor((progress) * 7), 7);
//           return `${hours}X${days}`;
//         }
        
//         // For values with + (4200+, 180+)
//         if (originalValue.includes('+')) {
//           if (progress >= 1) {
//             return originalValue;
//           }
//           return Math.floor(current) + '+';
//         }
        
//         // For values with x (3.4x)
//         if (originalValue.includes('x')) {
//           if (progress >= 1) {
//             return originalValue;
//           }
//           return current.toFixed(1) + 'x';
//         }
        
//         return Math.floor(current).toString();
//       });

//       setCounts(newCounts);

//       if (progress < 1) {
//         requestAnimationFrame(animate);
//       } else {
//         setCounts(stats.map((s) => s.value));
//       }
//     };

//     animate();
//   };

//   return (
//     <div ref={sectionRef} className="bg-[#0a0f1a] py-14 px-4">
//       <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8 md:grid-cols-4">
//         {stats.map((s, index) => (
//           <div key={s.label} className="text-center">
//             <p className="font-bold text-3xl text-[#fbbf24] md:text-4xl">
//               {counts[index] || '0'}
//             </p>
//             <p className="mt-2 text-xs text-white/70 leading-snug md:text-sm">
//               {s.label}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }








import { useEffect, useRef, useState } from "react";

const stats = [
  { value: '4200+', label: 'Candidates placed' },
  { value: '180+', label: 'Partner companies across the US' },
  { value: '3.4x', label: 'Average salary growth' },
  { value: '24X7', label: 'Support availability, incl. weekends' },
];

export default function Stats() {
  const [counts, setCounts] = useState(stats.map(() => '0'));
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateNumbers();
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateNumbers = () => {
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      const newCounts = stats.map((s) => {
        const originalValue = s.value;

        if (originalValue === '24X7') {
          if (progress >= 1) return '24X7';
          const hours = Math.floor(24 * eased);
          const days = Math.floor(7 * eased);
          return `${hours}X${days}`;
        }

        const cleanValue = originalValue.replace(/[^0-9.]/g, '');
        const target = parseFloat(cleanValue) || 0;
        const current = target * eased;

        if (originalValue.includes('+')) {
          if (progress >= 1) return originalValue;
          return Math.floor(current) + '+';
        }

        if (originalValue.includes('x')) {
          if (progress >= 1) return originalValue;
          return current.toFixed(1) + 'x';
        }

        return Math.floor(current).toString();
      });

      setCounts(newCounts);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCounts(stats.map((s) => s.value));
      }
    };

    animate();
  };

  return (
    <div ref={sectionRef} className="bg-[#0a0a0a] py-16 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-10 md:gap-12 md:grid-cols-4">
        {stats.map((s, index) => (
          <div 
            key={s.label} 
            className="group text-center relative"
          >
            {/* Subtle top accent line */}
            <div className="h-0.5 w-12 mx-auto bg-[#ee1936] mb-6 rounded opacity-70 group-hover:opacity-100 transition-opacity" />

            <p className="font-semibold text-4xl md:text-5xl tracking-tighter text-white">
              {counts[index] || '0'}
            </p>

            <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed font-medium">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}