import { useEffect, useState } from "react";
import "../App.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Input,
  Grid,
  SimpleGrid,
} from "@chakra-ui/react";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([""]);
  useEffect(() => {
    getAllNames();
  }, []);

  /**fetch pokemon name and id */
  async function getAllNames() {
    let url = "https://pokeapi.co/api/v2/pokemon/?limit=898";
    let response = await fetch(url);
    let responseAsJson = await response.json();

    for (let i = 0; i < responseAsJson.results.length; i++) {
      pokemons.push({
        id: i + 1,
        name: responseAsJson.results[i].name,
        types: [],
      });
    }

    getAllTypes();
    console.log(pokemons);
  }

  /**fetch pokemon types */
  async function getAllTypes() {
    for (let i = 0; i < 18; i++) {
      let url = "https://pokeapi.co/api/v2/type/" + (i + 1);
      let response = await fetch(url);
      let responseAsJson = await response.json();

      const pokemonInType = responseAsJson.pokemon;

      for (let j = 0; j < pokemonInType.length; j++) {
        const pokemonId = pokemonInType[j].pokemon.url
          .replace("https://pokeapi.co/api/v2/pokemon/", "")
          .replace("/", "");

        if (pokemonId <= pokemons.length && pokemons[pokemonId]) {
          pokemons[pokemonId].types.push(responseAsJson.name);
        }
      }
    }

    //     loadingCompletion();
  }

  /**hide loading div after completion */
  // function loadingCompletion() {
  //     const loadingDiv = document.getElementById('loading-div');
  //     loadingDiv.classList.add('hideLoading');

  //     setTimeout(function() {
  //         loadingDiv.classList.replace('hideLoading', 'hide');
  //         document.body.style.overflow = 'unset';
  //     }, 500);

  //     pokemons.splice(0, 1);
  //     currentList = pokemons;

  //     updatePokemonList();
  // };
  return (
    <div>
      <SimpleGrid columns={4} className="ChakraGrid" spacing={6}>
        {pokemons.map((pokemon, key) => (
          <Card key={key}>
            <CardBody>
              <Text>{pokemon.name}</Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
}
