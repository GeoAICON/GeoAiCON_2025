import Link from 'next/link'

export default function Header6({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch }: any) {
	return (
		<>
			<header>
				<div className={`header-area homepage6 header header-sticky d-none d-lg-block ${scroll ? 'sticky' : ''}`} id="header">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="header-elements">
									<div className="site-logo">
										<Link href="/" className="text-decoration-none d-flex align-items-center gap-2">
											<img 
												src="/Logo1.png" 
												alt="GeoAiCon Logo" 
												className="img-fluid hover:scale-105 transition-transform duration-300"
												style={{ height: '40px', width: 'auto', objectFit: 'contain' }} 
											/>
											<span style={{ 
												fontSize: '24px', 
												fontWeight: 700, 
												letterSpacing: '-0.5px', 
												color: '#0f172a',
												fontFamily: 'var(--grotesk), sans-serif'
											}}>GeoAI CON</span>
										</Link>
									</div>
									<div className="main-menu">
										<ul>
											<li>
												<Link href="/">Home</Link>
											</li>
											<li><Link href="/about">About Event</Link></li>
											<li><Link href="/speakers">Speakers</Link></li>
											<li><Link href="/event-schedule">Schedule</Link></li>
											<li><Link href="/pricing-plan">Registration</Link></li>
											<li>
												<Link href="#">Gallery <i className="fa-solid fa-angle-down" /></Link>
												<ul className="dropdown-padding">
													<li><Link href="/gallery/photos">Photo Gallery</Link></li>
													<li><Link href="/gallery/technical-sessions">Technical Sessions</Link></li>
												</ul>
											</li>
											<li>
												<Link href="#">Pages <i className="fa-solid fa-angle-down" /></Link>
												<ul className="dropdown-padding">
													<li><Link href="/faq">FAQ,s</Link></li>
													<li><Link href="/contact">Contact Us</Link></li>
												</ul>
											</li>
										</ul>
									</div>
									<div className="btn-area">
										<div className="search-icon header__search header-search-btn" onClick={handleSearch}>
											<a><img src="/assets/img/icons/search1.svg" alt="" /></a>
										</div>
										<ul>
											<li>
												<Link href="https://www.facebook.com/profile.php?id=61582803331985"><i className="fa-brands fa-facebook-f" /></Link>
											</li>
											<li>
												<Link href="https://www.instagram.com/geoaicon/"><i className="fa-brands fa-instagram" /></Link>
											</li>
											<li>
												<Link href="https://www.linkedin.com/groups/15392053/"><i className="fa-brands fa-linkedin-in" /></Link>
											</li>
										</ul>
									</div>
									<div className={`header-search-form-wrapper ${isSearch ? 'open' : ''}`}>
										<div className="tx-search-close tx-close" onClick={handleSearch}><i className="fa-solid fa-xmark" /></div>
										<div className="header-search-container">
											<form role="search" className="search-form">
												<input type="search" className="search-field" placeholder="Search …" name="s" />
												<button type="submit" className="search-submit"><img src="/assets/img/icons/search1.svg" alt="" /></button>
											</form>
										</div>
									</div>
									{isSearch && <div className="body-overlay active" onClick={handleSearch} />}
								</div>
							</div>
						</div>
					</div>
				</div>
			</header >

		</>
	)
}
