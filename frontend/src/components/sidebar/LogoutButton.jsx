import { CgLogOut } from "react-icons/cg";

export const LogoutButton = () => {
  return (
    <div className="mt-auto flex items-center space-x-2 cursor-pointer">
        <CgLogOut className="w-7 h-7 text-white" />
        <span className="text-white font-playwrite italic">Logout</span>
    </div>
  )
}
