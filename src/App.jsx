import Navbar from "./components/Navbar"
import GameCard from "./components/GameCard"
import data from "./data.json"

function App() {
	const games = data.results;
	const elements = games.map((game) => {
		return <GameCard imgurl={game.background_image} name={game.name} key={game.id} />
	})
	return (
		<>
			<div className="w-screen min-h-screen bg-black bg-[url('./assets/Vector.png')] bg-scroll overflow-x-hidden">
				<Navbar />
				<div className="section-1 w-screen h-[80vh] flex justify-between relative top-14">
					<div className="info relative left-20">
						<p className="text-3xl my-11 font-semibold text-gaming-green-dark">Lorem, ipsum dolor.</p>
						<h1 className="font-bold my-11 text-white text-6xl overflow-hidden">Lorem ipsum dolor <br /> sit amet consectetur <br />adipisicing.</h1>
						<p className="text-white my-11 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Minus commodi assumenda ab? Natus sed placeat laborum cumque,<br /> ut molestias rerum!</p>
						<button className="px-8 my-11 py-2 bg-gaming-green-dark hover:bg-gaming-green-light text-black rounded-3xl text-3xl">Explore</button>
					</div>

					<div className="img bg-[url(./assets/controller.png)] h-full w-[40vw] bg-no-repeat bg-cover bg-center text-white">

					</div>

				</div>

			</div >
			<div className="games-section w-screen bg-black">
				<div className="flex justify-between px-20 mt-20 w-screen">
					<p className="text-white text-5xl font-medium overflow-hidden">Popular Games</p>
					<button className="text-3xl bg-gaming-green-dark px-6 py-2 rounded-lg">SEE ALL</button>
				</div>

				<div className="games w-full text-white mt-20 bg-zinc-900 px-20 flex
				 flex-wrap">
					{elements}
				</div>
			</div>

		</>
	)
}

export default App
