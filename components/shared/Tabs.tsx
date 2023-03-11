import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { SubmitForm } from "@/types/form";
import LogIn from "../auth/LogIn";
import SignUp from "../auth/SignUp";

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);
  const methods = useForm<SubmitForm>({
    defaultValues: {
      loginEmail: "",
      loginPassword: "",
      signupEmail: "",
      signupPassword: "",
      signupConfirmPassword: ""
    }
  })
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex flex-column mb-0 list-none flex-wrap pt-3 pb-4"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "bg-yellow-400 text-white"
                    : "bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                LOGIN
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "bg-yellow-400 text-white"
                    : "bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 SIGNUP
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <FormProvider {...methods}>
                <div className={`w-full max-w-lg ${openTab === 1 ? "block" : "hidden"}`} id="link1">
                 <LogIn methods={methods}/>
                </div>
                <div className={`w-full max-w-lg ${openTab === 2 ? "block" : "hidden"}`} id="link2">
                 <SignUp methods={methods}/>
                </div>
                </FormProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
     <Tabs />
    </>
  );
}