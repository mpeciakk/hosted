"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "./prisma"
import { Node } from "@/types/node"

export async function getNodes() {
  return await prisma.node.findMany()
}

export async function getNode(name: string) {
  return await prisma.node.findFirst({
    where: {
      name,
    },
  })
}

export async function createNode(data: Node) {
  await prisma.node.create({
    data
  })

  revalidatePath("/nodes")
}
