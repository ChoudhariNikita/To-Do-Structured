import React from "react";
import { LOGIN } from "../../constants/HEADINGS";

const LoginHeader: React.FC = () => {
  return <h2 className="mb-4 login-form">{LOGIN}</h2>;
};

export default LoginHeader;
