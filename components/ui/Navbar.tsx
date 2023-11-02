import { Link as LinkUi, Spacer } from "@nextui-org/react"
import Link from 'next/link'
import Image from "next/image"


export const Navbar = () => {


  return (
    <div className="flex w-full flex-row items-center justify-start px-5 py-0 bg-gray-900">

        <Image priority width={70} height={70} alt="Ditto" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"/>

      <Link href="/" legacyBehavior>
        <LinkUi>
          <h2 className="text-white text-4xl inline">P</h2>
          <h3 className="text-white inline">okemon</h3>
        </LinkUi>
      </Link>

        <Spacer  className="grow"/>
        <Link href="/favorites" legacyBehavior>
          <LinkUi>
            <p className="text-white">Favoritos</p>
          </LinkUi>
        </Link>
    </div>
  )
}
