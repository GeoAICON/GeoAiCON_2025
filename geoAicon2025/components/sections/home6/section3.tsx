import Link from 'next/link'

export default function Section3() {
	return (
		<>

			<div className="about6-section-area sp1" id="about">
				<div className="container">
					<div className="row align-items-center gy-5"> {/* Added vertical gap for mobile stacking */}
						<div className="col-lg-6">
							<div className="row">
								<div className="col-lg-12">
									<div className="img1 reveal image-anime">
										<img src="/assets/img/all-images/about/geo-ai-about.png" alt="Geo-AI Summit" className="img-fluid w-100 rounded shadow-lg" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="about6-header heading9">
								<h5 data-aos="fade-left" data-aos-duration={700} className="mb-3 d-flex align-items-center gap-2">
									<img src="/assets/img/icons/sub-logo1.svg" alt="" width={20} />
									About Geo-AI CON 2025
								</h5>
								
								<h2 className="text-anime-style-3 mb-4">Explore the Frontiers of Geospatial AI</h2>
								
								<p data-aos="fade-left" data-aos-duration={900} className="mb-4 lead text-muted">
									Geo-AI CON 2025 aims to bring together leading researchers, industry professionals, & domain experts to explore the frontiers of Geospatial Artificial Intelligence.
								</p>
								
								<div className="p-3 bg-light rounded mb-4 border-start border-4 border-primary" data-aos="fade-left" data-aos-duration={1000}>
									<strong className="d-block text-dark">Organizing Secretary:</strong> 
									<span className="text-primary">Dr. Reet Kamal Tiwari</span>, Associate Professor, IIT Ropar, India
								</div>
								
								<ul className="list-unstyled mb-5" data-aos="fade-left" data-aos-duration={1100}>
									<li className="mb-3 d-flex align-items-start">
										<i className="fa-solid fa-circle-check text-primary me-2 mt-1"></i> 
										<span>Tutorials on modern field surveying techniques.</span>
									</li>
									<li className="mb-3 d-flex align-items-start">
										<i className="fa-solid fa-circle-check text-primary me-2 mt-1"></i> 
										<span>Hands-on experience with state-of-the-art instruments.</span>
									</li>
									<li className="mb-3 d-flex align-items-start">
										<i className="fa-solid fa-circle-check text-primary me-2 mt-1"></i> 
										<span>Papers published in Scopus-Indexed Edited Volume.</span>
									</li>
								</ul>

								<div className="btn-area1" data-aos="fade-left" data-aos-duration={1200}>
									<Link href="/about" className="vl-btn6">Learn More <i className="fa-solid fa-arrow-right ms-2"></i></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
