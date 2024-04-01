import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";

const meta: Meta<typeof Button> = {
   title: "Components/Button",
   component: Button,
   parameters: {
      docs: {
         description: {
            component:
               "The Button component is used to trigger an action or event when clicked.",
         },
      },
      layout: "centered",
   },
   tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
   args: {
      variant: "default",
      size: "default",
   },
   argTypes: {
      variant: {
         options: ["default", "destructive", "outline", "link", "ghost"],
         control: { type: "select" },
      },
      size: {
         options: ["default", "sm", "lg", "icon"],
         control: { type: "select" },
      },
   },
   render: (args) => <Button {...args}>Click me!</Button>,
};

export const Variants: Story = {
   parameters: {
      docs: {
         description: {
            story:
               "Button component has five variants: **default**, **destructive**, **outline**, **link**, and **ghost**.",
         },
      }
   },
   render: () => (
      <div className="flex gap-5">
         <Button variant="default">Default</Button>
         <Button variant="destructive">Destructive</Button>
         <Button variant="outline">Outline</Button>
         <Button variant="link">Link</Button>
         <Button variant="ghost">Ghost</Button>
      </div>
   ),
};

export const Sizes: Story = {
   parameters: {
      docs: {
         description: {
            story: "Button component has four sizes: **sm**, **default**, **lg**, and **icon**.",
         },
      },
   },
   render: () => (
      <div className="flex gap-5">
         <Button size="sm">Small</Button>
         <Button size="default">Default</Button>
         <Button size="lg">Large</Button>
         <Button size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
         </Button>
      </div>
   ),
};
