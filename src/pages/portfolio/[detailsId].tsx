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
        padding: 0 ${({ theme }) => theme.fontSizes.medium};
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
        </StyledDetails>
    )
}
