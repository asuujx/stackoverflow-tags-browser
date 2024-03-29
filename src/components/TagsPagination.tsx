import {
   Pagination,
   PaginationContent,
   PaginationEllipsis,
   PaginationItem,
   PaginationLink,
   PaginationNext,
   PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

interface TagsPaginationProps {
   page: number;
   setPage: (page: number) => void;
   isPlaceholderData: boolean;
   has_more: boolean;
}

export function TagsPagination({
   page,
   setPage,
   isPlaceholderData,
   has_more,
}: TagsPaginationProps) {
   const [currentPage, setCurrentPage] = useState(page);
   const lastPage = 25; // Anonymous API request returns maximum of 25 pages

   const handleOnPageChange = (page: number) => {
      setPage(page);
      setCurrentPage(page);
   };

   return (
      <Pagination>
         <PaginationContent>
            {/* Previous page button */}
            {page !== 1 && (
               <PaginationItem>
                  <PaginationPrevious
                     onClick={() => {
                        handleOnPageChange(page - 1);
                     }}
                  />
               </PaginationItem>
            )}

            {/* Shows first page */}
            {page > 2 && (
               <>
                  <PaginationItem>
                     <PaginationLink
                        onClick={() => {
                           handleOnPageChange(1);
                        }}
                        isActive={1 === currentPage}
                     >
                        1
                     </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                     <PaginationEllipsis />
                  </PaginationItem>
               </>
            )}

            {page === lastPage && (
               <PaginationItem>
                  <PaginationLink onClick={() => handleOnPageChange(page - 2)}>
                     {page - 2}
                  </PaginationLink>
               </PaginationItem>
            )}

            {page > 1 && (
               <PaginationItem>
                  <PaginationLink
                     onClick={() => handleOnPageChange(page - 1)}
                  >
                     {page - 1}
                  </PaginationLink>
               </PaginationItem>
            )}

            <PaginationItem>
               <PaginationLink
                  onClick={() => handleOnPageChange(page)}
                  isActive={page === currentPage}
               >
                  {page}
               </PaginationLink>
            </PaginationItem>

            {page < lastPage && (
               <PaginationItem>
                  <PaginationLink onClick={() => handleOnPageChange(page + 1)}>
                     {page + 1}
                  </PaginationLink>
               </PaginationItem>
            )}

            {page === 1 && (
               <PaginationItem>
                  <PaginationLink onClick={() => handleOnPageChange(page + 2)}>
                     {page + 2}
                  </PaginationLink>
               </PaginationItem>
            )}

            {/* Shows last page */}
            {page < lastPage - 1 && (
               <>
                  <PaginationItem>
                     <PaginationEllipsis />
                  </PaginationItem>

                  <PaginationItem>
                     <PaginationLink
                        onClick={() => handleOnPageChange(lastPage)}
                        isActive={currentPage === lastPage}
                     >
                        {lastPage}
                     </PaginationLink>
                  </PaginationItem>
               </>
            )}

            {/* Next item button */}
            {page !== lastPage && (
               <PaginationItem>
                  <PaginationNext
                     onClick={() => {
                        if (!isPlaceholderData && has_more) {
                           handleOnPageChange(page + 1);
                        }
                     }}
                  />
               </PaginationItem>
            )}
         </PaginationContent>
      </Pagination>
   );
}
