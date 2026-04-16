import {
  Brain,
  Activity,
  HeartPulse,
  Droplets,
  Dumbbell,
  Baby,
  FlaskConical,
  Leaf,
  Eye,
  Stethoscope,
  Pill,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Division {
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
}

/**
 * Single source of truth for UI metadata (name, slug, icon, description).
 * Full product data lives in /data/divisions.ts (root).
 *
 * To add a new division:
 *   1. Add an entry here (for navbar + grid UI).
 *   2. Add matching data to /data/divisions.ts (for product pages).
 *   Everything else updates automatically.
 */
export const divisions: Division[] = [
  {
    name: "Neurology",
    slug: "neurology",
    icon: Brain,
    description:
      "Treating ailments related to anxiety, depression and OCD with targeted neuro formulations.",
  },
  {
    name: "Cardiology",
    slug: "cardiology",
    icon: HeartPulse,
    description:
      "Medicines to cure hypertension, manage heart rhythms, and blood pressure.",
  },
  {
    name: "Gastroenterology",
    slug: "gastroenterology",
    icon: Activity,
    description:
      "Sustained medicines for treatment of renal disorders, hyperacidity and oesophagitis reflux.",
  },
  {
    name: "Anti Diabetic",
    slug: "anti-diabetic",
    icon: Droplets,
    description:
      "Medicines to stabilize and control blood glucose levels effectively.",
  },
  {
    name: "Orthopaedic",
    slug: "orthopaedic",
    icon: Dumbbell,
    description:
      "A dedicated unit for bone and joint care with specialized formulations.",
  },
  {
    name: "Gynaecology",
    slug: "gynaecology",
    icon: Baby,
    description:
      "Medical care for women during pregnancy, childbirth and postpartum days.",
  },
  {
    name: "Urology",
    slug: "urology",
    icon: FlaskConical,
    description:
      "Precision urology formulations exceeding industry quality benchmarks.",
  },
  {
    name: "Dermatology",
    slug: "dermatology",
    icon: Leaf,
    description:
      "A mix of chemical and natural formulations for healthier, clearer skin.",
  },
  {
    name: "Pediatrics",
    slug: "pediatrics",
    icon: Pill,
    description:
      "Gentle, precision-dosed therapeutics designed for the unique needs of children.",
  },
  {
    name: "Nutraceuticals",
    slug: "nutraceuticals",
    icon: Stethoscope,
    description:
      "Science-backed nutritional supplements to support everyday wellness and vitality.",
  },
  {
    name: "Ophthalmology",
    slug: "ophthalmology",
    icon: Eye,
    description:
      "Ophthalmic solutions engineered for superior eye health and visual comfort.",
  },
];
