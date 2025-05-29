"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ClientLogo } from "./client-logo";
import SuccessStoryCard from "./client/success-story";
import clientLogos from "@/app/constants/clients";

const OurClientComponents = () => {
  const successStoriesData = [
    {
      logo: "/logos/shivjal_logo.png",
      companyName: "Shivjal",
      testimonial:
        "This platform has been instrumental in helping us scale our business. The robust features and reliable performance have exceeded our expectations.",
    },
    {
      logo: "/logos/muktai_logo.png",
      companyName: "Muktai Textile",
      testimonial:
        "Reduced customer acquisition costs by 42% while generating 3x more qualified leads through targeted SEO.",
    },
    {
      logo: "/logos/kmart_logo.png",
      companyName: "KMart",
      testimonial:
        "Achieved 230% growth in lead generation through integrated marketing campaigns and content strategy.",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [velocity, setVelocity] = useState(0);
  const [lastX, setLastX] = useState(0);
  const [lastTime, setLastTime] = useState(0);
  const animationRef = useRef<number>();
  const momentumRef = useRef<number>();

  // Enhanced auto-scroll with smooth animation
  const animateScroll = useCallback(() => {
    if (!scrollRef.current || isHovered || isDragging) return;

    const container = scrollRef.current;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const maxScroll = scrollWidth / 2; // Since we duplicate logos

    container.scrollLeft += 0.8; // Slightly faster base speed

    // Seamless loop reset
    if (container.scrollLeft >= maxScroll) {
      container.scrollLeft = 0;
    }

    animationRef.current = requestAnimationFrame(animateScroll);
  }, [isHovered, isDragging]);

  // Momentum scrolling after drag ends
  const applyMomentum = useCallback(() => {
    if (!scrollRef.current || Math.abs(velocity) < 0.1) {
      setVelocity(0);
      return;
    }

    const container = scrollRef.current;
    container.scrollLeft += velocity;

    // Apply friction
    const friction = 0.95;
    setVelocity((prev) => prev * friction);

    // Handle infinite scroll bounds
    const scrollWidth = container.scrollWidth;
    const maxScroll = scrollWidth / 2;

    if (container.scrollLeft >= maxScroll) {
      container.scrollLeft = 0;
    } else if (container.scrollLeft < 0) {
      container.scrollLeft = maxScroll - 1;
    }

    momentumRef.current = requestAnimationFrame(applyMomentum);
  }, [velocity]);

  // Enhanced mouse/touch handlers
  const handleStart = useCallback((clientX: number) => {
    if (!scrollRef.current) return;

    setIsDragging(true);
    setStartX(clientX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    setLastX(clientX);
    setLastTime(Date.now());
    setVelocity(0);

    // Cancel any ongoing animations
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    if (momentumRef.current) {
      cancelAnimationFrame(momentumRef.current);
    }
  }, []);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!isDragging || !scrollRef.current) return;

      const container = scrollRef.current;
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime;

      if (deltaTime > 0) {
        const deltaX = clientX - lastX;
        setVelocity((deltaX / deltaTime) * 16); // Convert to pixels per frame (60fps)
      }

      const x = clientX - container.offsetLeft;
      const walk = (x - startX) * 1.5; // Reduced multiplier for better control
      const newScrollLeft = scrollLeft - walk;

      container.scrollLeft = newScrollLeft;

      setLastX(clientX);
      setLastTime(currentTime);
    },
    [isDragging, startX, scrollLeft, lastX, lastTime]
  );

  const handleEnd = useCallback(() => {
    setIsDragging(false);

    // Start momentum scrolling
    if (Math.abs(velocity) > 1) {
      momentumRef.current = requestAnimationFrame(applyMomentum);
    } else {
      // Resume auto-scroll if not hovered
      if (!isHovered) {
        setTimeout(() => {
          animationRef.current = requestAnimationFrame(animateScroll);
        }, 500); // Small delay before resuming
      }
    }
  }, [velocity, isHovered, applyMomentum, animateScroll]);

  // Mouse event handlers
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      handleStart(e.pageX);
    },
    [handleStart]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      handleMove(e.pageX);
    },
    [handleMove]
  );

  const handleMouseUp = useCallback(() => {
    handleEnd();
  }, [handleEnd]);

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      handleEnd();
    }
    setIsHovered(false);
  }, [isDragging, handleEnd]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  }, []);

  // Touch event handlers
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault();
      handleStart(e.touches[0].pageX);
    },
    [handleStart]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault();
      handleMove(e.touches[0].pageX);
    },
    [handleMove]
  );

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault();
      handleEnd();
    },
    [handleEnd]
  );

  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const scrollAmount = 200;

    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        container.scrollLeft -= scrollAmount;
        break;
      case "ArrowRight":
        e.preventDefault();
        container.scrollLeft += scrollAmount;
        break;
      case " ":
        e.preventDefault();
        setIsHovered((prev) => !prev); // Space to pause/resume
        break;
    }
  }, []);

  // Intersection Observer for performance
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    if (!scrollRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observerRef.current.observe(scrollRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Main effect for animation and event listeners
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Start auto-scroll only when visible
    if (isVisible && !isHovered && !isDragging) {
      animationRef.current = requestAnimationFrame(animateScroll);
    }

    // Add keyboard listeners
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      // Cleanup all animations and listeners
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (momentumRef.current) {
        cancelAnimationFrame(momentumRef.current);
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisible, isHovered, isDragging, animateScroll, handleKeyDown]);

  return (
    <section
      id="clients"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
      role="region"
      aria-label="Client testimonials and logos"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Testimonials Section */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStoriesData.map((story, index) => (
              <SuccessStoryCard key={index} {...story} />
            ))}
          </div>
        </div>

        {/* Clients Carousel Section */}
        <div className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <h3 className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
            Our Valued Clients
          </h3>
        </div>

        {/* Logo carousel container */}
        <div
          className="relative group"
          role="region"
          aria-label="Client logos carousel"
        >
          {/* Pause indicator */}
          {isHovered && (
            <div className="absolute top-6 right-6 z-20 bg-black/20 text-white px-4 py-2 rounded-full text-base backdrop-blur-sm">
              Paused
            </div>
          )}

          <div
            ref={scrollRef}
            className={`
      flex items-center py-12 md:py-16 lg:py-20 xl:py-24 overflow-x-auto scrollbar-hide 
      ${isDragging ? "cursor-grabbing select-none" : "cursor-grab"}
      scroll-smooth focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg
    `}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            tabIndex={0}
            role="listbox"
            aria-label="Client logos"
          >
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-8 transition-all duration-300 ease-out transform group-hover:opacity-60 hover:!opacity-100 hover:scale-105"
                role="option"
                aria-label={logo.alt}
              >
                <div
                  className="
                  w-16 h-16 
                  sm:w-24 sm:h-24 
                  md:w-32 md:h-32 
                  lg:w-40 lg:h-40 
                  xl:w-48 xl:h-48 
                  2xl:w-64 2xl:h-64            
                            bg-white rounded-xl 
                            md:rounded-2xl 
                            lg:rounded-3xl 
                             md:p-2 lg:p-4 xl:p-6 
                            flex items-center justify-center 
                            shadow-md hover:shadow-2xl 
                            lg:shadow-lg lg:hover:shadow-3xl
                            border border-gray-100 hover:border-blue-200 
                            transition-all duration-300 transform hover:-translate-y-2 lg:hover:-translate-y-3
                            backdrop-blur-sm
                          "
                >
                  <ClientLogo
                    id={`${logo.id}-${index}`}
                    src={logo.src}
                    alt={logo.alt}
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
                    width={220}
                    height={220}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mt-6">
          <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(${
                  scrollRef.current
                    ? ((scrollRef.current.scrollLeft %
                        (scrollRef.current.scrollWidth / 2)) /
                        (scrollRef.current.scrollWidth / 2)) *
                        100 -
                      100
                    : -100
                }%)`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClientComponents;
