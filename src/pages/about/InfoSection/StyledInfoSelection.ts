import styled from 'styled-components'
import { Roboto } from 'next/font/google'
import { devices } from '../../../styles/breakPoints'

const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    subsets: ['latin'],
})
export const StyledDiv = styled.div`
margin-top: ${({theme})=> theme.fontSizes.large};
    @media ${devices.tablet}{
    grid-column: 1;
    grid-row: 1;
}
`
export const StyledH1 = styled.h1`
    font-size: 56px;
    font-weight: 500;
    grid-column: 1;
    grid-row: 1;
`

export const StyledTags = styled.section`
    display: grid;
    margin: 65px 0 45px 0;

    .tags-cards{
        display: flex;
        flex-direction: column;
        font-size: 15px;
        font-weight: 400;
        gap: 8px;
        margin-bottom: 28px;
        svg{
            color: ${({ theme }) => theme.colors.text};
            opacity: 0.8;
            font-size: 30px;
        }
        .subtitle{
            color: ${({ theme }) => theme.colors.text};
            opacity: 0.6;
    }
    
}
@media ${devices.tablet}{
    grid-column: 1;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 140px auto;
    grid-row: 2;
    margin-top: 160px;
}
`
export const StyledTech = styled.section`
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-bottom: 45px;

    h2{
        font-family: ${roboto.style.fontFamily};
    }
    .tech-item{
        display: flex;
        flex-direction: column;
        gap: 2px;

        .tech-item__trackBar{
            background-color: ${({ theme }) => theme.colors.primary};
            border-radius: 5px;
            display: flex;
            height: 7px;
            opacity: 0.8;
            width: 100%;

            span{
                background-color: ${({ theme }) => theme.colors.text};
                border-radius: 5px 0px 0px 5px;
                width: 80%;
            }
            .trackBar__Javascript{
                width: 60%;
            }
            .trackBar__Typescript{
                width: 35%;
            }
            .trackBar__htmlCss{
                width: 80%;
            }
        }
    }
    @media ${devices.laptop}{
        border-bottom: none;
        grid-column: 1;
        grid-row: 1;
    }
`