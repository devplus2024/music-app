import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "NoneTheLes WebApp",
  description: "NoneTheLes WebApp",
};
export default function NoneTheLesWebAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
