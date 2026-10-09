"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function Home() {
  return (
    <ProtectedRoute>
      <h1>Hello</h1>
    </ProtectedRoute>
  );
}
