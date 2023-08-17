import React from "react";
import { Link } from "react-scroll";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! My name is Ben Smith
        <br />
        and I am a Freelance Web Developer!
      </SectionTitle>
      <SectionText>
        Website developer | Fitness Enthusiast | Terrible Surfer
      </SectionText>
      <Link to="projects" smooth={true} duration={500}>
        <Button>Learn More</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;
