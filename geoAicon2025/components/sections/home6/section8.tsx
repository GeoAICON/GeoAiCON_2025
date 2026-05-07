'use client'
import Slider from "react-slick"
import Link from 'next/link'

const settings = {
	loop: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 0,
	speed: 5000,
	cssEase: 'linear',
	infinite: true,
	arrows: false,
	touchMove: true,
	swipeToSlide: true,
	swipe: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
			}
		},

		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},

		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},

		{
			breakpoint: 375,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},

		{
			breakpoint: 320,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
	]
}
const settings2 = {
	loop: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 7000,
		cssEase: 'linear',
		infinite: true,
		arrows: false,
		touchMove: true,
		swipeToSlide: true,
		swipe: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				}
			},

			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},

			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},

			{
				breakpoint: 375,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},

			{
				breakpoint: 320,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
		]
}

export default function Section8() {
	return (
		<>

			<div className="testimonial6-section-area sp1">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 m-auto">
							<div className="testimonial-heading heading9 text-center space-margin60">
								<h5>Participant Voices</h5>
								<div className="space20" />
								<h2 className="text-anime-style-3">Why the Community is Joining</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<Slider {...settings} className="testimonial-reviews-area">
								<div className="testimonial-boxarea">
									<p>“The hands-on tutorial on drone data processing at IIT Ropar is exactly what my research group needs.”</p>
									<Link href="/#">Amit S., PhD Scholar</Link>
								</div>
								<div className="testimonial-boxarea">
									<p>“I am excited about the hybrid mode, allowing me to present our work on Urban GeoAI from the UK.”</p>
									<Link href="/#">Sarah J., Postdoc Researcher</Link>
								</div>
								<div className="testimonial-boxarea">
									<p>“The opportunity to publish in a Scopus-indexed volume without APC is a significant benefit for academic researchers.”</p>
									<Link href="/#">Dr. P. Verma, Asst. Professor</Link>
								</div>
								<div className="testimonial-boxarea">
									<p>“Looking forward to networking with experts from SEnSRS and learning about river sand mining sustainability.”</p>
									<Link href="/#">Rajesh K., Environmental Engineer</Link>
								</div>
							</Slider>
							<div className="space24" />
							<Slider {...settings2} className="testimonial-reviews-area2">
								<div className="testimonial-boxarea">
									<p>“The focus on practical Advanced Surveying instruments alongside AI theory is very promising.”</p>
									<Link href="/#">Civil Engineering Dept. Head</Link>
								</div>
								<div className="testimonial-boxarea">
									<p>“Geo-AI CON 2025 seems like the perfect platform to discuss the future of spatial analytics in India.”</p>
									<Link href="/#">Tech Lead, GIS Startup</Link>
								</div>
								<div className="testimonial-boxarea">
									<p>“I am eager to attend the keynote sessions on Earth Observation and its AI applications.”</p>
									<Link href="/#">M.Sc. Geoinformatics Student</Link>
								</div>
								<div className="testimonial-boxarea">
									<p>“Connecting with detailed hands-on sessions is rare in such conferences. Highly anticipated.”</p>
									<Link href="/#">Research Fellow, ISRO</Link>
								</div>
							</Slider>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
