import * as React from "react";
import Header from "./Header";
import { SchemeProvider } from "@mojotech/mojo-ui";

const Layout: React.FC = props => (
  <SchemeProvider scheme="dark">
    <Header />
    {props.children}
  </SchemeProvider>
);

export default Layout;
