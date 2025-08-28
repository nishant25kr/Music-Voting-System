'use client'

import { signIn } from "next-auth/react";

export function AppBar(){
    return(
        <div className="flex justify-evenly">
            <div>
                music
            </div>

            <div>
                <button className="border m-2 p-2 bg-gray-500 " onClick={()=>signIn()}>
                    signup
                </button>
            </div>

        </div>
    )
}
