export type Project = {
  name: string
  status: string
  url: string
}

export function getBadgeVariant(status: string) {
  switch (status) {
    case "in progress":
      return "default"

    case "deployed":
      return "success"

    case "exited":
      return "secondary"

    case "errored":
      return "destructive"

    default:
      return "default"
  }
}
