import type { Meta, StoryObj } from "@storybook/react";

import ErrorAlert from "./ErrorAlert";

const meta: Meta<typeof ErrorAlert> = {
   title: "My Components/ErrorAlert",
   component: ErrorAlert,
   parameters: {
      layout: "centered",
      docs: {
         description: {
            component:
               "This component takes an error message and displays it together with AlertCircle icon.",
         },
      },
   },
   tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ErrorAlert>;

export const Default: Story = {
   args: {
      message: "Something went wrong!",
   },
   render: (args) => <ErrorAlert {...args} />,
};
