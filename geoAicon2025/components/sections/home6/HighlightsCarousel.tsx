'use client'
import Slider from "react-slick"
import Link from 'next/link'
import Image from 'next/image'

const settings = {
	dots: true,
	infinite: true,
	speed: 800,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 6000,
	arrows: false,
	fade: true,
	cssEase: 'cubic-bezier(0.25, 1, 0.5, 1)',
	pauseOnHover: true,
	appendDots: (dots: any) => (
		<div style={{ bottom: "-40px" }}>
			<ul style={{ margin: "0px", padding: 0, display: "flex", justifyContent: "center", gap: "10px" }}> {dots} </ul>
		</div>
	),
	customPaging: () => (
		<div className="custom-dot"></div>
	)
}

export default function HighlightsCarousel() {
	return (
		<div className="highlights-section position-relative sp1" style={{background: '#f9f9f9'}}>
			
			<style jsx global>{`
				.highlights-section .custom-dot {
					width: 10px;
					height: 10px;
					border-radius: 50%;
					background: #cbd5e1;
					transition: all 0.3s ease;
					cursor: pointer;
				}
				.highlights-section .slick-dots .slick-active .custom-dot {
					background: #0d6efd;
					transform: scale(1.4);
				}
				.highlight-card {
					background: #fff;
					border-radius: 20px;
					overflow: hidden;
					box-shadow: 0 20px 50px rgba(0,0,0,0.08);
					transition: transform 0.3s ease;
					height: 100%;
				}
				.highlight-card:hover {
					transform: translateY(-5px);
					box-shadow: 0 25px 60px rgba(0,0,0,0.12);
				}
				.slide-img-wrapper {
					height: 100%;
					min-height: 400px;
					position: relative;
					overflow: hidden;
				}
				/* Zoom effect on the Image component inner element */
				.slide-img-wrapper img {
					transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
				}
				.highlight-card:hover .slide-img-wrapper img {
					transform: scale(1.05);
				}
				@media (max-width: 991px) {
					.slide-img-wrapper {
					    min-height: 300px;
					}
				}
			`}</style>

			<div className="container">
				<Slider {...settings} className="highlights-slider py-3">
					
					{/* Slide 1: Keynote Sessions */}
					<div className="px-2 h-100">
						<div className="highlight-card h-100">
							<div className="row g-0 h-100">
								<div className="col-lg-7 order-2 order-lg-1">
									<div className="p-5 d-flex flex-column justify-content-center h-100">
										<div>
											<div className="d-inline-block bg-primary bg-opacity-10 text-primary fw-bold px-3 py-1 rounded-pill mb-4 text-uppercase" style={{fontSize: '0.8rem', letterSpacing: '1px'}}>
												<i className="fa-solid fa-star me-2"></i>Conference Highlight
											</div>
											<h2 className="display-6 fw-bold text-dark mb-3">Visionary Keynote Sessions</h2>
											<p className="text-muted fs-5 mb-4" style={{lineHeight: '1.7'}}>
												Immerse yourself in groundbreaking discussions led by global pioneers in Geospatial AI. Discover how the convergence of satellite intelligence and deep learning is shaping the future.
											</p>
											<div className="d-flex align-items-center gap-3 mt-4">
												<Link href="/speakers" className="btn btn-primary rounded-pill px-4 py-2 fw-bold shadow-sm">
													Explore Speakers
												</Link>
												<Link href="/event-schedule" className="btn btn-link text-decoration-none text-dark fw-bold">
													View Schedule <i className="fa-solid fa-arrow-right ms-1"></i>
												</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-5 order-1 order-lg-2">
									<div className="slide-img-wrapper">
										<Image 
											src="/assets/img/all-images/about/carousel-1.png" 
											alt="Keynote Sessions" 
											fill 
											className="object-fit-cover"
											sizes="(max-width: 768px) 100vw, 50vw"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Slide 2: Hands-on Tutorials */}
					<div className="px-2 h-100">
						<div className="highlight-card h-100">
							<div className="row g-0 h-100">
								<div className="col-lg-7 order-2 order-lg-1">
									<div className="p-5 d-flex flex-column justify-content-center h-100">
										<div>
											<div className="d-inline-block bg-warning bg-opacity-25 text-dark fw-bold px-3 py-1 rounded-pill mb-4 text-uppercase" style={{fontSize: '0.8rem', letterSpacing: '1px'}}>
												<i className="fa-solid fa-tools me-2"></i>Skill Building
											</div>
											<h2 className="display-6 fw-bold text-dark mb-3">Hands-on Technical Workshops</h2>
											<p className="text-muted fs-5 mb-4" style={{lineHeight: '1.7'}}>
												Go beyond theory with our specialized lab sessions. Master Drone Mapping, LiDAR Data Processing, and Advanced Surveying instruments under expert guidance.
											</p>
											<div className="d-flex align-items-center gap-3 mt-4">
												<Link href="/event-schedule" className="btn btn-dark rounded-pill px-4 py-2 fw-bold shadow-sm">
													Check Tutorials
												</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-5 order-1 order-lg-2">
									<div className="slide-img-wrapper">
										<Image 
											src="/assets/img/all-images/about/carousel-2.png" 
											alt="Hands-on Tutorials" 
											fill 
											className="object-fit-cover"
											sizes="(max-width: 768px) 100vw, 50vw"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Slide 3: Publication */}
					<div className="px-2 h-100">
						<div className="highlight-card h-100">
							<div className="row g-0 h-100">
								<div className="col-lg-7 order-2 order-lg-1">
									<div className="p-5 d-flex flex-column justify-content-center h-100">
										<div>
											<div className="d-inline-block bg-success bg-opacity-10 text-success fw-bold px-3 py-1 rounded-pill mb-4 text-uppercase" style={{fontSize: '0.8rem', letterSpacing: '1px'}}>
												<i className="fa-solid fa-book-open me-2"></i>Academic Excellence
											</div>
											<h2 className="display-6 fw-bold text-dark mb-3">Scopus-Indexed Publications</h2>
											<p className="text-muted fs-5 mb-4" style={{lineHeight: '1.7'}}>
												Elevate your research profile. Accepted papers are published in reputed Springer or Taylor & Francis proceedings with <span className="text-success fw-bold">NO Article Processing Charges</span>.
											</p>
											<div className="d-flex align-items-center gap-3 mt-4">
												<Link href="/pricing-plan" className="btn btn-success rounded-pill px-4 py-2 fw-bold shadow-sm">
													Submit Abstract
												</Link>
												<Link href="/contact" className="btn btn-link text-decoration-none text-dark fw-bold">
													Contact Us <i className="fa-solid fa-arrow-right ms-1"></i>
												</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-5 order-1 order-lg-2">
									<div className="slide-img-wrapper">
										<Image 
											src="/assets/img/all-images/about/carousel-3.png" 
											alt="Scopus Publications" 
											fill 
											className="object-fit-cover"
											sizes="(max-width: 768px) 100vw, 50vw"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

				</Slider>
			</div>
		</div>
	)
}
