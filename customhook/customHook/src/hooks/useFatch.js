// src/hooks/useFetch.js
import { useEffect, useState } from "react";

export function usePostTitle() {
  const [postTitle, setPostTitle] = useState('');

  async function getPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await response.json();
    const randomPost = json[Math.floor(Math.random() * json.length)];
    setPostTitle(randomPost.title);
  }

  useEffect(() => {
    getPost();
  }, []);

  return postTitle;
}

export function useFetch(url){

const [finaldata ,setfinaldata] =useState({})
  
 async function getfatchdata(){    
   const response =  await fetch(url) 
   const json = await response.json()
setfinaldata(json)
 }

 

useEffect(() => {
      
    getfatchdata();

 } ,)
  
 useEffect(()=> {
  
    const cleaning =setInterval(getfatchdata() ,10*100)
   
    return () => {
        clearInterval(cleaning)
    }
    
 },)





return {
    finaldata
}
}