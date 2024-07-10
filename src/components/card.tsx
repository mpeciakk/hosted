import {
  Card as BaseCard,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"

type CardProps = {
  title: string | JSX.Element
  description: string
}

export default function Card({ title, description }: CardProps) {
  return (
    <BaseCard className="w-[300px] min-h-[102px]">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>

        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </BaseCard>
  )
}
