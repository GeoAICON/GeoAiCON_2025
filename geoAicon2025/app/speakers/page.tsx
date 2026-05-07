'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

const speakers = [
	{ 
		name: "Prof. Biswajeet Pradhan", 
		role: "UTS, Australia", 
		img: "/speakers/Biswajeet Pradhan.jpg",
		expertise: "Earth Observation & AI",
		color: "#3b82f6"
	},
	{ 
		name: "Prof. Mahesh Kumar Jat", 
		role: "MNIT Jaipur", 
		img: "/speakers/Mahesh Jaat.jpg",
		expertise: "Water Resources Engineering",
		color: "#8b5cf6"
	},
	{ 
		name: "Prof. Akshar Tripathi", 
		role: "IIT Patna", 
		img: "/speakers/Akshar Tripathy.jpg",
		expertise: "Remote Sensing & GIS",
		color: "#06b6d4"
	},
	{ 
		name: "Prof. Avik Bhattacharya", 
		role: "IIT Bombay", 
		img: "/speakers/Avik Bhattacharya.jpg",
		expertise: "SAR & Microwave Remote Sensing",
		color: "#10b981"
	},
	{ 
		name: "Prof. Mahesh Pal", 
		role: "NIT Kurukshetra", 
		img: "/speakers/Mahesh Pal.jpg",
		expertise: "Machine Learning in RS",
		color: "#f59e0b"
	},
	{ 
		name: "Prof. Ajanta Goswami", 
		role: "IIT Roorkee", 
		img: "/speakers/Ajanta Goswami.jpg",
		expertise: "Geoinformatics & Hazards",
		color: "#ef4444"
	},
]

export default function Speakers() {
	return (
		<Layout headerStyle={6} footerStyle={6}>
			<div>
				{/* Hero Section */}
				<div className="inner-page-header" style={{ backgroundImage: 'url(/assets/img/bg/header-bg17.png)', backgroundSize: 'cover' }}>
					<div className="container">
						<div className="row">
							<div className="col-lg-12 m-auto">
								<div className="heading1 text-center">
									<h1>Keynote Speakers</h1>
									<div className="space20" />
									<Link href="/" className="text-white">Home <i className="fa-solid fa-angle-right" /> <span>Our Speakers</span></Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Speakers Grid */}
				<div className="py-5" style={{ background: '#f8fafc' }}>
					<div className="container">
						<div className="row g-4 justify-content-center">
							{speakers.map((speaker, index) => (
								<div className="col-lg-4 col-md-6" key={index}>
									<div className="speaker-card" style={{
										borderRadius: '20px',
										overflow: 'hidden',
										background: '#fff',
										boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
										transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
										cursor: 'pointer',
										position: 'relative'
									}}>
										{/* Image container */}
										<div style={{
											position: 'relative',
											overflow: 'hidden',
											height: '380px'
										}}>
											<img
												src={speaker.img}
												alt={speaker.name}
												style={{
													width: '100%',
													height: '100%',
													objectFit: 'cover',
													transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
												}}
												className="speaker-img"
											/>
											{/* Gradient overlay */}
											<div style={{
												position: 'absolute',
												bottom: 0,
												left: 0,
												right: 0,
												height: '60%',
												background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
												pointerEvents: 'none'
											}} />
											{/* Expertise badge */}
											<div style={{
												position: 'absolute',
												top: '16px',
												left: '16px',
												background: speaker.color,
												color: '#fff',
												padding: '4px 14px',
												borderRadius: '20px',
												fontSize: '0.7rem',
												fontWeight: 700,
												letterSpacing: '0.5px',
												textTransform: 'uppercase',
												boxShadow: `0 4px 12px ${speaker.color}44`
											}}>
												{speaker.expertise}
											</div>
											{/* Name on image */}
											<div style={{
												position: 'absolute',
												bottom: '20px',
												left: '20px',
												right: '20px'
											}}>
												<h4 className="text-white fw-bold mb-1" style={{ fontSize: '1.3rem', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
													{speaker.name}
												</h4>
												<p className="mb-0" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>
													{speaker.role}
												</p>
											</div>
										</div>
										{/* Bottom detail bar */}
										<div className="d-flex align-items-center justify-content-between p-3" style={{ borderTop: `3px solid ${speaker.color}` }}>
											<div className="d-flex align-items-center gap-2">
												<i className="fa-solid fa-graduation-cap" style={{ color: speaker.color }}></i>
												<span className="text-muted small fw-medium">Keynote Speaker</span>
											</div>
											<div className="d-flex gap-2">
												<span className="d-inline-flex align-items-center justify-content-center" style={{
													width: '32px',
													height: '32px',
													borderRadius: '50%',
													background: '#f1f5f9',
													color: '#64748b',
													fontSize: '0.8rem',
													transition: 'all 0.2s ease'
												}}>
													<i className="fa-brands fa-google-scholar"></i>
												</span>
												<span className="d-inline-flex align-items-center justify-content-center" style={{
													width: '32px',
													height: '32px',
													borderRadius: '50%',
													background: '#f1f5f9',
													color: '#64748b',
													fontSize: '0.8rem',
													transition: 'all 0.2s ease'
												}}>
													<i className="fa-brands fa-linkedin-in"></i>
												</span>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<style jsx global>{`
				.speaker-card:hover {
					transform: translateY(-8px);
					box-shadow: 0 20px 60px rgba(0,0,0,0.12) !important;
				}
				.speaker-card:hover .speaker-img {
					transform: scale(1.06);
				}
			`}</style>
		</Layout>
	)
}