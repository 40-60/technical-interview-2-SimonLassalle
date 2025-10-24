"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useDeleteUser } from "@/hooks/use-users";
import { User as UserType } from "@/types/user";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, ExternalLink, MoreHorizontal, Pencil, Trash2, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import DeleteConfirmationDialog from "../delete-confirmation-dialog";

export const columns: ColumnDef<UserType>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const user = row.original;
      return (
        <Link href={`/users/${user.id}`} className="hover:underline">
          <div className="font-medium flex items-center">
            {user.name}
            <ExternalLink className="ml-2 h-3 w-3 text-muted-foreground" />
          </div>
        </Link>
      );
    },
  },
  {
    accessorKey: "username",
    header: "Username",
    cell: ({ row }) => <div className="text-muted-foreground">{row.getValue("username")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "address.city",
    header: "City",
    cell: ({ row }) => {
      const user = row.original;
      return <div>{user.address.city}</div>;
    },
  },
  {
    accessorKey: "company.name",
    header: "Company",
    cell: ({ row }) => {
      const user = row.original;
      return <div className="text-muted-foreground">{user.company.name}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original;
      const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

      // TODO: Use the useDeleteUser hook for delete functionality
      const { mutate: deleteUser, isPending: isDeleting } = useDeleteUser(user.id);

      // TODO: Implement delete functionality
      // This function should:
      // 1. Call the deleteUser mutation
      // 2. Close the dialog
      // 3. Redirect to the users list page
      const handleDelete = async () => {
        // TODO: Implement delete functionality
        console.log("Delete user not implemented", user.id);
      };

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href={`/users/${user.id}`}>
                  <User className="mr-2 h-4 w-4" />
                  View profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href={`/users/${user.id}/edit`}>
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem variant="destructive" onClick={() => setIsDeleteDialogOpen(true)}>
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Delete Confirmation Dialog */}
          <DeleteConfirmationDialog
            isOpen={isDeleteDialogOpen}
            onClose={() => setIsDeleteDialogOpen(false)}
            onConfirm={handleDelete}
            title="Delete User"
            description="Are you sure you want to delete this user? This action cannot be undone."
            itemName={user.name}
            isLoading={isDeleting}
          />
        </>
      );
    },
  },
];
