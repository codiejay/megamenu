import React from "react";
import * as Chakra from "@chakra-ui/react";
import { PageProps } from "gatsby";
import FadeTransition from "../components/transitions/fade-transition";
import {Header} from "../components/header";
import "keen-slider/keen-slider.min.css";
import { SecondaryMenu } from '../components/secondarymenu';

const Layout = ({ children, location }: PageProps): React.ReactElement => {
  global.baseUrl = "/.netlify/functions/base";

  const [showSecondaryMenu, setShowSecondaryMenu] = React.useState(false);
  return (
    <>
      <Chakra.Flex m="0 auto" flexDirection="column" maxW="1440px">
        <Header 
          updateSecondaryMenuState={(state) => {
            setShowSecondaryMenu(state)
          }}
        />
        <SecondaryMenu 
          display={showSecondaryMenu}
        />
        <FadeTransition shouldChange={location.pathname}>
          {children}
        </FadeTransition>
      </Chakra.Flex>
    </>
  );
};

export default Layout;
