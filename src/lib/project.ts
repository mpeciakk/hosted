"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "./prisma"

export async function getProjects() {
  return await prisma.project.findMany()
}

export async function getProject(name: string) {
  return await prisma.project.findFirst({
    where: {
      name,
    },
  })
}

export async function createProject(name: string, url: string) {
  await prisma.project.create({
    data: {
      name,
      url,
      status: "in progress",
    },
  })

  revalidatePath("/projects")
}
