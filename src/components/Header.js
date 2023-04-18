import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    id: 1,
    icon: faEnvelope,
    url: "mailto: serly-nazarian@hotmail.com",
  },
  {
    id: 2,
    icon: faGithub,
    url: "https://github.com/serlyNazarian",
  },
  {
    id: 3,
    icon: faLinkedin,
    url: "linkedin.com/in/serly-x-42452524a",
  },
  {
    id: 4,
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/20963627/serly-x?tab=profile",
  },
];

const Header = () => {

   const headerRef = useRef(null);


  const handleClick = (anchor) => (e) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      e.preventDefault();
    }
  };

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          // flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <nav
            style={{
              width: "200px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {socials.map((social) => {
              return (
                <div key={social.id}>
                  <a href={social.url}>
                    <FontAwesomeIcon icon={social.icon} size="2x" />
                  </a>
                </div>
              );
            })}
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#contact-me" onClick={handleClick("contactme")}>
                Contact Me
              </a>
              <a href="#projects" onClick={handleClick("projects")}>Projects</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
