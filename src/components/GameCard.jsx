import { Link } from "react-router-dom";
const GameCard = (props) => {
	return (
		<Link to={`game/${props.key}`}><div className={`w-[400px] h-[350px] rounded-2xl relative m-4 hover:scale-105 hover:cursor-pointer transition-all`} >
			<div className="w-full h-2/3"><img src={props.imgurl} alt="game img" className="w-full h-full" key={props.key} /></div>
			<div className="game-info absolute bottom-0 h-1/3 w-full bg-zinc-800" key={props.key}><p className="font-semibold text-white text-xl pt-4 pl-4">{props.name}</p>
				<br />
				<p className="font-light text-white text-lg pl-4">$ PRICE</p></div>
		</div>
		</Link>
	)
}

export default GameCard
