import { useEffect, useState } from "react";
import PokemonList from "./components/PokemonList";
import "./App.css";
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
  InputGroup,
  InputRightElement,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function App() {
  return (
    <div className="App">
      <InputGroup className="ChakraInputGroup">
        <Input
          className="ChakraInput"
          variant="filled"
          placeholder="Search your Pokemon"
        />
        <InputRightElement
          children={
            <div className="PokeSearchIconContainer">
              <SearchIcon className="PokeSearchIcon" />
            </div>
          }
        />
      </InputGroup>
      <PokemonList />
    </div>
  );
}

export default App;
