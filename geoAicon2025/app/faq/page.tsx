'use client'
import Countdown from '@/components/elements/Countdown'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function Faq() {
	const [isTab, setIsTab] = useState(1)
	const handleTab = (i: number) => {
		setIsTab(i)
	}
	const [isAccordion, setIsAccordion] = useState(1)

const handleAccordion = (key: any) => {
    setIsAccordion(prevState => prevState === key ? null : key)
}
	return (
		<>

			<Layout headerStyle={6} footerStyle={6}>
				<div>
					<div className="inner-page-header" style={{ backgroundImage: 'url(/assets/img/bg/header-bg17.png)', backgroundSize: 'cover' }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-9 m-auto">
									<div className="heading1 text-center">
										<h1>Frequently Asked Question</h1>
										<div className="space20" />
										<Link href="/" className="text-white">Home <i className="fa-solid fa-angle-right" /> <span>FAQ</span></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== HERO AREA ENDS =======*/}
					{/*===== FAQ AREA STARTS =======*/}
					<div className="faq-inner-section-area sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-7 m-auto">
									<div className="heading6 text-center space-margin60">
										<h5 className="text-primary">FAQ,s</h5>
										<div className="space18" />
										<h2>Common Questions</h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-11 m-auto">
									<div className="faq-widget-area">
										<ul className="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
											<li className="nav-item" onClick={() => handleTab(1)}>
												<button className={isTab == 1 ? "nav-link active" : "nav-link"} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All</button>
											</li>
											<li className="nav-item" onClick={() => handleTab(2)}>
												<button className={isTab == 2 ? "nav-link active" : "nav-link"} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Event Information</button>
											</li>
											<li className="nav-item" onClick={() => handleTab(3)}>
												<button className={isTab == 3 ? "nav-link active" : "nav-link"} id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Registration</button>
											</li>
										</ul>
										<div className="space48" />
										<div className="tab-content" id="pills-tabContent">
											<div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
												<div className="faq-section-area">
													<div className="row">
														<div className="col-lg-6">
															<div className="accordian-area">
																<div className="accordion" id="accordionExample">
																	<div className="accordion-item shadow-sm border-0 mb-3">
																		<h2 className="accordion-header" onClick={() => handleAccordion (1)}>
																			<button className={isAccordion == 1 ? "accordion-button" : "accordion-button collapsed"} type="button">What is Geo-AI CON 2025?</button>
																		</h2>
																		<div className={isAccordion == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
																			<div className="accordion-body text-muted">
																				Geo-AI CON 2025 is a premier summit focusing on the intersection of Geospatial Science and Artificial Intelligence, organized by SEnSRS, IIT Ropar.
																			</div>
																		</div>
																	</div>
																	<div className="accordion-item shadow-sm border-0 mb-3">
																		<h2 className="accordion-header" onClick={() => handleAccordion (2)}>
																			<button className={isAccordion == 2 ? "accordion-button" : "accordion-button collapsed"} type="button">When will the conference take place?</button>
																		</h2>
																		<div className={isAccordion == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
																			<div className="accordion-body text-muted">
																				The conference is scheduled from 5th to 8th September 2025 at IIT Ropar, Punjab, India.
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="accordian-area">
																<div className="accordion" id="accordionExample2">
																	<div className="accordion-item shadow-sm border-0 mb-3">
																		<h2 className="accordion-header" onClick={() => handleAccordion (3)}>
																			<button className={isAccordion == 3 ? "accordion-button" : "accordion-button collapsed"} type="button">Are there any publication opportunities?</button>
																		</h2>
																		<div className={isAccordion == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
																			<div className="accordion-body text-muted">
																				Yes, accepted and presented papers will be submitted for publication in Scopus-indexed proceedings.
																			</div>
																		</div>
																	</div>
																	<div className="accordion-item shadow-sm border-0 mb-3">
																		<h2 className="accordion-header" onClick={() => handleAccordion (4)}>
																			<button className={isAccordion == 4 ? "accordion-button" : "accordion-button collapsed"} type="button">Can I attend online?</button>
																		</h2>
																		<div className={isAccordion == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
																			<div className="accordion-body text-muted">
																				Yes, the conference offers a hybrid model with specific online technical sessions for remote participants.
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
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