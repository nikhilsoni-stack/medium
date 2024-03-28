import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";
export const Auth = ({ type }: any) => {
  const [postInput, setPostInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const authType = type === "signup" ? "signup" : "signin";
  const navigate = useNavigate();

  const sendRequest = async () => {
    try {
      const response = await axios.post(
        BACKEND_URL + `/api/v1/user/${authType}`,
        postInput
      );
      console.log(response);
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="flex flex-col justify-center h-screen ">
      <div className="flex justify-center ">
        <div>
          <div className="max-w-md  ml-2 text-3xl text-bold pl-16 pr-16">
            Create an Account
          </div>
          <div className="text-slate-400 text-center pb-8">
            Already have account{" "}
            <Link
              to={type === "signup" ? "/signin" : "/signup"}
              className="pl-2 underline"
            >
              {type === "signup" ? "login" : "sign-up"}
            </Link>
          </div>
          {type === "signin" ? null : (
            <LabelledInput
              label={"Name"}
              placeHolder={"aaaa"}
              onChange={(e: any) => {
                setPostInput({
                  ...postInput,
                  name: e.target.value,
                });
              }}
              value={postInput.name}
            />
          )}
          <LabelledInput
            label={"email"}
            placeHolder={"aaa@gamil.com"}
            onChange={(e: any) => {
              setPostInput({
                ...postInput,
                email: e.target.value,
              });
            }}
            value={postInput.email}
          />
          <LabelledInput
            label={"Password"}
            placeHolder={"*********"}
            onChange={(e: any) => {
              setPostInput({
                ...postInput,
                password: e.target.value,
              });
            }}
            value={postInput.password}
            type={"password"}
          />
          <button
            type="button"
            className="mt-8 w-full text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={sendRequest}
          >
            {authType}
          </button>
        </div>
      </div>
    </div>
  );
};

function LabelledInput({
  label,
  placeHolder,
  onChange,
  value,
  type = "text",
}: any) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 pt-2">
        {label}
      </label>
      <input
        id="first_name"
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pt-4"
        placeholder={placeHolder}
        onChange={onChange}
        value={value}
        type={type}
      />
    </div>
  );
}
