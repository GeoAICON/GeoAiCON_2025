'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"

// Image data organized by category
const galleryData = {
    inauguration: {
        title: "Inauguration Ceremony",
        description: "Highlights from the grand opening ceremony",
        images: [
            { src: "/Gallery/PhotoGallery/Inaugration/20250905_102601.jpg", alt: "Inauguration Event" },
            { src: "/Gallery/PhotoGallery/Inaugration/20250905_140152.jpg", alt: "Inauguration Event" },
            { src: "/Gallery/PhotoGallery/Inaugration/IMG_9791.jpg", alt: "Inauguration Event" },
            { src: "/Gallery/PhotoGallery/Inaugration/IMG_9794.jpg", alt: "Inauguration Event" },
            { src: "/Gallery/PhotoGallery/Inaugration/IMG_9805.jpg", alt: "Inauguration Event" },
            { src: "/Gallery/PhotoGallery/Inaugration/IMG_9809.jpg", alt: "Inauguration Event" },
            { src: "/Gallery/PhotoGallery/Inaugration/IMG_9823.jpg", alt: "Inauguration Event" },
        ]
    },
    organizers: {
        title: "Our Organizers",
        description: "The amazing team behind GeoAiCON 2025",
        images: [
            { src: "/Gallery/PhotoGallery/Organizers/20250911_112723.jpg", alt: "Organizer" },
            { src: "/Gallery/PhotoGallery/Organizers/20250911_112752.jpg", alt: "Organizer" },
            { src: "/Gallery/PhotoGallery/Organizers/20250911_112753.jpg", alt: "Organizer" },
            { src: "/Gallery/PhotoGallery/Organizers/20250911_112808.jpg", alt: "Organizer" },
            { src: "/Gallery/PhotoGallery/Organizers/20250911_112838.jpg", alt: "Organizer" },
            { src: "/Gallery/PhotoGallery/Organizers/20250911_112839.jpg", alt: "Organizer" },
            { src: "/Gallery/PhotoGallery/Organizers/20250911_112900.jpg", alt: "Organizer" },
            { src: "/Gallery/PhotoGallery/Organizers/20250911_112915.jpg", alt: "Organizer" },
            { src: "/Gallery/PhotoGallery/Organizers/20250911_112927.jpg", alt: "Organizer" },
            { src: "/Gallery/PhotoGallery/Organizers/20250911_112939.jpg", alt: "Organizer" },
            { src: "/Gallery/PhotoGallery/Organizers/20250911_112958.jpg", alt: "Organizer" },
            { src: "/Gallery/PhotoGallery/Organizers/20250911_113013.jpg", alt: "Organizer" },
            { src: "/Gallery/PhotoGallery/Organizers/20250911_113026.jpg", alt: "Organizer" },
            { src: "/Gallery/PhotoGallery/Organizers/20250911_113042.jpg", alt: "Organizer" },
            { src: "/Gallery/PhotoGallery/Organizers/20250911_113100.jpg", alt: "Organizer" },
            { src: "/Gallery/PhotoGallery/Organizers/20250911_113120.jpg", alt: "Organizer" },
            { src: "/Gallery/PhotoGallery/Organizers/20250911_113129.jpg", alt: "Organizer" },
        ]
    },
    selected: {
        title: "Selected Highlights",
        description: "Best moments captured during the event",
        images: [
            { src: "/Gallery/PhotoGallery/Selected/20250905_102608.jpg", alt: "Event Highlight" },
            { src: "/Gallery/PhotoGallery/Selected/20250905_150802.jpg", alt: "Event Highlight" },
            { src: "/Gallery/PhotoGallery/Selected/20250906_104003.jpg", alt: "Event Highlight" },
            { src: "/Gallery/PhotoGallery/Selected/20250906_112522.jpg", alt: "Event Highlight" },
            { src: "/Gallery/PhotoGallery/Selected/20250906_113020.jpg", alt: "Event Highlight" },
            { src: "/Gallery/PhotoGallery/Selected/20250906_113054.jpg", alt: "Event Highlight" },
            { src: "/Gallery/PhotoGallery/Selected/20250906_115618.jpg", alt: "Event Highlight" },
            { src: "/Gallery/PhotoGallery/Selected/20250906_123240.jpg", alt: "Event Highlight" },
            { src: "/Gallery/PhotoGallery/Selected/20250907_123414.jpg", alt: "Event Highlight" },
            { src: "/Gallery/PhotoGallery/Selected/20250907_125456.jpg", alt: "Event Highlight" },
            { src: "/Gallery/PhotoGallery/Selected/20250907_141750.jpg", alt: "Event Highlight" },
            { src: "/Gallery/PhotoGallery/Selected/20250907_143624.jpg", alt: "Event Highlight" },
            { src: "/Gallery/PhotoGallery/Selected/20250907_155558.jpg", alt: "Event Highlight" },
            { src: "/Gallery/PhotoGallery/Selected/IMG_9794.jpg", alt: "Event Highlight" },
            { src: "/Gallery/PhotoGallery/Selected/IMG_9803.jpg", alt: "Event Highlight" },
            { src: "/Gallery/PhotoGallery/Selected/IMG_9807.jpg", alt: "Event Highlight" },
            { src: "/Gallery/PhotoGallery/Selected/IMG_9818.jpg", alt: "Event Highlight" },
            { src: "/Gallery/PhotoGallery/Selected/IMG_9832.jpg", alt: "Event Highlight" },
            { src: "/Gallery/PhotoGallery/Selected/IMG_9857.jpg", alt: "Event Highlight" },
        ]
    }
}

