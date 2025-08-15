import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
░█▀▀░█░█░▀█▀░█▀▄░█▀█░▀▀█░█░░░▀█▀░█▀█░█░█░█░█
░▀▀█░█▀█░░█░░█▀▄░█▀█░▄▀░░█░░░░█░░█░█░█░█░▄▀▄
░▀▀▀░▀░▀░▀▀▀░▀░▀░▀░▀░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀▀▀░▀░▀
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
░█▀▀░█░█░▀█▀░█▀▄░█▀█░▀▀█
░▀▀█░█▀█░░█░░█▀▄░█▀█░▄▀░
░▀▀▀░▀░▀░▀▀▀░▀░▀░▀░▀░▀▀▀
░█░░░▀█▀░█▀█░█░█░█░█    
░█░░░░█░░█░█░█░█░▄▀▄    
▀▀▀░▀▀▀░▀░▀░▀▀▀░▀░▀   
          `}
          </PreNameMobile>
          </PreWrapper>
          <div>Welcome to ShirazLinux Terminal. (Version 2.3.0)</div>
          <Seperator>----</Seperator>
          <div>
            Explore our open-source ecosystem at {" "}
            <Link href="https://github.com/shirazlinux">
              ShirazLinux GitHub
            </Link>
            .
          </div>
          <Seperator>----</Seperator>
          <div>
            Type `<Cmd>menu</Cmd>` to see community projects or `<Cmd>events</Cmd>` for upcoming meetups.
          </div>
          <br/>
      </div>
      <div className="illu-section">
        {/* <PreImg>
          {`
                                                                                                                                                             
         `}
        </PreImg> */}
      </div>
    </HeroContainer>
  );
};

export default Welcome;
