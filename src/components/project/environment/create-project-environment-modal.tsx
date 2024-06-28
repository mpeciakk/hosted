"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card } from "../../ui/card"
import { FolderPlus } from "lucide-react"
import { useState } from "react"
import { EnvironmentTemplate } from "@/types/environment"
import CreateProjectEnvironmentForm from "./create-project-environment-form"
import EnvironmentCard from "../../environment/environment-card"

type CreateProjectEnvironmentModalProps = {
  templates: EnvironmentTemplate[]
  project: string
}

type CreateProjectEnvironmentModalSteps = "menu" | "select-template" | "create"

export function CreateProjectEnvironmentModal({
  templates,
  project,
}: CreateProjectEnvironmentModalProps) {
  const [open, setOpen] = useState(false)
  const [template, setTemplate] = useState<EnvironmentTemplate | null>(null)
  const [step, setStep] = useState<CreateProjectEnvironmentModalSteps>("menu")

  return (
    <Dialog
      open={open}
      onOpenChange={(state) => {
        setOpen(state)

        if (state) {
          setStep("menu")
          setTemplate(null)
        }
      }}
    >
      <DialogTrigger asChild>
        <Card className="card cursor-pointer flex items-center justify-center">
          <FolderPlus className="w-12 h-12" />
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-[1000px] w-fit">
        <DialogHeader>
          <DialogTitle>Create project environment</DialogTitle>
          <DialogDescription>
            Environment in which project may be deployed
          </DialogDescription>
        </DialogHeader>

        {step === "menu" ? (
          <div className="flex gap-4">
            <button onClick={() => setStep("select-template")}>
              <Card className="w-[300px] cursor-pointer flex items-center justify-center min-h-[102px]">
                Select existing template
              </Card>
            </button>

            <button onClick={() => setStep("create")}>
              <Card className="w-[300px] cursor-pointer flex items-center justify-center min-h-[102px]">
                Create new
              </Card>
            </button>
          </div>
        ) : step === "select-template" ? (
          <div className="grid grid-cols-[300px_300px_300px] gap-4">
            {templates.map((environment, i) => (
              <button
                onClick={() => {
                  setTemplate(environment)
                  setStep("create")
                }}
                key={i}
              >
                <EnvironmentCard environment={environment} />
              </button>
            ))}
          </div>
        ) : (
          <CreateProjectEnvironmentForm
            template={template}
            project={project}
            setOpen={setOpen}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}
