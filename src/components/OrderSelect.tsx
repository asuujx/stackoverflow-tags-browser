import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";

interface OrderSelectProps {
   onOrderSelect: (selectedOrder: string) => void;
}

export default function OrderSelect({ onOrderSelect }: OrderSelectProps) {
   const handleValueChange = (value: string) => {
      onOrderSelect(value);
   };

   return (
      <Select onValueChange={handleValueChange}>
         <SelectTrigger className="w-32">
            <SelectValue placeholder="Order" />
         </SelectTrigger>
         <SelectContent>
            <SelectGroup>
               <SelectLabel>Order</SelectLabel>
               <SelectItem value="desc">Descending</SelectItem>
               <SelectItem value="asc">Ascending</SelectItem>
            </SelectGroup>
         </SelectContent>
      </Select>
   );
}
