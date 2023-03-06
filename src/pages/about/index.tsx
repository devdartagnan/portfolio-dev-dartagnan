import styled from 'styled-components'
import BioSectionex from './BioSection'
import InfoSection from './InfoSection'


const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  margin: 36px 0;
  padding: 0 ${({ theme }) => theme.fontSizes.medium};
`
export default function About() {

  return (
    <StyledMain>
      <InfoSection />
      <BioSectionex />
    </StyledMain>
  )
}
