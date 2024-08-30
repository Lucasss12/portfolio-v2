import Headers from "../components/headers/headers";
import RecentWork from "@/components/recentWork/recentWork";
import WorkHistory from "@/components/workHistory/workHistory";
import HowWeWork from "@/components/howWeWork/howWeWork";
import Me from "@/components/me/me";

export default function Home() {
  return (
    <div>
      <Headers />
      <RecentWork />
      <WorkHistory />
      <HowWeWork />
      <Me />
    </div>
  );
}
