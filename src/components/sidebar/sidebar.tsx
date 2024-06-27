"use client"

import Link from "next/link"
import {
  Container,
  FolderGit,
  Home,
  NotepadText,
  Package,
  Package2,
  Server,
} from "lucide-react"

import { usePathname } from "next/navigation"

export const LINKS = [
  {
    name: (
      <>
        <Home className="h-4 w-4" /> Dashboard
      </>
    ),
    path: "/",
  },
  {
    name: (
      <>
        <FolderGit className="h-4 w-4" /> Projects
      </>
    ),
    path: "/projects",
  },
  {
    name: (
      <>
        <Container className="h-4 w-4" /> Environments
      </>
    ),
    path: "/environments",
  },
  {
    name: (
      <>
        <NotepadText className="h-4 w-4" /> Environments templates
      </>
    ),
    path: "/templates",
  },
  {
    name: (
      <>
        <Package className="h-4 w-4" /> Deployments
      </>
    ),
    path: "/deployments",
  },
  {
    name: (
      <>
        <Server className="h-4 w-4" /> Nodes
      </>
    ),
    path: "/nodes",
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-muted/40 md:block h-full max-h-screen row-span-2">
      <div className="flex items-center border-b h-14 lg:h-[60px] px-4 lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Package2 className="h-6 w-6" />
          <span>Hosted</span>
        </Link>
      </div>

      <nav className="grid flex-1 py-2 text-sm font-medium px-2 lg:px-4">
        {LINKS.map((link, i) => (
          <Link
            href={link.path}
            key={i}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
              pathname === link.path
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
