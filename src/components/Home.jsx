import React from "react";

export default function Home() {
    // css here
    const styles = {
        jumbotron: {
            backgroundColor: " #343a40",
            color: "white"
        },
        card: {
            marginBottom: "20px"
        },
        footer: {
            backgroundColor: "#343a40",
            color: "white",
            padding: "20px 0",
            textAlign: "center",
        }
      }

  return (
    <div>
      <div class="container mt-4" id="about">
        <div class="jumbotron" style={styles.jumbotron}>
          <h1 class="display-4">Hello, I'm Akhilesh Thakur</h1>
          <p class="lead">
            I'm a passionate MERN developer ready to create awesome websites and
            applications.
          </p>
          <hr class="my-4" />
          <p>Let's build something great together!</p>
        </div>
      </div>

      <div className="container mt-4" id="skills">
        <h2>Skills</h2>
        <p>Here are some of my key skills:</p>
        <ul>
          <li>Web Development</li>
          <li>JavaScript (React, Node.js)</li>
          <li>HTML5 and CSS3</li>
          <li>Database Management (MySQL, MongoDB)</li>
          <li>Responsive Design</li>
          <li>Aws services</li>
          <li>Automate tasks with GitHub Actions</li>
          <li>Automate tasks with Jenkins Baba</li>
          <li>He is also proficient in Docker</li>
          <li>Deep knowledge about Dark Web</li>
        </ul>
      </div>

      <div className="container mt-4" id="education">
        <h2>Education</h2>
        <p>I have a degree in Computer Science from Internet University.</p>
      </div>

      <div className="container mt-4" id="portfolio">
        <h2>Portfolio</h2>
        <div className="card-deck">
          <div className="card" style={styles.card}>
            <img
              src="../images/project.png"
              className="card-img-top"
              alt="Project 1"
              style={{width: "30vw"}}
            />
            <div className="card-body">
              <h5 className="card-title">Project 1: MERN app deploy</h5>
              <p className="card-text">This project is all about deploying this portfolio app on cloud platform AWS</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4" id="contact">
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me: @ http://43.205.235.10/</p>
      </div>

      <div className="footer" style={styles.footer}>
        <p>&copy; 2023 Akhilesh. All rights reserved.</p>
      </div>
    </div>
  );
}
