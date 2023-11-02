
import Head from 'next/head'
import React from 'react'
import { Navbar } from '../ui'

interface Props {
    children:JSX.Element[] | JSX.Element
    title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout = ({children,title = 'Pokemon App'}: Props) => {

  

  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name='author' content='Alejandro Mendez' />
            <meta name={`description' content='Informacion sobre el pokemon ${title}`}/>
            <meta name='keywords' content={`${title}, pokemon, pokedex`}/>

            <meta property="og:title" content={`Informacion sobre el ${title}`} />
            <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>
        
        <Navbar/>

        <main className='px-5 py-0'>
            { children }
        </main>
    </>
  )
}
