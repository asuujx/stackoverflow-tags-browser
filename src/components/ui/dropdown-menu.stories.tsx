import type { Meta, StoryObj } from "@storybook/react";

import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { Button } from "./button";

const meta: Meta<typeof DropdownMenu> = {
   title: "shadcn/DropdownMenu",
   component: DropdownMenu,
   parameters: {
      docs: {
         description: {
            component:
               "This component displays a menu to the user — such as a set of actions or functions — triggered by a button.",
         },
      },
      layout: "centered",
   },
   tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
   render: () => (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button variant="default" size="default">
               Open me!
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
            <DropdownMenuItem>Item 3</DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   ),
};
