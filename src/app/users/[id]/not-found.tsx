import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserX } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <UserX className="h-8 w-8 text-red-600" />
          </div>
          <CardTitle>User Not Found</CardTitle>
          <CardDescription>The user you&apos;re looking for doesn&apos;t exist or has been removed.</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Link href="/users">
            <Button>Back to Users</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
