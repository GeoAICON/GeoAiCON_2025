
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import styles from './contact.module.css'

export default function Contact() {
	return (
		<>
			<Layout headerStyle={6} footerStyle={6}>

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

				{/*===== CONTACT CARDS SECTION =====*/}
				<div className={styles.sectionPadding}>
					<div className="container">
						<div className="row g-4 justify-content-center">
							{/* Email Card */}
							<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
								<div className={styles.contactCard}>
									<div className={styles.iconWrapper}>
										<i className="fa-solid fa-envelope"></i>
									</div>
									<h3 className={styles.cardTitle}>Email Us</h3>
									<p className={styles.cardText}>
										For general inquiries and support
									</p>
									<Link href="mailto:coe@sensrs.com" className={styles.cardLink}>
										coe@sensrs.com
									</Link>
								</div>
							</div>

							{/* Phone Card */}
							<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
								<div className={styles.contactCard}>
									<div className={styles.iconWrapper}>
										<i className="fa-solid fa-phone"></i>
									</div>
									<h3 className={styles.cardTitle}>Call Us</h3>
									<p className={styles.cardText}>
										Mon-Fri from 9am to 6pm
									</p>
									<Link href="tel:+918146667633" className={styles.cardLink}>
										+91 81466 67633
									</Link>
								</div>
							</div>

							{/* Location Card */}
							<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
								<div className={styles.contactCard}>
									<div className={styles.iconWrapper}>
										<i className="fa-solid fa-location-dot"></i>
									</div>
									<h3 className={styles.cardTitle}>Visit Us</h3>
									<p className={styles.cardText}>
										IIT Ropar, Punjab, India
									</p>
									<a href="#map" className={styles.cardLink}>
										View on Map
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*===== FORM SECTION =====*/}
				<div className={`${styles.formSection} py-5`}>
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-10" data-aos="zoom-in" data-aos-duration="800">
								<div className={styles.formContainer}>
									<div className="text-center mb-5">
										<p className="text-primary fw-bold text-uppercase mb-2">Get in Touch</p>
										<h2 className={styles.formTitle}>Send us a Message</h2>
										<p className={styles.formSubtitle}>We typically reply within 24 hours</p>
									</div>

									<form>
										<div className="row">
											<div className="col-lg-6">
												<div className={styles.inputGroup}>
													<input type="text" className={styles.formControl} placeholder="Your Name" required />
												</div>
											</div>
											<div className="col-lg-6">
												<div className={styles.inputGroup}>
													<input type="email" className={styles.formControl} placeholder="Email Address" required />
												</div>
											</div>
											<div className="col-lg-6">
												<div className={styles.inputGroup}>
													<input type="tel" className={styles.formControl} placeholder="Phone Number" />
												</div>
											</div>
											<div className="col-lg-6">
												<div className={styles.inputGroup}>
													<input type="text" className={styles.formControl} placeholder="Subject" />
												</div>
											</div>
											<div className="col-lg-12">
												<div className={styles.inputGroup}>
													<textarea className={styles.formControl} rows={5} placeholder="Your Message" required></textarea>
												</div>
											</div>
											<div className="col-lg-12 text-center">
												<button type="submit" className={styles.submitBtn}>
													Send Message <i className="fa-solid fa-paper-plane ms-2"></i>
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*===== MAP SECTION =====*/}
				<div id="map" className={styles.mapSection} style={{ height: '500px', width: '100%', position: 'relative' }}>
					<iframe 
						src="https://maps.google.com/maps?q=Indian%20Institute%20of%20Technology%20Ropar&t=&z=13&ie=UTF8&iwloc=&output=embed"
						width="100%" 
						height="100%" 
						style={{ border: 0 }} 
						allowFullScreen 
						loading="lazy" 
						referrerPolicy="no-referrer-when-downgrade" 
					/>
				</div>
			</Layout>
		</>
	)
}