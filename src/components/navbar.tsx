import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="absolute w-full h-auto top-0 left-0 flex justify-center items-center p-5 z-30">
      <div className="flex bg-secondary w-[70%] rounded-2xl p-3 pl-5 pr-5">
        <div className="flex w-[20%]">
          <img src={"/logo.png"} width={30} height={30} className="mt-auto mb-auto" />
        </div>
        <div className="flex w-[70%] space-x-12 justify-center items-center">
          <Link to={"/home"} className="text-text font-bold">Home</Link>
          <Link to={"/about"} className="text-text font-bold">About</Link>
          <Link to={"/contact"} className="text-text font-bold">Contact</Link>
          <Link to={"/account/settings"} className="text-text font-bold">Settings</Link>
          <Link to={"/dashboard"} className="text-text font-bold">Dashboard</Link>
          <Link to={"/chat"} className="text-text font-bold">Chat</Link>
        </div>
        <div className="flex justify-center items-center space-x-5 w-[20%]">
          <Link to={"/login"} className="text-text font-bold border-2 bg-primary border-primary rounded-xl px-4 py-2 hover:bg-transparent hover:border-2 hover:border-primary duration-300">Login</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
