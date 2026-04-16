import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import { getDivision, DIVISIONS_DATA } from "../../../data/divisions";
import DivisionProductsPage from "./DivisionProductsPage";

/* Pre-generate all division routes at build time */
export function generateStaticParams() {
  return DIVISIONS_DATA.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const division = getDivision(params.slug);
  if (!division) return {};
  return {
    title: `${division.name} | Tasmed Divisions`,
    description: division.shortDescription,
  };
}

export default function DivisionPage({
  params,
}: {
  params: { slug: string };
}) {
  const division = getDivision(params.slug);
  if (!division) notFound();

  return (
    <>
      <Navbar />
      <DivisionProductsPage division={division} />
    </>
  );
}
