"use server"

import { Deployment } from "@/types/deployment"
import { prisma } from "./prisma"
import { revalidatePath } from "next/cache"
import { getEnvironmentForProject } from "./environment"
import { getProject } from "./project"
import { getNode } from "./node"

export async function getDeployments(project: string) {
  return (
    await prisma.deployment.findMany({
      where: {
        projectName: project,
      },
      include: {
        environment: {
          select: {
            name: true,
          },
        },
      },
    })
  ).map((deployment) => ({
    node: deployment.nodeName,
    environment: deployment.environment.name,
    project: deployment.projectName,
  }))
}

export async function createDeployment(data: Deployment) {
  await prisma.deployment.create({
    data: {
      environmentId: (await getEnvironmentForProject(
        data.project,
        data.environment
      ))!.id,
      projectName: data.project,
      nodeName: data.node,
    },
  })

  revalidatePath("/projects/[name]/deployments", "page")

  deploy(data)
}

async function deploy(deployment: Deployment) {
  const project = (await getProject(deployment.project))!
  const environment = (await getEnvironmentForProject(
    deployment.project,
    deployment.environment
  ))!
  const node = (await getNode(deployment.node))!

  fetch(`${node.url}/deploy`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      url: project.url,
      branch: environment.branch,
      composeFile: environment.composeFile,
      variables: environment.variables
    }),
  })
}
