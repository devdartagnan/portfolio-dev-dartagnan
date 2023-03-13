import React from 'react'
import data from '../../api/data.json'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { StyledDetails, StyledTech } from './StyledPortfolio'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { FaReact } from 'react-icons/fa'
import { SiTypescript, SiJavascript } from 'react-icons/si'


export default function Details() {
    const router = useRouter()
    const { detailsId } = router.query

    return (
        <StyledDetails>
            {data.map((data) => {
                return detailsId !== data.id ? false :
                    (
                        <div className='img-carrousel' key={data.id}>

                            {data.altPage.contentImages.map(img => {
                                return (
                                    <Image
                                        alt=''
                                        height={0}
                                        key={img.indexOf(img)}
                                        src={img}
                                        unoptimized
                                        width={0}
                                    />
                                )
                            })}
                            <div className='buttons'>
                                <RiArrowLeftSLine className='button-top' />
                                <RiArrowRightSLine className='button-bottom' />
                            </div>
                        </div>
                    )
            })}
            {data.map((data) => {
                return detailsId !== data.id ? false :
                    (
                        <section className="details-container">
                            <h2>{data.titulo}</h2>
                            <p>Description: {data.altPage.textoDescricao}</p>
                                <Link href={data.altPage.projectUrl} className='deploy'>
                                    Visit the site
                                </Link>
                        </section>
                    )
            })}
            <StyledTech>
                <h2>
                    Techology
                </h2>
                {data.map(item => {
                    return detailsId !== item.id ? false : (
                        <div>
                            {item.tag.includes('javascript') ? <SiJavascript /> : void (0)}
                            {item.tag.includes('typescript') ? <SiTypescript /> : void (0)}
                            {item.tag.includes('react') ? <FaReact /> : void (0)}
                        </div>
                    )
                })}
            </StyledTech>

        </StyledDetails>
    )
}
