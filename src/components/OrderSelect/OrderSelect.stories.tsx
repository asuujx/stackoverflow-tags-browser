import type { Meta, StoryObj } from "@storybook/react";

import OrderSelect from "@/components/OrderSelect/OrderSelect";

const meta: Meta<typeof OrderSelect> = {
   title: "My Components/Select/OrderSelect",
   component: OrderSelect,
   parameters: {
      docs: {
         description: {
            component: "This component enables the user to select the order of tags.",
      },
   },
      layout: "centered",
   },
   tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof OrderSelect>;

export const Default: Story = {
   args: {
      onOrderSelect: (selectedOrder: string) => { selectedOrder }
   },
   render: (args) => <OrderSelect {...args} />,
};
