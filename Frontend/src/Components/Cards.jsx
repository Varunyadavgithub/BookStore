import React from "react";

const Cards = ({item}) => {
  // console.log(item);
  return (
    <>
      <div className="my-4 p-3">
        <div className="card p-3 w-92 bg-base-100 shadow-xl hover:scale-105 dueration-200 border">
          <figure>
            <img
              src={item.img}
              alt="book-image"
              className="h-[250px] w-[200px] py-4 px-0"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-success">{item.category}</div>
            </h2>
            <p>{item.title.slice(0,90)}</p>
            <div className="card-actions justify-between ">
              <div className="badge badge-outline ">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-lg border-[2px] hover:bg-blue-700 hover:text-white duration-200">Read Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
