import type { Meta, StoryObj } from "@storybook/react";

import { TagsPagination } from "@/components/TagsPagination/TagsPagination";

const meta: Meta<typeof TagsPagination> = {
   title: "My Components/TagsPagination",
   component: TagsPagination,
   parameters: {
      docs: {
         description: {
            component:
               "This component enables the user to select a specific page from a range of pages.",
         },
      },
      layout: "centered",
   },
   tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TagsPagination>;

export const Default: Story = {
   render: () => <TagsPagination page={3} setPage={() => {}} isPlaceholderData={false} has_more={true} />,
};

export const FirstPage: Story = {
   render: () => <TagsPagination page={1} setPage={() => {}} isPlaceholderData={false} has_more={true} />,
};

export const LastPage: Story = {
   render: () => <TagsPagination page={25} setPage={() => {}} isPlaceholderData={false} has_more={true} />,
};

