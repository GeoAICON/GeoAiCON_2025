
import Link from 'next/link'

export default function Section6() {
	return (
		<>

			<div className="team6-section-area sp2" id="speakers">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 m-auto">
							<div className="team-heading heading9 text-center mb-5">
								<h5 className="mb-3 d-inline-flex align-items-center gap-2">
                                    <img src="/assets/img/icons/sub-logo1.svg" alt="" width={18}/> 
                                    EVENT SPEAKERS
                                </h5>
								<h2 className="text-anime-style-3">Keynote Speakers (Tentative)</h2>
								<p className="mt-2 text-muted">*Illustrative list. Final speakers to be announced.</p>
							</div>
						</div>
					</div>
					<div className="row g-4">
						<div className="col-lg-3 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-duration={900}>
							<div className="team-widget-area">
								<div className="img1 image-anime">
									<img src="/assets/img/all-images/team/team-img20.png" alt="Alex Carter" className="img-fluid w-100" />
								</div>
								<div className="img2">
									<img src="/assets/img/elements/brand-img1.png" alt="" />
								</div>
								<div className="content-area pt-3">
									<Link href="/speakers-single" className="h4 d-block mb-1 text-decoration-none text-dark hover-primary">Alex Carter</Link>
									<p className="text-muted small mb-0">Geospatial Strategist, Data Lead At GeoTech.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-duration={1000}>
							<div className="team-widget-area">
								<div className="img1 image-anime">
									<img src="/assets/img/all-images/team/team-img21.png" alt="Jessica Lee" className="img-fluid w-100" />
								</div>
								<div className="img2">
									<img src="/assets/img/elements/brand-img2.png" alt="" />
								</div>
								<div className="content-area pt-3">
									<Link href="/speakers-single" className="h4 d-block mb-1 text-decoration-none text-dark hover-primary">Jessica Lee</Link>
									<p className="text-muted small mb-0">AI Research Scientist, Specializing in Computer Vision.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-duration={1100}>
							<div className="team-widget-area">
								<div className="img1 image-anime">
									<img src="/assets/img/all-images/team/team-img22.png" alt="Michael Davis" className="img-fluid w-100" />
								</div>
								<div className="img2">
									<img src="/assets/img/elements/brand-img3.png" alt="" />
								</div>
								<div className="content-area pt-3">
									<Link href="/speakers-single" className="h4 d-block mb-1 text-decoration-none text-dark hover-primary">Michael Davis</Link>
									<p className="text-muted small mb-0">GIS Specialist, Expert in Urban Planning Algorithms.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-duration={1200}>
							<div className="team-widget-area">
								<div className="img1 image-anime">
									<img src="/assets/img/all-images/team/team-img23.png" alt="John Carry" className="img-fluid w-100" />
								</div>
								<div className="img2">
									<img src="/assets/img/elements/brand-img4.png" alt="" />
								</div>
								<div className="content-area pt-3">
									<Link href="/speakers-single" className="h4 d-block mb-1 text-decoration-none text-dark hover-primary">John Carry</Link>
									<p className="text-muted small mb-0">Chief Data Officer, AI Ethics Advisor at FutureMap.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
