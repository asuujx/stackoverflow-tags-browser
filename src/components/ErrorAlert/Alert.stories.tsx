import type { Meta, StoryObj } from "@storybook/react";

import { Alert, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const meta: Meta<typeof Alert> = {
   title: "Components/Alert/Alert",
   component: Alert,
   parameters: {
      layout: "centered",
      docs: {
         description: {
            component:
               "The alert component displays an informational message to users.",
         },
      },
   },
   tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
   args: {
      variant: "destructive",
   },
   argTypes: {
      variant: {
         options: ["default", "destructive"],
         control: { type: "select" },
      },
   },
   render: (args) => (
      <div>
         <Alert {...args}>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Something went wrong!</AlertTitle>
         </Alert>
      </div>
   ),
};

export const Variants: Story = {
   args: {
      variant: "default",
   },
   argTypes: {
      variant: {
         options: ["default", "destructive"],
         control: { type: "select" },
      },
   },
   render: () => (
      <div className="flex gap-5">
         <Alert variant="default">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Default alert message!</AlertTitle>
         </Alert>
         <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Destructive alert message!</AlertTitle>
         </Alert>
      </div>
   ),
};
