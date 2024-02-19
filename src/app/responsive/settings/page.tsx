/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { cn } from "@/lib/utils";
import { DataTable } from "@/components/ui/data-table";

type Props = {};

interface Setting {
  category: string;
  value: string | number | boolean;
}

const columns: ColumnDef<Setting>[] = [
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
];
const data: Setting[] = [
  {
    category: "Account",
    value: true,
  },
  {
    category: "Notifications",
    value: false,
  },
  {
    category: "Language",
    value: "English",
  },
  {
    category: "Theme",
    value: "Dark",
  },
];

export default function SettingsPage({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <h1 className="text-3xl ont-semibold">Setting</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
