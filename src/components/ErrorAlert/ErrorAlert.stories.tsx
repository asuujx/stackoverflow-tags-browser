import type { Meta, StoryObj } from "@storybook/react";

import ErrorAlert from "@/components/ErrorAlert/ErrorAlert";

const meta: Meta<typeof ErrorAlert> = {
   title: "Components/Alert",
   component: ErrorAlert,
   parameters: {
      layout: "centered",
      docs: {
         description: {
            component: "This component displays an error message.",
         },
      
      },
   },
   tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ErrorAlert>;

export const Default: Story = {
   args: {
      message: "Error: Something went wrong",
   },
   render: (args) => <ErrorAlert {...args} />,
};
Default.storyName = "ErrorAlert";