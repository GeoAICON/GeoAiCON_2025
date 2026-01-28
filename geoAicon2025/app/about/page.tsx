'use client'
import CountUp from 'react-countup'
import Countdown from '@/components/elements/Countdown'
import Layout from "@/components/layout/Layout"
import BrandSlider from '@/components/slider/BrandSlider'
import Link from "next/link"
export default function About() {

	return (
		<>

			<Layout headerStyle={6} footerStyle={6}>
				<div>
					<div className="inner-page-header" style={{ backgroundImage: 'url(/assets/img/bg/header-bg17.png)', backgroundSize: 'cover' }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-12 m-auto">
									<div className="heading1 text-center">
										<h1>About Geo-AI CON 2025</h1>
										<div className="space20" />
										<Link href="/">Home <i className="fa-solid fa-angle-right" /> <span>About Us</span></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== HERO AREA ENDS =======*/}
					{/*===== ABOUT AREA STARTS =======*/}
					<div className="about6-section-area sp1">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-6">
									<div className="about-imges">
										<div className="img1 reveal image-anime">
											<img src="/assets/img/all-images/about/geo-ai-about.png" alt="Geo-AI Drone" />
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="about-header-area heading6 ps-lg-4">
										<h5 data-aos="fade-left" data-aos-duration={800}><img src="/assets/img/icons/sub-logo1.svg" alt="" />ABOUT THE SUMMIT</h5>
										<div className="space16" />
										<h2 className="text-anime-style-3">Bridging Geospatial Science & Artificial Intelligence</h2>
										<div className="space16" />
										<p data-aos="fade-left" data-aos-duration={900}>Geo-AI CON 2025 is a premier gathering of scientists, researchers, and industry leaders focused on the intersection of Geospatial technology and AI. Organized by the Centre of Excellence (SEnSRS) at IIT Ropar, we aim to foster innovation in field surveying and data analytics.</p>
										<div className="space32" />
										<div className="about-counter-area bg-light p-4 rounded shadow-sm">
											<div className="row">
												<div className="col-4 text-center">
													<h2 className="text-primary"><CountUp className="odometer" enableScrollSpy={true} end={50} />+</h2>
													<p>Speakers</p>
												</div>
												<div className="col-4 text-center border-start">
													<h2 className="text-primary"><CountUp className="odometer" enableScrollSpy={true} end={10} />+</h2>
													<p>Tutorials</p>
												</div>
												<div className="col-4 text-center border-start">
													<h2 className="text-primary"><CountUp className="odometer" enableScrollSpy={true} end={500} />+</h2>
													<p>Attendees</p>
												</div>
											</div>
										</div>
										<div className="space32" />
										<div className="btn-area1" data-aos="fade-left" data-aos-duration={1200}>
											<Link href="/pricing-plan" className="vl-btn6">Register Now <img src="/assets/img/icons/arrow2.svg" alt="" /></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== ABOUT AREA ENDS =======*/}
					{/*===== OTHERS AREA STARTS =======*/}
					<div className="brands3-section-area sp2">
						<div className="container">
							<div className="row">
								<div className="col-lg-5 m-auto">
									<div className="brand-header heading4 space-margin60 text-center">
										<h3>Join 4,000+ companies already growing</h3>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12" data-aos="zoom-in" data-aos-duration={800}>
									<BrandSlider />
								</div>
							</div>
						</div>
					</div>
					{/*===== OTHERS AREA ENDS =======*/}
					{/*===== OTHERS AREA STARTS =======*/}
					<div className="choose-section-area sp2 bg-light">
						<div className="container">
							<div className="row">
								<div className="col-lg-6 m-auto">
									<div className="heading9 text-center space-margin60">
										<h5 className="text-primary">WHY CHOOSE US</h5>
										<div className="space18" />
										<h2>Why Attend Geo-AI CON?</h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-4 col-md-6 mb-4">
									<div className="choose-widget-boxarea bg-white p-4 shadow-sm h-100">
										<div className="icons bg-primary-light p-3 rounded-circle d-inline-block">
											<i className="fa-solid fa-microchip text-primary fs-3"></i>
										</div>
										<div className="space24" />
										<div className="content-area">
											<h4 className="mb-3">Advanced Tutorials</h4>
											<p>Hands-on experience with state-of-the-art instruments and modern field surveying techniques guided by domain experts.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 mb-4">
									<div className="choose-widget-boxarea bg-white p-4 shadow-sm h-100">
										<div className="icons bg-primary-light p-3 rounded-circle d-inline-block">
											<i className="fa-solid fa-book-open text-primary fs-3"></i>
										</div>
										<div className="space24" />
										<div className="content-area">
											<h4 className="mb-3">Scopus Publication</h4>
											<p>All accepted and registered papers will be published in a Scopus-Indexed Edited Volume (Taylor & Francis/Springer).</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 mb-4">
									<div className="choose-widget-boxarea bg-white p-4 shadow-sm h-100">
										<div className="icons bg-primary-light p-3 rounded-circle d-inline-block">
											<i className="fa-solid fa-network-wired text-primary fs-3"></i>
										</div>
										<div className="space24" />
										<div className="content-area">
											<h4 className="mb-3">Expert Networking</h4>
											<p>Connect with leading researchers and industry professionals from across the globe in a collaborative environment.</p>
										</div>
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