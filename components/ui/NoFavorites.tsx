import Image from "next/image"


export const NoFavorites = () => {
  return (
    <div className="container flex flex-col h-[calc(100vh_-_100px)] items-center justify-center self-center gap-10">
        <h1 className="text-6xl">No hay favoritos</h1>
        <Image alt="Ditto" className="opacity-10 w-auto h-auto" width={250} height={250} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"/>
    </div>
  )
}
