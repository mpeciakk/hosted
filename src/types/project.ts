export type ProjectStatus = "in progress" | "deployed" | "exited" | "errored"

export type Project = {
  id: string
  status: ProjectStatus
  url: string
}

export function getBadgeVariant(status: ProjectStatus) {
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
