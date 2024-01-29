import React, { useState, useEffect } from "react";

const useScrollProgress = () => {
  const [completeion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
      }
    };

    window.addEventListener("scroll", updateScrollCompletion);
    //clear event

    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return completeion;
};

export default useScrollProgress;
