import React from "react";

interface propsType {
  alignLogo?: string;
}
const CommonLogo = ({ alignLogo }: propsType) => {
  return <h1 className="text-center mb-4">Options Strategy</h1>;
};

export default CommonLogo;
