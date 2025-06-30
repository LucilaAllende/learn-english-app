"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, MessageSquare, Users, Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const menuItems = [
  {
    title: "Tiempos Verbales",
    href: "/",
    icon: BookOpen,
    description: "Tipos de tiempos verbales",
  },
  {
    title: "Pronombres",
    href: "/pronouns",
    icon: Users,
    description: "Tipos de pronombres",
  },
  {
    title: "Análisis de Oraciones",
    href: "/analysis/sentences",
    icon: MessageSquare,
    description: "Análisis sintáctico",
  },
]

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-white p-2 rounded-lg shadow-md border-2 border-gray-200"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-full w-64 bg-white border-r-2 border-gray-200 shadow-lg z-40 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0 md:static md:z-auto",
        )}
      >
        <div className="p-6">
          <h2 className="text-2xl font-title text-[#2a9d8f] mb-6">Gramática</h2>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-start p-3 rounded-lg transition-colors duration-200",
                    isActive ? "bg-[#2a9d8f] text-white" : "hover:bg-gray-100 text-gray-700",
                  )}
                >
                  <Icon className="h-5 w-5 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-subtitle font-medium">{item.title}</div>
                    <div className={cn("text-sm font-text", isActive ? "text-gray-200" : "text-gray-500")}>
                      {item.description}
                    </div>
                  </div>
                </Link>
              )
            })}
          </nav>
        </div>
      </aside>
    </>
  )
}
