"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUpdateUser, useUser } from "@/hooks/use-users";
import { ArrowLeft, Building, Loader2, MapPin, Save, User } from "lucide-react";
import Link from "next/link";
import { notFound, useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

// TODO: Implement form validation schema using Zod
// The schema should validate:
// - name: string, min 2 characters
// - username: string, min 2 characters
// - email: valid email format
// - phone: string, min 10 characters
// - website: valid URL or empty string
// - address: object with street, suite, city, zipcode, and geo (lat, lng)
// - company: object with name, catchPhrase, and bs
const userFormSchema = z.object({
  // TODO: Implement the schema with proper validation
  // name: z.string(),
  // username: z.string(),
  // email: z.string(),
  // phone: z.string(),
  // website: z.string(),
  // address: z.object({
  //   street: z.string(),
  //   suite: z.string(),
  //   city: z.string(),
  //   zipcode: z.string(),
  //   geo: z.object({
  //     lat: z.string(),
  //     lng: z.string(),
  //   }),
  // }),
  // company: z.object({
  //   name: z.string(),
  //   catchPhrase: z.string(),
  //   bs: z.string(),
  // }),
});

type UserFormValues = z.infer<typeof userFormSchema>;

export default function UserEditPage() {
  const params = useParams();
  const router = useRouter();
  const userId = parseInt(params.id as string);

  // TODO: Use the useUser hook to fetch user data
  // The hook should return: { data: user, isLoading, error }
  const { data: userData, isLoading, error } = useUser(userId);

  // TODO: Use the useUpdateUser hook for update functionality
  // The hook should return: { mutate: updateUser, isPending: isUpdating }
  const { mutate: updateUser, isPending: isUpdating } = useUpdateUser(userId);

  // TODO: Implement React Hook Form
  const form = useForm<UserFormValues>({});

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

  // TODO: Implement form submission
  // This function should:
  // 1. Validate the form data
  // 2. Call the updateUser mutation with the updated user data
  // 3. Handle success (redirect to user detail page)
  // 4. Handle errors (show error message)
  const onSubmit = (data: UserFormValues) => {
    // TODO: Implement form submission
    console.log("Form submission not implemented", data);
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href={`/users/${userId}`}>
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to User
            </Button>
          </Link>
          <h1 className="text-4xl font-bold tracking-tight">Edit User</h1>
          <p className="text-muted-foreground mt-2">Update user information</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Personal Information</span>
                </CardTitle>
                <CardDescription>Update the user&apos;s personal details and contact information.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter username" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter website URL" {...field} />
                      </FormControl>
                      <FormDescription>Optional website URL (e.g., https://example.com)</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Company Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building className="h-5 w-5" />
                  <span>Company Information</span>
                </CardTitle>
                <CardDescription>Update the user&apos;s company details and business information.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="company.name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter company name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company.catchPhrase"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Catch Phrase</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter company catch phrase" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company.bs"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Strategy</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter business strategy" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Address Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Address Information</span>
                </CardTitle>
                <CardDescription>Update the user&apos;s address and location details.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="address.street"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Street</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter street address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address.suite"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Suite</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter suite number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="address.city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter city" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address.zipcode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Zipcode</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter zipcode" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="address.geo.lat"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Latitude</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter latitude" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address.geo.lng"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Longitude</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter longitude" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button type="submit" className="flex items-center space-x-2" disabled={isUpdating}>
                {isUpdating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                <span>{isUpdating ? "Saving..." : "Save Changes"}</span>
              </Button>
              <Link href={`/users/${userId}`}>
                <Button type="button" variant="outline" disabled={isUpdating}>
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
