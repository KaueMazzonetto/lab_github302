import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-10 py-20 px-6 bg-white dark:bg-black sm:items-start">
        
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image
            src="/github.svg" // coloque um logo do github na pasta public
            alt="GitHub logo"
            width={50}
            height={50}
          />
          <h1 className="text-3xl font-bold text-black dark:text-white">
            GitHub
          </h1>
        </div>

        {/* Descrição */}
        <div className="flex flex-col gap-6 text-center sm:text-left">
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            O <span className="font-semibold text-black dark:text-white">GitHub</span> é uma plataforma online usada por desenvolvedores para armazenar, gerenciar e compartilhar código. Ele utiliza o sistema de controle de versão chamado <span className="font-semibold">Git</span>.
          </p>

          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Com o GitHub, é possível acompanhar alterações no código, colaborar com outras pessoas e manter projetos organizados de forma eficiente.
          </p>
        </div>

        {/* Para que serve */}
        <div className="w-full bg-zinc-100 dark:bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
            Para que serve o GitHub?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-400">
            <li>Armazenar projetos (repositórios)</li>
            <li>Controlar versões do código</li>
            <li>Facilitar o trabalho em equipe</li>
            <li>Compartilhar código com outros desenvolvedores</li>
            <li>Contribuir para projetos open source</li>
          </ul>
        </div>

        {/* Conceitos */}
        <div className="w-full bg-zinc-100 dark:bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
            Conceitos importantes
          </h2>
          <ul className="space-y-2 text-zinc-700 dark:text-zinc-400">
            <li><span className="font-semibold">Repositório:</span> onde o código fica armazenado</li>
            <li><span className="font-semibold">Commit:</span> registro de alterações</li>
            <li><span className="font-semibold">Branch:</span> versão paralela do projeto</li>
            <li><span className="font-semibold">Pull Request:</span> proposta de alteração no projeto</li>
          </ul>
        </div>

        {/* Botão */}
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center rounded-full bg-black text-white px-5 transition hover:bg-zinc-800 md:w-[180px]"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar GitHub
          </a>

          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-zinc-300 px-5 transition hover:bg-zinc-200 dark:border-zinc-700 dark:hover:bg-zinc-800 md:w-[180px]"
            href="https://docs.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentação
          </a>
        </div>

      </main>
    </div>
  );
}