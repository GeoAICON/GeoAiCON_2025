
import Link from 'next/link'

export default function Section4() {
	return (
		<>

			<div className="event6-section-area sp1" id="schedule">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 m-auto">
							<div className="event-heading heading9 text-center mb-5">
								<h5 className="mb-3 d-inline-flex align-items-center gap-2">
                                    Schedule
                                </h5>
								<h2 className="text-anime-style-3">Detailed Event Schedule</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							{/* DAY 1 */}
							<div className="event6-widget-boxarea" data-aos="fade-left" data-aos-duration={1000}>
								<div className="row align-items-center g-4">
									<div className="col-lg-6">
										<div className="img1 image-anime reveal">
											<img src="/Gallery/PhotoGallery/Selected/IMG_9803.jpg" alt="Day 1" className="img-fluid w-100 rounded shadow-sm" />
										</div>
									</div>
									<div className="col-lg-6">
										<div className="content-area ps-lg-4">
											<h3 className="text-anime-style-3 mb-4">Day 1: Inaugural & Keynotes</h3>
											
											<ul className="schedule-info-list mb-4 list-unstyled">
												<li className="mb-2"><Link href="/#" className="d-flex align-items-center gap-2 text-decoration-none text-dark"><img src="/assets/img/icons/clock1.svg" alt="" width={16} /> Friday, 5th Sep | 09:00 AM - 04:00 PM</Link></li>
												<li className="mt-2"><Link href="/#" className="d-flex align-items-center gap-2 text-decoration-none text-dark"><img src="/assets/img/icons/location1.svg" alt="" width={16} /> Senate Hall, Admin Block, IIT Ropar</Link></li>
											</ul>
											<h5 className="mb-3">Session Highlights:</h5>
											<ul className="highlights-list list-unstyled pl-0">
												<li className="mb-2 d-flex align-items-start gap-2"><i className="fa-solid fa-chevron-right text-primary mt-1"></i> <span>Prof. Biswajeet Pradhan (UTS, Australia)</span></li>
												<li className="mb-2 d-flex align-items-start gap-2"><i className="fa-solid fa-chevron-right text-primary mt-1"></i> <span>Prof. Mahesh Kumar Jat (MNIT Jaipur)</span></li>
												<li className="mb-2 d-flex align-items-start gap-2"><i className="fa-solid fa-chevron-right text-primary mt-1"></i> <span>Prof. Akshar Tripathi (IIT Patna)</span></li>
												<li className="mb-2 d-flex align-items-start gap-2"><i className="fa-solid fa-chevron-right text-primary mt-1"></i> <span>Technical Sessions I & II (Onsite)</span></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
                            
                            {/* Spacer */}
							<div className="py-5" />
							
							{/* DAY 2 */}
							<div className="event6-widget-boxarea2" data-aos="fade-right" data-aos-duration={1100}>
								<div className="row align-items-center g-4">
									<div className="col-lg-6 order-lg-2">
										<div className="img1 image-anime reveal">
											<img src="/Landing/KeyNoteSeesion.jpg" alt="Day 2" className="img-fluid w-100 rounded shadow-sm" />
										</div>
									</div>
									<div className="col-lg-6 order-lg-1">
										<div className="content-area pe-lg-4">
											<h3 className="text-anime-style-3 mb-4">Day 2: Keynotes & Online Sessions</h3>
											
											<ul className="schedule-info-list mb-4 list-unstyled">
												<li className="mb-2"><Link href="/#" className="d-flex align-items-center gap-2 text-decoration-none text-dark"><img src="/assets/img/icons/clock1.svg" alt="" width={16} /> Saturday, 6th Sep | 09:30 AM - 04:00 PM</Link></li>
												<li className="mt-2"><Link href="/#" className="d-flex align-items-center gap-2 text-decoration-none text-dark"><img src="/assets/img/icons/location1.svg" alt="" width={16} /> Radha Krishnan Block & Online</Link></li>
											</ul>
											<h5 className="mb-3">Session Highlights:</h5>
											<ul className="highlights-list list-unstyled">
												<li className="mb-2 d-flex align-items-start gap-2"><i className="fa-solid fa-chevron-right text-primary mt-1"></i> <span>Prof. Avik Bhattacharya (IIT Bombay)</span></li>
												<li className="mb-2 d-flex align-items-start gap-2"><i className="fa-solid fa-chevron-right text-primary mt-1"></i> <span>Prof. Mahesh Pal (NIT Kurukshetra)</span></li>
												<li className="mb-2 d-flex align-items-start gap-2"><i className="fa-solid fa-chevron-right text-primary mt-1"></i> <span>Prof. Ajanta Goswami (IIT Roorkee)</span></li>
												<li className="mb-2 d-flex align-items-start gap-2"><i className="fa-solid fa-chevron-right text-primary mt-1"></i> <span>Technical Sessions III & IV (Online)</span></li>
											</ul>
										</div>
									</div>
								</div>
							</div>

                            {/* Spacer */}
							<div className="py-5" />
 
							{/* DAY 3 */}
							<div className="event6-widget-boxarea3" data-aos="fade-left" data-aos-duration={1200}>
								<div className="row align-items-center g-4">
									<div className="col-lg-6">
										<div className="img1 image-anime reveal">
											<img src="/Landing/HandsOnTut.jpg" alt="Day 3" className="img-fluid w-100 rounded shadow-sm" />
										</div>
									</div>
									<div className="col-lg-6">
										<div className="content-area ps-lg-4">
											<h3 className="text-anime-style-3 mb-4">Day 3: Hands-on Tutorials</h3>
											
											<ul className="schedule-info-list mb-4 list-unstyled">
												<li className="mb-2"><Link href="/#" className="d-flex align-items-center gap-2 text-decoration-none text-dark"><img src="/assets/img/icons/clock1.svg" alt="" width={16} /> Sunday, 7th Sep | 09:30 AM - 04:00 PM</Link></li>
												<li className="mt-2"><Link href="/#" className="d-flex align-items-center gap-2 text-decoration-none text-dark"><img src="/assets/img/icons/location1.svg" alt="" width={16} /> Geomatics Engineering Lab</Link></li>
											</ul>
											<h5 className="mb-3">Tutorial Highlights:</h5>
											<ul className="highlights-list list-unstyled">
												<li className="mb-2 d-flex align-items-start gap-2"><i className="fa-solid fa-chevron-right text-primary mt-1"></i> <span>Hands-on Drone Mapping & Surveying</span></li>
												<li className="mb-2 d-flex align-items-start gap-2"><i className="fa-solid fa-chevron-right text-primary mt-1"></i> <span>Advanced Surveying Techniques</span></li>
												<li className="mb-2 d-flex align-items-start gap-2"><i className="fa-solid fa-chevron-right text-primary mt-1"></i> <span>Individual Guidance by Experts</span></li>
											</ul>
										</div>
									</div>
								</div>
							</div>

                            {/* Spacer */}
							<div className="py-5" />

							{/* DAY 4 */}
							<div className="event6-widget-boxarea" data-aos="fade-right" data-aos-duration={1300}>
								<div className="row align-items-center g-4">
									<div className="col-lg-6 order-lg-2">
										<div className="img1 image-anime reveal">
											<img src="/Landing/Awards.jpg" alt="Day 4" className="img-fluid w-100 rounded shadow-sm" />
										</div>
									</div>
									<div className="col-lg-6 order-lg-1">
										<div className="content-area pe-lg-4">
											<h3 className="text-anime-style-3 mb-4">Day 4: Online Sessions & Awards</h3>
											
											<ul className="schedule-info-list mb-4 list-unstyled">
												<li className="mb-2"><Link href="/#" className="d-flex align-items-center gap-2 text-decoration-none text-dark"><img src="/assets/img/icons/clock1.svg" alt="" width={16} /> Monday, 8th Sep | 10:30 AM - 04:00 PM</Link></li>
												<li className="mt-2"><Link href="/#" className="d-flex align-items-center gap-2 text-decoration-none text-dark"><img src="/assets/img/icons/location1.svg" alt="" width={16} /> Online Conference Platform</Link></li>
											</ul>
											<h5 className="mb-3">Session Highlights:</h5>
											<ul className="highlights-list list-unstyled">
												<li className="mb-2 d-flex align-items-start gap-2"><i className="fa-solid fa-chevron-right text-primary mt-1"></i> <span>Prof. Prashant Kumar Srivastav (BHU)</span></li>
												<li className="mb-2 d-flex align-items-start gap-2"><i className="fa-solid fa-chevron-right text-primary mt-1"></i> <span>Technical Sessions V & VI (Online)</span></li>
												<li className="mb-2 d-flex align-items-start gap-2"><i className="fa-solid fa-chevron-right text-primary mt-1"></i> <span>Award Ceremony & Valedictory</span></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
