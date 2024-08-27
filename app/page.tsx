import Headers from "../components/headers/headers";
import RecentWork from "@/components/recentWork/recentWork";
import WorkHistory from "@/components/workHistory/workHistory";

export default function Home() {
  return (
    <div>
      <Headers />
      <RecentWork />
      <WorkHistory />
    </div>
  );
}
