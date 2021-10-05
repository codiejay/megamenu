import React from "react";
import * as Chakra from "@chakra-ui/react";


export const Header = ({updateSecondaryMenuState}: {updateSecondaryMenuState: any }) => {
  const [ selectedMenu, setSelectedMenu ] = React.useState("none");


  const updatedSelectedMenu = (menuText)  => { 
    if(selectedMenu === menuText) { 
      setSelectedMenu("none");
      updateSecondaryMenuState(false, menuText);
    }
    else { 
      setSelectedMenu(menuText);
      updateSecondaryMenuState(true, menuText);
    }
  }

  const MenuItem = ({menuText}: {menuText: string}) => {
    return ( 
      <Chakra.Text 
        textAlign="right" 
        fontSize="18px" 
        fontWeight="medium"
        _hover={{borderBottom:"1px solid #7D7C7B", cursor: "pointer"}}
        w="fit-content"
        color={selectedMenu === "none" ? 'black' : selectedMenu === menuText ? "black" : "#7D7C7B" }
        onClick={() => {
          updatedSelectedMenu(menuText)
        }}
      >
        {menuText}
      </Chakra.Text>
    );
  }

  return (
    <Chakra.Box
      as="header"
      mt="10vh"
      width="100%"
      transition="1s ease-out"
      display="grid"
      alignItems="center"
      gridTemplateColumns="2fr 8fr"
      gridGap={6}
    >
      <Chakra.Box w="100%" borderRight="1px solid #7D7C7B" p="0 0 0 20%"> 
        <Chakra.Text userSelect="none" color="#360c1f" fontSize="33px" fontWeight="extrabold">Red.</Chakra.Text>
      </Chakra.Box>

      <Chakra.Box w="80%"  display="grid" gridTemplateColumns="repeat(4, 1fr)"> 
        <MenuItem menuText='Project'/>
        <MenuItem menuText='Studio'/>
        <MenuItem menuText='Red Plus'/>
        <MenuItem menuText='Red Digital'/>
      </Chakra.Box>
    </Chakra.Box>
  );
};

