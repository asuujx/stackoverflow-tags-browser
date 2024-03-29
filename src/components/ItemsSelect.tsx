import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue
} from "@/components/ui/select";

interface ItemsSelectProps {
   onItemsSelect: (selectedItems: number) => void;
}

export default function ItemsSelect({ onItemsSelect }: ItemsSelectProps) {
   const handleValueChange = (value: string) => {
      onItemsSelect(parseInt(value));
   };

   return (
      <Select onValueChange={handleValueChange}>
         <SelectTrigger className="w-32">
            <SelectValue placeholder="Amount" />
         </SelectTrigger>
         <SelectContent className="bg-white">
            <SelectGroup>
               <SelectLabel>Amount</SelectLabel>
               <SelectItem value="25" className="cursor-pointer">
                  25
               </SelectItem>
               <SelectItem value="50" className="cursor-pointer">
                  50
               </SelectItem>
               <SelectItem value="75" className="cursor-pointer">
                  75
               </SelectItem>
               <SelectItem value="100" className="cursor-pointer">
                  100
               </SelectItem>
            </SelectGroup>
         </SelectContent>
      </Select>
   );
}
