'use client'
import Image from 'next/image'
import { useState, useCallback } from 'react'

// Base64 blur placeholder for instant visual feedback
const blurDataURL = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTBlMGUwIi8+PHJlY3QgeD0iMjAlIiB5PSIyNSUiIHdpZHRoPSI2MCUiIGhlaWdodD0iNTAlIiByeD0iOCIgZmlsbD0iI2Q1ZDVkNSIvPjwvc3ZnPg=="

interface OptimizedGalleryImageProps {
    src: string
    alt: string
    aspectRatio?: string
    onClick?: () => void
    priority?: boolean
    index?: number // For staggered animation
}

export default function OptimizedGalleryImage({
    src,
    alt,
    aspectRatio = "4/3",
    onClick,
    priority = false,
    index = 0
}: OptimizedGalleryImageProps) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    const handleLoad = useCallback(() => {
        setIsLoaded(true)
    }, [])

    // Staggered animation delay based on index (max 300ms)
    const animationDelay = `${Math.min(index * 40, 200)}ms`

    return (
        <div
            className="gallery-image-container"
            style={{
                aspectRatio,
                cursor: onClick ? "pointer" : "default",
                animationDelay,
            }}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Optimized Image with blur placeholder */}
            <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 576px) 50vw, (max-width: 768px) 33vw, 25vw"
                className={`gallery-image ${isLoaded ? 'loaded' : ''}`}
                style={{ objectFit: "cover" }}
                onLoad={handleLoad}
                priority={priority}
                placeholder="blur"
                blurDataURL={blurDataURL}
                quality={60}
            />

            {/* Hover Overlay */}
            <div className={`hover-overlay ${isHovered ? 'visible' : ''}`}>
                <i className="fa-solid fa-expand text-white fa-lg" />
            </div>

            <style jsx>{`
                .gallery-image-container {
                    position: relative;
                    overflow: hidden;
                    border-radius: 12px;
                    background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);
                    transform: translateY(15px);
                    opacity: 0;
                    animation: slideUp 0.4s ease forwards;
                    transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), 
                                box-shadow 0.3s ease;
                }

                .gallery-image-container:hover {
                    transform: translateY(-3px) scale(1.02);
                    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
                }

                @keyframes slideUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .gallery-image-container :global(.gallery-image) {
                    transition: opacity 0.3s ease, transform 0.4s ease;
                }

                .gallery-image-container :global(.gallery-image.loaded) {
                    opacity: 1;
                }

                .gallery-image-container:hover :global(.gallery-image.loaded) {
                    transform: scale(1.05);
                }

                .hover-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        to top,
                        rgba(0, 0, 0, 0.5) 0%,
                        rgba(0, 0, 0, 0.15) 50%,
                        transparent 100%
                    );
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.25s ease;
                    z-index: 2;
                }

                .hover-overlay.visible {
                    opacity: 1;
                }
            `}</style>
        </div>
    )
}

