import { SmallPokemon } from "@/interfaces"
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react"
import { useRouter } from "next/router"
import { FC } from "react"

interface Props {
    pokemon: SmallPokemon,

}

export const PokemonCard:FC<Props> = ({pokemon}) => {

    const router = useRouter()

    const clickPokemon = () => {
        router.push(`/name/${pokemon.name}`)
    }

  return (
    <Card onClick={clickPokemon} key={pokemon.id} shadow="lg" isHoverable isPressable>
        <CardBody className="p-0 overflow-visible">
          <Image className="h-[160px]" width="100%" src={pokemon.img} alt={pokemon.name}/>
        </CardBody>
        <CardFooter className="text-sm  justify-between">
          <b className="capitalize">{pokemon.name}</b>
          <p className="text-default-500">#{pokemon.id}</p>
        </CardFooter>
    </Card>
  )
}
