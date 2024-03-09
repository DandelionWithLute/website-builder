"use client";
import { useModal } from "@/providers/modal-provider";
import {
  SubAccount,
  AgencySidebarOption,
  SubAccountSidebarOption,
} from "@prisma/client";
import React, { useMemo, useState } from "react";

type Props = {
  defaultOpen?: boolean;
  subAccounts: SubAccount[];
  sidebarOpt: AgencySidebarOption[] | SubAccountSidebarOption[];
  sidebarLogo: string;
  details: any;
  user: any;
  id: string;
};

const MenuOptions = ({
  details,
  id,
  sidebarLogo,
  sidebarOpt,
  subAccounts,
  user,
  defaultOpen,
}: Props) => {
  const { setOpen } = useModal();
  const [isMounted, setIsMounted] = useState(false);

  const openState = useMemo(
    () => (defaultOpen ? { open: true } : {}),
    [defaultOpen]
  );

  return <div>menuOptions</div>;
};

export default MenuOptions;
