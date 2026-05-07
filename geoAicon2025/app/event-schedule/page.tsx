'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"

export default function EventSchedule() {
	const [activeDay, setActiveDay] = useState(1);

	const scheduleData = [
		{
			day: 1,
			date: "Friday, 5th September 2025",
			events: [
				{ time: "09:00 – 10:00", session: "Registration", venue: "Senate Hall, Admin Block" },
				{ time: "10:00 – 10:15", session: "Inaugural Ceremony & Lamp Lighting", venue: "Senate Hall, Admin Block" },
				{ time: "10:15 – 10:25", session: "Welcome Address – Organizing Secretary (Dr. Reet Kamal Tiwari)", venue: "Senate Hall, Admin Block" },
				{ time: "10:25 – 10:50", session: "Patron’s Address – Director (Hon'ble Prof. (Dr.) Rajiv Ahuja)", venue: "Senate Hall, Admin Block" },
				{ time: "10:50 – 10:55", session: "Vote of Thanks (Inaugural Session)", venue: "Senate Hall, Admin Block" },
				{ time: "10:55 – 11:20", session: "High-Tea Break", venue: "-" },
				{ time: "11:20 – 12:00", session: "Keynote Session – 1: Prof. (Dr.) Biswajeet Pradhan (UTS, Sydney, Australia)", venue: "Senate Hall, Admin Block" },
				{ time: "12:00 – 12:35", session: "Keynote Session – 2: Prof. (Dr.) Mahesh Kumar Jat (MNIT Jaipur, India)", venue: "Senate Hall, Admin Block" },
				{ time: "12:35 – 13:10", session: "Keynote Session – 3: Prof. (Dr.) Akshar Tripathi (IIT Patna, India)", venue: "Senate Hall, Admin Block" },
				{ time: "13:10 – 14:00", session: "Networking Lunch", venue: "-" },
				{ time: "14:00 – 15:30", session: "Technical Session I (Onsite): Paper Presentations – GeoAI in Earth observation", venue: "S101, 1st Floor, Super Academic Block" },
				{ time: "14:00 – 15:30", session: "Technical Session II (Onsite): Paper Presentations – Advanced Applications of AI", venue: "S102, 1st Floor, Super Academic Block" },
				{ time: "15:30 – 16:00", session: "Tea Break", venue: "-" },
			]
		},
		{
			day: 2,
			date: "Saturday, 6th September 2025",
			events: [
				{ time: "09:30 – 10:30", session: "Registration", venue: "M1, Radha Krishnan Block" },
				{ time: "10:30 – 11:15", session: "Keynote Session – 4: Prof. (Dr.) Avik Bhattacharya (IIT Bombay, India)", venue: "M1, Radha Krishnan Block" },
				{ time: "11:15 – 11:40", session: "Tea Break", venue: "-" },
				{ time: "11:40 – 12:20", session: "Keynote Session – 5: Prof. (Dr.) Mahesh Pal (NIT Kurukshetra, India)", venue: "M1, Radha Krishnan Block" },
				{ time: "12:20 – 13:00", session: "Keynote Session – 6: Prof. (Dr.) Ajanta Goswami (IIT Roorkee, India)", venue: "M1, Radha Krishnan Block" },
				{ time: "13:00 – 14:00", session: "Networking Lunch", venue: "-" },
				{ time: "14:00 – 16:00", session: "Technical Session III (Online): Google Meet joining info will be shared", venue: "Online Platform" },
				{ time: "14:00 – 16:00", session: "Technical Session IV (Online): Google Meet joining info will be shared", venue: "Online Platform" },
			]
		},
		{
			day: 3,
			date: "Sunday, 7th September 2025",
			events: [
				{ time: "09:30 – 10:30", session: "Registration", venue: "Geomatics Engineering Lab, 1st Floor, Super Academic Block" },
				{ time: "11:00 – 13:00", session: "Tutorial Session – 1: Hands-on Drone Mapping and Surveying", venue: "Geomatics Engineering Lab, 1st Floor, Super Academic Block" },
				{ time: "13:00 – 14:00", session: "Networking Lunch", venue: "-" },
				{ time: "14:00 – 16:00", session: "Tutorial Session – 2: Hands-on Advance Surveying Techniques", venue: "Geomatics Engineering Lab, 1st Floor, Super Academic Block" },
			]
		},
		{
			day: 4,
			date: "Monday, 8th September 2025",
			events: [
				{ time: "10:30 – 11:30", session: "Keynote Session – 6 (Online): Prof. (Dr.) Prashant Kumar Srivastav (BHU, India)", venue: "Online Platform" },
				{ time: "12:00 – 14:00", session: "Technical Session V (Online)", venue: "Online Platform" },
				{ time: "12:00 – 14:00", session: "Technical Session VI (Online)", venue: "Online Platform" },
				{ time: "15:00 – 16:00", session: "Award Ceremony and Valedictory", venue: "Online Platform" },
			]
		}
	];

	return (
		<>
			<Layout headerStyle={6} footerStyle={6}>
				<div>
					<div className="inner-page-header" style={{ backgroundImage: 'url(/assets/img/bg/header-bg17.png)', backgroundSize: 'cover' }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-12 m-auto">
									<div className="heading1 text-center">
										<h1>Event Schedule</h1>
										<div className="space20" />
										<Link href="/" className="text-white">Home <i className="fa-solid fa-angle-right" /> <span>Detailed Schedule</span></Link>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="schedule-tabs-section sp1 bg-light min-vh-100">
						<div className="container">
							<div className="row">
								<div className="col-lg-12 text-center mb-5">
									<div className="heading6">
										<h5 className="text-primary" data-aos="fade-up">CONFERENCE TIMELINE</h5>
										<div className="space16" />
										<h2 className="text-anime-style-3" data-aos="fade-up" data-aos-delay="100">Plan Your Summit Experience</h2>
									</div>
								</div>

								<div className="col-lg-10 m-auto">
									{/* Tabs Navigation */}
									<div className="faq-widget-area mb-5" data-aos="fade-up">
										<ul className="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
											{scheduleData.map((day) => (
												<li className="nav-item mx-2" key={day.day} onClick={() => setActiveDay(day.day)}>
													<button className={activeDay === day.day ? "nav-link active px-4 py-3 shadow-sm" : "nav-link px-4 py-3"} type="button">
														DAY {day.day}
													</button>
												</li>
											))}
										</ul>
									</div>

									{/* Timeline Container */}
									<div className="timeline-container position-relative px-3 px-md-5">
										{/* Vertical Line */}
										<div className="timeline-line position-absolute bg-primary" style={{ left: '31px', top: '0', bottom: '0', width: '2px', opacity: '0.2' }}></div>
										
										<div className="timeline-content-wrapper">
											<div className="day-info-box mb-5 text-start ps-5" data-aos="fade-left">
												<h3 className="text-primary mb-1">{scheduleData[activeDay - 1].date}</h3>
												<div className="line bg-primary" style={{ height: '3px', width: '60px' }}></div>
											</div>

											{scheduleData[activeDay - 1].events.map((event, index) => (
												<div className="timeline-item position-relative mb-5 ps-5" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
													{/* Dot */}
													<div className="timeline-dot position-absolute bg-white border border-primary border-4 rounded-circle" style={{ left: '20px', top: '0', width: '24px', height: '24px', zIndex: '2' }}></div>
													
													<div className="timeline-event-card bg-white p-4 shadow-sm rounded-4 border-start border-primary border-5" style={{ transition: 'transform 0.3s ease' }}>
														<div className="row align-items-center">
															<div className="col-md-3 border-end">
																<div className="time-box d-flex align-items-center mb-3 mb-md-0">
																	<i className="fa-solid fa-clock text-primary me-2"></i>
																	<span className="fw-bold text-dark fs-5">{event.time}</span>
																</div>
															</div>
															<div className="col-md-6 ps-md-4">
																<h4 className="mb-2 text-dark">{event.session}</h4>
																{event.venue !== "-" && (
																	<div className="venue-box d-flex align-items-center opacity-75">
																		<i className="fa-solid fa-location-dot text-primary me-2 fs-6"></i>
																		<span>{event.venue}</span>
																	</div>
																)}
															</div>
															<div className="col-md-3 text-md-end mt-3 mt-md-0">
																{event.session.includes("Keynote") && (
																	<span className="badge px-3 py-2 rounded-pill" style={{ backgroundColor: 'rgba(13, 110, 253, 0.1)', color: '#0d6efd' }}>Keynote</span>
																)}
																{event.session.includes("Technical") && (
																	<span className="badge px-3 py-2 rounded-pill" style={{ backgroundColor: 'rgba(25, 135, 84, 0.1)', color: '#198754' }}>Technical</span>
																)}
																{event.session.includes("Registration") && (
																	<span className="badge px-3 py-2 rounded-pill" style={{ backgroundColor: 'rgba(13, 202, 240, 0.1)', color: '#0dcaf0' }}>Welcome</span>
																)}
																{event.session.includes("Lunch") || event.session.includes("Break") ? (
																	<span className="badge px-3 py-2 rounded-pill" style={{ backgroundColor: 'rgba(255, 193, 7, 0.1)', color: '#ffc107' }}>Intermission</span>
																) : null}
															</div>
														</div>
													</div>
												</div>
											))}
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