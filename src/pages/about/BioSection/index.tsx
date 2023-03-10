import React from 'react'
import styled from 'styled-components'
import { devices } from '../../../styles/breakPoints'

const StyledBio = styled.section`
    display: flex;
    flex-direction: column;
    gap: 45px;
    text-align: justify;
    
    .biography-section{
        display: grid;
        gap: 18px;
        ul{
            padding-left: 1rem;
        }
    }
    @media ${devices.laptop}{
        border-left: 1px solid ${({ theme }) => theme.palette.textColor.borderOpacity01};
        border-right: 1px solid ${({ theme }) => theme.palette.textColor.borderOpacity01};
        grid-column: 2;
        grid-row: 1;
        padding: 0 48px;
    }
`

export default function BioSectionex() {
    return (
        <StyledBio>
            <div className='biography-section'>
                <h2>Biography</h2>
                <p>Alma and her husband have 2 kids:
                    a teenager and a 9-year-old. Now they can focus more
                    on their carreers but their main worry is about their
                    sons education and health. With a busy week days,
                    the time they can really get togther as a family is
                    during the dinners time and weekends. So their meal
                    is a really special part of their days. She loves to
                    use avocados in her diet.Interested in gardening.
                </p>
            </div>
            <div className='biography-section needs'>
                <h2>Needs</h2>
                <ul>
                    <li>Be ready for holiday family gathering as well as for light dinner during the day.</li>
                    <li>Find balance between feeling good about herself, being able to maintain her lifestyle, while contributing with the world</li>
                    <li>Wise choices of the brands and respect to environment and sustainability is fundamental for her.</li>
                </ul>
            </div>
            <div className='biography-section'>
                <h2>Pain points</h2>
                <p>
                    Alma need to find flexible solution that can help her to optimize her time while dedicating herself to her carreer, kids and making sure to maintain a health lifestyle.
                </p>
            </div>
        </StyledBio>
    )
}
