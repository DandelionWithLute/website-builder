import BlurPage from "@/components/global/BlurPage";
import { getFunnel } from "@/lib/queries";
import { redirect } from "next/navigation";
import React from "react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {
  params: { funnelId: string; subaccountId: string };
};

const page = async ({ params }: Props) => {
  const funnelPages = await getFunnel(params.funnelId);
  if (!funnelPages) {
    return redirect(`subaccount/${params.subaccountId}/funnels`);
  }

  return (
    <BlurPage>
      <Link
        href={`/subaccount/${params.subaccountId}/funnels`}
        className="flex justify-between gap-4 mb-4 text-muted-foreground"
      >
        Back
      </Link>
      <h1 className="text-3xl mb-8">{funnelPages.name}</h1>
      <Tabs defaultValue="steps" className="w-full">
        <TabsList className="grid grid-cols-2 w-[50%] bg-transparent">
          <TabsTrigger value="steps">Steps</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="steps"></TabsContent>
      </Tabs>
    </BlurPage>
  );
};

export default page;
