import { devices } from '../../styles/breakPoints'
import styled from 'styled-components'

// This part is for index.tsx file

export const StyledContainer = styled.main`
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

export const StyledPortfolio = styled.section`
    display: grid;
    margin: 16px 0;
    place-items: center;
    text-align: center;
    
    figure{
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin: 16px 0;
        .figure-link{
            img{
                height: 100%;
                width: auto;
            }
        }.figure-link:hover img{
            transform: scale(1.2,1.2);
        }
        .figure-title{
            color: ${({ theme }) => theme.colors.text};
            font-weight: 600;
            opacity: 0.8;
        }
    }
    @media ${devices.tablet} {
        gap: 48px;
        grid-template-columns: 1fr 1fr;
        margin: auto;
        padding: 0 ${({ theme }) => theme.fontSizes.medium};
        figure{
            width: 100%;
            a{
                background: radial-gradient(ellipse at top, ${({ theme }) => theme.colors.primary}, transparent),            
                            radial-gradient(ellipse at bottom, ${({ theme }) => theme.colors.background}, transparent);
                height: 250px;
                
                img{
                    height: 100%;
                    width: auto;
                }
}
        }
    }

    @media ${devices.laptopL} {
        gap: 48px;
        grid-template-columns: 1fr 1fr 1fr;
        max-width: 1660px;
        margin: auto;
        padding: 0 ${({ theme }) => theme.fontSizes.medium};
        figure{
            width: 100%;
            a{
                background: radial-gradient(ellipse at top, ${({ theme }) => theme.colors.primary}, transparent),            
                            radial-gradient(ellipse at bottom, ${({ theme }) => theme.colors.background}, transparent);
                height: 250px;
                
                img{
                    height: 100%;
                    width: auto;
                }
}
        }
    }
`

// This part is for [detailsID].tsx file 

export const StyledDetails = styled.section`
.img-carrousel{
    height: auto;
    margin-top: 24px;
    width: 100vw;
    img{
        width: 100%;
    }
    .details-container{
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-top: 24px;
        padding: 24px ${({ theme }) => theme.fontSizes.medium};
    }
}
`

export const StyledTech = styled.section`
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-bottom: 45px;
    padding: 0 ${({ theme }) => theme.fontSizes.medium};
    
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
`

export default StyledContainer