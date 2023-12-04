import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar";

const GamePage = () => {
	const { id } = useParams();
	const [gameData, setGameData] = useState(null);
	const [gameTrailer, setGameTrailer] = useState(null);
	useEffect(() => {
		fetch(`https://api.rawg.io/api/games/${id}?key=5bd48b5e817b487f8992f8046faaaae9`)
			.then((res) => res.json())
			.then((data) => {
				setGameData(data);
			}).catch((err) => {
				console.log("Err " + err);
			});

	}, [id]);

	useEffect(() => {
		fetch(`https://api.rawg.io/api/games/${id}/movies?key=5bd48b5e817b487f8992f8046faaaae9`)
			.then((res) => res.json())
			.then((data) => {
				setGameTrailer(data);
			}).then(() => console.log(gameTrailer)).catch((err) => {
				console.log("Err " + err);
			});

	}, [gameData]);


	// console.log(gameData, name, description, released, updated, background_image, website, rating, reddit_url, parent_platforms);

	if (!gameData) {
		return <>Loading...</>
	}
	return (
		<div className="bg-black">
			<Navbar />
			<div className={`w-screen h-screen text-white bg-no-repeat bg-cover`} style={{
				backgroundImage: gameData ? `url('${gameData.background_image}')` : '',
			}}>

				{/* Your content goes here */}


				<div className="text-5xl font-bold p-4 z-10">

					<span className="bg-[rgba(0,0,0,0.7)] py-2 px-4 rounded-xl">{gameData && gameData.name}</span>
					{gameData && <div className="text-white w-1/2 bg-[rgba(0,0,0,0.5)] p-4 text-xl font-light mt-8 leading-9 rounded-lg backdrop-blur-sm" >

						<div dangerouslySetInnerHTML={{ __html: gameData.description }}>

							{/* Add other details as needed */}
						</div>
						<div className="info">
							<p>Released Date: <span className="font-semibold">{gameData && gameData.released}</span> </p>
							<br />
							<p>Website: <a className="font-semibold hover:text-gray-300" href={gameData.website}>{gameData && gameData.website}</a></p>
							<p>Rating : {gameData && gameData.rating}★</p>
						</div>
					</div >}
				</div>





			</div>

			{gameTrailer.results.length > 0 && <div className="w-screen flex justify-center">
				< video width="1200" className="" controls>
					<source src="" type="video/mp4" />
					<source src={gameTrailer.results[0].data.max} type="video/ogg" />
					Your browser does not support the video tag.
				</video></div>}
		</div>

	)
}

export default GamePage
