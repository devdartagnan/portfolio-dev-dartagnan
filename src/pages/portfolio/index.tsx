import React from 'react'
import styled from 'styled-components'
import data from '../../api/data.json'

const StyledContainer = styled.main`
    margin-top: 16px;
    select{
        background: ${({ theme }) => theme.colors.secundary};
        border-radius: 12px;
        box-sizing: border-box;
        color: ${({ theme }) => theme.colors.text};
        height: 32px;
        margin: 0 ${({ theme }) => theme.fontSizes.medium};
        padding:4px;
    }

`

const StyledPortfolio = styled.section`
    display: grid;
    margin: 16px 0;
    place-items: center;
    text-align: center;
    
    figure{
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin: 16px 0;
        img{
            height: auto;
            width: 100%;
        }
        .figure-title{
            color: ${({ theme }) => theme.colors.text};
            font-weight: 600;
            opacity: 0.8;
        }
    }
`

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
                            <img src={data.thumb} alt={data.altImage} width='100' height="100" />
                            <p className='figure-title'>{data.titulo}</p>
                            <p>{data.cardDescription}</p>
                        </figure>
                    )
                })}
            </StyledPortfolio>
        </StyledContainer>
    )
}
