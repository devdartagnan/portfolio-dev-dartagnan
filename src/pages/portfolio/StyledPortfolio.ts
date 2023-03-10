import { devices } from '../../styles/breakPoints'
import styled from 'styled-components'

//--------------------------------------
// This part is for index.tsx file
export const StyledContainer = styled.section`
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
    display: flex;
    flex-direction: column;
    padding: 0 ${({ theme }) => theme.fontSizes.medium};

    figure{
        display: grid;
        gap: 8px;
        height: auto;
        margin: 16px 0;
        
        place-items: center;
        width: 100%;

        a{
            background: radial-gradient(ellipse at top, ${({ theme }) => theme.colors.primary}, transparent),            
            radial-gradient(ellipse at bottom, ${({ theme }) => theme.colors.background}, transparent);
            border-radius: 2px;
            box-sizing: content-box;
            flex-grow: 1;
            height: 270px;
            margin: 2px;
            overflow: hidden;

                    img{
                        width: auto;
                        height: 100%;
                        min-width: 100%;
                        object-fit: cover;
                        transition: transform .3s;
                    }
                .figure-link:hover img{
                    transform: scale(1.2,1.2);
                }
                .figure-title{
                    color: ${({ theme }) => theme.colors.text};
                    font-size: 16px;
                    font-weight: 600;
                    align-self: center;
                }
                .figure-description{
                    color: ${({ theme }) => theme.colors.textOpacity04};
                    font-size: 14px;
                    font-weight: 400;
                }
            }
        }
    @media ${devices.tablet} {
        display: grid;
        margin: 16px 0;
        place-items: center;
        text-align: center;
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
                height: 250px;
                
                img{
                    height: 100%;
                    width: auto;
                }
}
        }
    }
`
//--------------------------------------
// This part is for [detailsID].tsx file 
export const StyledDetails = styled.section`
    
.img-carrousel{
    background: radial-gradient(ellipse at top, ${({ theme }) => theme.colors.primary}, transparent),            
                            radial-gradient(ellipse at bottom, ${({ theme }) => theme.colors.background}, transparent);
    display: grid;
    height: 475px;
    margin-top: 24px;
    overflow: hidden;
    place-items: center;
    position: relative;
    width: 100vw;

    img{
        object-fit: cover;
        max-width: 100%;
    }
    .buttons{
        background-color: ${({ theme }) => theme.colors.primary};
        bottom: 0;
        display: flex;
        position: absolute;
        right: 0;
        width: 60px;

        .button-top{
            border: none;
            opacity: 0.6;
            height: 40px;
            right: 42%;
            top: 0;
            width: 80px;
        }
        .button-bottom{
            border: none;
            bottom: 0;
            opacity: 0.6;
            height: 42px;
        right: 40%;
        width: 80px;
    }
    }
}
    .details-container{
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin: 24px 0 0 48px;
    }
@media ${devices.tablet} {
    display: grid;
    grid-template-columns: 45% auto;
    height: calc(100vh - 160px);
    padding: 24px ${({ theme }) => theme.fontSizes.medium};
        .img-carrousel{
            height: 360px;
            width: 100%;
            img{
                height: auto;
                width: 100%;
    }
        }
    }

    @media ${devices.laptopL} {
        
    }
`

export const StyledTech = styled.section`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 24px;
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
    
    @media ${devices.tablet} {}
    
`

export default StyledContainer