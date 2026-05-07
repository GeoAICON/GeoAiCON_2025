
import Countdown from '@/components/elements/Countdown'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function PricingPlan() {

	return (
		<>

			<Layout headerStyle={6} footerStyle={6}>
				<div>
					<div className="inner-page-header" style={{ backgroundImage: 'url(/assets/img/bg/header-bg17.png)', backgroundSize: 'cover' }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-9 m-auto">
									<div className="heading1 text-center">
										<h1>Registration Fees</h1>
										<div className="space20" />
										<Link href="/" className="text-white">Home <i className="fa-solid fa-angle-right" /> <span>Pricing Plan</span></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== PRICING AREA STARTS =======*/}
					<div className="pricing-lan-section-area sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-5 m-auto">
									<div className="heading6 text-center space-margin60">
										<h5 className="text-primary">REGISTRATION</h5>
										<div className="space18" />
										<h2>Event Pass & Tickets</h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-3 col-md-6 mb-4">
									<div className="pricing-boxarea h-100 shadow-sm border-0">
										<h5>Students / Researchers</h5>
										<div className="space20" />
										<h2>₹ 4,000</h2>
										<div className="space8" />
										<ul>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Full Access</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Tutorials</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Certification</li>
										</ul>
										<div className="space28" />
										<div className="btn-area1">
											<Link href="/contact" className="vl-btn6">Register Now</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 mb-4">
									<div className="pricing-boxarea h-100 shadow-sm border-0 active">
										<h5>ISRS Members</h5>
										<div className="space20" />
										<h2>₹ 6,000</h2>
										<div className="space8" />
										<ul>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Full Access</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Networking Lunch</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Certification</li>
										</ul>
										<div className="space28" />
										<div className="btn-area1">
											<Link href="/contact" className="vl-btn6">Register Now</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 mb-4">
									<div className="pricing-boxarea h-100 shadow-sm border-0">
										<h5>Academicians</h5>
										<div className="space20" />
										<h2>₹ 7,000</h2>
										<div className="space8" />
										<ul>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Full Access</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Paper Presentation</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Conference Kit</li>
										</ul>
										<div className="space28" />
										<div className="btn-area1">
											<Link href="/contact " className="vl-btn6">Register Now</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 mb-4">
									<div className="pricing-boxarea h-100 shadow-sm border-0 box2">
										<h5>Industry Professionals</h5>
										<div className="space20" />
										<h2>₹ 8,000</h2>
										<div className="space8" />
										<ul>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Full Access</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Showcase Booth</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />VIP Networking</li>
										</ul>
										<div className="space28" />
										<div className="btn-area1">
											<Link href="/contact" className="vl-btn6">Register Now</Link>
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