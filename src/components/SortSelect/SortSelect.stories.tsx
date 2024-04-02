import type { Meta, StoryObj } from "@storybook/react";

import SortSelect from "@/components/SortSelect/SortSelect";

const meta: Meta<typeof SortSelect> = {
   title: "My Components/Select/SortSelect",
   component: SortSelect,
   parameters: {
      docs: {
         description: {
            component:
               "This component enables the user to select a sort option.",
         },
      },
      layout: "centered",
   },
   tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SortSelect>;

export const Default: Story = {
   args: {
      onSortSelect: (selectedSort: string) => {
         selectedSort;
      },
   },
   render: (args) => <SortSelect {...args} />,
};
