
import Link from 'next/link'

export default function Section3() {
	return (
		<>

			<div className="about6-section-area sp1" id="about">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="row">
								<div className="col-lg-12">
									<div className="img1 reveal image-anime">
										<img src="/assets/img/all-images/about/geo-ai-about.png" alt="Geo-AI Summit" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="about6-header heading9">
								<h5 data-aos="fade-left" data-aos-duration={700}><img src="/assets/img/icons/sub-logo1.svg" alt="" />About Geo-AI CON 2025</h5>
								<div className="space20" />
								<h2 className="text-anime-style-3">Explore the Frontiers of Geospatial AI</h2>
								<div className="space16" />
								<p data-aos="fade-left" data-aos-duration={900}>Geo-AI CON 2025 aims to bring together leading researchers, industry professionals, & domain experts to explore the frontiers of Geospatial Artificial Intelligence.</p>
								<div className="space16" />
								<p data-aos="fade-left" data-aos-duration={1000}><strong>Organizing Secretary:</strong> Dr. Reet Kamal Tiwari, Associate Professor, IIT Ropar, India</p>
								<div className="space16" />
								<ul className="list-unstyled" data-aos="fade-left" data-aos-duration={1100}>
									<li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> Tutorials on modern field surveying techniques.</li>
									<li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> Hands-on experience with state-of-the-art instruments.</li>
									<li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> Papers published in Scopus-Indexed Edited Volume.</li>
								</ul>
								<div className="space32" />
								<div className="btn-area1" data-aos="fade-left" data-aos-duration={1200}>
									<Link href="/about" className="vl-btn6">Learn More <img src="/assets/img/icons/arrow2.svg" alt="" /></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
