import {
   Card,
   CardContent,
   CardHeader,
   CardTitle
} from "@/components/ui/card";

export interface TagCardProps {
   name: string;
   count: number;
}

function TagCard({ name, count }: TagCardProps) {
   return (
      <Card>
         <CardHeader>
            <CardTitle>{name}</CardTitle>
         </CardHeader>
         <CardContent>
            <p>{count} questions </p>
         </CardContent>
      </Card>
   );
}

export default TagCard;
