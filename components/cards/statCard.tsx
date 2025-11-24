import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
type statCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  footers: string;
}
export function StatCards({ title, description, icon, footers }: statCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="flex flex-row gap-32">
          {description}
          {icon}
        </CardDescription>

      </CardHeader>
      <CardContent>

      </CardContent>
      <CardFooter className="flex-col gap-2">
        {footers}
      </CardFooter>
    </Card>
  )
}
