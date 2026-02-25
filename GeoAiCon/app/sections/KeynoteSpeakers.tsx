'use client'
import Link from 'next/link'

// Using dummy images for now as per plan
const speakers = [
    {
        name: "Prof. (Dr.) Biswajeet Pardhan",
        role: "UTS, Sydney, Australia",
        image: "/assets/img/custom/speaker-placeholder.png" 
    },
    {
        name: "Prof. (Dr.) Mahesh Kumar Jat",
        role: "MNIT Jaipur, India",
        image: "/assets/img/custom/speaker-placeholder.png"
    },
    {
        name: "Prof. (Dr.) Akshar Tripathi",
        role: "IIT Patna, India",
        image: "/assets/img/custom/speaker-placeholder.png"
    },
    {
        name: "Prof. (Dr.) Avik Bhattacharya",
        role: "IIT Bombay, India",
        image: "/assets/img/custom/speaker-placeholder.png"
    }
];

export default function KeynoteSpeakers() {
    return (
        <div className="speaker1-section-area sp5" style={{ background: '#fff' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 m-auto">
                        <div className="heading2 text-center space-margin60">
                            <h5 className="text-primary fw-bold text-uppercase mb-2">Meet The Experts</h5>
                            <h2 className="fw-black text-dark">Keynote Speakers</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-4">
                    {speakers.map((speaker, index) => (
                        <div key={index} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration={800 + (index * 200)}>
                            <div className="speaker-card position-relative bg-white rounded-4 overflow-hidden border transition-all" style={{ transition: 'all 0.3s ease' }}>
                                <div className="img-wrapper position-relative" style={{ height: '320px', overflow: 'hidden', backgroundColor: '#f0f2f5' }}>
                                    <img 
                                        src={speaker.image} 
                                        alt={speaker.name} 
                                        className="w-100 h-100 object-fit-cover transition-transform"
                                        style={{ objectFit: 'cover', objectPosition: 'top center' }} 
                                    />
                                    <div className="overlay-gradient"></div>
                                </div>
                                <div className="content p-4 text-center">
                                    <Link href="/speakers" className="d-block h5 fw-bold text-dark mb-1 text-decoration-none hover-primary">{speaker.name}</Link>
                                    <p className="text-muted small fw-medium mb-0 text-uppercase ls-1">{speaker.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <Link href="/program" className="vl-btn1">View Full Schedule</Link>
                    </div>
                </div>

                <style jsx>{`
                    .speaker-card {
                        border: 1px solid rgba(0,0,0,0.08);
                    }
                    .speaker-card:hover {
                        transform: translateY(-8px);
                        box-shadow: 0 10px 30px rgba(0, 89, 255, 0.15);
                        border-color: #00d2ff !important; /* Cyan blue border on hover */
                    }
                    .img-wrapper img {
                        transition: transform 0.5s ease;
                    }
                    .speaker-card:hover .img-wrapper img {
                        transform: scale(1.05);
                    }
                    .ls-1 {
                        letter-spacing: 1px;
                    }
                    .hover-primary:hover {
                        color: #00d2ff !important;
                    }
                    .content {
                        background: #fff;
                        position: relative;
                        z-index: 2;
                    }
                    /* Add a subtle blue glow to the image overlay on hover */
                    .speaker-card:hover .img-wrapper::after {
                        content: '';
                        position: absolute;
                        inset: 0;
                        background: linear-gradient(to top, rgba(0, 210, 255, 0.2) 0%, transparent 100%);
                        z-index: 1;
                    }
                `}</style>
            </div>
        </div>
    )
}
