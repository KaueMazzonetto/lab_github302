export default function Home() {
  const passos = [
    {
      titulo: "1. Empacotar os arquivos para envio",
      descricao: "Adiciona todos os arquivos modificados para o envio.",
      comando: "git add .",
    },
    {
      titulo: "2. Criar a versão do commit",
      descricao: "Salva as alterações com uma mensagem descritiva.",
      comando: 'git commit -m "versão do commit"',
    },
    {
      titulo: "3. Enviar os arquivos para o GitHub",
      descricao: "Envia os arquivos para o repositório remoto.",
      comando: "git push -u origin main",
      extra: "ou use 'master' dependendo da branch",
    },
    {
      titulo: "3.1 Verificar qual branch está ativa",
      descricao: "Mostra em qual branch você está trabalhando.",
      comando: "git branch",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Guia de Comandos Git 🚀
        </h1>

        <div className="space-y-6">
          {passos.map((passo, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl p-5 shadow-md"
            >
              <h2 className="text-xl font-semibold mb-2">
                {passo.titulo}
              </h2>

              <p className="text-gray-400 mb-3">
                {passo.descricao}
              </p>

              <div className="bg-black text-green-400 p-3 rounded-lg text-sm font-mono">
                {passo.comando}
              </div>

              {passo.extra && (
                <p className="text-sm text-gray-500 mt-2">
                  {passo.extra}
                </p>
              )}
            </div>
          ))}
        </div>

        <footer className="text-center mt-10 text-gray-500 text-sm">
          Next.js + Tailwind CSS 💻
        </footer>
      </div>
    </main>
  );
}