import { BsCheckCircleFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useState, useCallback } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function Auth() {
  const router = useRouter();
  const [toggle, setToggle] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toggleHandler = useCallback(() => {
    setToggle((prev) => (prev === "login" ? "register" : "login"));
  }, []);

  // login
  const login = useCallback(
    async (e: any) => {
      e.preventDefault();
      try {
        const status = await signIn("credentials", {
          email,
          password,
          redirect: false,
          callbackUrl: "/",
        });
        console.log(status);
        if (!status?.error) router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    [email, password, router]
  );
  //register

  const register = useCallback(
    async (e: any) => {
      e.preventDefault();
      try {
        await axios.post("api/register", {
          email,
          password,
        });
        setEmail("");
        setPassword("");
      } catch (error) {
        console.log(error);
      }
    },
    [email, password]
  );

  return (
    <div className="flex flex-col  items-center bg-red-600 pb-5">
      <div className="flex flex-row gap-2 items-center text-4xl font-semibold my-5 cursor-pointer">
        <BsCheckCircleFill size={40} />
        <h1 className="">Pomofocus</h1>
      </div>
      <p className="text-xl font-semibold  ">
        {toggle === "login" ? "Login" : "Create Account"}
      </p>
      <div className="w-[90%] md:w-[40%] lg:w-[30%] flex flex-col justify-center items-center gap-5 bg-white rounded-lg my-5">
        <p
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-[90%] bg-white shadow-md  shadow-gray-500 mt-5 text-gray-800 text-lg font-semibold rounded-lg flex  items-center justify-center gap-2 py-4 cursor-pointer "
        >
          <FcGoogle /> Login With Google
        </p>
        <div className="w-[90%] text-gray-600">
          <form className="w-full flex flex-col gap-4 my-2">
            <div className="flex flex-col">
              <label className="text-lg font-semibold py-1" htmlFor="email">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className=" bg-gray-200 outline-none py-3 rounded-md px-4"
                placeholder="example@mail.com"
                type="email"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-semibold py-1" htmlFor="password">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className=" bg-gray-200 outline-none py-3 rounded-md px-4"
                type="password"
              />
            </div>
            <button
              onClick={toggle == "login" ? login : register}
              type="submit"
              className="bg-black py-4 text-lg font-semibold rounded-lg text-white my-4"
            >
              {toggle === "login" ? "Log in with Email" : "Sign up with Email"}
            </button>
          </form>
          <p className="text-md font-semibold text-center hover:underline mt-2 mb-5 cursor-pointer">
            {toggle === "login" ? "Forget Password" : ""}
          </p>
        </div>
      </div>
      <p className="text-center text-md">
        {toggle === "login"
          ? " Do not have an account? "
          : "Alreay have an account"}
      </p>
      <p
        onClick={toggleHandler}
        className="text-center cursor-pointer underline font-semibold"
      >
        {toggle == "login" ? "Create account" : "Log in"}
      </p>
    </div>
  );
}
