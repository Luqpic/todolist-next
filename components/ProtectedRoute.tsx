"use client";

import { useEffect, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function ProtectedRoute({
  children,
  blockGuest,
}: {
  children: ReactNode;
  blockGuest?: boolean;
}) {
  const { user } = useAuth();
  const router = useRouter();

  const redirectTo = !user ? "/login" : blockGuest && user.isGuest ? "/" : null;

  useEffect(() => {
    if (redirectTo) router.replace(redirectTo);
  }, [redirectTo, router]);

  return redirectTo ? null : <>{children}</>;
}
