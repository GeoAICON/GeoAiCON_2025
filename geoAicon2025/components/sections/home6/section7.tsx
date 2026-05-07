
import Link from 'next/link'

export default function Section7() {
	return (
		<>

			<div className="others-pricing-area sp2" id="registration">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 m-auto">
							<div className="pricing-heading heading9 text-center space-margin60">
								<h5>REGISTRATION</h5>
								<div className="space20" />
								<h2 className="text-anime-style-3">Registration Fees</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration={800}>
							<div className="pricing-boarea">
								<h3>Students / Researchers</h3>
								<div className="space24" />
								<h2>₹ 4000</h2>
								<div className="space24" />
								<ul>
									<li><img src="/assets/img/icons/check4.svg" alt="" />Full Access</li>
									<li><img src="/assets/img/icons/check4.svg" alt="" />Tutorials</li>
									<li><img src="/assets/img/icons/check4.svg" alt="" />Certification</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration={1000}>
							<div className="pricing-boarea box2">
								<h3>ISRS Members</h3>
								<div className="space24" />
								<h2>₹ 6000</h2>
								<div className="space24" />
								<ul>
									<li><img src="/assets/img/icons/check4.svg" alt="" />Full Access</li>
									<li><img src="/assets/img/icons/check4.svg" alt="" />Networking Lunch</li>
									<li><img src="/assets/img/icons/check4.svg" alt="" />Certification</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration={1200}>
							<div className="pricing-boarea">
								<h3>Academicians</h3>
								<div className="space24" />
								<h2>₹ 7000</h2>
								<div className="space24" />
								<ul>
									<li><img src="/assets/img/icons/check4.svg" alt="" />Full Access</li>
									<li><img src="/assets/img/icons/check4.svg" alt="" />Paper Presentation</li>
									<li><img src="/assets/img/icons/check4.svg" alt="" />Conference Kit</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration={1400}>
							<div className="pricing-boarea box2">
								<h3>Industry Professionals</h3>
								<div className="space24" />
								<h2>₹ 8000</h2>
								<div className="space24" />
								<ul>
									<li><img src="/assets/img/icons/check4.svg" alt="" />Full Access</li>
									<li><img src="/assets/img/icons/check4.svg" alt="" />Showcase Booth</li>
									<li><img src="/assets/img/icons/check4.svg" alt="" />VIP Networking</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="row mt-5">
						<div className="col-12 text-center">
							<div className="btn-area1">
								<Link href="/pricing-plan" className="vl-btn6">Submit Fee Now <img src="/assets/img/icons/arrow2.svg" alt="" /></Link>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
