'use client'
import Link from 'next/link'

export default function Section1() {
	return (
		<>
			<div className="hero6-section-area" id="hero" style={{ 
				backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/assets/img/bg/geo-ai-banner.png)', 
				backgroundRepeat: 'no-repeat', 
				backgroundSize: 'cover', 
				backgroundPosition: 'center',
				minHeight: '100vh',
				display: 'flex',
				alignItems: 'flex-start',
				paddingTop: '160px',
				paddingBottom: '80px'
			}}>
				<div className="container">
					<div className="row align-items-center justify-content-center text-center">
						<div className="col-lg-10">
							<div className="hero6-header">
								<h5 data-aos="fade-up" data-aos-duration="800">
									<img src="/assets/img/icons/sub-logo1.svg" alt="" className="me-2" />
									GEO-AI CON 2025
								</h5>
								<div className="space24" />
								<h1 className="text-anime-style-3 text-white display-2 fw-bold" style={{ lineHeight: '1.1' }}>
									SUMMIT & HANDS-ON <br /> TUTORIALS
								</h1>
								<div className="space24" />
								<p className="subtitle mx-auto" style={{ fontSize: '24px', color: '#fff', maxWidth: '800px', fontWeight: '500' }}>
									Organized by Centre of Excellence (SEnSRS), IIT Ropar, India
								</p>
								<div className="space40" />
								<div className="hero-info-badge d-inline-flex align-items-center bg-white bg-opacity-10 p-3 rounded-pill mb-4 border border-white border-opacity-20" data-aos="zoom-in" data-aos-delay="200" style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
									<div className="px-3 border-end border-white border-opacity-25">
										<p className="mb-0 text-white opacity-75 small">DATES</p>
										<p className="mb-0 text-white fw-bold">5-8 Sept 2025</p>
									</div>
									<div className="px-3">
										<p className="mb-0 text-white opacity-75 small">VENUE</p>
										<p className="mb-0 text-white fw-bold">IIT Ropar, Punjab</p>
									</div>
								</div>
								<div className="space32" />
								<div className="btn-area1" data-aos="fade-up" data-aos-delay="400">
									<Link href="/pricing-plan" className="vl-btn6 py-3 px-5 fs-5">
										Register Now <img src="/assets/img/icons/arrow2.svg" alt="" className="ms-2" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
