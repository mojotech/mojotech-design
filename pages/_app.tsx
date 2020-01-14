import App from "next/app";
import Head from "next/head";
import * as React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "emotion-theming";
import { Global } from "@emotion/core";
import { ThemeDecorator, BaseTheme } from "@mojotech/mojo-ui";

export default class extends App {
  render() {
    const { Component, pageProps }: AppProps = this.props;
    const { colors } = BaseTheme;

    return (
      <ThemeProvider theme={BaseTheme}>
        <Head>
          <title>MojoTech Design</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Global
          styles={{
            html: {
              backgroundColor: colors.dark,
            },
            "::selection": {
              backgroundColor: colors.mojogreen,
              color: "white",
              textShadow: `0 1px 0 ${colors.meangreen}80`,
            },
          }}
        />
        <ThemeDecorator>
          <Component {...pageProps} />
        </ThemeDecorator>
      </ThemeProvider>
    );
  }
}
