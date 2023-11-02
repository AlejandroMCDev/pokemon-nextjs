import { Card, Image } from "@nextui-org/react"
import { useRouter } from "next/router"

export const FavoriteCardPokemon = ( {id}:{id:number} ) => {

    const {push} = useRouter()

    const onFavoriteClicked = () => {
        push(`/pokemon/${id}`)
    }


  return (
    <Card onClick={onFavoriteClicked} key={id} isHoverable isPressable className='p-[10px] flex items-center'>
        <Image className='w-full h-[140px]' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
    </Card>
  )
}
