import "@/index.css";
import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import React from "react";

import { ThemeProvider } from "../src/components/Darkmode/ThemeProvider";

const withThemeProvider = (Story, context) => {
   const theme = context.globals.scheme || "light";
   return (
      <ThemeProvider defaultTheme={theme}>
         <Story />
      </ThemeProvider>
   );
};

const withThemeClass = withThemeByClassName({
   themes: {
      light: "",
      dark: "dark",
   },
   defaultTheme: "light",
});

const preview: Preview = {
   decorators: [withThemeProvider, withThemeClass],
   parameters: {
      backgrounds: { disable: true },
      controls: {
         matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
         },
      },
   },
};

export default preview;
