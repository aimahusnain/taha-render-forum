import { useEffect, useState } from "react";

const useReadingProgress = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const halfwayPoint = window.innerHeight / 2;
      const hasScrolledHalfway = window.scrollY >= halfwayPoint;

      if (hasScrolledHalfway) {
        const currentProgress = window.scrollY - halfwayPoint;
        const scrollHeight = document.body.scrollHeight - halfwayPoint - window.innerHeight;
        setCompletion(Math.min(100, (currentProgress / scrollHeight) * 100));
      } else {
        setCompletion(0); // Reset progress when above halfway point
      }
    };

    window.addEventListener('scroll', updateScrollCompletion);

    return () => {
      window.removeEventListener('scroll', updateScrollCompletion);
    };
  }, []);

  return completion;
};

export default useReadingProgress;