import type { Meta, StoryObj } from "@storybook/react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeProvider } from "../Darkmode/ThemeProvider";

const meta: Meta<typeof Card> = {
   title: "shadcn/Card",
   component: Card,
   parameters: {
      docs: {
         description: {
            component:
               "This component displays a card with header and content.",
         },
      },
      layout: "centered",
   },
   tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
   render: () => (
      <Card>
         <CardHeader>
            <CardTitle>Card Title</CardTitle>
         </CardHeader>
         <CardContent>
            <p>Card Content</p>
         </CardContent>
      </Card>
   ),
};