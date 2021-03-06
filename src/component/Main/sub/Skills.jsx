import React from 'react'

const Skills = () => {

  return (
    <section className="skills_wrap">
      <div className="w_1200">
        <header className="main_header">
          <p>
            SKILLS
          </p>
        </header>
        <main className="skills_main">
          <ul className="common_skill basic_skill">
            <li>
              <h3>FRONT_END</h3>
            </li>
            <li>
              <img src="img/html.png" alt="html" />
            </li>
            <li>
              <img src="img/css.png" alt="css" />
            </li>
            <li>
              <img src="img/jquery.png" alt="jquery" />
            </li>
            <li>
              <img src="img/js.png" alt="js" />
            </li>
            <li>
              <img src="img/styled_css.png" alt="styled_css" />
            </li>
            <li>
              <img src="img/sass.png" alt="sass" />
            </li>
            <li>
              <img src="img/react.png" alt="react" />
            </li>
            <li>
              <img src="img/vue.png" alt="vue" />
            </li>
            <li>
              <img src="img/typescriptLogo.svg" alt="typescript" />
            </li>
          </ul>
          <div className="common_skill communication_skill">
            <h3>COMMUNICATION</h3>
            <img src="img/zeplin.png" alt="zeplin" />
          </div>
          <div className="common_skill version_skill">
            <h3>VERSION_CONTROL</h3>
            <img src="img/version_skill.png" alt="version_skill" />
          </div>
          <div className="common_skill certic_skill">
            <h3>OTHER SKILLS</h3>
            <p> 
              #웹디자인 기능사 #컴퓨터 활용 능력 2급 #1종 보통 운전면허
            </p>
          </div>
        </main>
      </div>
    </section>
  )
}


export default Skills