type CategoryKey = keyof typeof galleryData;

export default function PhotoGallery() {
    const [activeCategory, setActiveCategory] = useState<CategoryKey>("selected")
    const [lightboxImage, setLightboxImage] = useState<string | null>(null)
    const [lightboxIndex, setLightboxIndex] = useState<number>(0)

    const categories: { key: CategoryKey; label: string; icon: string }[] = [
        { key: "inauguration", label: "Inauguration", icon: "fa-solid fa-ribbon" },
        { key: "organizers", label: "Organizers", icon: "fa-solid fa-users" },
        { key: "selected", label: "Selected Pics", icon: "fa-solid fa-star" },
    ]

    const currentGallery = galleryData[activeCategory]

    const openLightbox = (src: string, index: number) => {
        setLightboxImage(src)
        setLightboxIndex(index)
    }

    const navigateLightbox = (direction: 'prev' | 'next') => {
        const images = currentGallery.images
        let newIndex = direction === 'next' ? lightboxIndex + 1 : lightboxIndex - 1
        if (newIndex >= images.length) newIndex = 0
        if (newIndex < 0) newIndex = images.length - 1
        setLightboxIndex(newIndex)
        setLightboxImage(images[newIndex].src)
    }

    return (
        <Layout headerStyle={1} footerStyle={1}>
            {/* Lightbox Modal */}
            {lightboxImage && (
                <div 
                    className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{ 
                        backgroundColor: "rgba(0,0,0,0.95)", 
                        zIndex: 9999, 
                        backdropFilter: "blur(10px)"
                    }}
                >
                    {/* Close button */}
                    <button 
                        className="position-absolute btn btn-link text-white fs-1 p-0"
                        style={{ top: "20px", right: "30px", zIndex: 10000 }}
                        onClick={() => setLightboxImage(null)}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>

                    {/* Image counter */}
                    <div className="position-absolute text-white" style={{ top: "30px", left: "30px" }}>
                        <span className="badge bg-white bg-opacity-25 px-3 py-2 fs-6">
                            {lightboxIndex + 1} / {currentGallery.images.length}
                        </span>
                    </div>

                    {/* Prev button */}
                    <button 
                        className="position-absolute btn btn-link text-white fs-1 p-3"
                        style={{ left: "20px", top: "50%", transform: "translateY(-50%)" }}
                        onClick={() => navigateLightbox('prev')}
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>

                    {/* Image */}
                    <img 
                        src={lightboxImage} 
                        alt="Full size" 
                        className="img-fluid"
                        style={{ maxHeight: "85vh", maxWidth: "85vw", objectFit: "contain", borderRadius: "8px" }}
                    />

                    {/* Next button */}
                    <button 
                        className="position-absolute btn btn-link text-white fs-1 p-3"
                        style={{ right: "20px", top: "50%", transform: "translateY(-50%)" }}
                        onClick={() => navigateLightbox('next')}
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            )}

            <div>
                {/* Hero Section - Matches other routes */}
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

                {/* Category Tabs - Sticky */}
                <section className="py-3 bg-white border-bottom position-sticky top-0" style={{ zIndex: 100 }}>
                    <div className="container">
                        <div className="d-flex flex-wrap justify-content-center gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat.key}
                                    onClick={() => setActiveCategory(cat.key)}
                                    className={`btn px-4 py-2 rounded-pill fw-medium d-flex align-items-center gap-2 ${
                                        activeCategory === cat.key 
                                            ? "btn-primary" 
                                            : "btn-outline-secondary"
                                    }`}
                                >
                                    <i className={cat.icon}></i>
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="py-5">
                    <div className="container">
                        {/* Category Header */}
                        <div className="text-center mb-4">
                            <h2 className="h3 fw-bold mb-1">{currentGallery.title}</h2>
                            <p className="text-muted small mb-0">{currentGallery.description}</p>
                        </div>

                        {/* Uniform Grid */}
                        <div className="row g-3">
                            {currentGallery.images.map((image, index) => (
                                <div key={index} className="col-6 col-md-4 col-lg-3">
                                    <div 
                                        className="position-relative overflow-hidden rounded-3 bg-light"
                                        style={{ 
                                            aspectRatio: "4/3",
                                            cursor: "pointer",
                                            transition: "transform 0.3s ease, box-shadow 0.3s ease"
                                        }}
                                        onClick={() => openLightbox(image.src, index)}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = "scale(1.03)"
                                            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)"
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = "scale(1)"
                                            e.currentTarget.style.boxShadow = "none"
                                        }}
                                    >
                                        <img 
                                            src={image.src} 
                                            alt={image.alt}
                                            className="w-100 h-100"
                                            style={{ objectFit: "cover" }}
                                            loading="lazy"
                                        />
                                        {/* Hover Overlay */}
                                        <div 
                                            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0"
                                            style={{ 
                                                background: "rgba(0,0,0,0.4)",
                                                transition: "opacity 0.3s ease"
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
                                            onMouseLeave={(e) => e.currentTarget.style.opacity = "0"}
                                        >
                                            <i className="fa-solid fa-expand text-white fa-lg"></i>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}
