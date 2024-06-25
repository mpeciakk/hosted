import AddCard from "@/components/project/add-card"
import ProjectCard from "@/components/project/project-card"
import { Project } from "@/types/project"

const projects: Project[] = [
  {
    id: "projekt",
    status: "in progress",
    url: "hosted.peciak.xyz",
  },
  {
    id: "projekt",
    status: "errored",
    url: "hosted.peciak.xyz",
  },
  {
    id: "projekt",
    status: "deployed",
    url: "hosted.peciak.xyz",
  },
  {
    id: "projekt",
    status: "exited",
    url: "hosted.peciak.xyz",
  },
]

export default function Projects() {
  return (
    <main>
      <div className="flex gap-4 flex-wrap">
        <AddCard />

        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </main>
  )
}
