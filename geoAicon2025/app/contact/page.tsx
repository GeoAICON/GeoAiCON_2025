
import Countdown from '@/components/elements/Countdown'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Contact() {

	return (
		<>

			<Layout headerStyle={6} footerStyle={6}>
				<div>
					<div className="inner-page-header" style={{ backgroundImage: 'url(/assets/img/bg/header-bg17.png)', backgroundSize: 'cover' }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-12 m-auto">
									<div className="heading1 text-center">
										<h1>Contact Us</h1>
										<div className="space20" />
										<Link href="/" className="text-white">Home <i className="fa-solid fa-angle-right" /> <span>Contact Us</span></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== CONTACT AREA STARTS =======*/}
					<div className="contact-inner-section sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-6">
									<div className="contact-info-header heading6">
										<h5 className="text-primary">CONTACT DETAILS</h5>
										<div className="space16" />
										<h2>Get In Touch With The Organizing Team</h2>
										<div className="space24" />
										<p>We are here to help you with any queries regarding registration, paper submission, or the hands-on tutorials.</p>
										<div className="space32" />
										<div className="contact-info-list bg-light p-4 rounded shadow-sm">
											<div className="d-flex align-items-center mb-3">
												<div className="icon me-3 text-primary"><i className="fa-solid fa-envelope fs-4"></i></div>
												<div>
													<h5 className="mb-0">Email Us</h5>
													<Link href="mailto:coe@sensrs.com" className="text-muted">coe@sensrs.com</Link>
												</div>
											</div>
											<div className="d-flex align-items-center mb-3">
												<div className="icon me-3 text-primary"><i className="fa-solid fa-phone fs-4"></i></div>
												<div>
													<h5 className="mb-0">Call Us</h5>
													<Link href="tel:+918146667633" className="text-muted">+91 81466 67633</Link>
												</div>
											</div>
											<div className="d-flex align-items-center">
												<div className="icon me-3 text-primary"><i className="fa-solid fa-location-dot fs-4"></i></div>
												<div>
													<h5 className="mb-0">Our Location</h5>
													<p className="text-muted mb-0">IIT Ropar, Punjab, India</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6 mt-lg-0 mt-5" data-aos="zoom-in" data-aos-duration={1000}>
									<div className="contact4-boxarea bg-white p-4 shadow rounded">
										<h3 className="mb-4">Send Us A Message</h3>
										<div className="row">
											<div className="col-lg-6 col-md-6 mb-3">
												<div className="input-area"><input type="text" placeholder="Name" className="form-control" /></div>
											</div>
											<div className="col-lg-6 col-md-6 mb-3">
												<div className="input-area"><input type="text" placeholder="Phone" className="form-control" /></div>
											</div>
											<div className="col-lg-12 mb-3">
												<div className="input-area"><input type="email" placeholder="Email" className="form-control" /></div>
											</div>
											<div className="col-lg-12 mb-3">
												<div className="input-area"><input type="text" placeholder="Subjects" className="form-control" /></div>
											</div>
											<div className="col-lg-12 mb-3">
												<div className="input-area"><textarea placeholder="Message" className="form-control" rows={4} /></div>
											</div>
											<div className="col-lg-12">
												<button type="submit" className="vl-btn6 w-100">Submit Now <img src="/assets/img/icons/arrow2.svg" alt="" /></button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					{/*===== MAP AREA STARTS =======*/}
					<div className="map-area sp2">
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="map-container rounded overflow-hidden shadow-sm" style={{ height: '450px' }}>
										<iframe 
											src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3422.383181827!2d76.5165840751994!3d30.93290377502447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905543313e79bd3%3A0x1da6d1607c33005a!2sIndian%20Institute%20of%20Technology%20Ropar!5e0!3m2!1sen!2sin!4v1705850000000!5m2!1sen!2sin" 
											width="100%" 
											height="100%" 
											style={{ border: 0 }} 
											allowFullScreen 
											loading="lazy" 
											referrerPolicy="no-referrer-when-downgrade" 
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</Layout>
		</>
	)
}