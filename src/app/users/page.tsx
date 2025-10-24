"use client";

import DataTable from "@/components/table/data-table";
import { columns } from "@/components/table/users-columns";
import { Button } from "@/components/ui/button";
import { useUsers } from "@/hooks/use-users";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Page() {
  // TODO: Use the useUsers hook to fetch users data
  const { data: users, isLoading, error } = useUsers();

  // TODO: Handle loading state
  if (isLoading) {
    return <div className="min-h-screen py-12 px-6">{/* ... */}</div>;
  }

  // TODO: Handle error state
  if (error) {
    return <div className="min-h-screen py-12 px-6">{/* ... */}</div>;
  }

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold tracking-tight">Users list</h1>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-lg">
          <DataTable columns={columns} data={users || []} />
        </div>
      </div>
    </div>
  );
}
