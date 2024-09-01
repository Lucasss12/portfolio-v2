import Headers from "../components/headers/headers";
import RecentWork from "@/components/recentWork/recentWork";
import WorkHistory from "@/components/workHistory/workHistory";
import HowWeWork from "@/components/howWeWork/howWeWork";
import Me from "@/components/me/me";
import Services from "@/components/services/services";
import Reviews from "@/components/reviews/reviews";

export default function Home() {
  return (
    <div>
      <Headers />
      <RecentWork />
      <WorkHistory />
      <HowWeWork />
      <Me />
      <Services />
      <Reviews />
    </div>
  );
}
