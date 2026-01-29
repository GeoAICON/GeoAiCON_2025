'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState, useEffect } from "react"
import AOS from 'aos'
import styles from './faq.module.css'

export default function Faq() {
	const [activeTab, setActiveTab] = useState('All')
	const [activeAccordion, setActiveAccordion] = useState<number | null>(null)

	const toggleAccordion = (index: number) => {
		setActiveAccordion(prev => prev === index ? null : index)
	}

	const faqData = [
		{
			category: 'Event Information',
			questions: [
				{
					id: 1,
					q: "What is Geo-AI CON 2025?",
					a: "Geo-AI CON 2025 is a premier summit focusing on the intersection of Geospatial Science and Artificial Intelligence, organized by SEnSRS, IIT Ropar. It brings together experts, researchers, and industry leaders to discuss the latest advancements in Geo-AI."
				},
				{
					id: 2,
					q: "When and where will the conference take place?",
					a: "The conference is scheduled from 5th to 8th September 2025. It will be held at the Indian Institute of Technology (IIT) Ropar in Punjab, India. The venue offers state-of-the-art facilities for a productive and engaging conference experience."
				},
				{
					id: 5,
					q: "Can I attend online?",
					a: "Yes, the conference offers a hybrid model with specific online technical sessions for remote participants. However, we highly recommend attending in person to fully benefit from networking opportunities and hands-on workshops."
				}
			]
		},
		{
			category: 'Registration',
			questions: [
				{
					id: 3,
					q: "Are there any publication opportunities?",
					a: "Yes, accepted and presented papers will be submitted for publication in Scopus-indexed proceedings. Selected high-quality papers may also be considered for special issues in reputed journals."
				},
				{
					id: 4,
					q: "How can I register for the event?",
					a: "Registration can be done through our official website. Early bird registration offers discounted rates. Please visit the 'Registration' page for detailed fee structures and deadlines."
				},
				{
					id: 6,
					q: "Is there accommodation available?",
					a: "Limited accommodation is available at the IIT Ropar guest house and hostels on a paid basis. We also have tie-ups with nearby hotels. Detailed information will be shared with registered participants."
				}
			]
		}
	]

	// Filter FAQs based on active tab
	const filteredFaqs = activeTab === 'All' 
		? faqData.flatMap(cat => cat.questions)
		: faqData.find(cat => cat.category === activeTab)?.questions || []

	useEffect(() => {
		AOS.refresh()
	}, [activeTab, activeAccordion])

	return (
		<>
			<Layout headerStyle={6} footerStyle={6}>
				{/* Standard Header */}
				<div>
					<div className="inner-page-header" style={{ backgroundImage: 'url(/assets/img/bg/header-bg17.png)', backgroundSize: 'cover' }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-9 m-auto">
									<div className="heading1 text-center">
										<h1>Frequently Asked Questions</h1>
										<div className="space20" />
										<Link href="/" className="text-white">Home <i className="fa-solid fa-angle-right" /> <span>FAQ</span></Link>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Premium FAQ Section */}
					<div className={styles.sectionPadding}>
						<div className="container">
							{/* Intro */}
							<div className={styles.introSection} data-aos="fade-up" data-aos-duration="800">
								<span className={styles.subTitle}>Common Queries</span>
								<h2 className={styles.mainTitle}>Everything You Need to Know</h2>
								<p className={styles.description}>
									Find answers to the most common questions about Geo-AI CON 2025. 
									Can't find what you're looking for? Feel free to contact us.
								</p>
							</div>

							{/* Tabs */}
							<div className={styles.tabsContainer} data-aos="fade-up" data-aos-delay="100">
								<div className={styles.navPills}>
									<button 
										className={`${styles.tabButton} ${activeTab === 'All' ? styles.activeTab : ''}`}
										onClick={() => setActiveTab('All')}
									>
										All Questions
									</button>
									<button 
										className={`${styles.tabButton} ${activeTab === 'Event Information' ? styles.activeTab : ''}`}
										onClick={() => setActiveTab('Event Information')}
									>
										Event Info
									</button>
									<button 
										className={`${styles.tabButton} ${activeTab === 'Registration' ? styles.activeTab : ''}`}
										onClick={() => setActiveTab('Registration')}
									>
										Registration & Papers
									</button>
								</div>
							</div>

							{/* Filtering Content */}
							<div className="row justify-content-center">
								<div className="col-lg-10">
									<div className={styles.accordionGrid} key={activeTab}>
										{filteredFaqs.map((faq, index) => (
											<div 
												key={faq.id} 
												className={`${styles.accordionItem} ${activeAccordion === faq.id ? styles.active : ''}`}
												data-aos="fade-up"
												data-aos-delay={100 + (index * 50)}
											>
												<div className={styles.accordionHeader} onClick={() => toggleAccordion(faq.id)}>
													<h3 className={styles.question}>{faq.q}</h3>
													<div className={styles.iconBox}>
														<i className="fa-solid fa-chevron-down"></i>
													</div>
												</div>
												<div 
													className={styles.accordionBody}
													style={{ maxHeight: activeAccordion === faq.id ? '500px' : '0' }}
												>
													<div className={styles.answerContent}>
														{faq.a}
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>

							{/* CTA Section */}
							<div className={styles.ctaSection} data-aos="fade-up" data-aos-delay="300">
								<div className={styles.ctaBox}>
									<h3 className={styles.ctaTitle}>Still have questions?</h3>
									<p className={styles.ctaText}>
										We're here to help! Reach out to our organizing team for further assistance.
									</p>
									<Link href="/contact" className={styles.ctaButton}>
										Contact Support <i className="fa-solid fa-arrow-right"></i>
									</Link>
								</div>
							</div>

						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}