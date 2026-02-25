import Link from 'next/link'
import Layout from '@shared/components/layout/Layout'
// import Popup from '@shared/components/layout/Popup'
import HeroSection from '@/app/sections/HeroSection'
import AboutSection from '@/app/sections/AboutSection'
import PartnersSection from '@/app/sections/PartnersSection'
import KeynoteSpeakers from '@/app/sections/KeynoteSpeakers'
import ImportantDates from '@/app/sections/ImportantDates'
import FeaturedEvent from '@/app/sections/FeaturedEvent'

export default function Home() {

	return (
		<>
			<Layout headerStyle={1} footerStyle={1}>
				<HeroSection />
				<FeaturedEvent />
				<PartnersSection />
				<AboutSection />
				<ImportantDates />
				<KeynoteSpeakers />
			</Layout>
			
			{/* <Popup /> */}
		</>
	)
}
