import React from 'react'
import styled from 'styled-components'
import starIcon from '../../images/icons/star.svg'
import { COURSE_DATA } from './data'
const AboutMe = () => {
  const renderStars = (num: number) => {
    const starsArray = Array.from({ length: num }, (_, index) => index)
    return (
      <div>
        {starsArray.map((_, index) => (
          <img key={index} src={starIcon} alt='star' />
        ))}
      </div>
    )
  }

  return (
    <Container>
      <h2>About Me</h2>
      <p>
        Hi! I am a self-taught Front-End developer, bringing over 6 years of hands-on experience to the table, including
        a commendable year in a Tech Lead role. Ambitious and driven, I aspire to evolve into a full-stack developer,
        always embracing fresh challenges as the catalyst for honing my skills. Thriving both independently and within
        collaborative team environments, I am adept at navigating the dynamic landscape of web development. My
        commitment to continuous learning extends beyond the workplace, where he immerses myself in Udemy courses to
        stay at the forefront of industry trends. Beyond the digital realm, I find balance through my passion for
        fitness and gym activities, gaming and cherishing quality time my family.
      </p>
      <div className='skills'>
        <h3>Skills</h3>
        <div className='skills-list'>
          <div className='stars'>{renderStars(5)}</div>
          <p>
            React.js | CSS/SCSS/Styled-Components | HTML | Bitbucket | Github | UI/UX Development | Gatsby.js |
            JavaScript
          </p>
        </div>
        <div className='skills-list'>
          <div className='stars'>{renderStars(4)}</div>
          <p>TypeScript | Git | GraphQL | JSON | Agile/Scrum | UI Tools | Unit Testing | StoryBook</p>
        </div>
        <div className='skills-list'>
          <div className='stars'>{renderStars(3)}</div>
          <p>Redux | FireBase | JQuery | Bootstrap | Yarn/NPM | Jira | Next.js | DevOps | Angular | Node.js</p>
        </div>
        <div className='skills-list'>
          <div className='stars'>{renderStars(2)}</div>
          <p>Python | Django | vue.js | GSAP | C#</p>
        </div>
      </div>
      <div className='courses'>
        <h3>Courses</h3>
        {COURSE_DATA.map((course, i) => {
          return (
            <div key={i} className='course-item'>
              <h4>{course.title}</h4>
              <div className='flex'>
                <span>{course.year}</span> | <span>{course.status}</span>
              </div>
              <p>{course.location}</p>
            </div>
          )
        })}
      </div>
    </Container>
  )
}

const Container = styled.div`
  padding: 20px;
  text-align: center;
  display: block;
  margin: 0 auto;
  min-height: 100vh;
  h2,
  h3 {
    padding-bottom: 20px;
    font-weight: bold;
  }
  .skills {
    margin-top: 50px;
    .skills-list {
      padding: 10px 0;
      .stars {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        img {
          height: 20px;
        }
      }
    }
  }
  .courses {
    margin-top: 50px;
    .course-item {
      margin-bottom: 20px;
      h4 {
      }
      p {
      }
      .flex {
        display: flex;
        justify-content: center;
        gap: 10px;
        font-size: 12px;
        margin: 10px 0;
      }
    }
  }
  @media (min-width: 1200px) {
    max-width: 50vw;
  }
`

export default AboutMe
