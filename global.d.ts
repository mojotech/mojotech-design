declare type Theme = {
  spaces: string[];
  colors: {
    mojogreen: string;
    white: string;
    dark: string;
    gray: string;
    mediumGray: string;
    darkGray: string;
    yellow: string;
    scheme: {
      dark: {
        bg: string;
        fg: string;
      };
      light: {
        bg: string;
        fg: string;
      };
      gray: {
        bg: string;
        fg: string;
      };
    };
  };
  maxWidths: string[];
  fontFamilies: { main: string; display: string };
  fontSizes: string[];
  lineHeights: number[];
  opacities: number[];
  zIndices: number[];
};
