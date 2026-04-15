import Navbar from "../../components/Navbar";
import { getDivision } from "../../../data/divisions";
import DivisionProductsPage from "../[slug]/DivisionProductsPage";

/* Static route — takes priority over /divisions/[slug] for /divisions/neurology */
export default function NeurologyPage() {
  const division = getDivision("neurology")!;
  return (
    <>
      <Navbar />
      <DivisionProductsPage division={division} />
    </>
  );
}
