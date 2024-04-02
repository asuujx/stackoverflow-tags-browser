import "@/index.css";
import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import React from "react";

import { ThemeProvider } from "../src/components/Darkmode/ThemeProvider";

export const decorators = [
   (Story, context) => {
      const theme = context.globals.scheme || "light";
      return (
         <ThemeProvider defaultTheme={theme}>
            <Story />
         </ThemeProvider>
      );
   },
   withThemeByClassName({
      themes: {
         light: "",
         dark: "dark",
      },
      defaultTheme: "light",
   }),
];

const preview: Preview = {
   parameters: {
      controls: {
         matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
         },
      },
   },
};

export default preview;
