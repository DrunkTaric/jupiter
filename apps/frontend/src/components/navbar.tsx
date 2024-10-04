import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="absolute w-full h-auto top-0 left-0 flex justify-center items-center p-5">
      <div className="flex bg-secondary w-[65%] rounded-2xl p-3 pl-5 pr-5">
        <div className="w-[20%]">
          <img src={"/logo.png"} width={30} height={30} />
        </div>
        <div className="flex w-[60%] space-x-12 justify-center items-center">
          <Link to={"/home"} className="text-text font-bold">Home</Link>
          <Link to={"/about"} className="text-text font-bold">About</Link>
          <Link to={"/contact"} className="text-text font-bold">Contact</Link>
          <Link to={"/account/settings"} className="text-text font-bold">Settings</Link>
          <Link to={"/dashboard"} className="text-text font-bold">Dashboard</Link>
          <Link to={"/chat"} className="text-text font-bold">Chat</Link>
        </div>
        <div className="w-[20%]">
        </div>
      </div>
    </nav>
  )
}

export default Navbar
