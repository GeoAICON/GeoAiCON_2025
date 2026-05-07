'use client'
import Link from 'next/link'

export default function AboutSection() {
    return (
        <div className="about1-section-area sp6">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about1-images">
                            <div className="img1" data-aos="zoom-in" data-aos-duration={1000}>
                                <img src="/assets/img/custom/about-img.png" alt="GeoAI Drone Survey" style={{ borderRadius: '10px' }} />
                            </div>
                            <div className="img-badge" style={{ position: 'absolute', bottom: '30px', right: '30px', background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                                <div className="d-flex align-items-center gap-3">
                                    <div className="icon">
                                        <img src="/assets/img/icons/target.svg" alt="" width="40" />
                                    </div>
                                    <div className="text">
                                        <h4 className="m-0">Organized by</h4>
                                        <p className="m-0 text-muted">Centre of Excellence (SEnSRS)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about1-content heading2">
                            <h5 data-aos="fade-left" data-aos-duration={800} className="text-primary">About The Conference</h5>
                            <h2 data-aos="fade-left" data-aos-duration={1000}>Exploring the Frontiers of Geospatial AI</h2>
                            <p data-aos="fade-left" data-aos-duration={1200}>
                                Geo-AI CON 2025 aims to bring together leading researchers, industry professionals, and domain experts to explore the frontiers of Geospatial Artificial Intelligence.
                            </p>
                            
                            <div className="highlights mt-4">
                                <ul className="list-unstyled">
                                    <li className="d-flex gap-3 mb-3 align-items-start" data-aos="fade-up" data-aos-duration={1300}>
                                        <i className="fa-solid fa-circle-check text-primary mt-1"></i>
                                        <div>
                                            <strong>Hands-on Tutorials</strong>
                                            <p className="m-0 text-muted">Tutorials offered on modern field surveying techniques and drone mapping.</p>
                                        </div>
                                    </li>
                                    <li className="d-flex gap-3 mb-3 align-items-start" data-aos="fade-up" data-aos-duration={1400}>
                                        <i className="fa-solid fa-circle-check text-primary mt-1"></i>
                                        <div>
                                            <strong>State-of-the-art Equipment</strong>
                                            <p className="m-0 text-muted">Experience with geospatial instruments guided by globally renowned experts.</p>
                                        </div>
                                    </li>
                                    <li className="d-flex gap-3 mb-3 align-items-start" data-aos="fade-up" data-aos-duration={1500}>
                                        <i className="fa-solid fa-circle-check text-primary mt-1"></i>
                                        <div>
                                            <strong>Bridging Theory & Practice</strong>
                                            <p className="m-0 text-muted">Aim to bridge the gap between theoretical knowledge and practical field applications.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="btn-area1 mt-4" data-aos="fade-up" data-aos-duration={1600}>
                                <Link href="/about" className="vl-btn1">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
