"use client"
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function VideoCompo() {
  const videoRef = useRef(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVideoVisible(true);
            observer.unobserve(videoRef.current);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className='rounded-3xl pl-3 pr-3' ref={videoRef} style={{ position: 'relative', height: '784px', width: '100%' }}>
      {!isVideoVisible ? (
        // Display thumbnail or skeleton loader here
        <Image src="/fallback.png" fill alt='video thumbnail' />
        
      ) : (
        // Display video once in view
        <video className='rounded-3xl' preload="metadata" width="100%" autoPlay loop style={{ width: '100%', height: '100%' }}>
          <source src="/eitb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
