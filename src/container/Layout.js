import React, { Suspense, lazy } from "react";
const Login = lazy(() => import("../pages/authorization/Login"));

export default function Layout() {
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <Login />
      </Suspense>
    </>
  );
}
