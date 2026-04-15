export default function Home() {
  const passos = [
    {
      titulo: "Passo 1: Criar um repositório no GitHub",
      descricao:
        "Acesse github.com, faça login e clique em 'New repository'. Dê um nome ao repositório e clique em 'Create repository'.",
      comando: null,
    },
    {
      titulo: "Passo 2: Inicializar o Git no projeto",
      descricao:
        "Na pasta do projeto do Visual Studio, abra o terminal e execute o comando abaixo:",
      comando: "git init",
      obs: "Inicializa o Git dentro da pasta do projeto",
    },
    {
      titulo: "Passo 3: Verificar repositório conectado",
      descricao:
        "Para verificar se há algum repositório remoto conectado ao projeto:",
      comando: "git remote -v",
    },
    {
      titulo: "Passo 4: Conectar ao repositório criado",
      descricao:
        "Conecte seu projeto local ao repositório do GitHub:",
      comando:
        'git remote add origin "https://github.com/usuario/repositorio"',
      obs: "Substitua 'usuario' e 'repositorio' pelos seus dados",
    },
    {
      titulo: "Passo 5: Remover repositório (se necessário)",
      descricao:
        "Caso precise remover um repositório conectado para adicionar outro:",
      comando: "git remote remove origin",
      obs: "Após remover, conecte novamente usando o comando do passo 4",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          Guia GitHub 🧠💻
        </h1>

        <div className="space-y-6">
          {passos.map((passo, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:scale-[1.01] transition"
            >
              <h2 className="text-xl font-semibold mb-2">
                {passo.titulo}
              </h2>

              <p className="text-gray-300 mb-3">{passo.descricao}</p>

              {passo.comando && (
                <code className="block bg-black text-green-400 p-3 rounded-lg text-sm overflow-x-auto">
                  {passo.comando}
                </code>
              )}

              {passo.obs && (
                <p className="text-sm text-gray-400 mt-2">
                  *{passo.obs}
                </p>
              )}
            </div>
          ))}
        </div>

        <footer className="text-center mt-10 text-gray-400 text-sm">
          Feito com Next.js + Tailwind 🚀
        </footer>
      </div>
    </main>
  );
}