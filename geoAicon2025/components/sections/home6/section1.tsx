'use client'
import Link from 'next/link'

export default function Section1() {
	return (
		<>
			<div className="hero6-section-area" id="hero" style={{ 
				backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/assets/img/bg/geo-ai-banner.png)', 
				backgroundRepeat: 'no-repeat', 
				backgroundSize: 'cover', 
				backgroundPosition: 'center',
				minHeight: '85vh',
				display: 'flex',
				alignItems: 'flex-start',
				paddingTop: '130px',
				paddingBottom: '50px',
				position: 'relative',
				zIndex: 1
			}}>
				<div className="container">
					<div className="row align-items-center justify-content-center text-center">
						<div className="col-lg-10">
							<div className="hero6-header">
								<h5 data-aos="fade-up" data-aos-duration="800">
									Geo-AI CON 2025
								</h5>
								<div className="space16" />
								<h1 className="text-anime-style-3 text-white fw-bold" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', lineHeight: '1.1', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
									GEOSPATIAL ARTIFICIAL INTELLIGENCE<br /> SUMMIT
								</h1>
								<div className="space16" />
								<p className="subtitle mx-auto" style={{ fontSize: '20px', color: '#fff', maxWidth: '800px', fontWeight: '500', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
									Organized by the Centre of Excellence in Socio-Environmental Sustainability for River Sand Mining (SEnSRS), IIT Ropar, India
								</p>
								<div className="space20" />
								<div className="hero-info-badge d-inline-flex align-items-center bg-black bg-opacity-25 p-3 rounded-pill mb-3 border border-white border-opacity-20" data-aos="zoom-in" data-aos-delay="200" style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
									<div className="px-3 border-end border-white border-opacity-25">
										<p className="mb-0 text-white opacity-75 small uppercase" style={{ fontSize: '0.8rem' }}>Dates</p>
										<p className="mb-0 text-white fw-bold">5-8 Sept 2025</p>
									</div>
									<div className="px-3">
										<p className="mb-0 text-white opacity-75 small uppercase" style={{ fontSize: '0.8rem' }}>Mode</p>
										<p className="mb-0 text-white fw-bold">Hybrid (IIT Ropar + Online)</p>
									</div>
								</div>
								<div className="space20" />
								<div className="btn-area1" data-aos="fade-up" data-aos-delay="400">
									<Link href="/pricing-plan" className="vl-btn6 py-3 px-4 fs-6">
										Submit Abstract / Register <img src="/assets/img/icons/arrow2.svg" alt="" className="ms-2" />
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
