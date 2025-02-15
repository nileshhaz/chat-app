import Conversations from "./Conversations"
import { LogoutButton } from "./LogoutButton"
import SearchInput from "./SearchInput"

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
        <SearchInput/>
        <div className="divider px-3"></div>
        <Conversations/>
        <div className=" px-1 mx-1"></div>
        <LogoutButton/>
    </div>
  )
}

export default Sidebar