import { useEffect, useState } from "react";
import { getAllPokemonList } from "./api/pokemon";
import './App.css';


function App() {
  const [pokemonData, setPokemonData] = useState([]);


useEffect(() => {
	async function fetchData() {
		const data = await getAllPokemonList();
		setPokemonData(data?.results);
	}
	fetchData();
}, []);

  return (    
		<div className="container">
			{pokemonData?.map((poke, i) => {
				return (
					<div className="pokemon-box" key={i}>
						<div className="poke-name">
							<p>
								{poke.name}
							</p>
						</div>
						<img
							alt="pokemon"
							src={`https://img.pokemondb.net/artwork/large/${poke.name}.jpg`}
						/>
					</div>
				);
			})}
			<div></div>
		</div>
  );
}

export default App;
