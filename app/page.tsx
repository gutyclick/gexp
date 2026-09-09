import { Cursor } from "@/components/Cursor";
import { Header } from "@/components/Header";
import { HomeExperience } from "@/components/HomeExperience";
import { Loader } from "@/components/Loader";

export default function Home() {
  return <><Loader /><Header /><Cursor /><HomeExperience /></>;
}
