import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useAuth } from "../hooks/useAuth";

function Navbar() {
  const { user } = useAuth()

  const handleLogout = async () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      console.error(error.message)
    });
  }


  return (
    <div className="navbar bg-base-100 border-b justify-center items-center sticky top-0 z-50">
      <div className="flex flex-row justify-between items-center w-full max-w-4xl">
        <a className="btn btn-ghost normal-case text-xl">Image Gallery</a>
        <div className="flex flex-row gap-2 justify-center items-center">
          <span className="sm:inline hidden">{user?.email}</span>
          <button className="btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
