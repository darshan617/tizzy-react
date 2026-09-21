import SignupForm from "@/components/auth/sign-up/SignupForm";
import Layout from "@/components/Layout/Layout";
import React, { useState } from "react";

const signup = () => {
  return (
    <Layout>
      <SignupForm />
    </Layout>
  );
};

export default signup;
