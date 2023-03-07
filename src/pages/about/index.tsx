import styled from 'styled-components'
import BioSectionex from './BioSection'
import InfoSection from './InfoSection'
import { devices } from '../../styles/breakPoints'

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  margin: 36px 0;
  padding: 0 ${({ theme }) => theme.fontSizes.medium};
  @media ${devices.laptop}{
    display: grid;
    gap: 25px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1;
    max-width: 1660px;
    margin: auto;
    padding-top: 24px;
  }
`
export default function About() {

  return (
    <StyledMain>
      <InfoSection />
      <BioSectionex />
    </StyledMain>
  )
}
