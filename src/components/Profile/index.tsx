import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { devices } from '../../styles/breakPoints'

const StyledProfilePicture = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    img{
        margin: 56px 0;
        border-radius: 200px;
    }
    h2{
            width: 100%;
        }
    @media ${devices.mobileL}{
        h2{
            width: 80%;
        }
}
@media ${devices.tablet}{
        h2{
            width: 60%;
        }
}
    @media ${devices.laptop}{
        grid-column-start: 3;
        img{
        margin:0 0 56px 0;
    }
    }
`


export default function PictureProfile() {
    return (
        <StyledProfilePicture>
            <Image src="/assets12.png" alt="" width='250' height={250} />
            <h2>“
                It is very important for me to have fresh, tasty products at hand.
                ”</h2>
        </StyledProfilePicture>
    )
}
