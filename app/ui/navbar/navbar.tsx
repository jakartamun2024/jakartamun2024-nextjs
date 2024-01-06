import { useState } from "react";
import NavBarBody from "./navbarbody";
import NavBarCollapse from "./navbarcollapse";


function NavBar() {
	const [navbarState, setNavbarState] = useState({
		isCollapsed: true,
	});

	const handleCollapse = () => {
		setNavbarState((prevState) => ({
			...prevState,
			isCollapsed: !navbarState.isCollapsed,
		}));
	};

	return (
		<div className="fixed w-full transition-all duration-300 ease-in-out backdrop-blur-md z-50 bg-gradient-to-r from-[#dc703088] from-20% via-[#FFBC5D88] via-50% to-[#dc703088] to-80% justify-between items-center py-2 lg:pt-3 md:pt-3 sm:pt-3 pt-3 lg:px-7 ms:px-4 sm:px-3 px-3">
			<NavBarBody {...navbarState} handleCollapse={handleCollapse} />
			<NavBarCollapse {...navbarState} handleCollapse={handleCollapse} />
		</div>
	);
}

export default NavBar;