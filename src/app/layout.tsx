import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jack — 3D Creator Portfolio',
  description: 'Portfolio of Jack, 3D Creator',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
