"use client";

import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import * as yup from "yup";
import Image from "next/image";
import Link from "next/link";
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
      <div className="bg-black lg:rounded-xl md:w-max w-screen  px-2 pt-2 py-8 pb-16   ">
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
        <div className="px-36 flex flex-col">
          <h1 className="text-3xl font-bold my-5 mb-7 ">Sign in to X</h1>
          <div className="flex flex-col gap-5 items-center">
            <button className=" bg-white  text-black py-2 rounded-full text-sm w-[280px] hover:bg-gray-100 flex justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              Sign in with Google
            </button>
            <button className=" bg-white text-black  py-2  rounded-full text-sm w-[280px] hover:bg-gray-100 flex justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 50 50"
              >
                <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
              </svg>
              Sign in with Apple
            </button>
           
          <div className="flex items-center gap-2">

          <span className="w-[120px] h-[1px] bg-gray-500"></span><p>or</p><span className="w-[120px] h-[1px] bg-gray-500"></span>
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
                  <div className="">
                    <Form>
                      <div className="flex flex-col gap-5 items-center">
                        <div>
                          <Field
                            type="text"
                            name="email"
                            placeholder="Email"
                            className=" bg-black  w-[280px]  rounded-md pl-2 pr-10 py-3 border-2 border-gray-400"
                          />
                          <ErrorMessage
                            name="email"
                            component={"div"}
                            className="text-red-400 text-sm "
                          />
                        </div>
                        <div>
                          <Field
                            type="text"
                            name="password"
                            placeholder="Password"
                            className=" bg-black w-[280px] rounded-md pl-2 pr-10 py-3 border-2 border-gray-400"
                          />
                          <ErrorMessage
                            name="password"
                            component={"div"}
                            className="text-red-400 text-sm "
                          />
                        </div>
                        <button
                          type="submit"
                          className="bg-white font-medium  text-black py-2 rounded-full text-sm w-[280px] hover:bg-gray-100"
                        >
                          Sign In
                        </button>
                      </div>
                    </Form>
                  </div>
                );
              }}
            </Formik>
            <p className="self-start my-10 text-sm font-light">Don't have an account ? <span className="text-sky-500 hover:underline"><Link href={"/sign_up"}>Sign Up</Link></span> </p> 
          </div>
        </div>
      </div>
    </div>
  );
}
