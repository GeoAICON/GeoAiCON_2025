'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Image from "next/image"
import { useState, useCallback } from "react"
import OptimizedGalleryImage from "@/components/elements/OptimizedGalleryImage"

// Image data organized by category
const galleryData = {
    inauguration: {
        title: "Inauguration Ceremony",
        description: "Highlights from the grand opening ceremony at IIT Ropar",
        icon: "fa-solid fa-ribbon",
        images: [
            { src: "/Gallery/PhotoGallery/Inaugration/20250905_102601.jpg", alt: "Opening ceremony lighting the lamp" },
            { src: "/Gallery/PhotoGallery/Inaugration/20250905_140152.jpg", alt: "Dignitaries addressing the audience" },
            { src: "/Gallery/PhotoGallery/Inaugration/IMG_9791.jpg", alt: "Chief guest welcome address" },
            { src: "/Gallery/PhotoGallery/Inaugration/IMG_9794.jpg", alt: "Inaugural session stage" },
            { src: "/Gallery/PhotoGallery/Inaugration/IMG_9805.jpg", alt: "Audience at the inauguration" },
            { src: "/Gallery/PhotoGallery/Inaugration/IMG_9809.jpg", alt: "Keynote address at inauguration" },
            { src: "/Gallery/PhotoGallery/Inaugration/IMG_9823.jpg", alt: "Panel discussion during inauguration" },
        ]
    },
    organizers: {
        title: "Our Organizers",
        description: "The dedicated team behind GeoAiCON 2025",
        icon: "fa-solid fa-users",
        images: [
            { src: "/Gallery/PhotoGallery/Organizers/20250911_112723.jpg", alt: "Organizing Committee Member" },
            { src: "/Gallery/PhotoGallery/Organizers/20250911_112752.jpg", alt: "Organizing Committee Member" },
            { src: "/Gallery/PhotoGallery/Organizers/20250911_112808.jpg", alt: "Organizing Committee Member" },
            { src: "/Gallery/PhotoGallery/Organizers/20250911_112838.jpg", alt: "Organizing Committee Member" },
            { src: "/Gallery/PhotoGallery/Organizers/20250911_112900.jpg", alt: "Organizing Committee Member" },
            { src: "/Gallery/PhotoGallery/Organizers/20250911_112915.jpg", alt: "Organizing Committee Member" },
            { src: "/Gallery/PhotoGallery/Organizers/20250911_112939.jpg", alt: "Organizing Committee Member" },
            { src: "/Gallery/PhotoGallery/Organizers/20250911_113042.jpg", alt: "Organizing Committee Member" },
        ]
    },
    selected: {
        title: "Selected Highlights",
        description: "Best moments captured during the event",
        icon: "fa-solid fa-star",
        images: [
            { src: "/Gallery/PhotoGallery/Selected/20250905_102608.jpg", alt: "Opening day highlight" },
            { src: "/Gallery/PhotoGallery/Selected/20250905_150802.jpg", alt: "Technical presentation" },
            { src: "/Gallery/PhotoGallery/Selected/20250906_104003.jpg", alt: "Day 2 session" },
            { src: "/Gallery/PhotoGallery/Selected/20250906_112522.jpg", alt: "Speaker presentation" },
            { src: "/Gallery/PhotoGallery/Selected/20250906_113020.jpg", alt: "Interactive discussion" },
            { src: "/Gallery/PhotoGallery/Selected/20250906_113054.jpg", alt: "Panel moment" },
            { src: "/Gallery/PhotoGallery/Selected/20250906_115618.jpg", alt: "Audience engagement" },
            { src: "/Gallery/PhotoGallery/Selected/20250906_123240.jpg", alt: "Networking session" },
            { src: "/Gallery/PhotoGallery/Selected/20250907_123414.jpg", alt: "Hands-on tutorial" },
            { src: "/Gallery/PhotoGallery/Selected/20250907_125456.jpg", alt: "Field survey training" },
            { src: "/Gallery/PhotoGallery/Selected/20250907_141750.jpg", alt: "Advanced surveying demo" },
            { src: "/Gallery/PhotoGallery/Selected/20250907_143624.jpg", alt: "Instrument demonstration" },
            { src: "/Gallery/PhotoGallery/Selected/20250907_155558.jpg", alt: "Group activity" },
            { src: "/Gallery/PhotoGallery/Selected/IMG_9803.jpg", alt: "Conference moment" },
            { src: "/Gallery/PhotoGallery/Selected/IMG_9807.jpg", alt: "Event highlight" },
            { src: "/Gallery/PhotoGallery/Selected/IMG_9818.jpg", alt: "Session highlight" },
            { src: "/Gallery/PhotoGallery/Selected/IMG_9832.jpg", alt: "Closing moments" },
            { src: "/Gallery/PhotoGallery/Selected/IMG_9857.jpg", alt: "Award ceremony" },
        ]
    }
}

