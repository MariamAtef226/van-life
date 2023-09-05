import React, { useEffect } from "react";
import {
  Form,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { loginUser } from "../config.js";



export async function loginAction({ request }) {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  try {
    await loginUser({ email, password });
    console.log('got here')
    let pathname = new URL(request.url).searchParams.get("redirect") || "/host";
    window.location.replace(pathname);
    return null;
  } catch (e) {
    return e.message;
  }
}

export default function Login() {
  const error = useActionData();
  const status = useNavigation(); // to determine current status (submitting or not)
 
 
  // For fading in effect purpose for invalid login messages
  useEffect(
    function () {
      let el = document.querySelectorAll(".login-message");
      if (el[0]) el[0].style.opacity = 0;
      if (el[1]) el[1].style.opacity = 0;

      setTimeout(() => {
        let el = document.querySelectorAll(".login-message");
        if (el[0]) el[0].style.opacity = 1;
        if (el[1]) el[1].style.opacity = 1;
      }, 200);
    },
    [error]
  );

  return (
    <>

      {error && (
        <h4 className="w-100 p-3 bg-danger text-light fw-bold text-center login-message">
          {error}
        </h4>
      )}

      <div className="login-container">
        <h1>Sign in to your host account</h1>
        <Form method="post" className="login-form">
          <input name="email" type="email" placeholder="Email address" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={status.state == "submitting"}>
            {status.state == "submitting" ? "Logging in..." : "Log in"}
          </button>
        </Form>
      </div>
    </>
  );
}
