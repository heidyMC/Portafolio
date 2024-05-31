/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/ft.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "ng|she",
    description:
      "ng|she is a workshop designed to encourage more women to participate in programming, teaching the basics of web programming with Angular in a fun and personalized way.",
    url: "https://www.facebook.com/share/p/zC9tvF85MnTN3nDg/",
  },
  {
    title: "HackMeeting",
    description:
      "HackMeeting is a gathering focused on hacking, cybersecurity and technology. It offers talks, workshops and practical experiences, as well as thematic villages to explore specific areas of interest within the technology community.",
    url: "https://l.facebook.com/l.php?u=https%3A%2F%2F0x7e7.hackmeeting.org.bo%2F&h=AT2vOHj4vQRwLL7-fsEjaNNyP3wHLOoCj7_f2MqMTIDr7iAD2tSZleNaAClGEg74rLF-ESOsQWAWwhZyYf4d4DesD_9ctjHVr7VJHfeCj9mqJALi1swTjJr0UGQSlHbiwO_F&s=1",
  },
  {
    title: "FLISoL",
    description:
      "The Latin American Free Software Installation Festival, the largest in Latin America, an event for all audiences",
    url: "https://www.facebook.com/share/p/MM4pS94wFrD94YD2/",
  },
  {
    title: "women 360 workshop",
    description:
      "The event brought together the scholarship recipients of the Mujeres 360 2024 Program in Cochabamba. It was an occasion full of energy and determination, where the participants shared their goals and ideas to continue empowering themselves and generating a positive impact in their communities. The program is designed to support their growth and development in the technological field.",
    url: "https://www.facebook.com/share/p/z4YEQT4KYAvThqy1/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
