import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, we are <HighlightSpan>ShirazLinux</HighlightSpan>!
      </p>
      <p>
        A <HighlightAlt>free software community</HighlightAlt> based in Shiraz, Iran.
      </p>
      <p>
        We are passionate about open source code and <br />
        building solutions to empower digital freedom.
      </p>
    </AboutWrapper>
  );
};

export default About;
