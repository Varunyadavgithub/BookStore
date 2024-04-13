import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

const Course = () => {

  const [book,setBook]=useState([]);

  useEffect(()=>{
    const getBook = async()=>{
      try{
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch(error){
        console.log("Error: ",error);
      }
    }
    getBook();
  },[])

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            Explore the <span className="text-red-600">Books !!!</span>
          </h1>
          <Link to='/'>
          <button  className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-700 duration-300 mt-6">Back</button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {
                book.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>
      </div>
    </>
  );
};

export default Course;
