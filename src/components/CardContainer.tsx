type CardContainerProps = {
  children: React.ReactNode
}

export default function CardContainer({ children }: CardContainerProps) {
  return <div className="flex flex-wrap gap-4">{children}</div>
}
