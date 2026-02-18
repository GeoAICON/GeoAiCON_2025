
import Link from 'next/link'

export default function Section6() {
	const speakers = [
		{ name: "Prof. Biswajeet Pradhan", role: "UTS, Australia", img: "/speakers/Biswajeet Pradhan.jpg", color: "#3b82f6" },
		{ name: "Prof. Mahesh Kumar Jat", role: "MNIT Jaipur", img: "/speakers/Mahesh Jaat.jpg", color: "#8b5cf6" },
		{ name: "Prof. Akshar Tripathi", role: "IIT Patna", img: "/speakers/Akshar Tripathy.jpg", color: "#06b6d4" },
		{ name: "Prof. Avik Bhattacharya", role: "IIT Bombay", img: "/speakers/Avik Bhattacharya.jpg", color: "#10b981" },
	]

	return (
		<>
			<div className="team6-section-area sp2" id="speakers">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 m-auto">
							<div className="team-heading heading9 text-center mb-5">
								<h5 className="mb-3 d-inline-flex align-items-center gap-2">
									EVENT SPEAKERS
								</h5>
								<h2 className="text-anime-style-3">Keynote Speakers</h2>
							</div>
						</div>
					</div>
					<div className="row g-4">
						{speakers.map((speaker, index) => (
							<div className="col-lg-3 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-duration={900 + index * 100} key={index}>
								<div className="team-widget-area" style={{ position: 'relative' }}>
									<div className="img1 image-anime" style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px' }}>
										<img 
											src={speaker.img} 
											alt={speaker.name} 
											className="img-fluid w-100" 
											style={{ height: '340px', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
										/>
										{/* Gradient overlay */}
										<div style={{
											position: 'absolute',
											bottom: 0,
											left: 0,
											right: 0,
											height: '50%',
											background: `linear-gradient(to top, rgba(0,0,0,0.6), transparent)`,
											pointerEvents: 'none',
											borderRadius: '0 0 16px 16px'
										}} />
									</div>
									<div className="content-area pt-3">
										<Link href="/speakers" className="h4 d-block mb-1 text-decoration-none text-dark hover-primary">{speaker.name}</Link>
										<p className="text-muted small mb-0">{speaker.role}</p>
									</div>
								</div>
							</div>
						))}
					</div>
					{/* View All CTA */}
					<div className="text-center mt-5" data-aos="fade-up" data-aos-delay={600}>
						<Link href="/speakers" className="btn btn-outline-primary rounded-pill px-5 py-3 fw-bold" style={{
							borderWidth: '2px',
							transition: 'all 0.3s ease'
						}}>
							View All Speakers <i className="fa-solid fa-arrow-right ms-2"></i>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}
