"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface ScrollyCanvasProps {
    frameCount: number;
}

export default function ScrollyCanvas({ frameCount }: ScrollyCanvasProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load and cache all images on mount
    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];

        // Assuming the format based on the directory content
        // Check files, they are actually named 'frame_00_delay-0.083s.png', 'frame_01_delay-0.083s.png', etc.
        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            // Pad single digits to two digits: 0 -> 00, 1 -> 01
            const paddedIndex = i.toString().padStart(2, "0");
            img.src = `/sequence/frame_${paddedIndex}_delay-0.083s.png`;

            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setIsLoaded(true);
                }
            };
            img.onerror = (e) => {
                console.error(`Failed to load image: ${img.src}`, e);
                loadedCount++; // Still increment to avoid stuck loading screen
                if (loadedCount === frameCount) {
                    setIsLoaded(true);
                }
            }

            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, [frameCount]);

    // Framer Motion useScroll hook
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Map scroll progress to a frame index
    const currentIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

    // Render the current frame to the canvas when currentIndex changes
    useEffect(() => {
        if (!isLoaded || images.length === 0 || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // A small function to paint the specific frame
        const renderFrame = (index: number) => {
            const currentImage = images[index];
            if (!currentImage) return;

            // Handle object-fit: cover styling for canvas
            // We calculate the scale required to cover the canvas fully, similar to CSS background-size: cover
            const hRatio = canvas.width / currentImage.width;
            const vRatio = canvas.height / currentImage.height;
            const ratio = Math.max(hRatio, vRatio);

            const centerShift_x = (canvas.width - currentImage.width * ratio) / 2;
            const centerShift_y = (canvas.height - currentImage.height * ratio) / 2;

            // Clear the canvas and draw the new image preserving cover proportions
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(
                currentImage,
                0, 0, currentImage.width, currentImage.height,
                centerShift_x, centerShift_y, currentImage.width * ratio, currentImage.height * ratio
            );
        };

        let animationFrameId: number;

        // Subscribing to the framer motion value
        const unsubscribe = currentIndex.on("change", (latestVal) => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(() => {
                renderFrame(Math.round(latestVal));
            });
        });

        // Handle resizing
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // In case resizing happens while user is not scrolling, we re-render current frame immediately
                renderFrame(Math.round(currentIndex.get() || 0));
            }
        };

        // Initial paint and resize event listener setups
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            unsubscribe();
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
        };
    }, [isLoaded, images, currentIndex]);

    return (
        <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
            {!isLoaded && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#121212] flex-col">
                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/20 border-t-white"></div>
                    <p className="mt-4 text-sm font-medium tracking-widest text-white/50 uppercase">Loading Experience...</p>
                </div>
            )}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 h-full w-full object-cover"
                />
                {/* We keep overlay elements separated to let them have parallax effects easily */}
            </div>
        </div>
    );
}
