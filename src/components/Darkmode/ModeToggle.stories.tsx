import type { Meta, StoryObj } from "@storybook/react";

import { ModeToggle } from "@/components/Darkmode/ModeToggle";

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
   render: () => <ModeToggle />,
};
