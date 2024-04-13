"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Import QueryClient and QueryClientProvider
import { CartProvider } from "@/contexts/CartContext";

const inter = Inter({ subsets: ["latin"] });

// Create a new QueryClient instance
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <html lang="pt">
          <body className={inter.className}>{children}</body>
        </html>
      </CartProvider>
    </QueryClientProvider>
  );
}

