import * as React from "react";
import { SchemeProvider } from "@mojotech/mojo-ui";

import Footer from "./Footer";

const Layout: React.FC = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SchemeProvider scheme="dark">
      {props.children}
      <Footer />
    </SchemeProvider>
  );
};

export default Layout;
