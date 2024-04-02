import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue
} from "@/components/ui/select";

interface SortSelectProps {
   onSortSelect: (selectedSort: string) => void;
}

export default function SortSelect({ onSortSelect }: SortSelectProps) {
   const handleValueChange = (value: string) => {
      onSortSelect(value);
   };

   return (
      <Select onValueChange={handleValueChange}>
         <SelectTrigger className="w-32">
            <SelectValue placeholder="Sort" />
         </SelectTrigger>
         <SelectContent>
            <SelectGroup>
               <SelectLabel>Sort</SelectLabel>
               <SelectItem value="popular">Popular</SelectItem>
               <SelectItem value="activity">Activity</SelectItem>
               <SelectItem value="name">Name</SelectItem>
            </SelectGroup>
         </SelectContent>
      </Select>
   );
}
