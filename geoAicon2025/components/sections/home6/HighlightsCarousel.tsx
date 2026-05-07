'use client'
import Slider from "react-slick"
import Link from 'next/link'
import { useRef, useState } from 'react'

const slides = [
	{
		tag: 'Conference Highlight',
		tagIcon: 'fa-solid fa-star',
		tagBg: 'rgba(59,130,246,0.15)',
		tagColor: '#3b82f6',
		accentColor: '#3b82f6',
		title: 'Visionary Keynote Sessions',
		desc: 'Immerse yourself in groundbreaking discussions led by global pioneers in Geospatial AI. Discover how the convergence of satellite intelligence and deep learning is shaping the future.',
		img: '/Gallery/PhotoGallery/Selected/20250906_115618.jpg',
		cta: { label: 'Explore Speakers', href: '/speakers', style: 'btn-primary' },
		cta2: { label: 'View Schedule', href: '/event-schedule' },
	},
	{
		tag: 'Skill Building',
		tagIcon: 'fa-solid fa-tools',
		tagBg: 'rgba(245,158,11,0.2)',
		tagColor: '#b45309',
		accentColor: '#f59e0b',
		title: 'Hands-on Technical Workshops',
		desc: 'Go beyond theory with our specialized lab sessions. Master Drone Mapping, LiDAR Data Processing, and Advanced Surveying instruments under expert guidance.',
		img: '/Landing/20250907_123344.jpg',
		cta: { label: 'Check Tutorials', href: '/event-schedule', style: 'btn-dark' },
	},
	{
		tag: 'Hands-on Training',
		tagIcon: 'fa-solid fa-layer-group',
		tagBg: 'rgba(16,185,129,0.15)',
		tagColor: '#059669',
		accentColor: '#10b981',
		title: 'Advanced Surveying Techniques',
		desc: 'Master modern field surveying. Gain practical experience with Total Station, DGPS, and advanced instruments in real-world scenarios.',
		img: '/Landing/20250907_143624.jpg',
		cta: { label: 'View Details', href: '/event-schedule', style: 'btn-success' },
		cta2: { label: 'Contact Us', href: '/contact' },
	}
]

