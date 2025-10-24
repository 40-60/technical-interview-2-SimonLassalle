import { BackgroundPattern } from "@/components/background-pattern";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <BackgroundPattern />

      <div className="relative z-10 text-center max-w-4xl">
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">Welcome to 40/60 technical interview</h1>
        <div className="mt-6 text-[17px] md:text-lg space-y-4">
          <p>
            Your goal is to implement CRUD operations (Create, Read, Update, Delete) for managing users. The base components and styling are already
            provided.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left">
            <h2 className="text-xl font-semibold mb-4 text-blue-900">Tasks to Complete:</h2>
            <ol className="list-decimal list-inside space-y-2 text-blue-800">
              <li>
                <strong>TanStack Query Implementation:</strong> Complete the hooks in{" "}
                <code className="bg-blue-100 px-1 rounded">src/hooks/use-users.ts</code>
              </li>
              <li>
                <strong>Data Fetching:</strong> Implement loading and error states in all pages
              </li>
              <li>
                <strong>Form Validation:</strong> Complete the Zod schema and React Hook Form setup in the edit page
              </li>
              <li>
                <strong>CRUD Operations:</strong> Implement Create, Read, Update, and Delete functionality
              </li>
              <li>
                <strong>User Experience:</strong> Add proper loading indicators and error handling
              </li>
            </ol>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-left">
            <h2 className="text-xl font-semibold mb-4 text-green-900">What's Already Done:</h2>
            <ul className="list-disc list-inside space-y-2 text-green-800">
              <li>UI components and styling with shadcn/ui</li>
              <li>Page routing and navigation</li>
              <li>Data table with sorting and actions</li>
              <li>Form structure and validation setup</li>
              <li>Delete confirmation dialog</li>
              <li>TanStack Query provider configuration</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-left">
            <h2 className="text-xl font-semibold mb-4 text-yellow-900">API Endpoints:</h2>
            <p className="text-yellow-800">
              Use the JSONPlaceholder API: <code className="bg-yellow-100 px-1 rounded">https://jsonplaceholder.typicode.com</code>
            </p>
            <ul className="list-disc list-inside space-y-1 text-yellow-800 mt-2">
              <li>
                <code>GET /users</code> - Fetch all users
              </li>
              <li>
                <code>GET /users/:id</code> - Fetch single user
              </li>
              <li>
                <code>PUT /users/:id</code> - Update user
              </li>
              <li>
                <code>DELETE /users/:id</code> - Delete user
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          <Button asChild size="lg" className="rounded-full text-base">
            <Link href="/users">
              Get Started <ArrowUpRight className="!h-5 !w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
