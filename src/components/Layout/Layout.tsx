import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Layout() {
	const { pathname } = useLocation();
	const isHomePage = pathname === '/';

	return (
		<>
			{!isHomePage && <Header />}
			<div className="animate-[page-enter_0.35s_ease_both] motion-reduce:animate-none" key={pathname}>
				<Outlet />
			</div>
			{!isHomePage && <Footer />}
		</>
	);
}
