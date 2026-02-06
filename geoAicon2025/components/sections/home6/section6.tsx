
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
                                    EVENT SPEAKERS
                                </h5>
								<h2 className="text-anime-style-3">Keynote Speakers</h2>
							</div>
						</div>
					</div>
					<div className="row g-4">
						<div className="col-lg-3 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-duration={900}>
							<div className="team-widget-area">
								<div className="img1 image-anime">
									<img src="/speakers/Biswajeet Pradhan.jpg" alt="Prof. Biswajeet Pradhan" className="img-fluid w-100" style={{ height: '320px', objectFit: 'cover' }} />
								</div>
								<div className="img2">
									<img src="/assets/img/elements/brand-img1.png" alt="" />
								</div>
								<div className="content-area pt-3">
									<Link href="/speakers" className="h4 d-block mb-1 text-decoration-none text-dark hover-primary">Prof. Biswajeet Pradhan</Link>
									<p className="text-muted small mb-0">UTS, Australia</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-duration={1000}>
							<div className="team-widget-area">
								<div className="img1 image-anime">
									<img src="/speakers/Mahesh Jaat.jpg" alt="Prof. Mahesh Kumar Jat" className="img-fluid w-100" style={{ height: '320px', objectFit: 'cover' }} />
								</div>
								<div className="img2">
									<img src="/assets/img/elements/brand-img2.png" alt="" />
								</div>
								<div className="content-area pt-3">
									<Link href="/speakers" className="h4 d-block mb-1 text-decoration-none text-dark hover-primary">Prof. Mahesh Kumar Jat</Link>
									<p className="text-muted small mb-0">MNIT Jaipur</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-duration={1100}>
							<div className="team-widget-area">
								<div className="img1 image-anime">
									<img src="/speakers/Akshar Tripathy.jpg" alt="Prof. Akshar Tripathi" className="img-fluid w-100" style={{ height: '320px', objectFit: 'cover' }} />
								</div>
								<div className="img2">
									<img src="/assets/img/elements/brand-img3.png" alt="" />
								</div>
								<div className="content-area pt-3">
									<Link href="/speakers" className="h4 d-block mb-1 text-decoration-none text-dark hover-primary">Prof. Akshar Tripathi</Link>
									<p className="text-muted small mb-0">IIT Patna</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-duration={1200}>
							<div className="team-widget-area">
								<div className="img1 image-anime">
									<img src="/speakers/Avik Bhattacharya.jpg" alt="Prof. Avik Bhattacharya" className="img-fluid w-100" style={{ height: '320px', objectFit: 'cover' }} />
								</div>
								<div className="img2">
									<img src="/assets/img/elements/brand-img4.png" alt="" />
								</div>
								<div className="content-area pt-3">
									<Link href="/speakers" className="h4 d-block mb-1 text-decoration-none text-dark hover-primary">Prof. Avik Bhattacharya</Link>
									<p className="text-muted small mb-0">IIT Bombay</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
