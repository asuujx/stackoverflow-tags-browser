import "@/index.css";
import type { Preview } from "@storybook/react";

const preview: Preview = {
   parameters: {
      backgrounds: {
         values: [
            { name: "light", value: "hsl(45 100% 99%)" },
            { name: "dark", value: "hsl(0 0% 12%)" },
         ],
      },
      controls: {
         matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
         },
      },
   },
};

export default preview;
