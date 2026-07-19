import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DevNoisy — 3D Creator Portfolio',
  description: 'Portfolio of SOULEYMAN Moustapha (DevNoisy), 3D Creator',
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
