import React from "react";
import { DiFirebase, DiReact, DiZend, DiGit } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Over the past 12 months I've developed my skills primarily in front end
      development, but have also studied various back-end technologies, most
      notably Python, and Javascript frameworks. Outside coding stacks, I am
      trained in Agile and DevOps methodologies of development and use Git and
      Github for version control.
    </SectionText>

    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML
            <br /> CSS
            <br /> Javascript <br />
            React.js <br /> Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python
            <br /> Node.js <br />
            Express.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiGit size="3rem" />
        <ListContainer>
          <ListTitle>Miscellaneous</ListTitle>
          <ListParagraph>
            Experience with <br />
            DevOps Methodologies
            <br /> Databases <br />
            Figma <br /> Git & Github
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
