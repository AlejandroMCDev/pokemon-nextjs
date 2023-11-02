import { FavoriteCardPokemon } from "."

export const FavoritePokemons = ( {favoritesPokemons}:{favoritesPokemons:number[]} ) => {
  return (
    <section className='container mx-auto mt-5 grid gap-2 justify-start grid-cols-[repeat(auto-fit,minmax(300px,1fr))]'>
        {
          favoritesPokemons.map((id) => (
            <FavoriteCardPokemon key={id} id={id}/>
          ))
        }
    </section>
  )
}
