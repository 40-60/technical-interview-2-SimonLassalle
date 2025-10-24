"use client";

import DeleteConfirmationDialog from "@/components/delete-confirmation-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useDeleteUser, useUser } from "@/hooks/use-users";
import { ArrowLeft, Building, Globe, Mail, MapPin, Phone, User } from "lucide-react";
import Link from "next/link";
import { notFound, useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function UserDetailPage() {
  const params = useParams();
  const router = useRouter();
  const userId = parseInt(params.id as string);

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  // TODO: Use the useUser hook to fetch user data
  const { data: userData, isLoading, error } = useUser(userId);

  // TODO: Use the useDeleteUser hook for delete functionality
  const { mutate: deleteUser, isPending: isDeleting } = useDeleteUser(userId);

  // TODO: Implement delete functionality
  // This function should:
  // 1. Call the deleteUser mutation
  // 2. Close the dialog
  // 3. Redirect to the users list page
  const handleDelete = async () => {
    // TODO: Implement delete functionality
    console.log("Delete user not implemented");
  };

  // TODO: Handle error state
  if (error) {
    return <div className="min-h-screen flex items-center justify-center py-12 px-6">{/* ... */}</div>;
  }

  // TODO: Handle loading state
  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center py-12 px-6">{/* ... */}</div>;
  }

  // TODO: Remove this mock data and use the actual userData from the hook
  const user = userData || {
    id: userId,
    name: "John Doe",
    username: "johndoe",
    email: "john@example.com",
    phone: "123-456-7890",
    website: "johndoe.com",
    address: {
      street: "123 Main St",
      suite: "Apt 1",
      city: "New York",
      zipcode: "10001",
      geo: {
        lat: "40.7128",
        lng: "-74.0060",
      },
    },
    company: {
      name: "Example Corp",
      catchPhrase: "Making the world a better place",
      bs: "innovative solutions",
    },
  };

  if (!user) {
    notFound();
  }

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/users">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Users
            </Button>
          </Link>
          <h1 className="text-4xl font-bold tracking-tight">User Details</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* User Profile Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-white" />
                </div>
                <div>
                  <CardTitle>{user.name}</CardTitle>
                  <CardDescription>@{user.username}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{user.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{user.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{user.website}</span>
              </div>
            </CardContent>
          </Card>

          {/* Company Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Building className="h-5 w-5" />
                <span>Company</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg">{user.company.name}</h4>
                <p className="text-sm text-muted-foreground mt-1">{user.company.catchPhrase}</p>
              </div>
              <div>
                <Badge variant="secondary">{user.company.bs}</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Address Information */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Address</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Street</span>
                    <p className="text-sm">{user.address.street}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Suite</span>
                    <p className="text-sm">{user.address.suite}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">City</span>
                    <p className="text-sm">{user.address.city}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Zipcode</span>
                    <p className="text-sm">{user.address.zipcode}</p>
                  </div>
                </div>
              </div>

              {/* Coordinates */}
              <div className="mt-6 pt-4 border-t">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Coordinates</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs text-muted-foreground">Latitude</span>
                    <p className="text-sm font-mono">{user.address.geo.lat}</p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground">Longitude</span>
                    <p className="text-sm font-mono">{user.address.geo.lng}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4">
          <Link href={`/users/${userId}/edit`}>
            <Button variant="outline">Edit User</Button>
          </Link>
          <Button variant="destructive" onClick={() => setIsDeleteDialogOpen(true)}>
            Delete User
          </Button>
        </div>
      </div>

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
    </div>
  );
}
