import pokeApi from "@/api/pokeApi";
import { Layout } from "@/components/layouts";
import { PokemonCard } from "@/components/pokemon";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import { NextPage, GetStaticProps } from "next"

interface Props { 
  pokemons: SmallPokemon[]
}


const HomePage:NextPage<Props> = ( {pokemons} ) => {

  

  return (
    <>
      <Layout title="Listado de Pokémons">
        <section className="grid mt-4 mb-4 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {
            pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon}/>
            ))
          }
        </section>
      </Layout>
    </>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  const pokemons: SmallPokemon[] = data.results.map((pokemon,index) => {
    return {
      ...pokemon,
      id: index + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
    }

  })
  
  

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;
