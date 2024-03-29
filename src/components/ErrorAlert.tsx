import { AlertCircle } from "lucide-react";

import { Alert, AlertTitle } from "@/components/ui/alert";

interface ErrorProps {
   message: string
}

function ErrorAlert({ message }: ErrorProps) {
   return (
      <Alert variant="destructive">
         <AlertCircle className="h-4 w-4" />
         <AlertTitle>{message}</AlertTitle>
      </Alert>
   );
}

export default ErrorAlert;
