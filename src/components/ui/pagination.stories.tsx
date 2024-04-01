import type { Meta, StoryObj } from "@storybook/react";

import {
   Pagination,
   PaginationContent,
   PaginationEllipsis,
   PaginationItem,
   PaginationLink,
   PaginationNext,
   PaginationPrevious,
} from "./pagination";

const meta: Meta<typeof Pagination> = {
   title: "shadcn/Pagination",
   component: Pagination,
   parameters: {
      docs: {
         description: {
            component:
               "This component displays pagination with page navigation, next and previous links.",
         },
      },
      layout: "centered",
   },
   tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
   render: () => (
      <Pagination>
         <PaginationContent>
            <PaginationItem>
               <PaginationPrevious />
            </PaginationItem>
            <PaginationItem>
               <PaginationLink>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
               <PaginationLink isActive>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
               <PaginationLink>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
               <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
               <PaginationNext />
            </PaginationItem>
         </PaginationContent>
      </Pagination>
   ),
};
