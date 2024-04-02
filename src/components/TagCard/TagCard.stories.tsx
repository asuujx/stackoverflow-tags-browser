import type { Meta, StoryObj } from "@storybook/react";

import TagCard from "@/components/TagCard/TagCard";

const meta: Meta<typeof TagCard> = {
   title: "My Components/TagCard",
   component: TagCard,
   parameters: {
      docs: {
         description: {
            component: "This component displays a card component that renders a stackoverflow tag and it's count.",
         },
      },
      layout: "centered",
   },
   tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TagCard>;

const data = {
   items: [
      {
         name: "javascript",
         count: 2529017,
      },
      {
         name: "typescript",
         count: 2529017,
      },
      { 
         name: "reactjs", 
         count: 2529017 },
      {
         name: "javascript",
         count: 2529017,
      },
      {
         name: "typescript",
         count: 2529017,
      },
      { 
         name: "reactjs", 
         count: 2529017 
      },
   ],
};

export const OneCard: Story = {
   args: {
      name: "javascript",
      count: 2529017,
   },
   render: (args) => <TagCard {...args} />,
};

export const MultipleCards: Story = {};

MultipleCards.decorators = [
   () => (
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
         {data.items.map((tag) => (
            <TagCard key={tag.name} name={tag.name} count={tag.count} />
         ))}
      </div>
   ),
];
