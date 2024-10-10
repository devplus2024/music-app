import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Browse | NoneTheLes",
  description: "NoneTheLes - Browse",
};

export default function BrowseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
