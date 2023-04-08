import React from "react";
import TabsRender from "../shared/Tabs";


interface Props {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthModal = ({setShowModal}: Props) => {

    const handleOpen = () => {
        setShowModal(true);
      };
    
      const handleClose = () => {
        setShowModal(false);
      };
    return (
    <>
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="p-5 border-b border-solid border-slate-200 rounded-t">
           <TabsRender/>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                X
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
    );
  };
  
  export default AuthModal;
