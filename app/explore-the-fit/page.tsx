import { permanentRedirect } from "next/navigation";

export default function ExploreTheFitRedirect() {
  permanentRedirect("/get-started");
}
