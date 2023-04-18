import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Calculator",
    description:
      "Handy tool, A simple yet effective react calculator built with React ",
    getImageSrc: () => require("../images/calc-app-img.webp"),
  },
  {
    title: "React Artist Website Template",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/Wix-Project-img-final.webp"),
  },
  {
    title: "Cosmetics Shop",
    description:
      "A One-stop shop for Purchasing anything make-up cosmetics related",
    getImageSrc: () => require("../images/land-img-1.jpeg"),
  },
  {
    title: "Movie App",
    description:
      "A movie app that let's you find any movies and provide a description and ratings",
    getImageSrc: () => require("../images/React-MovieCards.jpeg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            url="https://github.com/rgommezz/react-native-offline"
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
