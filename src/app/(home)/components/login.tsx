"use client";

import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import * as yup from "yup";
import Image from "next/image";

const signUpSchema = yup.object().shape({
  username: yup.string().required("username is required"),
  email: yup
    .string()
    .email("please enter a valid email")
    .required("email is required"),
  password: yup.string().required("password is required"),
});

interface ILogin {
  email: string;
  password: string;
}
export default function Login() {
  const initialValues: ILogin = { email: "", password: "" };
  return (
    <div>
      <div className="bg-black lg:rounded-xl md:w-max w-screen  px-2 pt-2 py-8 ">
        <div className="flex   gap-5">
          <div className="w-[45%] text-start">
            <button className="text-white text-2xl flex items-center justify-center rounded-full  hover:bg-opacity-35 hover:bg-gray-500 w-10 h-10 text-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                id="x"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M13 1 1 13M1 1l12 12"></path>
                </g>
              </svg>
            </button>
          </div>
          <div className="self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="none"
              viewBox="0 0 512 512"
              id="twitter"
            >
              <g clip-path="url(#clip0_84_15697)">
                <rect width="512" height="512" fill="#000" rx="60"></rect>
                <path
                  fill="#fff"
                  d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_84_15697">
                  <rect width="512" height="512" fill="#fff"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="px-20">
          <h1 className="text-3xl font-bold my-5 mx-5">Sign in to X</h1>
          <div className="flex flex-col gap-4">
            <button className=" bg-white text-black py-2 rounded-full font-semibold hover:bg-gray-100">
              Sign in with Google
            </button>
            <button className=" bg-white text-black  py-2  rounded-full font-semibold hover:bg-gray-100">
              Sign in with Google
            </button>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={signUpSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {(props: FormikProps<ILogin>) => {
              return (
                <div className="my-10">
                  <Form>
                    <div className="flex flex-col gap-5">
                      <div>
                        <Field
                          type="text"
                          name="email"
                          placeholder="Email"
                          className=" bg-black    rounded-md pl-2 pr-10 py-4 border-2 border-gray-400"
                        />
                        <ErrorMessage
                          name="email"
                          component={"div"}
                          className="text-red-400 text-sm mx-10"
                        />
                      </div>
                      <div>
                        <Field
                          type="text"
                          name="password"
                          placeholder="Password"
                          className=" bg-black  rounded-md pl-2 pr-10 py-4 border-2 border-gray-400"
                        />
                        <ErrorMessage
                          name="password"
                          component={"div"}
                          className="text-red-400 text-sm mx-10"
                        />
                      </div>
                      <button
                        type="submit"
                        className="mt-10 bg-white text-black mx-10 py-4 rounded-full font-semibold hover:bg-gray-100"
                      >
                        Sign Up
                      </button>
                    </div>
                  </Form>
                </div>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}
