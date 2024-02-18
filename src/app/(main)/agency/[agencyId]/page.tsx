import React from "react";

const page = ({ params }: { params: { agencyId: String } }) => {
  return <div>{params.agencyId}</div>;
};

export default page;
