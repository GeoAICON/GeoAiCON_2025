'use client'
import CountUp from 'react-countup'
import Layout from "@/components/layout/Layout"
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

					{/*===== ABOUT AREA STARTS =======*/}
					<div className="about6-section-area sp1">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-6">
									<div className="about-imges">
										<div className="img1 reveal image-anime">
											<img src="/Landing/AboutEvent.jpg" alt="Geo-AI Conference IIT Ropar" className="w-100 rounded shadow-lg" />
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="about-header-area heading6 ps-lg-4">
										<h5 data-aos="fade-left" data-aos-duration={800}>
		
											THEME: GEOSPATIAL ARTIFICIAL INTELLIGENCE
										</h5>
										<div className="space16" />
										<h2 className="text-anime-style-3">Pioneering the Future of Geospatial Innovation</h2>
										<div className="space16" />
										<p data-aos="fade-left" data-aos-duration={900}>
											Geo-AI CON 2025 is a premier academic summit dedicated to the convergence of Geospatial Science and Artificial Intelligence. Organized by the Centre of Excellence in Socio-Environmental Sustainability for River Sand Mining (SEnSRS) at IIT Ropar, this conference serves as a global platform for researchers, academicians, and industry professionals to exchange groundbreaking ideas and foster interdisciplinary collaboration.
										</p>
										<div className="space16" />
										<p data-aos="fade-left" data-aos-duration={900}>
											The conference focuses on cutting-edge advancements in GeoAI, Earth Observation, Drone Mapping, Advanced Surveying, and Spatial Analytics. By integrating rigorous academic research with practical applications, we aim to address complex socio-environmental challenges and drive innovation in the geospatial domain.
										</p>
										<div className="space32" />
										<div className="about-counter-area bg-light p-4 rounded shadow-sm">
											<div className="row">
												<div className="col-4 text-center">
													<h2 className="text-primary"><CountUp className="odometer" enableScrollSpy={true} end={10} />+</h2>
													<p>Keynote Speakers</p>
												</div>
												<div className="col-4 text-center border-start">
													<h2 className="text-primary"><CountUp className="odometer" enableScrollSpy={true} end={6} />+</h2>
													<p>Technical Sessions</p>
												</div>
												<div className="col-4 text-center border-start">
													<h2 className="text-primary"><CountUp className="odometer" enableScrollSpy={true} end={4} /></h2>
													<p>Days (Hybrid)</p>
												</div>
											</div>
										</div>
										<div className="space32" />
										<div className="btn-area1" data-aos="fade-left" data-aos-duration={1200}>
											<Link href="/pricing-plan" className="vl-btn6">Registration Details <img src="/assets/img/icons/arrow2.svg" alt="" /></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== ABOUT AREA ENDS =======*/}

					{/*===== HIGHLIGHTS AREA STARTS =======*/}
					<div className="choose-section-area sp2 bg-light">
						<div className="container">
							<div className="row">
								<div className="col-lg-6 m-auto">
									<div className="heading9 text-center space-margin60">
										<h5 className="text-primary">CONFERENCE HIGHLIGHTS</h5>
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
											<h4 className="mb-3">Hands-on Tutorials</h4>
											<p>Expert-led practical sessions focusing on modern field surveying instruments, drone data processing, and advanced geospatial AI methodologies.</p>
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
											<p>Accepted papers will be published in Scopus-indexed proceedings (Taylor & Francis / Springer) with NO Article Processing Charges (APC).</p>
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
											<p>A unique opportunity to connect with distinguished academicians, scientists, and industry leaders in a collaborative research environment.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== HIGHLIGHTS AREA ENDS =======*/}

				</div>
			</Layout>
		</>
	)
}