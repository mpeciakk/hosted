"use client"

import { FolderPlus } from "lucide-react"
import { Card } from "../ui/card"

export default function AddCard() {
  return (
    <Card className="w-[300px] cursor-pointer flex items-center justify-center">
      <FolderPlus className="w-12 h-12" />
    </Card>
  )
}
