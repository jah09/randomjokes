import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
const Card = () => {
  const { data, refetch } = useQuery({
    queryKey: ["jokes"],
    queryFn: async () => {
      return Axios.get("https://api.chucknorris.io/jokes/random").then(
        (res) => res.data
      );
    },
    enabled: false,
  });
  console.log("data is", typeof data);

  //function to fetch the API data
  const handleGetJokes = () => {
    refetch();
  };

  return (
    <div className=" justify-content-center h-100 ">
      <div className="mt-5">
        <h1 className="font-monospace">Chuck Jokes</h1>
      </div>
      <div className="d-flex justify-content-center bg-secondarycolor">
        <div className="card align-self-center  w-50  bg-secondarycolor">
          {data?.value ? (
            <p className="card-body font-monospace fw-bold ">{data.value}</p>
          ) : (
            <p className="card-body font-monospace text-warning   fw-bold">
              No jokes, click Generate.
            </p>
          )}
        </div>
      </div>
      <div className="mt-3">
        <button
          type="button"
          className="btn btn-outline-primary btn-md font-monospace"
          onClick={handleGetJokes}
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default Card;
