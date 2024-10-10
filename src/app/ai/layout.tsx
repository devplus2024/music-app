import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI | MusMoitoin",
  description: "NoneTheLes - AI",
};
export default function AiLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
