import React from 'react'
import data from '../../api/data.json'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { StyledDetails, StyledTech } from './StyledPortfolio'


export default function Details() {
    const router = useRouter()
    const { detailsId } = router.query

    return (
        <StyledDetails>
            {data.map((data) => {
                return detailsId !== data.id ? false :
                    (
                        <div className='img-carrousel' key={data.id}>
                            <Image src={data.altPage.contentImages[0]} alt="" />
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
