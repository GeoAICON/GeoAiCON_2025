
import Link from 'next/link'

export default function Footer6() {
	return (
		<>
			<div className="footer6-sertion-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="footer-logo-area">
								<img src="/assets/img/logo/logo2.png" alt="" />
								<div className="space16" />
								<p>We are committed to creating a platform where geospatial leaders, innovators, and professionals
									can come together to exchange ideas.</p>
								<div className="space24" />
								<ul>
									<li>
										<Link href="/#"><i className="fa-brands fa-facebook-f" /></Link>
									</li>
									<li>
										<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
									</li>
									<li>
										<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
									</li>
									<li>
										<Link href="/#" className="m-0"><i className="fa-brands fa-pinterest-p" /></Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-2 col-md-6">
							<div className="link-content">
								<h3>Quick Links</h3>
								<ul>
									<li><Link href="/about">About Us</Link></li>
									<li><Link href="/blog">Our Blogs</Link></li>
									<li><Link href="/event">Event Listing</Link></li>
									<li><Link href="/pricing-plan">Pricing Plan</Link></li>
									<li><Link href="/contact">Contact Us</Link></li>
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
										<div className="img1">
											<img src="/assets/img/all-images/footer/footer-img1.png" alt="" />
											<div className="icons">
												<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1">
											<img src="/assets/img/all-images/footer/footer-img2.png" alt="" />
											<div className="icons">
												<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1">
											<img src="/assets/img/all-images/footer/footer-img3.png" alt="" />
											<div className="icons">
												<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1">
											<img src="/assets/img/all-images/footer/footer-img4.png" alt="" />
											<div className="icons">
												<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1">
											<img src="/assets/img/all-images/footer/footer-img5.png" alt="" />
											<div className="icons">
												<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1">
											<img src="/assets/img/all-images/footer/footer-img6.png" alt="" />
											<div className="icons">
												<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="space60" />
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
