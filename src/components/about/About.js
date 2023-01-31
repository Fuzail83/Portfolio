import React from "react";
import { ReactComponent as Html } from "../../assets/html.svg";
import { ReactComponent as Css } from "../../assets/css.svg";
import { ReactComponent as Js } from "../../assets/js.svg";
import { ReactComponent as Ts } from "../../assets/ts.svg";
import { ReactComponent as Node } from "../../assets/node.svg";
import { ReactComponent as Reacti } from "../../assets/react.svg";
import { ReactComponent as Fire } from "../../assets/fire.svg";
import { ReactComponent as Boot } from "../../assets/boot.svg";
import { ReactComponent as Figma } from "../../assets/figma.svg";
import { ReactComponent as Git } from "../../assets/git.svg";
import { ReactComponent as Gulp } from "../../assets/gulp.svg";
import { ReactComponent as Post } from "../../assets/post.svg";

const About = () => {
  const skills = [
    {
      title: "HTML5",
      img: <Html />,
    },
    {
      title: "CSS3",
      img: <Css />,
    },
    {
      title: "JavaScript",
      img: <Js />,
    },

    {
      title: "NodeJS",
      img: <Node />,
    },

    {
      title: "React",
      img: <Reacti />,
    },

    {
      title: "Bootstrap",
      img: <Boot />,
    },
    {
      title: "Figma",
      img: <Figma />,
    },
    {
      title: "Git",
      img: <Git />,
    },
  ];

  return (
    <>
      <div id="about">
        <div>
          <h2>About S</h2>
          <p>
            Hello! My name is Fuzail Akhtar and I am a self taught frontend
            developer.
          </p>
          <p>
            The scope of my work is mostly includes responsive design, design to
            html css js, CSS/JS annimations, jquery, react, firebase, REST APIs
            and other works based on web development and javascript.
          </p>
          <p>
            That being said, I like learning all aspects of web development and
            take pride in my fullstack work. Because of this, I am always open
            to new projects in new development environments.
          </p>
        </div>
        <div>
          <h3 style={{ marginTop: "2rem" }}>Current Skills</h3>
          <div className="skillgrid">
            {skills?.map((skill) => (
              <div>
                <div className="skillemblem">{skill.img}</div>

                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>Programming Directive</h3>
          <p>Consume, as in to consume knowledge to serve the end user.</p>
          <p>
            Enhance, as in to share solutions in order to enhance the problem.
          </p>
          <p>
            Replicate, as in to replicate the process to consistently solve
            problems.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
