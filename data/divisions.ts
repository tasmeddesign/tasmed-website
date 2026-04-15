/* ─────────────────────────────────────────────────────────
   Tasmed — Division + Product Data
   Source reference: tasmedlab.com
───────────────────────────────────────────────────────── */

export interface Product {
  id: string;
  name: string;
  description: string;
  composition: string;
  category?: string;
}

export interface DivisionData {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  accentColor: string;
  products: Product[];
}

export const DIVISIONS_DATA: DivisionData[] = [
  {
    slug: "neurology",
    name: "Neurology",
    shortDescription:
      "Targeted neuro formulations supporting cognitive function and nervous system health.",
    fullDescription:
      "Our neurology portfolio addresses anxiety, depression, OCD, epilepsy, and neuropathic pain — formulated to the highest pharmaceutical standards to improve quality of life for patients across every age group.",
    accentColor: "#6366F1",
    products: [
      {
        id: "n1",
        name: "Clonazepam 0.5 mg",
        description: "Antiepileptic and anxiolytic for seizure management",
        composition: "Clonazepam IP 0.5 mg",
        category: "Anxiolytic",
      },
      {
        id: "n2",
        name: "Escitalopram 10 mg",
        description: "SSRI for depression and generalised anxiety disorder",
        composition: "Escitalopram Oxalate IP 10 mg",
        category: "Antidepressant",
      },
      {
        id: "n3",
        name: "Pregabalin 75 mg",
        description: "Neuropathic pain and partial-seizure adjunct therapy",
        composition: "Pregabalin IP 75 mg",
        category: "Neuropathic",
      },
      {
        id: "n4",
        name: "Sertraline 50 mg",
        description: "First-line treatment for OCD and panic disorders",
        composition: "Sertraline HCl IP 50 mg",
        category: "Antidepressant",
      },
      {
        id: "n5",
        name: "Alprazolam 0.25 mg",
        description: "Short-term relief of anxiety and panic attacks",
        composition: "Alprazolam IP 0.25 mg",
        category: "Anxiolytic",
      },
      {
        id: "n6",
        name: "Amitriptyline 10 mg",
        description: "Tricyclic antidepressant for chronic pain and depression",
        composition: "Amitriptyline HCl IP 10 mg",
        category: "Antidepressant",
      },
      {
        id: "n7",
        name: "Gabapentin 300 mg",
        description: "Adjunct therapy for partial seizures and neuropathic pain",
        composition: "Gabapentin IP 300 mg",
        category: "Neuropathic",
      },
      {
        id: "n8",
        name: "Duloxetine 30 mg",
        description: "SNRI for major depression and diabetic neuropathy",
        composition: "Duloxetine HCl IP 30 mg",
        category: "Antidepressant",
      },
    ],
  },

  {
    slug: "cardiology",
    name: "Cardiology",
    shortDescription:
      "Cardio-protective products developed to maintain a healthy heart and circulation.",
    fullDescription:
      "Our cardiology range addresses hypertension, dyslipidaemia, heart failure, and coronary artery disease with evidence-based therapeutics developed for long-term cardiac health management.",
    accentColor: "#EF4444",
    products: [
      {
        id: "c1",
        name: "Amlodipine 5 mg",
        description: "Calcium channel blocker for hypertension and angina",
        composition: "Amlodipine Besylate IP 5 mg",
        category: "Antihypertensive",
      },
      {
        id: "c2",
        name: "Atorvastatin 20 mg",
        description: "HMG-CoA reductase inhibitor for LDL reduction",
        composition: "Atorvastatin Calcium IP 20 mg",
        category: "Statin",
      },
      {
        id: "c3",
        name: "Metoprolol 25 mg",
        description: "Selective beta-blocker for heart rate control",
        composition: "Metoprolol Succinate IP 25 mg",
        category: "Beta-blocker",
      },
      {
        id: "c4",
        name: "Clopidogrel 75 mg",
        description: "Antiplatelet agent for coronary artery disease",
        composition: "Clopidogrel Bisulphate IP 75 mg",
        category: "Antiplatelet",
      },
      {
        id: "c5",
        name: "Ramipril 5 mg",
        description: "ACE inhibitor for hypertension and heart failure",
        composition: "Ramipril IP 5 mg",
        category: "ACE Inhibitor",
      },
      {
        id: "c6",
        name: "Telmisartan 40 mg",
        description: "ARB for hypertension and cardiovascular risk reduction",
        composition: "Telmisartan IP 40 mg",
        category: "Antihypertensive",
      },
      {
        id: "c7",
        name: "Rosuvastatin 10 mg",
        description: "Statin for dyslipidaemia and cardiovascular prevention",
        composition: "Rosuvastatin Calcium IP 10 mg",
        category: "Statin",
      },
      {
        id: "c8",
        name: "Aspirin 75 mg",
        description: "Low-dose antiplatelet for secondary CV prevention",
        composition: "Aspirin IP 75 mg",
        category: "Antiplatelet",
      },
    ],
  },

  {
    slug: "dermatology",
    name: "Dermatology",
    shortDescription:
      "Advanced skincare formulations addressing a broad spectrum of dermal conditions.",
    fullDescription:
      "From eczema and psoriasis to acne and fungal infections, our dermatology portfolio combines chemical and natural actives to deliver clinically effective, skin-safe formulations.",
    accentColor: "#F59E0B",
    products: [
      {
        id: "d1",
        name: "Mometasone 0.1% Cream",
        description: "Topical corticosteroid for eczema and psoriasis",
        composition: "Mometasone Furoate IP 0.1% w/w",
        category: "Corticosteroid",
      },
      {
        id: "d2",
        name: "Clindamycin 1% Gel",
        description: "Topical antibiotic for acne vulgaris treatment",
        composition: "Clindamycin Phosphate IP 1% w/w",
        category: "Antibiotic",
      },
      {
        id: "d3",
        name: "Ketoconazole 2% Shampoo",
        description: "Antifungal for seborrhoeic dermatitis and dandruff",
        composition: "Ketoconazole IP 2% w/v",
        category: "Antifungal",
      },
      {
        id: "d4",
        name: "Tacrolimus 0.03% Ointment",
        description: "Calcineurin inhibitor for atopic dermatitis",
        composition: "Tacrolimus IP 0.03% w/w",
        category: "Immunomodulator",
      },
      {
        id: "d5",
        name: "Tretinoin 0.025% Cream",
        description: "Retinoid for acne and photoaging treatment",
        composition: "Tretinoin IP 0.025% w/w",
        category: "Retinoid",
      },
      {
        id: "d6",
        name: "Luliconazole 1% Cream",
        description: "Broad-spectrum antifungal for tinea infections",
        composition: "Luliconazole 1% w/w",
        category: "Antifungal",
      },
      {
        id: "d7",
        name: "Calcipotriol 0.005% Ointment",
        description: "Vitamin D analogue for plaque psoriasis",
        composition: "Calcipotriol IP 0.005% w/w",
        category: "Antipsoriatic",
      },
      {
        id: "d8",
        name: "Mupirocin 2% Ointment",
        description: "Topical antibiotic for impetigo and skin infections",
        composition: "Mupirocin IP 2% w/w",
        category: "Antibiotic",
      },
    ],
  },

  {
    slug: "gastroenterology",
    name: "Gastroenterology",
    shortDescription:
      "Sustained medicines for treatment of renal disorders, hyperacidity and oesophagitis reflux.",
    fullDescription:
      "Our gastroenterology range provides comprehensive coverage of upper and lower GI conditions including acid reflux, peptic ulcers, IBD, and IBS with precision-targeted formulations.",
    accentColor: "#10B981",
    products: [
      {
        id: "g1",
        name: "Pantoprazole 40 mg",
        description: "Proton pump inhibitor for GERD and peptic ulcer",
        composition: "Pantoprazole Sodium IP 40 mg",
        category: "PPI",
      },
      {
        id: "g2",
        name: "Rabeprazole 20 mg",
        description: "PPI for erosive oesophagitis and H. pylori eradication",
        composition: "Rabeprazole Sodium IP 20 mg",
        category: "PPI",
      },
      {
        id: "g3",
        name: "Domperidone 10 mg",
        description: "Prokinetic for nausea, vomiting and gastroparesis",
        composition: "Domperidone IP 10 mg",
        category: "Prokinetic",
      },
      {
        id: "g4",
        name: "Ondansetron 4 mg",
        description: "5-HT3 antagonist for chemotherapy-induced nausea",
        composition: "Ondansetron HCl IP 4 mg",
        category: "Antiemetic",
      },
      {
        id: "g5",
        name: "Mesalazine 400 mg",
        description: "Aminosalicylate for ulcerative colitis maintenance",
        composition: "Mesalazine IP 400 mg",
        category: "IBD",
      },
      {
        id: "g6",
        name: "Rifaximin 400 mg",
        description: "Non-absorbable antibiotic for traveller's diarrhoea",
        composition: "Rifaximin IP 400 mg",
        category: "Antibiotic",
      },
      {
        id: "g7",
        name: "Lactulose 10 g/15 ml",
        description: "Osmotic laxative for constipation and hepatic encephalopathy",
        composition: "Lactulose IP 10 g/15 ml",
        category: "Laxative",
      },
      {
        id: "g8",
        name: "Itopride 50 mg",
        description: "Prokinetic for functional dyspepsia and bloating",
        composition: "Itopride HCl 50 mg",
        category: "Prokinetic",
      },
    ],
  },

  {
    slug: "anti-diabetic",
    name: "Anti Diabetic",
    shortDescription:
      "Medicines to stabilize and control blood glucose levels effectively.",
    fullDescription:
      "Our anti-diabetic portfolio spans oral hypoglycaemics and insulin sensitisers across multiple mechanisms of action, supporting clinicians in achieving optimal glycaemic control.",
    accentColor: "#8B5CF6",
    products: [
      {
        id: "ad1",
        name: "Metformin 500 mg",
        description: "First-line biguanide for type 2 diabetes management",
        composition: "Metformin HCl IP 500 mg",
        category: "Biguanide",
      },
      {
        id: "ad2",
        name: "Glimepiride 1 mg",
        description: "Sulfonylurea for improving insulin secretion",
        composition: "Glimepiride IP 1 mg",
        category: "Sulfonylurea",
      },
      {
        id: "ad3",
        name: "Sitagliptin 100 mg",
        description: "DPP-4 inhibitor for blood glucose control",
        composition: "Sitagliptin Phosphate 100 mg",
        category: "DPP-4 Inhibitor",
      },
      {
        id: "ad4",
        name: "Voglibose 0.3 mg",
        description: "Alpha-glucosidase inhibitor for post-meal glucose",
        composition: "Voglibose IP 0.3 mg",
        category: "Alpha-glucosidase",
      },
      {
        id: "ad5",
        name: "Dapagliflozin 10 mg",
        description: "SGLT2 inhibitor for T2DM and heart failure",
        composition: "Dapagliflozin Propanediol 10 mg",
        category: "SGLT2 Inhibitor",
      },
      {
        id: "ad6",
        name: "Pioglitazone 15 mg",
        description: "Thiazolidinedione for insulin resistance",
        composition: "Pioglitazone HCl IP 15 mg",
        category: "TZD",
      },
      {
        id: "ad7",
        name: "Teneligliptin 20 mg",
        description: "DPP-4 inhibitor for type 2 diabetes monotherapy",
        composition: "Teneligliptin Hydrobromide 20 mg",
        category: "DPP-4 Inhibitor",
      },
      {
        id: "ad8",
        name: "Glibenclamide 5 mg",
        description: "Long-acting sulfonylurea for blood sugar control",
        composition: "Glibenclamide IP 5 mg",
        category: "Sulfonylurea",
      },
    ],
  },

  {
    slug: "orthopaedic",
    name: "Orthopaedic",
    shortDescription: "A dedicated unit for bone care and musculoskeletal health.",
    fullDescription:
      "Our orthopaedic range provides pain relief, bone strengthening, and anti-inflammatory formulations for arthritis, osteoporosis, sports injuries, and post-operative recovery.",
    accentColor: "#0EA5E9",
    products: [
      {
        id: "o1",
        name: "Diclofenac 50 mg",
        description: "NSAID for acute and chronic musculoskeletal pain",
        composition: "Diclofenac Sodium IP 50 mg",
        category: "NSAID",
      },
      {
        id: "o2",
        name: "Etoricoxib 60 mg",
        description: "COX-2 inhibitor for osteoarthritis and gout",
        composition: "Etoricoxib IP 60 mg",
        category: "COX-2 Inhibitor",
      },
      {
        id: "o3",
        name: "Calcium + Vit D3 Tablet",
        description: "Bone mineral supplement for osteoporosis prevention",
        composition: "Calcium Carbonate 500 mg + Vitamin D3 250 IU",
        category: "Supplement",
      },
      {
        id: "o4",
        name: "Teriparatide 20 mcg",
        description: "Anabolic agent for osteoporosis treatment",
        composition: "Teriparatide 20 mcg/dose",
        category: "Anabolic",
      },
      {
        id: "o5",
        name: "Methylcobalamin 500 mcg",
        description: "Active B12 for nerve regeneration and bone health",
        composition: "Methylcobalamin IP 500 mcg",
        category: "Vitamin",
      },
      {
        id: "o6",
        name: "Thiocolchicoside 4 mg",
        description: "Muscle relaxant for acute back pain and spasm",
        composition: "Thiocolchicoside IP 4 mg",
        category: "Muscle Relaxant",
      },
      {
        id: "o7",
        name: "Aceclofenac 100 mg",
        description: "Phenylacetic acid NSAID with GI tolerability",
        composition: "Aceclofenac IP 100 mg",
        category: "NSAID",
      },
      {
        id: "o8",
        name: "Glucosamine 750 mg",
        description: "Joint health supplement for cartilage support",
        composition: "Glucosamine Sulphate 750 mg",
        category: "Supplement",
      },
    ],
  },

  {
    slug: "gynaecology",
    name: "Gynaecology",
    shortDescription:
      "Medical care for women during pregnancy, childbirth and postpartum days.",
    fullDescription:
      "Our gynaecology division offers complete women's health solutions — from prenatal supplementation and hormonal therapy to lactation support and menopausal management.",
    accentColor: "#EC4899",
    products: [
      {
        id: "gy1",
        name: "Folic Acid 5 mg",
        description: "Essential supplement for neural tube defect prevention",
        composition: "Folic Acid IP 5 mg",
        category: "Supplement",
      },
      {
        id: "gy2",
        name: "Progesterone 200 mg",
        description: "Natural progesterone for luteal support and threatened abortion",
        composition: "Micronised Progesterone IP 200 mg",
        category: "Hormone",
      },
      {
        id: "gy3",
        name: "Iron + Folic Syrup",
        description: "Combined haematinic for iron-deficiency anaemia in pregnancy",
        composition: "Ferrous Fumarate 150 mg + Folic Acid 1.5 mg/5 ml",
        category: "Haematinic",
      },
      {
        id: "gy4",
        name: "Clomiphene 50 mg",
        description: "Ovulation induction for anovulatory infertility",
        composition: "Clomiphene Citrate IP 50 mg",
        category: "Fertility",
      },
      {
        id: "gy5",
        name: "Dydrogesterone 10 mg",
        description: "Progestogen for threatened and recurrent miscarriage",
        composition: "Dydrogesterone IP 10 mg",
        category: "Hormone",
      },
      {
        id: "gy6",
        name: "Calcium + D3 + K2",
        description: "Bone health supplement for postmenopausal women",
        composition: "Calcium 500 mg + Vit D3 1000 IU + Vit K2 45 mcg",
        category: "Supplement",
      },
      {
        id: "gy7",
        name: "Mefenamic Acid 500 mg",
        description: "NSAID for dysmenorrhoea and menorrhagia",
        composition: "Mefenamic Acid IP 500 mg",
        category: "NSAID",
      },
      {
        id: "gy8",
        name: "Tranexamic Acid 500 mg",
        description: "Antifibrinolytic for heavy menstrual bleeding",
        composition: "Tranexamic Acid IP 500 mg",
        category: "Antifibrinolytic",
      },
    ],
  },

  {
    slug: "urology",
    name: "Urology",
    shortDescription: "Formulations exceeding industry benchmarks for urological health.",
    fullDescription:
      "Our urology portfolio covers urinary tract infections, BPH, overactive bladder, and erectile dysfunction — precision-formulated for efficacy and tolerability.",
    accentColor: "#14B8A6",
    products: [
      {
        id: "u1",
        name: "Tamsulosin 0.4 mg",
        description: "Alpha-blocker for benign prostatic hyperplasia",
        composition: "Tamsulosin HCl IP 0.4 mg",
        category: "Alpha-blocker",
      },
      {
        id: "u2",
        name: "Solifenacin 5 mg",
        description: "Muscarinic antagonist for overactive bladder",
        composition: "Solifenacin Succinate 5 mg",
        category: "Anticholinergic",
      },
      {
        id: "u3",
        name: "Nitrofurantoin 100 mg",
        description: "Urinary antibiotic for uncomplicated UTI",
        composition: "Nitrofurantoin IP 100 mg",
        category: "Antibiotic",
      },
      {
        id: "u4",
        name: "Finasteride 5 mg",
        description: "5-alpha reductase inhibitor for BPH management",
        composition: "Finasteride IP 5 mg",
        category: "5-AR Inhibitor",
      },
      {
        id: "u5",
        name: "Ciprofloxacin 500 mg",
        description: "Broad-spectrum fluoroquinolone for UTI and prostatitis",
        composition: "Ciprofloxacin HCl IP 500 mg",
        category: "Antibiotic",
      },
      {
        id: "u6",
        name: "Tadalafil 10 mg",
        description: "PDE5 inhibitor for erectile dysfunction and BPH",
        composition: "Tadalafil IP 10 mg",
        category: "PDE5 Inhibitor",
      },
      {
        id: "u7",
        name: "Phenazopyridine 100 mg",
        description: "Urinary analgesic for dysuria relief",
        composition: "Phenazopyridine HCl 100 mg",
        category: "Analgesic",
      },
      {
        id: "u8",
        name: "Mirabegron 25 mg",
        description: "Beta-3 agonist for overactive bladder symptoms",
        composition: "Mirabegron 25 mg",
        category: "Beta-3 Agonist",
      },
    ],
  },

  {
    slug: "pediatrics",
    name: "Pediatrics",
    shortDescription:
      "Gentle, precision-dosed therapeutics designed for the unique needs of children.",
    fullDescription:
      "Every formulation in our pediatrics range is developed with child-safety as the priority — using age-appropriate doses, pleasant palatability, and gentle actives.",
    accentColor: "#F97316",
    products: [
      {
        id: "p1",
        name: "Amoxicillin 125 mg/5 ml",
        description: "Broad-spectrum antibiotic suspension for infections",
        composition: "Amoxicillin Trihydrate IP 125 mg/5 ml",
        category: "Antibiotic",
      },
      {
        id: "p2",
        name: "Paracetamol 120 mg/5 ml",
        description: "Antipyretic and analgesic drops for fever relief",
        composition: "Paracetamol IP 120 mg/5 ml",
        category: "Antipyretic",
      },
      {
        id: "p3",
        name: "Zinc Sulphate 10 mg/5 ml",
        description: "Micronutrient syrup for diarrhoea management",
        composition: "Zinc Sulphate IP 10 mg/5 ml",
        category: "Supplement",
      },
      {
        id: "p4",
        name: "Montelukast 4 mg Granules",
        description: "Leukotriene receptor antagonist for paediatric asthma",
        composition: "Montelukast Sodium IP 4 mg",
        category: "Antiasthmatic",
      },
      {
        id: "p5",
        name: "Cetirizine 5 mg/5 ml",
        description: "Non-drowsy antihistamine syrup for allergic rhinitis",
        composition: "Cetirizine HCl IP 5 mg/5 ml",
        category: "Antihistamine",
      },
      {
        id: "p6",
        name: "Azithromycin 200 mg/5 ml",
        description: "Macrolide antibiotic for respiratory tract infections",
        composition: "Azithromycin IP 200 mg/5 ml",
        category: "Antibiotic",
      },
      {
        id: "p7",
        name: "ORS + Zinc Sachet",
        description: "WHO-approved oral rehydration with zinc for diarrhoea",
        composition: "ORS IP + Zinc Sulphate 20 mg",
        category: "Rehydration",
      },
      {
        id: "p8",
        name: "Vitamin D3 400 IU Drops",
        description: "Cholecalciferol drops for rickets prevention",
        composition: "Cholecalciferol IP 400 IU/ml",
        category: "Vitamin",
      },
    ],
  },

  {
    slug: "nutraceuticals",
    name: "Nutraceuticals",
    shortDescription:
      "Science-backed nutritional supplements to support everyday wellness and vitality.",
    fullDescription:
      "Our nutraceuticals range bridges the gap between nutrition and medicine — delivering clinically validated micro and macronutrients for preventive health and performance.",
    accentColor: "#22C55E",
    products: [
      {
        id: "nt1",
        name: "OmegaGuard Softgels",
        description: "Ultra-pure Omega-3 concentrate for cardiovascular health",
        composition: "Fish Oil 1000 mg (EPA 180 mg + DHA 120 mg)",
        category: "Omega-3",
      },
      {
        id: "nt2",
        name: "CalciMax D3 Tablets",
        description: "Calcium + Vitamin D3 for bone density maintenance",
        composition: "Calcium Carbonate 500 mg + Vitamin D3 250 IU",
        category: "Bone Health",
      },
      {
        id: "nt3",
        name: "MultiVit Forte",
        description: "Complete multivitamin complex for daily micronutrient needs",
        composition: "Vitamins A, B-complex, C, D3, E + Minerals",
        category: "Multivitamin",
      },
      {
        id: "nt4",
        name: "Iron-Folic Syrup",
        description: "Iron + folic acid supplement for anaemia management",
        composition: "Ferrous Fumarate 150 mg + Folic Acid 1.5 mg/5 ml",
        category: "Haematinic",
      },
      {
        id: "nt5",
        name: "Biotin 10 mg Tablets",
        description: "Vitamin B7 for hair, skin, and nail health",
        composition: "D-Biotin IP 10 mg",
        category: "Hair & Skin",
      },
      {
        id: "nt6",
        name: "Lycopene + Zinc Capsules",
        description: "Antioxidant combination for cellular protection",
        composition: "Lycopene 5000 mcg + Zinc 12 mg + Selenium 70 mcg",
        category: "Antioxidant",
      },
      {
        id: "nt7",
        name: "Magnesium Glycinate 300 mg",
        description: "Highly bioavailable magnesium for sleep and muscle health",
        composition: "Magnesium Glycinate 300 mg elemental",
        category: "Mineral",
      },
      {
        id: "nt8",
        name: "Probiotic 10 Billion CFU",
        description: "Multi-strain probiotic for gut microbiome support",
        composition: "Lactobacillus + Bifidobacterium blend 10B CFU",
        category: "Probiotic",
      },
    ],
  },

  {
    slug: "ophthalmology",
    name: "Ophthalmology",
    shortDescription:
      "Ophthalmic solutions engineered for superior eye health and visual comfort.",
    fullDescription:
      "Our ophthalmic portfolio covers infections, dry eye, glaucoma, and inflammation — formulated as sterile solutions, suspensions, and ointments for optimal ocular bioavailability.",
    accentColor: "#3B82F6",
    products: [
      {
        id: "op1",
        name: "Moxifloxacin 0.5% Eye Drops",
        description: "Broad-spectrum antibiotic for bacterial conjunctivitis",
        composition: "Moxifloxacin HCl 0.5% w/v",
        category: "Antibiotic",
      },
      {
        id: "op2",
        name: "Carboxymethylcellulose 0.5%",
        description: "Lubricant eye drops for dry eye syndrome relief",
        composition: "Carboxymethylcellulose Sodium 0.5% w/v",
        category: "Lubricant",
      },
      {
        id: "op3",
        name: "Timolol 0.5% Eye Drops",
        description: "Beta-blocker for intraocular pressure reduction",
        composition: "Timolol Maleate IP 0.5% w/v",
        category: "Glaucoma",
      },
      {
        id: "op4",
        name: "Prednisolone Acetate 1%",
        description: "Corticosteroid eye drops for ocular inflammation",
        composition: "Prednisolone Acetate IP 1% w/v",
        category: "Corticosteroid",
      },
      {
        id: "op5",
        name: "Brimonidine 0.2% Eye Drops",
        description: "Alpha-2 agonist for open-angle glaucoma",
        composition: "Brimonidine Tartrate 0.2% w/v",
        category: "Glaucoma",
      },
      {
        id: "op6",
        name: "Tobramycin 0.3% Eye Drops",
        description: "Aminoglycoside antibiotic for severe eye infections",
        composition: "Tobramycin IP 0.3% w/v",
        category: "Antibiotic",
      },
      {
        id: "op7",
        name: "Cyclopentolate 1% Eye Drops",
        description: "Mydriatic for refraction examination and uveitis",
        composition: "Cyclopentolate HCl IP 1% w/v",
        category: "Mydriatic",
      },
      {
        id: "op8",
        name: "Natamycin 5% Eye Drops",
        description: "Antifungal for fungal keratitis treatment",
        composition: "Natamycin IP 5% w/v",
        category: "Antifungal",
      },
    ],
  },
];

/* Helper — find a division by slug */
export function getDivision(slug: string): DivisionData | undefined {
  return DIVISIONS_DATA.find((d) => d.slug === slug);
}
