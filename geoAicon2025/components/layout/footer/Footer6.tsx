
import Link from 'next/link'

export default function Footer6() {
	return (
		<>
			<div className="footer6-sertion-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="footer-logo-area">
								<Link href="/" className="text-decoration-none">
									<img 
										src="/GeoAiConLogo.png" 
										alt="GeoAiCon Logo" 
										className="img-fluid mb-2"
										style={{ height: '90px', width: 'auto', objectFit: 'contain' }} 
									/>
								</Link>
								<div className="space16" />
								<p>We are committed to creating a platform where geospatial leaders, innovators, and professionals
									can come together to exchange ideas.</p>
								<div className="space24" />
								<ul>
									<li>
										<Link href="https://www.facebook.com/profile.php?id=61582803331985"><i className="fa-brands fa-facebook-f" /></Link>
									</li>
									<li>
										<Link href="https://www.linkedin.com/groups/15392053/"><i className="fa-brands fa-linkedin-in" /></Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-2 col-md-6">
							<div className="link-content">
								<h3>Quick Links</h3>
								<ul>
									<li><Link href="/">Home</Link></li>
									<li><Link href="/about">About Event</Link></li>
									<li><Link href="/speakers">Speakers</Link></li>
									<li><Link href="/event-schedule">Schedule</Link></li>
									<li><Link href="/pricing-plan">Registration</Link></li>
									<li><Link href="/faq">FAQ's</Link></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="link-content2">
								<h3>Contact Us</h3>
								<ul>
									<li>
										<Link href="/tel:+918146667633"><img src="/assets/img/icons/phn1.svg" alt="" />+91 81466 67633</Link>
									</li>
									<li>
										<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" />IIT Ropar, Punjab, India</Link>
									</li>
									<li>
										<Link href="/mailto:coe@sensrs.com"><img src="/assets/img/icons/mail1.svg" alt="" />coe@sensrs.com</Link>
									</li>
									<li>
										<Link href="/#"> <img src="/assets/img/icons/world1.svg" alt="" />sensrs.com/geoai-summit</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="footer-social-box">
								<h3>Our Recent Event Gallery</h3>
								<div className="space12" />
								<div className="row">
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1 position-relative">
											<Link href="/gallery/photos">
												<img src="/Landing/20250905_151115.jpg" alt="Inauguration" className="w-100 rounded object-fit-cover" style={{ height: '80px' }} />
											</Link>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1 position-relative">
											<Link href="/gallery/photos">
												<img src="/Landing/KeyNoteSeesion.jpg" alt="Keynotes" className="w-100 rounded object-fit-cover" style={{ height: '80px' }} />
											</Link>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1 position-relative">
											<Link href="/gallery/photos">
												<img src="/Landing/HandsOnTut.jpg" alt="Tutorials" className="w-100 rounded object-fit-cover" style={{ height: '80px' }} />
											</Link>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1 position-relative">
											<Link href="/gallery/photos">
												<img src="/Landing/Awards.jpg" alt="Awards" className="w-100 rounded object-fit-cover" style={{ height: '80px' }} />
											</Link>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1 position-relative">
											<Link href="/gallery/photos">
												<img src="/Gallery/PhotoGallery/Inaugration/IMG_9794.jpg" alt="Gallery 1" className="w-100 rounded object-fit-cover" style={{ height: '80px' }} />
											</Link>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1 position-relative">
											<Link href="/gallery/photos">
												<img src="/Gallery/PhotoGallery/Selected/20250906_113054.jpg" alt="Gallery 2" className="w-100 rounded object-fit-cover" style={{ height: '80px' }} />
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="space20" />
					<div className="row">
						<div className="col-lg-12">
							<div className="copyright">
								<p>© Copyright {new Date().getFullYear()} - GeoAiCon. All Right Reserved</p>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
