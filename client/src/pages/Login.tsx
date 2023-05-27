import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Hooks
import useSendData from "../hooks/useSendData";
import { useCtx } from "../context";

// Components
import EmptyLayout from "../components/Layouts/EmptyLayout";
import LoadingSpinner from "../components/LoadingSpinner";

const Login = () => {
  const { setLoggedAccount } = useCtx();
  const navigate = useNavigate();
  const { isLoading, isError, error, mutateAsync } = useSendData();

  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);

  const inputEmailRef = useRef<HTMLInputElement>(null!);
  const inputPasswordRef = useRef<HTMLInputElement>(null!);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = await mutateAsync({
      url: "/auth/login",
      body: {
        email: inputEmailRef.current.value.trim(),
        password: inputPasswordRef.current.value.trim(),
      },
    });

    if (error) return;

    setLoggedAccount({
      token: data.token,
      id: data.user._id,
      nick: data.user.nick,
      profilePhoto: data.user.profilePhoto,
      secondPhoto: data.user.secondPhoto,
      username: data.user.username,
      about: data.user.about,
      followers: data.user.followers.length,
      following: data.user.following.length,
    });

    navigate(`/${data.user.username}`);
  };

  return (
    <EmptyLayout>
      <div className="w-full h-screen bg-[#000] flex flex-col items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          fill={"white"}
          className="w-8 h-8 absolute top-10 left-[50%] translate-x-[-50%]"
        >
          {" "}
          <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
        </svg>
        <div className="max-w-[300px] w-full">
          <h1 className="text-2xl sm:text-3xl font-bold mb-5">
            Přihlaste se na Twitter
          </h1>
          <button className="bg-white hover:bg-opacity-80 ease-in-out duration-150 text-black w-full py-3 rounded-full">
            Přihlásit se jako Guest
          </button>
          <div className="flex justify-between my-3">
            <span className="h-[1px] w-[38%] my-auto bg-[#ebebeb4c]" />
            <p>nebo</p>
            <span className="h-[1px] w-[38%] my-auto bg-[#ebebeb4c]" />
          </div>
          <form
            onSubmit={submitHandler}
            className="flex flex-col items-center gap-5 mb-5"
          >
            <div className="relative w-full">
              <label
                className={`absolute cursor-text w-full text-grayish font-normal ease-linear duration-75 ${
                  focusEmail || inputEmailRef.current?.value
                    ? "top-[12.5%] left-[3%] text-blue-500 text-sm"
                    : "top-[25%] left-[3%] text-lg"
                }`}
                htmlFor="email"
              >
                E-mail nebo uživatelské jméno
              </label>
              <input
                ref={inputEmailRef}
                onFocus={() => setFocusEmail(true)}
                onBlur={() => setFocusEmail(false)}
                id="email"
                type="text"
                className={`w-full bg-black px-2 pb-[6px] pt-7 outline-none border-solid border-[1px] border-grayish ${
                  focusEmail ? "border-blue-500" : "border-grayish"
                } rounded-md`}
              />
            </div>
            <div className="relative w-full cursor-text">
              <label
                className={`absolute cursor-text w-full text-grayish font-normal ease-linear duration-75 ${
                  focusPassword || inputPasswordRef.current?.value
                    ? "top-[12.5%] left-[3%] text-blue-500 text-sm"
                    : "top-[25%] left-[3%] text-lg"
                }`}
                htmlFor="password"
              >
                Tvoje heslo
              </label>
              <input
                ref={inputPasswordRef}
                onFocus={() => setFocusPassword(true)}
                onBlur={() => setFocusPassword(false)}
                id="password"
                type="password"
                className={`w-full bg-black px-2 pb-[6px] pt-7 outline-none border-solid border-[1px] border-grayish ${
                  focusPassword ? "border-blue-500" : "border-grayish"
                } rounded-md`}
              />
            </div>
            <button className="bg-white hover:bg-opacity-80 ease-in-out duration-150 text-black w-full h-[50px] rounded-full">
              {isLoading ? (
                <LoadingSpinner
                  isLoading={isLoading}
                  size={15}
                  customCss="flex justify-center"
                  type={2}
                />
              ) : (
                "Přihlásit se"
              )}
            </button>
          </form>
          <button
            type="submit"
            className="w-full border-solid border-[1px] border-white rounded-full py-3 hover:bg-[#0b0b0b]"
          >
            Zapomněli jste heslo?
          </button>
          <div className="flex gap-2 mt-5">
            <span className="font-normal">Nemáte účet?</span>
            <Link
              to="/register"
              className="font-normal text-blue-600 hover:underline"
            >
              Zaregistrujte se
            </Link>
          </div>
        </div>
      </div>
    </EmptyLayout>
  );
};

export default Login;
