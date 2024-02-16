import React from "react";
import { Plan } from "@prisma/client";
import { verifyAndAcceptInvitation } from "@/lib/queries";

const Page = async ({
  searchParams,
}: {
  searchParams: { plan: Plan; state: string; code: string };
}) => {
  const agencyId = await verifyAndAcceptInvitation();
  return <div>Pagdse</div>;
};

export default Page;
