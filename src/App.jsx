import Navbar from "./components/Navbar"
import GameCard from "./components/GameCard"
import data from "./data.json"
import ControllerModel from "./components/ControllerModel";

function App() {
	const games = data.results;
	const elements = games.map((game, index) => {
		return <GameCard imgurl={game.background_image} name={game.name} id={game.id} key={index} title={index + 1} />
	})
	return (
		<>
			<div className="w-screen min-h-screen bg-black bg-[url('./assets/Vector.png')] bg-scroll overflow-x-hidden">
				<Navbar />
				<div className="section-1 w-screen h-[80vh] flex justify-between relative top-14">
					<div className="info relative left-20">
						<p className="text-3xl my-11 font-semibold text-gaming-green-dark">The Best Place for Gamers.</p>
						<h1 className="font-bold my-11 text-white text-6xl overflow-hidden">We have data about 500k+ <br /> Games from all <br />over the internet.</h1>
						<p className="text-white my-11 text-xl">From GTA V to Assasins Creed we have everything<br />So ditch all other platforms and buy latest Games through us<br />at affordable prices with extra cashbacks and in game cuopons.</p>
						<button className="px-8 my-11 py-2 bg-gaming-green-dark hover:bg-gaming-green-light text-black rounded-3xl text-3xl">Explore</button>
					</div>

					<div className="img h-full relative right-10">
						<ControllerModel />
					</div>

				</div>

			</div >
			<div className="games-section w-screen bg-black">
				<div className="flex justify-between px-20 mt-20 w-screen">
					<p className="text-white text-5xl font-medium overflow-hidden">Popular Games</p>
					<button className="text-3xl bg-gaming-green-dark px-6 py-2 rounded-lg">SEE ALL</button>
				</div>

				<div className="games w-full text-white mt-20 bg-black px-20 flex
				 flex-wrap">
					{elements}
				</div>
			</div>

		</>
	)
}

export default App
