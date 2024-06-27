type ProjectProps = {
  params: {
    name: string
  }
}

export default async function Project({ params: { name } }: ProjectProps) {
  return (
    <main>
      <div>{name}</div>
    </main>
  )
}
