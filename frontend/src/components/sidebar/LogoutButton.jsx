import { CgLogOut } from "react-icons/cg";
import useLogout from "../../hooks/useLogout";

export const LogoutButton = () => {

  const {loading, logout} = useLogout();

  return (
    <div className="mt-auto ">
      {!loading? (<div className="flex items-center space-x-2 cursor-pointer" onClick={logout}>
        <CgLogOut className="w-7 h-7 text-white" />
        <span className="text-white font-playwrite italic">Logout</span>
      </div>
      ):(
        <span className="loading loading-spinner"></span>
      )

      }
    </div>
  )
}
