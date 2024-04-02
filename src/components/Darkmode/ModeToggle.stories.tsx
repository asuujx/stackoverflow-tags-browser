import type { Meta, StoryObj } from "@storybook/react";

import { ModeToggle } from "@/components/Darkmode/ModeToggle";
import { ThemeProvider } from "./ThemeProvider";

const meta: Meta<typeof ModeToggle> = {
   title: "My Components/ModeToggle",
   component: ModeToggle,
   parameters: {
      docs: {
         description: {
            component:
               "This component enables the user to toggle between light and dark mode.",
         },
      },
      layout: "centered",
   },
   tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ModeToggle>;

export const Default: Story = {
   args: {
      theme: "light",
   },
   argTypes: {
      theme: {
         options: ["light", "dark", "system"],
         control: { type: "select" },
      },
   },
   render: () => <ModeToggle />,
};

export const Lightmode: Story = {
   render: () => (
      <ThemeProvider defaultTheme="light">
         <ModeToggle />
      </ThemeProvider>
   ),
};

export const Darkmode: Story = {
   render: () => (
      <ThemeProvider defaultTheme="dark">
         <ModeToggle />
      </ThemeProvider>
   ),
};
