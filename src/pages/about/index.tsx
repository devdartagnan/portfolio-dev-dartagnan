import styled from 'styled-components'
import { BsFillBriefcaseFill, BsFillPersonFill } from 'react-icons/bs'
import { HiLocationMarker, HiSpeakerphone } from 'react-icons/hi'
import PictureProfile from '@/components/Profile'

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  margin: 36px 0;
  padding: 0 ${({ theme }) => theme.fontSizes.medium};
`
const StyledTags = styled.section`
  display: flex;
  flex-direction: column;
  margin: 65px 0 45px 0;
  .tags-cards{
    display: flex;
    flex-direction: column;
    font-size: 15px;
    font-weight: 400;
    gap: 8px;
    margin-bottom: 28px;
    svg{
      color: ${({ theme }) => theme.colors.text};
      opacity: 0.8;
      font-size: 30px;
    }
    .subtitle{
      color: ${({ theme }) => theme.colors.text};
      opacity: 0.6;
    }
  }
`
export default function About() {

  return (
    <StyledMain>
      <h1>Dev <br /> Dartagnan.</h1>
      <PictureProfile />
      <StyledTags>
        <div className='tags-cards'>
          <BsFillBriefcaseFill />
          <p className='subtitle'>Role</p>
          <p>Front-end Developer</p>
        </div>
        <div className='tags-cards'>
          <HiLocationMarker />
          <p className='subtitle'>Location</p>
          <p>Lisbon - Portugal</p>
        </div>
        <div className='tags-cards'>
          <BsFillPersonFill />
          <p className='subtitle'>Age</p>
          <p>31</p>
        </div>
        <div className='tags-cards'>
          <HiSpeakerphone />
          <p className='subtitle'>Languages</p>
          <p>Portuguese / English</p>
        </div>
      </StyledTags>
    </StyledMain>
  )
}
