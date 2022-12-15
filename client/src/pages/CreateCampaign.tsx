import React from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

import { money } from "../assets";
import Button from "../components/Button";
import { checkIfImage } from "../utils";

type Props = {};

const CreateCampaign = (props: Props) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [form, setForm] = React.useState<Object>({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });

  const submitHandler = () => console.log("asd");
  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-lg sm:p-10 p-4 ">
      {isLoading && "Loading...."}
      <div className="flex justify-center items-center p-4 sm:min-w-[380px] bg-[#3a3a43] rounded-lg">
        <h1 className="font-epilogue font-bold sm:text-6 text-4 leading-9 text-white">
          Start a campaign
        </h1>
      </div>
      <form
        onSubmit={submitHandler}
        className="w-full mt-16 flex flex-col gap-7"
      >
        <div className="flex flex-wrap gap-10"></div>
      </form>
    </div>
  );
};

export default CreateCampaign;