export default function HighlightsCarousel() {
	const sliderRef = useRef<Slider>(null)
	const [currentSlide, setCurrentSlide] = useState(0)

	const settings = {
		dots: false,
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
		beforeChange: (_current: number, next: number) => setCurrentSlide(next),
	}

	return (
		<div className="highlights-section position-relative sp1" style={{ background: 'linear-gradient(180deg, #f8fafc, #f1f5f9)' }}>
			
			<style jsx global>{`
				.highlight-card-v2 {
					background: #fff;
					border-radius: 24px;
					overflow: hidden;
					box-shadow: 0 20px 60px rgba(0,0,0,0.06);
					transition: transform 0.4s ease, box-shadow 0.4s ease;
					position: relative;
				}
				.highlight-card-v2:hover {
					transform: translateY(-4px);
					box-shadow: 0 30px 80px rgba(0,0,0,0.1);
				}
				.slide-img-wrapper-v2 {
					height: 100%;
					min-height: 420px;
					position: relative;
					overflow: hidden;
				}
				.slide-img-wrapper-v2 img {
					transition: transform 1.2s cubic-bezier(0.25, 1, 0.5, 1);
				}
				.highlight-card-v2:hover .slide-img-wrapper-v2 img {
					transform: scale(1.08);
				}
				.slide-number-indicator {
					position: absolute;
					top: 30px;
					left: 30px;
					font-size: 5rem;
					font-weight: 900;
					line-height: 1;
					opacity: 0.06;
					color: #000;
					z-index: 1;
					pointer-events: none;
				}
				.slide-progress-bar {
					display: flex;
					gap: 8px;
					align-items: center;
				}
				.slide-progress-dot {
					width: 32px;
					height: 4px;
					border-radius: 2px;
					background: #e2e8f0;
					cursor: pointer;
					transition: all 0.4s ease;
					position: relative;
					overflow: hidden;
				}
				.slide-progress-dot.active {
					width: 48px;
					background: transparent;
				}
				.slide-progress-dot.active::after {
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					height: 100%;
					border-radius: 2px;
					animation: progressFill 6s linear forwards;
				}
				@keyframes progressFill {
					from { width: 0; }
					to { width: 100%; }
				}
				@media (max-width: 991px) {
					.slide-img-wrapper-v2 {
						min-height: 280px;
					}
					.slide-number-indicator {
						font-size: 3rem;
						top: 15px;
						left: 15px;
					}
				}
			`}</style>

			<div className="container">
				<Slider ref={sliderRef} {...settings} className="highlights-slider-v2 py-3">
					{slides.map((slide, idx) => (
						<div key={idx} className="px-2">
							<div className="highlight-card-v2">
								<div className="slide-number-indicator">0{idx + 1}</div>
								<div className="row g-0">
									<div className="col-lg-7 order-2 order-lg-1">
										<div className="p-4 p-lg-5 d-flex flex-column justify-content-center h-100" style={{ 
											borderLeft: `4px solid ${slide.accentColor}`,
											minHeight: '420px'
										}}>
											<div>
												<div className="d-inline-block fw-bold px-3 py-1 rounded-pill mb-4 text-uppercase" style={{
													fontSize: '0.75rem',
													letterSpacing: '1.5px',
													background: slide.tagBg,
													color: slide.tagColor
												}}>
													<i className={`${slide.tagIcon} me-2`}></i>{slide.tag}
												</div>
												<h2 className="fw-bold text-dark mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', lineHeight: 1.2 }}>
													{slide.title}
												</h2>
												<p className="text-muted mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.8', maxWidth: '500px' }}>
													{slide.desc}
												</p>
												<div className="d-flex align-items-center gap-3 flex-wrap">
													<Link href={slide.cta.href} className={`btn ${slide.cta.style} rounded-pill px-4 py-2 fw-bold shadow-sm`}>
														{slide.cta.label}
													</Link>
													{slide.cta2 && (
														<Link href={slide.cta2.href} className="btn btn-link text-decoration-none text-dark fw-bold">
															{slide.cta2.label} <i className="fa-solid fa-arrow-right ms-1"></i>
														</Link>
													)}
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-5 order-1 order-lg-2">
										<div className="slide-img-wrapper-v2">
											<img 
												src={slide.img} 
												alt={slide.title} 
												className="w-100 h-100 position-absolute top-0 start-0"
												style={{ objectFit: 'cover' }}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</Slider>

				{/* Custom navigation */}
				<div className="d-flex align-items-center justify-content-center gap-4 mt-4">
					<button 
						className="btn btn-link text-dark p-0"
						onClick={() => sliderRef.current?.slickPrev()}
						aria-label="Previous"
					>
						<i className="fa-solid fa-arrow-left fs-5"></i>
					</button>
					<div className="slide-progress-bar">
						{slides.map((slide, idx) => (
							<div 
								key={idx}
								className={`slide-progress-dot ${idx === currentSlide ? 'active' : ''}`}
								onClick={() => sliderRef.current?.slickGoTo(idx)}
								style={idx === currentSlide ? {} : {}}
							>
								{idx === currentSlide && (
									<div style={{
										position: 'absolute',
										top: 0,
										left: 0,
										height: '100%',
										borderRadius: '2px',
										background: slide.accentColor,
										animation: 'progressFill 6s linear forwards'
									}} />
								)}
							</div>
						))}
					</div>
					<button 
						className="btn btn-link text-dark p-0"
						onClick={() => sliderRef.current?.slickNext()}
						aria-label="Next"
					>
						<i className="fa-solid fa-arrow-right fs-5"></i>
					</button>
				</div>
			</div>
		</div>
	)
}
