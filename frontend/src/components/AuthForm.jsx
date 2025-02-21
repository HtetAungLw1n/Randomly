import React from "react";
import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
import AuthLoading from "../loading/AuthLoading";

const AuthForm = () => {
  const data = useActionData(); //this code will get if any error occur in backend

  const navigation = useNavigation(); // this code is for submitting
  const isSubmitting = navigation.state === "submitting";

  const [searchParam, setSearchParam] = useSearchParams(); // this code will get what is behind "?" in url
  const isLogin = searchParam.get("mode") === "login";

  return (
    <>
      <div className="bg-offWhite w-full lg:w-1/2 p-5 lg:p-10 shadow-lg shadow-shadowGray">
        <div className="text-3xl text-luxRed font-semibold">
          {isLogin ? "Login to your account" : "Register a new account"}
        </div>
        <div className="text-sm text-coolGray font-lato mb-8">
          Only for editor.
        </div>

        <Form method="post" className="mt-4">
          <label htmlFor="email" className="font-lato">
            Email
          </label>
          {/* this is for Register */}
          {data && data.errors && (
            <p className="text-luxRed text-xs font-lato">{data.errors.email}</p>
          )}
          <input
            type="email"
            name="email"
            id="email"
            className="outline-none border-2 border-charcoalBlack px-4 py-2 w-full mb-6"
          />

          <label htmlFor="password" className="block font-lato">
            Password
          </label>
          {data && data.errors && (
            <p className="text-luxRed text-xs font-lato">
              {data.errors.password}
            </p>
          )}
          <input
            type="password"
            name="password"
            id="password"
            className="outline-none border-2 border-charcoalBlack px-4 py-2 w-full mb-6"
          />

          {/* this is for login error */}
          {data && data.errors && (
            <p className="text-luxRed text-xs font-lato">
              {data.errors.credentials}
            </p>
          )}
          <div className="font-lato w-full mt-4 flex justify-between items-center">
            {isLogin ? (
              <>
                <div className="text-coolGray my-2 text-sm">
                  create a new account?
                  <Link to={"/key"} className="text-luxRed ml-2 underline">
                    Register
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="text-coolGray my-2 text-sm">
                  already have an acount?
                  <Link
                    to={"/editor?mode=login"}
                    className="text-luxRed ml-2 underline"
                  >
                    Login
                  </Link>
                </div>
              </>
            )}

            <button
              type="submit"
              className="px-4 py-2 bg-luxRed text-offWhite cursor-pointer"
            >
              {isSubmitting ? <AuthLoading /> : isLogin ? "Login" : "Register"}
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AuthForm;
