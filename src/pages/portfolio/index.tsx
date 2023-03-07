import React from 'react'
import data from '../../api/data.json'
import Link from 'next/link'
import { StyledContainer, StyledPortfolio } from './StyledPortfolio'

export default function Portfolio() {

    return (
        <StyledContainer>
            <select name="" id="">
                <option value="Todos">Todos</option>
                <option value="Javascript">Javascript</option>
                <option value="Typescript">Typescript</option>
                <option value="Sass">Sass</option>
            </select>
            <StyledPortfolio>
                {data.map((data) => {
                    return (
                        <figure key={data.id}>
                            <Link
                                className='figure-link'
                                href={`/portfolio/${data.id}`}>
                                <img
                                    src={data.thumb}
                                    alt={data.altImage}
                                    width='100'
                                    height="100"
                                />
                            </Link>
                            <p className='figure-title'>{data.titulo}</p>
                            <p>{data.cardDescription}</p>
                        </figure>
                    )
                })}
            </StyledPortfolio>
        </StyledContainer>
    )
}