type CategoryKey = keyof typeof galleryData;

export default function PhotoGallery() {
    const [activeCategory, setActiveCategory] = useState<CategoryKey>("selected")
    const [lightboxImage, setLightboxImage] = useState<string | null>(null)
    const [lightboxIndex, setLightboxIndex] = useState<number>(0)

    const currentGallery = galleryData[activeCategory]

    const categories: { key: CategoryKey; label: string; icon: string }[] = [
        { key: "inauguration", label: "Inauguration", icon: "fa-solid fa-ribbon" },
        { key: "organizers", label: "Organizers", icon: "fa-solid fa-users" },
        { key: "selected", label: "Selected Pics", icon: "fa-solid fa-star" },
    ]

    const openLightbox = useCallback((src: string, index: number) => {
        setLightboxImage(src)
        setLightboxIndex(index)
    }, [])

    const closeLightbox = useCallback(() => {
        setLightboxImage(null)
    }, [])

    const navigateLightbox = useCallback((direction: 'prev' | 'next') => {
        const images = currentGallery.images
        let newIndex = direction === 'next' ? lightboxIndex + 1 : lightboxIndex - 1
        if (newIndex >= images.length) newIndex = 0
        if (newIndex < 0) newIndex = images.length - 1
        setLightboxIndex(newIndex)
        setLightboxImage(images[newIndex].src)
    }, [currentGallery.images, lightboxIndex])

    const handleCategoryChange = useCallback((key: CategoryKey) => {
        setActiveCategory(key)
    }, [])

    return (
        <Layout headerStyle={1} footerStyle={1}>
            {/* Lightbox Modal */}
            {lightboxImage && (
                <div 
                    className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{ 
                        backgroundColor: "rgba(0,0,0,0.98)", 
                        zIndex: 9999, 
                        animation: "pgFadeIn 0.2s ease-out"
                    }}
                    onClick={closeLightbox}
                >
                    <button 
                        className="position-absolute btn btn-link text-white fs-1 p-0"
                        style={{ top: "20px", right: "30px", zIndex: 10000 }}
                        onClick={closeLightbox}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <div className="position-absolute text-white" style={{ top: "30px", left: "30px" }}>
                        <span className="badge bg-white bg-opacity-25 px-3 py-2 fs-6">
                            {lightboxIndex + 1} / {currentGallery.images.length}
                        </span>
                    </div>
                    <button 
                        className="position-absolute btn btn-link text-white fs-1 p-3"
                        style={{ left: "20px", top: "50%", transform: "translateY(-50%)" }}
                        onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <div 
                        className="position-relative d-flex align-items-center justify-content-center" 
                        style={{ height: "90vh", width: "90vw" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image 
                            key={lightboxImage}
                            src={lightboxImage} 
                            alt="Full size" 
                            fill
                            style={{ 
                                objectFit: "contain",
                                borderRadius: "8px",
                                animation: "pgImageFade 0.2s ease-in-out"
                            }}
                            sizes="90vw"
                            priority
                            quality={85}
                        />
                    </div>
                    <button 
                        className="position-absolute btn btn-link text-white fs-1 p-3"
                        style={{ right: "20px", top: "50%", transform: "translateY(-50%)" }}
                        onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            )}

            <div>
                {/* Hero Section */}
                <div className="inner-page-header" style={{ backgroundImage: 'url(/assets/img/bg/header-bg17.png)', backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 m-auto">
                                <div className="heading1 text-center">
                                    <h1>Photo Gallery</h1>
                                    <div className="space20" />
                                    <Link href="/" className="text-white">Home <i className="fa-solid fa-angle-right" /> <span>Gallery</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Category Tabs */}
                <section className="py-4 bg-white border-bottom position-sticky top-0" style={{ zIndex: 100 }}>
                    <div className="container">
                        <div className="d-flex flex-wrap justify-content-center gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat.key}
                                    onClick={() => handleCategoryChange(cat.key)}
                                    className={`btn px-4 py-2 rounded-pill fw-medium d-flex align-items-center gap-2`}
                                    style={{
                                        transition: 'all 0.3s ease',
                                        background: activeCategory === cat.key ? 'linear-gradient(135deg, #4f46e5, #7c3aed)' : 'transparent',
                                        color: activeCategory === cat.key ? '#fff' : '#64748b',
                                        border: activeCategory === cat.key ? 'none' : '1px solid #e2e8f0',
                                        boxShadow: activeCategory === cat.key ? '0 4px 15px rgba(79,70,229,0.3)' : 'none'
                                    }}
                                >
                                    <i className={cat.icon}></i>
                                    {cat.label}
                                    <span className="badge rounded-pill ms-1" style={{
                                        background: activeCategory === cat.key ? 'rgba(255,255,255,0.25)' : '#f1f5f9',
                                        color: activeCategory === cat.key ? '#fff' : '#94a3b8',
                                        fontSize: '0.7rem',
                                        padding: '3px 8px'
                                    }}>
                                        {galleryData[cat.key].images.length}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="py-5" style={{ background: '#fafafe' }}>
                    <div className="container">
                        {/* Category Header */}
                        <div className="text-center mb-5" key={`header-${activeCategory}`} style={{ animation: "pgFadeIn 0.4s ease" }}>
                            <div className="d-inline-flex align-items-center gap-2 mb-2">
                                <i className={`${currentGallery.icon} text-primary`}></i>
                                <div style={{ width: '30px', height: '2px', background: 'linear-gradient(to right, #4f46e5, #7c3aed)', borderRadius: '2px' }}></div>
                            </div>
                            <h2 className="h3 fw-bold mb-1">{currentGallery.title}</h2>
                            <p className="text-muted small mb-0">{currentGallery.description}</p>
                        </div>

                        {/* Masonry-like Grid */}
                        <div className="row g-3" key={`grid-${activeCategory}`}>
                            {currentGallery.images.map((image, index) => {
                                // First 2 images are featured (larger)
                                const isFeatured = index < 2
                                return (
                                    <div key={`${activeCategory}-${index}`} className={isFeatured ? 'col-6 col-md-6 col-lg-6' : 'col-6 col-md-4 col-lg-3'}>
                                        <OptimizedGalleryImage
                                            src={image.src}
                                            alt={image.alt}
                                            onClick={() => openLightbox(image.src, index)}
                                            priority={index < 4}
                                            index={index}
                                            aspectRatio={isFeatured ? '16/10' : '4/3'}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </div>

            <style jsx global>{`
                @keyframes pgFadeIn {
                    from { opacity: 0; transform: translateY(8px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes pgImageFade {
                    from { opacity: 0.5; transform: scale(0.98); }
                    to { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </Layout>
    )
}
