"use client";
import { TicketDetails } from "@/lib/types";
import { Agency, Contact, Plan, User } from "@prisma/client";
import React from "react";

interface modelProviderProps {
  children: React.ReactNode;
}

export type ModalData = {
  user?: User;
  agency?: Agency;
  ticket: TicketDetails;
  contact?: Contact;
  plans?: {
    defaultPriceId: Plan;
    plans: PriceList['data']
  };
};

type ModalContextType = {
  data: ModalData;
  isOpen: boolean;
  setOpen: (modal: React.ReactNode, fetchData?: () => Promise<any>) => void;
  setClose: () => void;
};

const modelProvider = ({ children }: { children: React.ReactNode }) => {
  return <div>modelProvider</div>;
};

export default modelProvider;
