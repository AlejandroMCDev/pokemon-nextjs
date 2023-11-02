import { useState,useEffect } from 'react'
import { Layout } from "@/components/layouts";
import { NoFavorites } from "@/components/ui";
import { NextPage } from "next";
import { localFavorites } from '@/utils';
import { FavoritePokemons } from '@/components/pokemon';

const FavoritesPage:NextPage = () => {

  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritesPokemons(  localFavorites.favoritesPokemons() )
  }, []);

  return (
    <Layout title='Pokemons - Favoritos'>

      {
        favoritesPokemons.length === 0 ? ( <NoFavorites/> ) : (
          <FavoritePokemons favoritesPokemons={favoritesPokemons}/>
        )
      }
    </Layout>
  )
}

export default FavoritesPage;