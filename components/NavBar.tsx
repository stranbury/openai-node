'use client'
import {FC} from 'react';
import styled from '@emotion/styled';
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import * as AuthBtn from "./AuthBtn";
const NavBar: FC = () => {
    const { data: session, status } = useSession();
    console.log(session);
    console.log(status);
return (
<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Chatha</a>
  </div>
  <div className="flex-none gap-2">
   
    {
        session ? (<div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://i.pravatar.cc/300" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li><AuthBtn.ProfileButton/></li>
        <li><AuthBtn.LogoutButton/></li>
      </ul>
    </div>):(
        <>
        <AuthBtn.LoginButton/>
        <AuthBtn.RegisterButton/>
        </>
    )
    }
    
  </div>
</div>)
}
    // return (
    // <div className="navbar bg-base-100">
    // <div className="flex-1">
    //     <Link  href="/" className="btn btn-ghost normal-case text-xl">Pantha</Link>
    // </div>
    // <div className="flex-none">
        
        

    // </div>
    // </div>);
    // }

    
    export default NavBar;