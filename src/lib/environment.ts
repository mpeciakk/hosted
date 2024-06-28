"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "./prisma"
import { Environment, EnvironmentTemplate } from "@/types/environment"

export async function getEnvironmentTemplates() {
  return await prisma.environmentTemplate.findMany()
}

export async function createEnvironmentTemplate(template: EnvironmentTemplate) {
  await prisma.environmentTemplate.create({
    data: template,
  })

  revalidatePath("/templates")
}

export async function getEnvironments(project: string) {
  return await prisma.environment.findMany({
    where: {
      projectName: project,
    },
  })
}

export async function createEnvironment(
  environment: Environment,
  project: string
) {
  await prisma.environment.create({
    data: {
      ...environment,
      projectName: project,
      variables: {
        createMany: {
          data: environment.variables,
        },
      },
    },
  })

  revalidatePath("/projects/[name]/environments")
}
