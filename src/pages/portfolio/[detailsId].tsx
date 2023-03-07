import React from 'react'
import styled from 'styled-components'
import data from '../../api/data.json'
import { useRouter } from 'next/router'


const StyledDetails = styled.section`
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

const StyledTech = styled.section`
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

export default function Details() {
    const router = useRouter()
    const { detailsId } = router.query
    console.log(detailsId)

    return (
        <StyledDetails>
            {data.map((data) => {
                return detailsId !== data.id ? false :
                    (
                        <div className='img-carrousel' key={data.id}>
                            <img src={data.altPage.contentImages[0]} alt="" />
                            <section className="details-container">
                                <h2>{data.titulo}</h2>
                                <p>{data.altPage.textoDescricao}</p>
                            </section>
                        </div>
                    )
            })}
            <StyledTech>
                <h2>
                    Tech
                </h2>
                <div className='tech-item'>
                    <p className='tech-item__title'>Html/Css</p>
                    <div className='tech-item__trackBar'>
                        <span className='trackBar__htmlCss'>
                        </span>
                    </div>
                </div>
                <div className='tech-item'>
                    <p className='tech-item__title'>Javascript</p>
                    <div className='tech-item__trackBar'>
                        <span className='trackBar__Javascript'>
                        </span>
                    </div>
                </div>
                <div className='tech-item'>
                    <p className='tech-item__title'>Typescript</p>
                    <div className='tech-item__trackBar'>
                        <span className='trackBar__Typescript'>
                        </span>
                    </div>
                </div>
            </StyledTech>
        </StyledDetails>
    )
}
