"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Início", href: "/" },
    { name: "Configurações", href: "/paginas/configuracao" },
    { name: "Repositórios", href: "/paginas/repositorio" },
    { name: "Envio", href: "/paginas/envio" },
  ];

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">Git Guide</h1>

        <ul className="flex gap-6">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition ${
                    isActive
                      ? "text-green-400 font-semibold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}