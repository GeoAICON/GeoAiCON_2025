
import Link from 'next/link'

export default function Section5() {
	return (
		<>

			<div className="attent6-section-area sp2" id="timeline">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 m-auto">
							<div className="attent-heading heading9 text-center space-margin60">
								<h5><img src="/assets/img/icons/sub-logo1.svg" alt="" />Timeline</h5>
								<div className="space20" />
								<h2 className="text-anime-style-3">Important Dates</h2>
							</div>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-4 col-md-6 mb-4" data-aos="zoom-in" data-aos-duration={800}>
							<div className="skils-widget-boxarea shadow-sm h-100">
								<div className="content-area">
									<h4 className="text-primary">25th Aug 2025</h4>
									<div className="space16" />
									<h5>Abstract Submission</h5>
									<p>Deadline for submitting abstracts for review.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 mb-4" data-aos="zoom-in" data-aos-duration={1000}>
							<div className="skils-widget-boxarea shadow-sm h-100">
								<div className="content-area">
									<h4 className="text-primary">31st Aug 2025</h4>
									<div className="space16" />
									<h5>Registration & Fee</h5>
									<p>Final date for early registration and payment.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 mb-4" data-aos="zoom-in" data-aos-duration={1200}>
							<div className="skils-widget-boxarea shadow-sm h-100">
								<div className="content-area">
									<h4 className="text-primary">5th-8th Sep 2025</h4>
									<div className="space16" />
									<h5>Conference Dates</h5>
									<p>Main event dates for the Geospatial AI Summit.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 mb-4" data-aos="zoom-in" data-aos-duration={1400}>
							<div className="skils-widget-boxarea shadow-sm h-100">
								<div className="content-area">
									<h4 className="text-primary">31st Oct 2025</h4>
									<div className="space16" />
									<h5>Paper Submission</h5>
									<p>Full paper submission deadline for publication.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 mb-4" data-aos="zoom-in" data-aos-duration={1600}>
							<div className="skils-widget-boxarea shadow-sm h-100">
								<div className="content-area">
									<h4 className="text-primary">31st Mar 2026</h4>
									<div className="space16" />
									<h5>Publication</h5>
									<p>Expected publication date in Scopus volume.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
