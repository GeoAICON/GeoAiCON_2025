
import Countdown from '@/components/elements/Countdown'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Speakers() {

	return (
		<>

			<Layout headerStyle={6} footerStyle={6}>
				<div>
					<div className="inner-page-header" style={{ backgroundImage: 'url(/assets/img/bg/header-bg17.png)', backgroundSize: 'cover' }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-12 m-auto">
									<div className="heading1 text-center">
										<h1>Keynote Speakers</h1>
										<div className="space20" />
										<Link href="/" className="text-white">Home <i className="fa-solid fa-angle-right" /> <span>Our Speakers</span></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== TEAM AREA STARTS =======*/}
					<div className="team-sperkers-section-area sp1">
						<div className="container">
							<div className="row">
								{[
									{ name: "Prof. Biswajeet Pradhan", role: "UTS, Australia", img: "/assets/img/all-images/team/team-img20.png" },
									{ name: "Prof. Mahesh Kumar Jat", role: "MNIT Jaipur", img: "/assets/img/all-images/team/team-img21.png" },
									{ name: "Prof. Akshar Tripathi", role: "IIT Patna", img: "/assets/img/all-images/team/team-img22.png" },
									{ name: "Prof. Avik Bhattacharya", role: "IIT Bombay", img: "/assets/img/all-images/team/team-img23.png" },
									{ name: "Prof. Mahesh Pal", role: "NIT Kurukshetra", img: "/assets/img/all-images/team/team-img20.png" },
									{ name: "Prof. Ajanta Goswami", role: "IIT Roorkee", img: "/assets/img/all-images/team/team-img21.png" },
									{ name: "Prof. Prashant Kumar Srivastav", role: "BHU", img: "/assets/img/all-images/team/team-img22.png" }
								].map((speaker, index) => (
									<div className="col-lg-3 col-md-6 mb-4" key={index}>
										<div className="our-team-boxarea shadow-sm rounded p-3 h-100 bg-white">
											<div className="team-widget-area">
												<div className="img1">
													<img src={speaker.img} alt={speaker.name} className="img-fluid rounded" />
													<div className="share">
														<Link href="#"><img src="/assets/img/icons/share1.svg" alt="" /></Link>
													</div>
												</div>
											</div>
											<div className="space28" />
											<div className="content-area text-center">
												<Link href="#" className="h5 text-primary d-block">{speaker.name}</Link>
												<div className="space12" />
												<p className="text-muted">{speaker.role}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					
				</div>
			</Layout>
		</>
	)
}