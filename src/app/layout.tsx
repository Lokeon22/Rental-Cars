import "./globals.css";

import { AuthProvider } from "@/context/useAuth";

export const metadata = {
  title: "Rental Cars",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
