'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Image from "next/image"
import { useState, useCallback } from "react"
import OptimizedGalleryImage from "@/components/elements/OptimizedGalleryImage"

// Image data organized by category
const galleryData = {
    sessions: {
        title: "Technical Sessions",
        description: "Presentations and discussions from expert speakers",
        icon: "fa-solid fa-chalkboard-user",
        images: [
            "/Gallery/TechnicalSessions/Technical Sessions/20250905_150535.jpg",
            "/Gallery/TechnicalSessions/Technical Sessions/20250905_150608.jpg",
            "/Gallery/TechnicalSessions/Technical Sessions/20250905_150802.jpg",
            "/Gallery/TechnicalSessions/Technical Sessions/20250905_150902.jpg",
            "/Gallery/TechnicalSessions/Technical Sessions/20250905_151048.jpg",
            "/Gallery/TechnicalSessions/Technical Sessions/20250905_151413.jpg",
            "/Gallery/TechnicalSessions/Technical Sessions/20250905_151647.jpg",
            "/Gallery/TechnicalSessions/Technical Sessions/20250905_152049.jpg",
            "/Gallery/TechnicalSessions/Technical Sessions/20250905_152220.jpg",
            "/Gallery/TechnicalSessions/Technical Sessions/20250905_153000.jpg",
            "/Gallery/TechnicalSessions/Technical Sessions/20250905_154558.jpg",
            "/Gallery/TechnicalSessions/Technical Sessions/20250905_160103.jpg",
            "/Gallery/TechnicalSessions/Technical Sessions/20250905_160230.jpg",
            "/Gallery/TechnicalSessions/Technical Sessions/20250905_160421.jpg",
            "/Gallery/TechnicalSessions/Technical Sessions/20250905_160551.jpg",
            "/Gallery/TechnicalSessions/Technical Sessions/20250905_160816.jpg",
            "/Gallery/TechnicalSessions/Technical Sessions/20250905_160936.jpg",
            "/Gallery/TechnicalSessions/Technical Sessions/20250905_161132.jpg",
            "/Gallery/TechnicalSessions/Technical Sessions/20250905_163359.jpg",
            "/Gallery/TechnicalSessions/Technical Sessions/20250905_163513.jpg",
            "/Gallery/TechnicalSessions/Technical Sessions/20250905_163541.jpg",
            "/Gallery/TechnicalSessions/Technical Sessions/20250905_163606.jpg",
            "/Gallery/TechnicalSessions/Technical Sessions/20250905_163726.jpg",
            "/Gallery/TechnicalSessions/Technical Sessions/20250905_163805.jpg",
        ]
    },
    drone: {
        title: "Tutorial: Drone Mapping",
        description: "Hands-on drone mapping and data processing workshop",
        icon: "fa-solid fa-paper-plane",
        images: [
            "/Gallery/TechnicalSessions/Tutorial - 1 Drone Mapping/20250907_112451.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 1 Drone Mapping/20250907_112500.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 1 Drone Mapping/20250907_113834.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 1 Drone Mapping/20250907_115011.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 1 Drone Mapping/20250907_115025.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 1 Drone Mapping/20250907_115328.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 1 Drone Mapping/20250907_121126.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 1 Drone Mapping/20250907_121140.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 1 Drone Mapping/20250907_121212.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 1 Drone Mapping/20250907_121447.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 1 Drone Mapping/20250907_121607.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 1 Drone Mapping/20250907_122207.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 1 Drone Mapping/20250907_122655.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 1 Drone Mapping/20250907_123013.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 1 Drone Mapping/20250907_123316.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 1 Drone Mapping/20250907_123344.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 1 Drone Mapping/20250907_123403.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 1 Drone Mapping/20250907_123426.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 1 Drone Mapping/20250907_123506.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 1 Drone Mapping/20250907_123552.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 1 Drone Mapping/20250907_123603.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 1 Drone Mapping/20250907_123825.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 1 Drone Mapping/20250907_124614.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 1 Drone Mapping/20250907_125432.jpg",
        ]
    },
    surveying: {
        title: "Tutorial: Advanced Surveying",
        description: "Field surveying instruments and techniques workshop",
        icon: "fa-solid fa-compass-drafting",
        images: [
            "/Gallery/TechnicalSessions/Tutorial - 2 Advanced Surveying Techiques/20250907_135316.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 2 Advanced Surveying Techiques/20250907_135345.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 2 Advanced Surveying Techiques/20250907_141742.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 2 Advanced Surveying Techiques/20250907_143624.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 2 Advanced Surveying Techiques/20250907_143637.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 2 Advanced Surveying Techiques/20250907_143711.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 2 Advanced Surveying Techiques/20250907_144051.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 2 Advanced Surveying Techiques/20250907_144231.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 2 Advanced Surveying Techiques/20250907_144239.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 2 Advanced Surveying Techiques/20250907_144727.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 2 Advanced Surveying Techiques/20250907_144929.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 2 Advanced Surveying Techiques/20250907_145127.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 2 Advanced Surveying Techiques/20250907_145311.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 2 Advanced Surveying Techiques/20250907_151006.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 2 Advanced Surveying Techiques/20250907_155558.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 2 Advanced Surveying Techiques/20250907_155619.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 2 Advanced Surveying Techiques/20250907_160202.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 2 Advanced Surveying Techiques/20250907_170559.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 2 Advanced Surveying Techiques/20250907_170627.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 2 Advanced Surveying Techiques/20250907_170643.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 2 Advanced Surveying Techiques/20250907_170651.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 2 Advanced Surveying Techiques/20250907_170709.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 2 Advanced Surveying Techiques/20250907_170724.jpg",
            "/Gallery/TechnicalSessions/Tutorial - 2 Advanced Surveying Techiques/20250907_170751.jpg",
        ]
    }
}

