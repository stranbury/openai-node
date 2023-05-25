import {FC } from 'react';
import styled from '@emotion/styled';
import Feather from 'feather-icons-react'
import prisma from '../../lib/prisma';
 import { authOptions } from '../../lib/auth'
import { getServerSession } from "next-auth/next"
export const revalidate = 3600; // revalidate every hour
 
async function getChats(userId: string) {
  const posts = await prisma.chats.findMany({
    where: {
        user:{
            id: userId
        }, 
        archived: false
    }, 
  });
  return posts;
}
 
export default async function Page(props) {
    const session = await getServerSession(authOptions); 

    console.log(session);
    const Agents = [0, 1, 5 , 8, 8,9,8]
//   const posts = await getPosts(

//   );
  // ...
  return (<div className='flex flex-col justify-center h-full w-full p-6 '>
    

    <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
            <div className="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div className="stat-title">Conversation</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Active chats</div>
            <div className="stat-actions">
              <button className="btn btn-sm">new chat</button>
              <button className="btn btn-sm btn-ghost">view all</button>
            </div>
        </div>
        
        <div className="stat">
            <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            </div>
            <div className="stat-title">Agents</div>
            <div className="stat-value">4,200</div>
            <div className="stat-actions">
              <button className="btn btn-sm">new agent</button>
              <button className="btn btn-sm btn-ghost">view all</button>
            </div>
            
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
          <Feather icon="check-circle" className="inline-block w-8 h-8 stroke-current"/>
          </div>
          
          <div className="radial-progress" style={{"--value":86}}>86%</div>
     
          <div className="stat-title">Tasks done</div>
          <div className="stat-desc text-secondary">31 tasks remaining</div>
        </div>
        
    </div>
   
    <div className='carousel rounded-xl w-full min-h-[80vh] h-full p-6 mt-6  gap-4 bg-secondary shadow' >
      
      
    </div>
  </div>); 
}


