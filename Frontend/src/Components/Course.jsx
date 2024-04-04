import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            Explore the <span className="text-red-600">Books !!!</span>
          </h1>
          <p className="mt-12 text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem hic veritatis quibusdam perspiciatis vel? Cum a
            itaque earum facilis voluptas debitis nihil fuga et cupiditate
            veniam aspernatur dolorem nisi assumenda velit eveniet dicta magni,
            ducimus optio saepe obcaecati! Odit porro dicta saepe voluptates
            eveniet! Explicabo vitae quod veniam aliquid, quas minima quasi sed
            inventore incidunt provident mollitia perspiciatis laboriosam
            molestias consectetur. Earum necessitatibus dicta ea animi quas
            itaque porro nostrum omnis sed distinctio quasi, natus, sint,
            ratione saepe dolorem quaerat cum deserunt accusantium cumque
            officiis reprehenderit temporibus dolore. Nam dignissimos totam quas
            in perspiciatis placeat minima, ea architecto laborum vitae?
          </p>
          <Link to='/'>
          <button  className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-700 duration-300 mt-6">Back</button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {
                list.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>
      </div>
    </>
  );
};

export default Course;
