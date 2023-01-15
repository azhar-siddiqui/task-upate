import React, { useState } from "react";
import DonutChart from "react-donut-chart";
import { data } from "../../data/data";
import Table from "../../components/Table/Table";
// import "./dasboard.scss";

const DashBoard = () => {
  const [toggleTable, setToggleTable] = useState(true);

  return (
    <>
      <div className="md:flex w-full mx-auto mt-5">
        <Table />
        {toggleTable ? (
          <div className="w-full border md:ml-2">
            <DonutChart
              className="dchart p-5  mx-auto w-[360px]"
              width={500}
              height={300}
              innerRadius={0.8}
              selectedOffset={0}
              outerRadius={0.5}
              colors={["#000000", "#FF8C00", "#0000FF"]}
              data={data}
            />
          </div>
        ) : (
          <Table />
        )}
      </div>
      <div className="flex justify-end">
        <button
          className={`${
            toggleTable === true && `bg-blue-500 rounded-md `
          }pt-1 px-3`}
          onClick={() => {
            setToggleTable(true);
          }}
        >
          <span className="material-symbols-outlined">data_usage</span>
        </button>
        <button
          className={`${
            toggleTable === false && `bg-blue-500 rounded-md `
          }pt-1 px-3`}
          onClick={() => {
            setToggleTable(false);
          }}
        >
          <span className="material-symbols-outlined">today</span>
        </button>
      </div>
    </>
  );
};

export default DashBoard;