type CategoryKey = keyof typeof galleryData;

export default function TechnicalSessions() {
    const [activeCategory, setActiveCategory] = useState<CategoryKey>("sessions")
    const [lightboxImage, setLightboxImage] = useState<string | null>(null)
    const [lightboxIndex, setLightboxIndex] = useState<number>(0)

    const categories: { key: CategoryKey; label: string; icon: string }[] = [
        { key: "sessions", label: "Technical Sessions", icon: "fa-solid fa-chalkboard-user" },
        { key: "drone", label: "Drone Mapping", icon: "fa-solid fa-paper-plane" },
        { key: "surveying", label: "Advanced Surveying", icon: "fa-solid fa-compass-drafting" },
    ]

    const currentGallery = galleryData[activeCategory]

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
        setLightboxImage(images[newIndex])
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
                        animation: "tsFadeIn 0.2s ease-out"
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
                        <span className="badge px-3 py-2 fs-6" style={{ background: 'rgba(20,184,166,0.4)' }}>
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
                                animation: "tsImageFade 0.2s ease-in-out"
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
                                    <h1>Technical Sessions</h1>
                                    <div className="space20" />
                                    <Link href="/" className="text-white">Home <i className="fa-solid fa-angle-right" /> <span>Technical Sessions</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Category Tabs — Teal accent */}
                <section className="py-4 bg-white border-bottom position-sticky top-0" style={{ zIndex: 100 }}>
                    <div className="container">
                        <div className="d-flex flex-wrap justify-content-center gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat.key}
                                    onClick={() => handleCategoryChange(cat.key)}
                                    className="btn px-4 py-2 rounded-pill fw-medium d-flex align-items-center gap-2"
                                    style={{
                                        transition: 'all 0.3s ease',
                                        background: activeCategory === cat.key ? 'linear-gradient(135deg, #0f766e, #14b8a6)' : 'transparent',
                                        color: activeCategory === cat.key ? '#fff' : '#64748b',
                                        border: activeCategory === cat.key ? 'none' : '1px solid #e2e8f0',
                                        boxShadow: activeCategory === cat.key ? '0 4px 15px rgba(20,184,166,0.3)' : 'none'
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
                <section className="py-5" style={{ background: '#f0fdfa' }}>
                    <div className="container">
                        {/* Category Header */}
                        <div className="text-center mb-5" key={`header-${activeCategory}`} style={{ animation: "tsFadeIn 0.4s ease" }}>
                            <div className="d-inline-flex align-items-center gap-2 mb-2">
                                <i className={`${currentGallery.icon}`} style={{ color: '#0f766e' }}></i>
                                <div style={{ width: '30px', height: '2px', background: 'linear-gradient(to right, #0f766e, #14b8a6)', borderRadius: '2px' }}></div>
                            </div>
                            <h2 className="h3 fw-bold mb-1">{currentGallery.title}</h2>
                            <p className="text-muted small mb-0">{currentGallery.description}</p>
                        </div>

                        {/* Clean 3-column grid */}
                        <div className="row g-3" key={`grid-${activeCategory}`}>
                            {currentGallery.images.map((src, index) => (
                                <div key={`${activeCategory}-${index}`} className="col-6 col-md-4 col-lg-4">
                                    <div style={{ position: 'relative' }}>
                                        <OptimizedGalleryImage
                                            src={src}
                                            alt={`${currentGallery.title} - Image ${index + 1}`}
                                            onClick={() => openLightbox(src, index)}
                                            priority={index < 3}
                                            index={index}
                                            aspectRatio="16/11"
                                        />
                                        {/* Subtle numbered overlay */}
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '8px',
                                            right: '12px',
                                            fontSize: '0.65rem',
                                            fontWeight: 700,
                                            color: 'rgba(255,255,255,0.5)',
                                            zIndex: 3,
                                            pointerEvents: 'none'
                                        }}>
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <style jsx global>{`
                @keyframes tsFadeIn {
                    from { opacity: 0; transform: translateY(8px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes tsImageFade {
                    from { opacity: 0.5; transform: scale(0.98); }
                    to { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </Layout>
    )
}
