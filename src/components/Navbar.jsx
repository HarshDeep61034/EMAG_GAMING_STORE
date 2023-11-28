const Navbar = () => {
	return (
		<nav className="w-screen flex justify-between text-white mt-10">
			<h1 className="ml-24  font-bold text-4xl">E M A G</h1>
			<ul className="flex">
				<li className="mx-12 font-light hover:font-normal hover:cursor-pointer text-2xl">Home</li>
				<li className="mx-12 font-light hover:font-normal hover:cursor-pointer text-2xl">About us</li>
				<li className="mx-12 font-light hover:font-normal hover:cursor-pointer text-2xl">Portfolio</li>
				<li className="mx-12 font-light hover:font-normal hover:cursor-pointer text-2xl">News</li>
				<li className="mx-12 font-light hover:font-normal hover:cursor-pointer text-2xl bg-gaming-green-dark px-3 py-2 rounded-lg relative bottom-2 text-black hover:bg-gaming-green-light">Contact us</li>

			</ul>
		</nav>
	)
}

export default Navbar
