'use client'
import Link from 'next/link'
// import SpaceButton from '@shared/components/elements/SpaceButton'

export default function HeroSection() {
    return (
        <div className="hero1-section-area position-relative" style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundAttachment: 'scroll', // Kept scroll to avoid mobile issues
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        }}>
            <div className="overlay" style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                background: 'linear-gradient(180deg, rgba(2, 10, 28, 0.7) 0%, rgba(2, 10, 28, 0.5) 50%, rgba(2, 10, 28, 0.9) 100%)', // Darker bottom for text contrast
                zIndex: 0 
            }}></div>
            
            <div className="container position-relative" style={{ zIndex: 2 }}>
                <div className="row">
                    <div className="col-lg-10 m-auto">
                        <div className="hero1-content text-center text-white">
                            <h5 data-aos="fade-down" data-aos-duration={800} className="tag text-uppercase fw-bold mb-3 user-select-none" style={{ color: '#ffc107', letterSpacing: '4px', fontSize: '14px' }}>
                                Socio-Environmental Sustainability for River Sand Mining (SEnSRS)
                            </h5>
                            
                            <h1 data-aos="zoom-in" data-aos-duration={1000} className="main-title fw-black mb-4" style={{ fontWeight: 900, color: '#fff' }}>
                                Geo-AI <span style={{ color: '#ffc107' }}>CON</span> 2025
                            </h1>
                            
                            <p data-aos="fade-up" data-aos-duration={1200} className="description fs-5 fw-light opacity-90 mb-5 mx-auto" style={{ maxWidth: '700px', lineHeight: '1.6' }}>
                                Summit & Hands-On Tutorials on Geospatial Artificial Intelligence. Join the global leaders in AI and Geology.
                            </p>
                            
                            <div className="date-location mb-5" data-aos="fade-up" data-aos-duration={1300}>
                                <div className="d-flex justify-content-center gap-4 flex-wrap">
                                    <div className="hero-badge p-3 rounded-3 d-flex align-items-center gap-3">
                                        <div className="icon-box text-warning">
                                            <i className="fa-solid fa-calendar-days fs-4"></i>
                                        </div>
                                        <div className="text-start">
                                            <span className="text-white-50 d-block" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '1px' }}>DATE</span>
                                            <span className="text-white fw-bold">5th-8th Sept 2025</span>
                                        </div>
                                    </div>
                                    <div className="hero-badge p-3 rounded-3 d-flex align-items-center gap-3">
                                        <div className="icon-box text-warning">
                                            <i className="fa-solid fa-location-dot fs-4"></i>
                                        </div>
                                        <div className="text-start">
                                            <span className="text-white-50 d-block" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '1px' }}>LOCATION</span>
                                            <span className="text-white fw-bold">IIT Ropar, India</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="btn-area1 d-flex justify-content-center align-items-center gap-4" data-aos="fade-up" data-aos-duration={1400} style={{ minHeight: '60px' }}>
                                <Link href="/program" className="vl-btn1 px-5 py-3 d-inline-flex align-items-center justify-content-center">
                                    View Schedule
                                </Link>
                                
                                <Link href="/pricing-plan" style={{ textDecoration: 'none', display: 'inline-block' }}>
                                    <span className="vl-btn2">Register Now</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                .hero1-content .main-title {
                    font-size: 5rem;
                    line-height: 1.1;
                    letter-spacing: -2px;
                    text-shadow: 0 10px 30px rgba(0,0,0,0.5);
                }
                .text-gradient {
                    background: linear-gradient(135deg, #ffffff 0%, #ffc107 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .hero-badge {
                    background: rgba(255, 255, 255, 0.08);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(12px);
                    transition: transform 0.3s ease, background 0.3s ease;
                    min-width: 200px;
                }
                .hero-badge:hover {
                    transform: translateY(-5px);
                    background: rgba(255, 255, 255, 0.12);
                    border-color: rgba(255, 255, 255, 0.2);
                }
                
                @media (max-width: 991px) {
                    .hero1-content .main-title {
                        font-size: 3.5rem;
                    }
                }
                @media (max-width: 575px) {
                    .hero1-content .main-title {
                        font-size: 2.8rem;
                    }
                    .btn-area1 {
                        flex-direction: column;
                        gap: 20px !important;
                    }
                    .hero-badge {
                        width: 100%;
                        justify-content: center;
                    }
                }
            `}</style>
        </div>
    )
}
