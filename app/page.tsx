export default function Home() {
  return (
    <div className="mx-auto min-h-dvh relative bg-white pb-24">
      {/* Seu conteúdo aqui */}
      <div className="flex flex-col m-5">

        <p className="text-lg">Olá 👋</p>
        <h1 className="font-bold text-xl">Seja Bem-Vindo ao FluencyLab!</h1>


        {/* Nível Atual */}
        <div className="mt-2 bg-blue-500 p-4 rounded-2xl">
          <p className="text-2xl text-white">Nivel Atual</p>

          <div className="flex flex-row gap-4 mt-2 justify-between">
            <p className="text-white text-xl">2</p>
            <div>
              <p className="text-white text-xl">7 Dias</p>
            </div>
          </div>

          <div className="flex flex-row gap-4 mt-2 justify-between">
            <p className="text-white text-xs">300xp</p>
            <div>
              <p className="text-white text-xs">500xp</p>
            </div>
          </div>

        </div>

      {/* Conteúdo Recomendado */}
        <div className="mt-4 flex flex-row gap-4  p-4 rounded-lg h-50 w-full">

          <div className="bg-gray-200 p-4 rounded-lg w-[50%] ">
            <img src="" alt="" />
            <p>Conteúdo 1</p>
            <p>Descrição do conteúdo 1</p>
          </div>

          <div className="bg-gray-200 p-4 rounded-lg w-[50%] ">
            <img src="" alt="" />
            <p>Conteúdo 2</p>
            <p>Descrição do conteúdo 2</p>
          </div>

        </div>

        {/* Pratica */}   

        <div className="mt-2 bg-blue-500 p-4 rounded-lg w-full flex flex-col">
          <p className="text-sm text-white">O FluencyLab é um aplicativo de aprendizado de idiomas que utiliza inteligência artificial para ajudar os usuários a praticarem suas habilidades linguísticas de forma eficaz e personalizada.</p>
          <button className="mt-2 bg-white text-blue-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 py-2 px-4 rounded-md mt-3 w-full">
            Ir Praticar!
          </button>
        </div>

        {/* teste */}




      </div>
    </div>
  )
}
