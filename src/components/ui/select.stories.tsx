import type { Meta, StoryObj } from "@storybook/react";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./select";

const meta: Meta<typeof Select> = {
   title: "shadcn/Select",
   component: Select,
   parameters: {
      docs: {
         description: {
            component:
               "This component displays a list of options for the user to pick from—triggered by a button.",
         },
      },
      layout: "centered",
   },
   tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
   render: () => (
      <Select>
         <SelectTrigger>
            <SelectValue placeholder="Choose an option"></SelectValue>
         </SelectTrigger>
         <SelectContent>
            <SelectGroup>
               <SelectLabel>Options</SelectLabel>
               <SelectItem value="option-1">Option 1</SelectItem>
               <SelectItem value="option-2">Option 2</SelectItem>
               <SelectItem value="option-3">Option 3</SelectItem>
               <SelectItem value="option-4">Option 4</SelectItem>
               <SelectItem value="option-5">Option 5</SelectItem>
               <SelectItem value="option-6">Option 6</SelectItem>
            </SelectGroup>
         </SelectContent>
      </Select>
   ),
};
