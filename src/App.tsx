import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { StackExchangeResponse, Tag } from "../types";
import ErrorAlert from "./components/ErrorAlert";
import ItemsSelect from "./components/ItemsSelect";
import { ModeToggle } from "./components/ModeToggle";
import OrderSelect from "./components/OrderSelect";
import SortSelect from "./components/SortSelect";
import TagCard from "./components/TagCard";
import { TagsPagination } from "./components/TagsPagination";

const fetchTags = async (
   page = 1,
   pageSize = 25,
   sort = "popular",
   order = "desc"
) => {
   const res = await fetch(
      `https://api.stackexchange.com/2.3/tags?site=stackoverflow&page=${page}&pagesize=${pageSize}&sort=${sort}&order=${order}`
   );

   if (!res.ok) {
      throw new Error("An error occurred while fetching the data.");
   }

   return res.json();
};

export default function App() {
   const [pageSize, setPageSize] = useState(25);
   const [page, setPage] = useState(1);
   const [sort, setSort] = useState("popular");
   const [order, setOrder] = useState("desc");

   //  console.log("Page: " + page);
   //  console.log("PageSize: " + pageSize);
   //  console.log("Sort: " + sort);

   const { isLoading, isError, error, data, isFetching, isPlaceholderData } =
      useQuery<StackExchangeResponse>({
         queryKey: ["tags", { page, pageSize, sort, order }],
         queryFn: () => fetchTags(page, pageSize, sort, order),
         placeholderData: keepPreviousData,
      });

   return (
      <div className="w-screen h-screen flex flex-col place-items-center transition-all ease-in-out">
         <div className="w-full my-5 flex flex-wrap gap-5 justify-center transition-all ease-in-out">
            <ItemsSelect onItemsSelect={(value) => setPageSize(value)} />
            <SortSelect onSortSelect={(value) => setSort(value)} />
            <OrderSelect onOrderSelect={(value) => setOrder(value)} />
            <ModeToggle />
         </div>

         {isLoading || isFetching ? (
            <LoaderCircle className="h-10 w-10 animate-spin" />
         ) : isError ? (
            <ErrorAlert message={error.message} />
         ) : data ? (
            <div className="w-full px-5 grid gap-5 md:grid-cols-2 md:w-3/4 lg:grid-cols-3">
               {data.items.map((tag: Tag) => (
                  <TagCard key={tag.name} name={tag.name} count={tag.count} />
               ))}
            </div>
         ) : (
            ""
         )}

         <TagsPagination
            page={page}
            setPage={setPage}
            isPlaceholderData={isPlaceholderData}
            has_more={data?.has_more || false}
         /> 
      </div>
   );
}