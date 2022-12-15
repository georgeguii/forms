import { useNavigate } from "react-router";

export function Header() {

  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center h-[10vh] bg-gradient-to-t from-cyan-500 to-cyan-700"> 
    {/* ou h-24 */}
      <span className="ml-10 text-white font-bold text-4xl">Icon</span>

      <button className='px-10 h-12 rounded-md font-semibold
      flex justify-center items-center
      text-gray-100
      transition-colors duration-300' onClick={() => navigate("/baixar-excel")}>
        Baixar Excel
      </button>

    </header>
  )
}