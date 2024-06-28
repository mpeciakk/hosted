"use client"

import Link from "next/link"
import { Cog, Container, Package } from "lucide-react"

import { usePathname } from "next/navigation"

export const LINKS = [
  {
    name: (
      <>
        <Cog className="h-4 w-4" /> Settings
      </>
    ),
    path: "settings",
  },
  {
    name: (
      <>
        <Container className="h-4 w-4" /> Environments
      </>
    ),
    path: "environments",
  },
  {
    name: (
      <>
        <Package className="h-4 w-4" /> Deployments
      </>
    ),
    path: "deployments",
  },
]

export function ProjectSidebar() {
  const pathname = usePathname()
  const last = pathname.split("/").at(-1)

  return (
    <div className="block border-r">
      <nav className="grid flex-1 py-2 text-sm font-medium px-2 lg:px-4">
        {LINKS.map((link, i) => (
          <Link
            href={`${pathname.replace(/[^/]*$/, link.path)}`}
            key={i}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
              last === link.path
                ? "bg-muted text-primary"
                : "text-muted-foreground"
            } hover:text-primary`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}
