import { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react"
import { GetStaticProps, GetStaticPaths, NextPage } from "next"
import confetti from 'canvas-confetti'
import { Layout } from "@/components/layouts"
import { Pokemon } from "@/interfaces"
import { getPokemonInfo, localFavorites } from "@/utils"


interface Props {
  pokemon:Pokemon
}

const PokemonPage:NextPage<Props> = ({pokemon}) => {

  const [isInFavorites, setIsInFavorites] = useState(false)

  
  const onToggleFavorite = () => {
    localFavorites.toggleFavorite( pokemon.id )
    setIsInFavorites(!isInFavorites)

    if (!isInFavorites) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0
        }
      })
    }
  }

  useEffect(() => {
    setIsInFavorites(localFavorites.existInFavorites(pokemon.id))
  }, [pokemon.id]);

  return (
    <Layout title={pokemon.name}>
        <section className="container mx-auto mt-5">
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-3">

            <Card className="p-8 w-full col-span-4" isHoverable>
              <CardBody>
                <Image className="h-[150px]" width="100%" alt={pokemon.name} src={pokemon.sprites.other?.dream_world.front_default || 'no-image'}/>
              </CardBody>
            </Card>
            
            <div className="col-span-8 mt-4 md:mt-0">
              <Card className="w-full h-[254px]" isHoverable>
                <CardHeader className="flex justify-between">
                    <h1 className="capitalize text-4xl">{pokemon.name}</h1>
                    <Button onClick={onToggleFavorite} className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" variant={ isInFavorites ? 'solid': 'ghost'}>
                      {isInFavorites ? 'En Favoritos' : 'Guardar en favoritos'}
                    </Button>
                </CardHeader>
                <CardBody>
                  <h2 className="text-3xl">Sprites:</h2>
                  <div className="container flex gap-3 justify-center">
                    <Image
                     className="h-[100px] w-[100px]"
                     src={pokemon.sprites.front_default}
                     alt={pokemon.name}
                    />
                    
                    <Image
                     className="h-[100px] w-[100px]"
                     src={pokemon.sprites.back_default}
                     alt={pokemon.name}
                    />

                    <Image
                     className="h-[100px] w-[100px]"
                     src={pokemon.sprites.front_shiny}
                     alt={pokemon.name}
                    />

                    <Image
                     className="h-[100px] w-[100px]"
                     src={pokemon.sprites.back_shiny}
                     alt={pokemon.name}
                    />

                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>
    </Layout>
  )
}



export const getStaticPaths: GetStaticPaths = async (ctx) => {


  const pokemons151 = [...Array(151)].map((value,index) => `${index + 1}`)

  return {
    paths: pokemons151.map((id) => {
      return {
        params: {id}
      }
    }),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {

  
  const { id } = params as { id: string }
  
  return {
    props: {
      pokemon: await getPokemonInfo( id )
    }
  }
}

export default PokemonPage
