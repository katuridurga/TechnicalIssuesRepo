import React from "react";
import { Helmet } from "react-helmet";

const HelmetSeo = ({ title = "", desc = "", cid = "" }) => {
  if (cid == "search") {
    title = "Search: " + title;
  }
  return (
    <Helmet>
      <title>{title}</title>
      <meta  property="og:description" content={desc} />
    </Helmet>
  );
};

export default HelmetSeo;
