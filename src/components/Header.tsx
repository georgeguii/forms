// import { useNavigate } from "react-router";
import Logo from "../assets/logo01.png"
import Uneb from "../assets/uneb.png"

export function Header() {

  // const navigate = useNavigate(); bg-gradient-to-t from-cyan-500 to-cyan-700

  return (
    <header className="flex justify-between items-center h-[10vh] bg-[#c1d3ee]">
      {/* ou h-24 */}
      {/* <span className="ml-10 text-white font-bold text-4xl">Icon</span> */}
      <img
        src={Logo}
        className="ml-10 max-sm:ml-1 max-sm:max-w-[11rem] max-w-[14rem]"
        alt="Logo do projeto"
      />

      <img
        src={Uneb}
        className="mr-10 max-sm:mr-2 max-w-[3.5rem]"
        alt="Logo do projeto"
      />

      {/* <button className='px-10 h-12 rounded-md font-semibold
      flex justify-center items-center
      text-gray-100
      transition-colors duration-300' onClick{() => navigate("/baixar-excel")}>
        Baixar Excel
      </button> */}

    </header>
  )
}