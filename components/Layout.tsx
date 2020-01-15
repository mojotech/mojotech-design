import * as React from "react";
import { SchemeProvider } from "@mojotech/mojo-ui";

import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC = props => (
  <SchemeProvider scheme="dark">
    <Header />
    {props.children}
    <Footer />
  </SchemeProvider>
);

export default Layout;
