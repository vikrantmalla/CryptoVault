import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import AuthModal from "../auth/AuthModal";
import { useSession, signOut } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { setShowModal } from "@/redux/features/auth-slice";

const NavBar = () => {
  const session = useSession();
  const dispatch = useDispatch<AppDispatch>();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleSignOut = () => {
    signOut();
  };

  // modal open
  const showModal = useSelector((state: any) => state.authReducer.showModal);
  const toggleModal = () => {
      dispatch(setShowModal(true));
  };

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-600 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex flex-row justify-between">
            <div className="flex">
              <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                {navbarOpen ? (
                  <FaTimes size={25} style={{ color: "#fff" }} />
                ) : (
                  <FaBars size={25} style={{ color: "#fff" }} />
                )}
              </button>
              <Link
                href="/"
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              >
                CryptoVault
              </Link>
            </div>
            <div className="flex gap-3">
              {session.status !== "authenticated" ? (
                <>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type="button"
                    onClick={toggleModal}
                  >
                    Log In
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type="button"
                    onClick={handleSignOut}
                  >
                    Log Out
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      {showModal ? <AuthModal /> : null}
    </>
  );
};

export default NavBar;

