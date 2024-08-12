import React from "react";

type pageProps = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: pageProps) => {
  return (
    <div className="max-w-7xl ">
      <div className="w-full m-4 ">{children}</div>
    </div>
  );
};

export default PageLayout;
