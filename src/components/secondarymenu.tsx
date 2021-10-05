import React from "react";
import * as Chakra from "@chakra-ui/react";
import Fbcircle from "../images/fbcircle.svg";
import Igcircle from "../images/igcircle.svg";
import Lnkdcircle from "../images/lnkdcircle.svg";
import FadeTransition from './transitions/fade-transition';



export const SecondaryMenu = ({display}: {display: boolean}) => {


  const SocialItem = ({title, link, icon}: {title: string, link: string, icon: any}) => {
    return ( 
      <Chakra.ListItem>
        <Chakra.Link _focus={{outline: 'none'}} href={link} isExternal >
          <Chakra.ListIcon as={icon}/>
          <Chakra.Text display="inline-block" fontWeight="medium" fontSize="16px" mb="1rem" color="#000">{title}</Chakra.Text>
        </Chakra.Link>
      </Chakra.ListItem>
    );
  }

  const SecondaryMenuItem = ({title}: {title: string,}) => {
    return ( 
      <Chakra.ListItem>
        <Chakra.Link color="#000" _hover={{borderColor: "greeen"}} _focus={{outline: 'none'}} href="https://netlify.com" isExternal >
          <Chakra.Text fontWeight="normal" fontSize="16px" mb="1rem" color="#000">{title}</Chakra.Text>
        </Chakra.Link>
      </Chakra.ListItem>
    );
  }

  return (
    <FadeTransition shouldChange={`${display}`}>
      <Chakra.Box
        width="100%"
        display={display ? "grid" : "none"}
        alignItems="inherit"
        gridTemplateColumns="2fr 8fr"
        gridGap={6}
      >
        <Chakra.Box 
          borderRight="1px solid #7D7C7B"
          p="20vh 0 0 20%"
        >
          <Chakra.Text mb='3rem' fontSize="16px" fontWeight="medium">Social</Chakra.Text>
          <Chakra.List spacing={4}>
            <SocialItem title="Instagram" link="https://instargam.com" icon={Igcircle} />
            <SocialItem title="Facebook" link="https://facebook.com" icon={Fbcircle} />
            <SocialItem title="Linkedin" link="https://linkedin.com" icon={Lnkdcircle} />
          </Chakra.List>
        </Chakra.Box>

        <Chakra.Box 
          mt="3rem"
          display="grid"
          w="80%"
          gridTemplateColumns="repeat(4, 1fr)"
        > 
          <Chakra.Box>
            <Chakra.Text fontSize="16px" mb="1rem" color="#000">Clients</Chakra.Text>
            <Chakra.List>
              <SecondaryMenuItem title="All clients"/>
              <SecondaryMenuItem title="Hospitality"/>
              <SecondaryMenuItem title="Retail"/>
              <SecondaryMenuItem title="Property"/>
              <SecondaryMenuItem title="Sports"/>
              <SecondaryMenuItem title="B2B"/>
            </Chakra.List>
          </Chakra.Box>

          <Chakra.Box>
            <Chakra.Text fontSize="16px" mb="1rem" color="#000">Works</Chakra.Text>
            <Chakra.List>
              <SecondaryMenuItem title="Zenith"/>
              <SecondaryMenuItem title="UPS"/>
              <SecondaryMenuItem title="Amazon"/>
              <SecondaryMenuItem title="Fintty"/>
              <SecondaryMenuItem title="Lakers"/>
              <SecondaryMenuItem title="Rubize"/>
            </Chakra.List>
          </Chakra.Box>

          <Chakra.Box>
            <Chakra.Text fontSize="16px" mb="1rem" color="#000">Featured Works</Chakra.Text>
            <Chakra.List>
              <SecondaryMenuItem title="CNN"/>
              <SecondaryMenuItem title="BBC"/>
              <SecondaryMenuItem title="Tech Today"/>
              <SecondaryMenuItem title="Hippies"/>
            </Chakra.List>
          </Chakra.Box>

          <Chakra.Box>
            <Chakra.Text fontSize="16px" mb="1rem" color="#000">Awards</Chakra.Text>
            <Chakra.List>
              <SecondaryMenuItem title="Best UX 2021"/>
              <SecondaryMenuItem title="Story tellers"/>
              <SecondaryMenuItem title="UI/UZ"/>
            </Chakra.List>
          </Chakra.Box>

        </Chakra.Box>


      </Chakra.Box>
    </FadeTransition>
    
  );
};

