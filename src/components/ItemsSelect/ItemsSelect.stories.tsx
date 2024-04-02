import type { Meta, StoryObj } from "@storybook/react";

import ItemsSelect from "@/components/ItemsSelect/ItemsSelect";

const meta: Meta<typeof ItemsSelect> = {
   title: "My Components/Select/ItemsSelect",
   component: ItemsSelect,
   parameters: {
      docs: {
         description: {
            component: "This component allows the user to select a specific number of items rendered on a page.",
         },
      },
      layout: "centered",
   },
   tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ItemsSelect>;

export const Default: Story = {
   args: {
      onItemsSelect: (selectedItems: number) => { selectedItems },
   },
   render: (args) => <ItemsSelect {...args} />,
};
