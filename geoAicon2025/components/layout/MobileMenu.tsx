'use client'
import { useState } from 'react';
import Link from 'next/link'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
	const [isAccordion, setIsAccordion] = useState(1)

const handleAccordion = (key: any) => {
    setIsAccordion(prevState => prevState === key ? null : key)
}
	return (
		<>
			<div className="mobile-header mobile-haeder1 d-block d-lg-none">
				<div className="container-fluid">
					<div className="col-12">
						<div className="mobile-header-elements">
							<div className="mobile-logo">
								<Link href="/" className="text-decoration-none">
									<h2 className="m-0 text-primary fw-bold" style={{fontSize: '24px', letterSpacing: '-0.5px'}}>
										GeoAI <span className="text-dark">CON</span>
									</h2>
								</Link>
							</div>
							<div className="mobile-nav-icon dots-menu" onClick={handleMobileMenu}>
								<i className="fa-solid fa-bars-staggered" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`mobile-sidebar mobile-sidebar1 ${isMobileMenu ? 'mobile-menu-active' : ''}`}>
				<div className="logosicon-area">
					<div className="logos">
						<Link href="/" className="text-decoration-none">
							<h2 className="m-0 text-white fw-bold" style={{fontSize: '28px', letterSpacing: '-0.5px'}}>
								GeoAI <span className="text-primary">CON</span>
							</h2>
						</Link>
					</div>
					<div className="menu-close" onClick={handleMobileMenu}>
						<i className="fa-solid fa-xmark" />
					</div>
				</div>
				<div className="mobile-nav mobile-nav1">
					<ul className="mobile-nav-list nav-list1">
						<li className="hash-has-sub"><Link href="/" className="hash-nav" onClick={handleMobileMenu}>Home</Link></li>
						<li className="hash-has-sub"><Link href="/about" className="hash-nav" onClick={handleMobileMenu}>About Event</Link></li>
						<li className="hash-has-sub"><Link href="/speakers" className="hash-nav" onClick={handleMobileMenu}>Speakers</Link></li>
						<li className="hash-has-sub"><Link href="/event-schedule" className="hash-nav" onClick={handleMobileMenu}>Schedule</Link></li>
						<li className="hash-has-sub"><Link href="/pricing-plan" className="hash-nav" onClick={handleMobileMenu}>Registration</Link></li>
						<li className="has-sub hash-has-sub">
							<span className={`submenu-button ${isAccordion  == 5 ? "submenu-opened" : ""}`} onClick={() => handleAccordion (5)}><em /></span>
							<Link href="/#" className="hash-nav">Pages</Link>
							<ul className={`sub-menu ${isAccordion  == 5 ? "open-sub" : ""}`} style={{ display: `${isAccordion  == 5 ? "block" : "none"}` }}>
								<li className="hash-has-sub"><Link href="/faq" className="hash-nav" onClick={handleMobileMenu}>FAQ,s</Link></li>
								<li className="hash-has-sub"><Link href="/contact" className="hash-nav" onClick={handleMobileMenu}>Contact Us</Link></li>
							</ul>
						</li>
					</ul>

					<div className="allmobilesection">
						<Link href="/pricing-plan" className="vl-btn1">Register Now</Link>
						<div className="single-footer mt-4">
							<h3>Contact Info</h3>
							<div className="footer1-contact-info">
								<div className="contact-info-single">
									<div className="contact-info-icon">
										<span><i className="fa-solid fa-phone-volume" /></span>
									</div>
									<div className="contact-info-text">
										<Link href="tel:+918146667633">+91 81466 67633</Link>
									</div>
								</div>
								<div className="contact-info-single">
									<div className="contact-info-icon">
										<span><i className="fa-solid fa-envelope" /></span>
									</div>
									<div className="contact-info-text">
										<Link href="mailto:coe@sensrs.com">coe@sensrs.com</Link>
									</div>
								</div>
								<div className="single-footer">
									<h3>Our Location</h3>
									<div className="contact-info-single">
										<div className="contact-info-icon">
											<span><i className="fa-solid fa-location-dot" /></span>
										</div>
										<div className="contact-info-text">
											<Link href="#">IIT Ropar, Punjab, India</Link>
										</div>
									</div>
								</div>
								<div className="single-footer">
									<h3>Social Links</h3>
									<div className="social-links-mobile-menu">
										<ul>
											<li><Link href="#"><i className="fa-brands fa-facebook-f" /></Link></li>
											<li><Link href="#"><i className="fa-brands fa-instagram" /></Link></li>
											<li><Link href="#"><i className="fa-brands fa-linkedin-in" /></Link></li>
										</ul>
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
