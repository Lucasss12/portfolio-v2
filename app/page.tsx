import Headers from "../components/headers/headers";
import RecentWork from "@/components/recentWork/recentWork";

export default function Home() {
  return (
    <div className="sm:mt-10 mt-5">
      <Headers />
      <RecentWork />
    </div>
  );
}
