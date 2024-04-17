import { AnimatePresence } from "framer-motion"
import { Outlet, Route, Routes, useLocation } from "react-router-dom"
import { Footer, Header } from "widgets"

import HomePage from "./HomePage/HomePage"
import PartnersPage from "./PartnersPage/PartnersPage"
import EstatePage from "./EstatePage/EstatePage"
import CareerPage from "./CareerPage/CareerPage"
import ServicesPage from "./ServicesPage/ServicesPage"

function BasicLayout() {
	return (
		<div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
			<Header/>
			<Outlet/>
			<Footer/>
		</div>
	)
}

export const Routing = () => {
	const location = useLocation()
	return (
		<AnimatePresence initial={true} mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<BasicLayout/>}>
					<Route index element={<HomePage/>}/>
					<Route path="partners" element={<PartnersPage/>}/>
					<Route path="estate" element={<EstatePage/>}/>
					<Route path="career" element={<CareerPage/>}/>
					<Route path='services' element={<ServicesPage/>}/>
				</Route>
			</Routes>
		</AnimatePresence>
	)
}