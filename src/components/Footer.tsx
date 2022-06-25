

export function Footer() {
  return (
    <footer className="w-full bg-gray-900 p-6 flex flex-col items-center">
      <div className="border w-full border-gray-300 mb-2"></div>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center justify-between">
          <img src="/src/assets/logo-rockeat.png" alt="logo-rockeat" />
          <p className="ml-4 text-s text-gray-300">
            Rocketseat- Todos os direitos reservados
          </p>
        </div>

        <a href="#" className="text-s text-gray-300 bold">
          Políticas de privacidade
        </a>
      </div>
    </footer>
  );
}