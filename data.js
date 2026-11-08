/*
  MLT 107 Bacteriology Explorer content model
  Add units, lessons, objective records, and content nodes here. The interface in app.js
  renders this data; content additions should not require changes to the layout.

  Content wording is based only on the user's Unit 6 PDF. Printed page numbers are stored
  with each section. No outside microbiology facts are intentionally added.
*/
window.COURSE_DATA = {
  title: "MLT 107 Microbiology",
  source: "Unit 6 Bacteriology Part 3 (25 Aug 23)",
  units: [{
    id: "unit-6", code: "UNIT 6", title: "Bacteriology Part 3", sourceFile: "unit-6-bacteriology-part-3.pdf", printedPageStart: 384,
    description: "Cultivation and identification of Enterobacteriaceae, other infectious gram-negative bacilli, and non-fermenting and miscellaneous gram-negative bacilli.",
    lessons: [
      {
        id: "lesson-6-1", code: "6.1", title: "Enterobacteriaceae", objectiveCount: 5,
        description: "Differentiate species of Enterobacteriaceae.", pages: "385–420",
        topics: [
          { id: "obj-6-1-1", code: "6.1-A", title: "Discuss the general characteristics of the family Enterobacteriaceae.", contentIds: ["ent-family"] },
          { id: "obj-6-1-2", code: "6.1-B", title: "Describe opportunistic members of the family Enterobacteriaceae and associated infections.", contentIds: ["escherichia", "ecoli", "klebsielleae", "proteeae", "edwardsiella", "citrobacter"] },
          { id: "obj-6-1-3", code: "6.1-C", title: "Discuss virulence factors of Escherichia coli strains.", contentIds: ["ecoli"] },
          { id: "obj-6-1-4", code: "6.1-D", title: "Describe primary intestinal pathogens of the family Enterobacteriaceae to include classification, species and sub species, virulence factors, antigenic structures, clinical infections, and biochemical testing.", contentIds: ["salmonella", "shigella", "yersinia"] },
          { id: "obj-6-1-5", code: "6.1-E", title: "Discuss laboratory diagnosis of the family Enterobacteriaceae to include specimen processing, isolation and identification, pathogen screening, serologic grouping, and schema.", contentIds: ["ent-lab"] }
        ],
        branches: [
          { id: "ent-family", type: "family", title: "Enterobacteriaceae", label: "Family-level characteristics", pages: "386–387", objectives: ["obj-6-1-1"], sections: [
            { title: "General characteristics", page: "386", bullets: [
              "Enterics",
              "All ferment glucose.",
              "All reduce nitrate to nitrites.",
              "All are oxidase negative, except Plesiomonas spp.",
              "All motile at body temperature except Klebsiella spp., Shigella spp., and Yersinia spp.",
              "Gram-negative coccobacilli or straight rods.",
              "Facultatively anaerobic.",
              "Macroscopic morphology: large, moist, gray colonies; some are mucoid (Klebsiella spp.)."
            ]},
            { title: "Growth on media", page: "386", bullets: [
              "MacConkey (MAC) agar: selective and differential media. Contains bile salts and crystal violet that inhibit gram-positive bacteria. Lactose fermentation is differential.",
              "Eosin-methylene blue (EMB) agar: selective and differential. Methylene blue inhibits gram-positive bacteria. Lactose and sucrose fermentation are differential.",
              "Hektoen enteric (HE) agar: selective and differential. Bile salts inhibit gram-positive and some gram-negative bacteria. Lactose and sucrose fermentation are differential.",
              "On HE agar, most non-pathogens ferment lactose and sucrose, showing an orange color (low pH). Pathogens (Salmonella and Shigella) are green to blue-green; H2S gas creates a black spot.",
              "Xylose lysine deoxycholate (XLD) agar: selective (less so than MAC and HE) and differential. Yellow colonies: fermenters or those not producing lysine decarboxylase, including Escherichia coli and Citrobacter.",
              "On XLD, Shigella produces colorless or red colonies. Salmonella produces red colonies with black centers: colonies are initially yellow, then revert to red when lysine is decarboxylated, causing alkaline pH."
            ]},
            { title: "Virulence and antigenic factors", page: "387", bullets: [
              "Adherence: prevent being removed from tissue.",
              "Toxins: food poisoning.",
              "Invasive enzymes: spreading factors.",
              "Antibiotic resistance, including extended spectrum β-lactamases (ESBL).",
              "O antigen (somatic antigen): heat-stable antigen located in the cell wall (LPS).",
              "H antigen: flagellar antigen; heat stable. (Wording retained as presented in the course PDF.)",
              "K antigen: capsular antigen; heat labile. Examples: K1 antigen of E. coli and Vi antigen of Salmonella Typhi."
            ]},
            { title: "Biochemical reactions", page: "387", bullets: [
              "Certain key tests such as indole, methyl red, Voges-Proskauer, and citrate, known by the acronym IMViC, were routinely performed to group the most commonly isolated pathogens.",
              "Each IMViC reaction will be discussed for most isolates."
            ]},
            { title: "Clinical significance", page: "387", bullets: [
              "Two major types: opportunistic pathogens and primary pathogens.",
              "Opportunistic pathogens: normal flora; infections in other “non-normal” sites.",
              "Primary pathogens: generally, from ingesting contaminated food and water."
            ]}
          ]},
          { id: "escherichia", type: "genus", title: "Escherichia", parentLabel: "Family: Enterobacteriaceae", pages: "388–392", objectives: ["obj-6-1-2"], sections: [
            { title: "Other Escherichia species", page: "392", bullets: [
              "E. hermannii: yellow-pigmented colonies; isolated from cerebrospinal fluid (CSF), wounds, and blood. Clinical significance is still not fully established.",
              "E. vulneris: also produces yellow colonies; isolated from humans with infected wounds.",
              "E. albertii: the newest species added to this genus; associated with diarrheal disease in children."
            ]}
          ], children: [
          { id: "ecoli", type: "species", title: "Escherichia coli", scientific: "Escherichia coli", parentLabel: "Genus: Escherichia · Family: Enterobacteriaceae", pages: "388–392", objectives: ["obj-6-1-2", "obj-6-1-3"], sections: [
            { title: "General characteristics", page: "388", bullets: [
              "Dry pink colony with a halo on MAC plates.",
              "Green metallic sheen on eosin methylene blue (EMB).",
              "β-hemolysis on blood agar plate (BAP).",
              "Motile.",
              "Sex pili, fimbriae.",
              "Possess O, H, K antigens."
            ]},
            { title: "Biochemical reactions", page: "388", bullets: [
              "IMViC reaction: + + − −.",
              "Indole: positive.",
              "Methyl red (MR): positive.",
              "Voges-Proskauer (VP): negative.",
              "Citrate: negative.",
              "Fermentation of glucose, lactose, trehalose, and xylose.",
              "Does not produce H2S, DNase, urease, or PAD."
            ]},
            { title: "Uropathogenic E. coli", page: "389", bullets: [
              "Most common cause of UTIs in humans.",
              "Pili allows attachment to epithelium.",
              "Cytolysins can kill immune cells and inhibit phagocytosis.",
              "Aerobactin allows bacteria to chelate iron."
            ]},
            { title: "Gastrointestinal pathogens", page: "389", bullets: [
              "Five major categories: enterotoxigenic (ETEC), enteropathogenic (EPEC), enteroinvasive (EIEC), enterohemorrhagic (EHEC), and enteroadherent.",
              "Enteroadherent includes diffusely adherent (DAEC) and enteroaggregative (EAEC)."
            ]},
            { title: "ETEC", page: "389–390", bullets: [
              "Causes diarrhea in infants and adults, especially in tropical and subtropical climates.",
              "High infective dose (10^6 to 10^10 organisms) is required to initiate disease in an immunocompetent host.",
              "Infection is spread commonly via consumption of contaminated food or water; illness lasts 1 to 5 days.",
              "Heat-labile toxin (LT): A and B subunits; B binds GM1 ganglioside receptor, and A acts on adenyl cyclase, converting ATP to cAMP, which leads to hypersecretion of fluids.",
              "Heat-stable toxin (ST) stimulates guanylate cyclase, increasing cGMP, leading to hypersecretion.",
              "Protective mechanisms such as stomach acidity have been described as inhibiting colonization and initiation of disease.",
              "Usually a mild, self-limiting disease. Symptoms: watery diarrhea, abdominal cramps, and sometimes nausea, usually with no vomiting or fever."
            ]},
            { title: "EPEC", page: "390", bullets: [
              "Causes infantile diarrhea in children less than 1 year.",
              "Outbreaks have occurred in nurseries and daycares.",
              "Symptoms: low-grade fever, malaise, vomiting, diarrhea, and large amounts of mucus without apparent blood.",
              "Serologic typing to identify EPEC."
            ]},
            { title: "EIEC", page: "391", bullets: [
              "Affects both adults and children alike; U.S. and worldwide infections are rare.",
              "Direct transmission of EIEC from person to person via the fecal-oral route has been reported.",
              "Strains produce dysentery with direct penetration, invasion, and destruction of intestinal mucosa.",
              "Symptoms: fever, severe abdominal cramps, malaise, and watery diarrhea."
            ]},
            { title: "EHEC (E. coli O157:H7)", page: "391", bullets: [
              "The EHEC strain serotype O157:H7 causes hemorrhagic diarrhea and colitis.",
              "Watery diarrhea progresses to bloody diarrhea without pus; it can be fatal in young children and the elderly.",
              "Also causes hemolytic-uremic syndrome (HUS).",
              "Transmitted by undercooked meats, unpasteurized milk, apple cider, bean sprouts, and spinach.",
              "Symptoms: bloody diarrhea with abdominal cramps and low-grade fever or an absence of fever.",
              "The stool contains no leukocytes, which distinguishes it from dysentery caused by Shigella spp. or EIEC infections.",
              "Verotoxin I (phage mediated) damages Vero cells (African green monkey kidney cells); it is identical to Shiga toxin (Stx) produced by Shigella dysenteriae type I and is neutralized by Shiga toxin antibodies.",
              "Verotoxin II is not neutralized by Shiga toxin antibodies; it is biologically similar to, but immunologically different from, Stx and Verotoxin I."
            ]},
            { title: "Laboratory diagnosis of E. coli O157:H7", page: "391", bullets: [
              "Primary screening on a stool culture: MacConkey agar with sorbitol (SMAC).",
              "E. coli O157:H7 does not ferment sorbitol in 48 hours, a characteristic that differentiates it from most other E. coli.",
              "E. coli O157:H7 appears colorless on SMAC agar, whereas most other strains produce pink colonies for sorbitol fermentation.",
              "Assay testing: 4-methylumbelliferyl-β-D-glucuronide (MUG) assay; ELISA or latex agglutination."
            ]},
            { title: "Enteroadherent E. coli", page: "392", bullets: [
              "DAEC: associated with UTIs and diarrheal disease. Uropathogenic DAEC strains are closely associated with cystitis in children and acute pyelonephritis in pregnant women.",
              "EAEC: occurs mostly in infants, children, and HIV patients; causes diarrhea by adhering to the surface of the intestinal mucosa.",
              "EAEC symptoms: watery diarrhea, vomiting, dehydration, and occasionally abdominal pain. Symptoms typically persist for at least 2 or more weeks."
            ]},
            { title: "Extraintestinal infections", page: "392", bullets: [
              "Septicemia and meningitis are most common in neonates and very young children.",
              "Infection may be gained just before or during delivery, and when infections involve the amniotic fluid.",
              "Associated with the capsule antigen K1.",
              "E. coli remains a clinically significant isolate in blood cultures from adults."
            ]},
          ]},
          { id: "e-hermannii", type: "species", title: "Escherichia hermannii", scientific: "Escherichia hermannii", pages: "392", objectives: ["obj-6-1-2"], sections: [
            { title: "Characteristics and clinical significance", page: "392", bullets: ["Yellow-pigmented colonies. Isolated from cerebrospinal fluid (CSF), wounds, and blood. Clinical significance is still not fully established."] }
          ]},
          { id: "e-vulneris", type: "species", title: "Escherichia vulneris", scientific: "Escherichia vulneris", pages: "392", objectives: ["obj-6-1-2"], sections: [
            { title: "Characteristics and clinical significance", page: "392", bullets: ["Also produces yellow colonies. Isolated from humans with infected wounds."] }
          ]},
          { id: "e-albertii", type: "species", title: "Escherichia albertii", scientific: "Escherichia albertii", pages: "392", objectives: ["obj-6-1-2"], sections: [
            { title: "Characteristics and clinical significance", page: "392", bullets: ["The newest species added to this genus. Associated with diarrheal disease in children."] }
          ]}
          ]},
          {
  id: "klebsielleae",
  type: "tribe",
  title: "Tribe Klebsielleae",
  pages: "393–397",
  objectives: ["obj-6-1-2"],
  sections: [
    { title: "Overview", page: "393", bullets: [
      "Members of the tribe Klebsielleae are commonly isolated opportunists in the Enterobacteriaceae.",
      "They are associated with urinary tract infections, pneumonia, soft tissue infection, wound infections, and septicemia.",
      "Most are lactose fermenters on primary media and may appear mucoid when capsule production is prominent.",
      "Several species are important nosocomial pathogens, especially in immunocompromised or hospitalized patients."
    ]},
    { title: "Shared laboratory characteristics", page: "394", bullets: [
      "Usually oxidase negative and nitrate positive.",
      "Most are motile by peritrichous flagella except Klebsiella spp., which are nonmotile.",
      "Capsule production is often prominent, especially in Klebsiella pneumoniae.",
      "Biochemical differentiation relies on lactose fermentation, citrate, IMViC patterns, and urease activity."
    ]}
  ],
  children: [
    {
      id: "klebsiella",
      type: "genus",
      title: "Klebsiella",
      pages: "393–394",
      objectives: ["obj-6-1-2"],
      sections: [
        { title: "General characteristics", page: "393", bullets: [
          "Klebsiella spp. are nonmotile gram-negative rods with prominent capsules.",
          "Colonies are often mucoid due to capsular material.",
          "Clinically significant species include K. pneumoniae and K. oxytoca.",
          "These organisms are frequently associated with pneumonia, bacteremia, and urinary tract infection."
        ]},
        { title: "Species notes", page: "394", bullets: [
          "K. pneumoniae is the most important clinically and often associated with liver abscess and pneumonia.",
          "K. oxytoca may be similar to K. pneumoniae but differs biochemically and in virulence profile.",
          "K. ozaenae and K. rhinoscleromatis are associated with specific chronic upper respiratory disease syndromes."
        ]}
      ],
      children: [
        {
          id: "k-pneumoniae",
          type: "species",
          title: "Klebsiella pneumoniae",
          scientific: "Klebsiella pneumoniae",
          pages: "393–394",
          objectives: ["obj-6-1-2"],
          sections: [
            { title: "Characteristics", page: "393", bullets: [
              "Large, mucoid, lactose-fermenting colonies on MAC agar.",
              "Nonmotile.",
              "Capsule-positive; often associated with highly mucoid smooth colonies.",
              "May produce a strong red or reddish-pink appearance on appropriate media depending on growth conditions."
            ]},
            { title: "Clinical significance", page: "394", bullets: [
              "A major cause of hospital-acquired pneumonia and urinary tract infection.",
              "Can cause bloodstream infection in debilitated patients.",
              "Associated with invasive liver abscess syndrome in selected populations.",
              "K1 and K2 capsular serotypes are commonly recognized in invasive disease."
            ]}
          ]
        },
        {
          id: "k-oxytoca",
          type: "species",
          title: "Klebsiella oxytoca",
          scientific: "Klebsiella oxytoca",
          pages: "394",
          objectives: ["obj-6-1-2"],
          sections: [
            { title: "Characteristics and significance", page: "394", bullets: [
              "Closely resembles K. pneumoniae in morphology and culture appearance.",
              "A lactose fermenter and usually urease positive.",
              "May be isolated from pneumonia and other nosocomial infections.",
              "Differentiation may rely on biochemical profiles and specific testing."
            ]}
          ]
        }
      ]
    },
    {
      id: "enterobacter",
      type: "genus",
      title: "Enterobacter",
      pages: "395–396",
      objectives: ["obj-6-1-2"],
      sections: [
        { title: "General characteristics", page: "395", bullets: [
          "Members are opportunistic pathogens often isolated from hospital-associated infections.",
          "Most are lactose fermenters and motile.",
          "Some strains are associated with urinary tract and respiratory tract infections.",
          "The genus may include species that are difficult to differentiate biochemically."
        ]},
        { title: "Selected species", page: "396", bullets: [
          "E. cloacae and E. aerogenes are among the more commonly encountered clinical species.",
          "Species are often distinguished by biochemical reactions, including citrate utilization and carbohydrate assimilation.",
          "Clinical importance often reflects antibiotic resistance and healthcare-associated exposure."
        ]}
      ],
      children: [
        {
          id: "e-cloacae",
          type: "species",
          title: "Enterobacter cloacae",
          scientific: "Enterobacter cloacae",
          pages: "395",
          objectives: ["obj-6-1-2"],
          sections: [
            { title: "Clinical importance", page: "395", bullets: [
              "An opportunistic pathogen in hospitalized patients.",
              "Associated with urinary tract infection, wound infection, and bacteremia.",
              "May be isolated from respiratory specimens and intravenous devices."
            ]}
          ]
        },
        {
          id: "e-aerogenes",
          type: "species",
          title: "Enterobacter aerogenes",
          scientific: "Enterobacter aerogenes",
          pages: "396",
          objectives: ["obj-6-1-2"],
          sections: [
            { title: "Clinical significance", page: "396", bullets: [
              "Another common nosocomial opportunist in the Enterobacteriaceae.",
              "Typically associated with healthcare-related infection and resistant isolates.",
              "Noted for ability to survive in hospital environments and colonize devices."
            ]}
          ]
        }
      ]
    },
    {
      id: "raoultella",
      type: "genus",
      title: "Raoultella",
      pages: "396",
      objectives: ["obj-6-1-2"],
      sections: [
        { title: "General characteristics", page: "396", bullets: [
          "Formerly included with Klebsiella in some older classifications.",
          "Species are capsulated, lactose fermenting, and often associated with hospital settings.",
          "May be isolated from blood, urine, and respiratory samples.",
          "Differentiation from Klebsiella relies on characteristic biochemical patterns."
        ]}
      ],
      children: [
        {
          id: "r-ornithinolytica",
          type: "species",
          title: "Raoultella ornithinolytica",
          scientific: "Raoultella ornithinolytica",
          pages: "396",
          objectives: ["obj-6-1-2"],
          sections: [
            { title: "Clinical significance", page: "396", bullets: [
              "Uncommon but notable opportunistic opportunist in human disease.",
              "May be associated with bacteremia and urinary tract infection in compromised hosts.",
              "Often recovered during culture of blood or urine specimens."
            ]}
          ]
        }
      ]
    },
    {
      id: "serratia",
      type: "genus",
      title: "Serratia",
      pages: "397",
      objectives: ["obj-6-1-2"],
      sections: [
        { title: "General characteristics", page: "397", bullets: [
          "Serratia spp. are often red-pigmented or produce characteristic coloration on culture media.",
          "Can be nosocomial pathogens and are associated with invasive infection in compromised hosts.",
          "Often isolated from urinary, respiratory, and wound specimens.",
          "Motile and usually lactose variable depending on species."
        ]},
        { title: "Selected species", page: "397", bullets: [
          "S. marcescens is a classic opportunistic clinical isolate.",
          "Other serratiae are associated with hospital water and contaminated devices.",
          "Pigmented colonies may assist in preliminary recognition."
        ]}
      ],
      children: [
        {
          id: "s-marcescens",
          type: "species",
          title: "Serratia marcescens",
          scientific: "Serratia marcescens",
          pages: "397",
          objectives: ["obj-6-1-2"],
          sections: [
            { title: "Clinical importance", page: "397", bullets: [
              "Common opportunistic pathogen in hospitalized patients.",
              "May cause urinary tract infections, pneumonia, bacteremia, and wound infections.",
              "Known for red pigmentation in some isolates and for association with contaminated hospital fluids."
            ]}
          ]
        }
      ]
    },
    {
      id: "hafnia",
      type: "genus",
      title: "Hafnia",
      pages: "397",
      objectives: ["obj-6-1-2"],
      sections: [
        { title: "General characteristics", page: "397", bullets: [
          "Hafnia alvei is a recognized opportunistic member of the Enterobacteriaceae.",
          "It is generally considered a lower-virulence isolate compared to other enterics.",
          "Often recovered from stool or other specimens where it may be an incidental isolate.",
          "Not usually a primary pathogen but may be clinically relevant in selected infections."
        ]}
      ],
      children: [
        {
          id: "h-alvei",
          type: "species",
          title: "Hafnia alvei",
          scientific: "Hafnia alvei",
          pages: "397",
          objectives: ["obj-6-1-2"],
          sections: [
            { title: "Clinical significance", page: "397", bullets: [
              "Occasionally isolated from clinical specimens.",
              "Associated with wound, urinary, and gastrointestinal specimens in selected cases.",
              "Often interpreted within the broader context of patient status and specimen source."
            ]}
          ]
        }
      ]
    }
  ]
},
{
  id: "proteeae",
  type: "tribe",
  title: "Tribe Proteeae",
  pages: "398–399",
  objectives: ["obj-6-1-2"],
  sections: [
    { title: "Overview", page: "398", bullets: [
      "The tribe Proteeae includes Proteus, Morganella, and Providencia.",
      "These genera are strong urease producers and are often associated with urinary tract infection.",
      "They are often differentiated by phenylalanine deaminase and indole reactions.",
      "Members are commonly isolated from urinary and wound sources."
    ]},
    { title: "Laboratory clues", page: "399", bullets: [
      "Swarming may be observed in Proteus spp. on blood agar.",
      "Proteus and Morganella often show strong urease activity.",
      "Phenylalanine deaminase activity helps differentiate the group from other enterics.",
      "Selected species may be associated with complicated urinary tract infections."
    ]}
  ],
  children: [
    {
      id: "proteus",
      type: "genus",
      title: "Proteus",
      pages: "398–399",
      objectives: ["obj-6-1-2"],
      sections: [
        { title: "General characteristics", page: "398", bullets: [
          "Proteus spp. are rapidly motile and commonly demonstrate swarming on agar.",
          "They produce phenylalanine deaminase and are generally urease positive.",
          "Proteus mirabilis is the most clinically significant species in human infection.",
          "The genus is strongly associated with urinary tract infections and stone formation."
        ]},
        { title: "Selected species", page: "399", bullets: [
          "P. mirabilis is often recovered from uncomplicated and complicated UTIs.",
          "P. vulgaris is associated with more varied opportunistic infections.",
          "Swarming behavior is a classic clue in routine culture."
        ]}
      ],
      children: [
        {
          id: "p-mirabilis",
          type: "species",
          title: "Proteus mirabilis",
          scientific: "Proteus mirabilis",
          pages: "398",
          objectives: ["obj-6-1-2"],
          sections: [
            { title: "Clinical significance", page: "398", bullets: [
              "One of the most common causes of urinary tract infection.",
              "Swarming on blood agar is a classic identifying feature.",
              "Associated with catheter-related infection and stone formation in persistent infection."
            ]}
          ]
        }
      ]
    },
    {
      id: "morganella",
      type: "genus",
      title: "Morganella",
      pages: "399",
      objectives: ["obj-6-1-2"],
      sections: [
        { title: "General characteristics", page: "399", bullets: [
          "Morganella morganii is the species most commonly recovered from clinical material.",
          "Often associated with urinary tract infections and wound infection.",
          "Strong urease activity and indole positivity are useful clues.",
          "It is considered an opportunistic but clinically relevant enteric isolate."
        ]}
      ],
      children: [
        {
          id: "m-morganii",
          type: "species",
          title: "Morganella morganii",
          scientific: "Morganella morganii",
          pages: "399",
          objectives: ["obj-6-1-2"],
          sections: [
            { title: "Clinical significance", page: "399", bullets: [
              "May be isolated from urine, blood, and wound infections.",
              "Often seen in healthcare-associated infection and immunocompromised patients.",
              "A useful example of an enteric organism with strong urease activity."
            ]}
          ]
        }
      ]
    },
    {
      id: "providencia",
      type: "genus",
      title: "Providencia",
      pages: "399",
      objectives: ["obj-6-1-2"],
      sections: [
        { title: "General characteristics", page: "399", bullets: [
          "Providencia spp. are opportunistic organisms commonly recovered from the urinary tract.",
          "Species can differ in indole production and other biochemical reactions.",
          "The genus includes multiple species of interest in healthcare settings.",
          "May be recovered from stool, urine, and wound specimens in immunocompromised patients."
        ]},
        { title: "Representative species", page: "399", bullets: [
          "P. rettgeri is associated with urinary tract and wound infections.",
          "P. stuartii is often recovered from urinary and respiratory specimens.",
          "Species selection often depends on biochemical identification and patient setting."
        ]}
      ],
      children: [
        {
          id: "p-rettgeri",
          type: "species",
          title: "Providencia rettgeri",
          scientific: "Providencia rettgeri",
          pages: "399",
          objectives: ["obj-6-1-2"],
          sections: [
            { title: "Clinical significance", page: "399", bullets: [
              "Clinically relevant opportunistic pathogen in urinary tract infection and severe illness.",
              "Can be encountered in immunocompromised or hospitalized patients.",
              "May be recovered from stool, urine, and invasive sites depending on host status."
            ]}
          ]
        }
      ]
    }
  ]
},
          { id: "edwardsiella", type: "genus", title: "Edwardsiella", pages: "400", objectives: ["obj-6-1-2"], sections: [
            { title: "Species and identification", page: "400", bullets: [
              "The genus Edwardsiella is composed of three species: E. tarda, E. hoshinae, and E. ictaluri.",
              "Isolated in bacteremia and wound infections.",
              "E. tarda is the only pathogen; it is an opportunistic pathogen.",
              "Biochemical identification of E. tarda: IMViC + + − −; urea negative; lysine decarboxylase positive; H2S positive; indole positive; does not grow on Simmons citrate."
            ]}
          ]},
          { id: "citrobacter", type: "genus", title: "Citrobacter", pages: "400–401", objectives: ["obj-6-1-2"], sections: [
            { title: "General characteristics", page: "400", bullets: [
              "Considered inhabitants of the GI tract and are associated with hospital-acquired infections, most frequently UTIs.",
              "Consists of 11 species that have been isolated from clinical specimens. The three species most often isolated are C. freundii, C. koseri, and C. braakii."
            ]},
            { title: "Biochemical reactions", page: "401", bullets: [
              "Biochemically similar to Salmonella.",
              "IMViC reactions: + + − +.",
              "All species citrate positive; hence the name.",
              "Weak urease activity; ferment lactose; most produce H2S."
            ]},
            { title: "Selected species", page: "401", bullets: [
              "C. freundii: associated with hospital-acquired UTIs, pneumonias, intraabdominal abscesses, and endocarditis in an intravenous drug abuser. Some isolates produce H2S and some strains (50%) fail to ferment lactose, so it can be mistaken for Salmonella.",
              "C. koseri: documented as the cause of nursery outbreaks of neonatal meningitis and brain abscesses."
            ]}
          ]},
          { id: "salmonella", type: "genus", title: "Salmonella", pages: "402–406", objectives: ["obj-6-1-4"], sections: [
            { title: "General characteristics and biochemical reactions", page: "402", bullets: [
              "Only two species, S. enterica (the type species of the genus) and S. bongori (rare), are now designated in the genus.",
              "Facultative anaerobic.",
              "Clear, colorless, non-lactose-fermenting colonies with black centers on MAC agar; black centers also appear on media containing indicators for H2S production (e.g., HE or XLD).",
              "IMViC: − + − +. Negative for phenylalanine deaminase and urease. Most produce H2S. VP negative. Indole negative, except Salmonella paratyphi A. No growth in media containing potassium cyanide."
            ]},
            { title: "Classification", page: "402–403", bullets: [
              "Six subspecies in S. enterica: subsp. enterica (subspecies I), salamae (II), arizonae (IIIa), diarizonae (IIIb), houtenae (IV), and indica.",
              "Nearly all former Salmonella spp. have been placed as serotypes below the level of S. enterica subsp. enterica Typhi; simply written as Salmonella Typhi (serotype is capitalized and not italicized).",
              "Differentiating subgroups: lysine decarboxylase rules out S. paratyphi; ornithine decarboxylase rules out S. typhi; trehalose fermentation rules out S. choleraesuis."
            ]},
            { title: "Virulence factors and antigenic structures", page: "403–404", bullets: [
              "Fimbriae required for adhesion to intestine; ability to traverse intestinal mucosa; enterotoxin involved in gastroenteritis.",
              "H antigen occurs in phases: Phase I is the specific phase; Phase II is the non-specific phase.",
              "O antigen: heat-stable antigen, the lipopolysaccharide located in the outer membrane of the cell wall.",
              "K capsule antigen is designated as the Vi antigen. Serologic identification of Vi is important in identifying Salmonella serotype Typhi; prevents phagocytosis."
            ]},
            { title: "Clinical infections", page: "404–406", bullets: [
              "Acute gastroenteritis (salmonellosis): food poisoning with vomiting and diarrhea caused by ingestion of organisms in contaminated food.",
              "Symptoms appear 8 to 36 hours after ingestion: nausea, vomiting, fever, chills, watery diarrhea, and abdominal pain. Most cases are self-limiting.",
              "Typhoid fever is caused by S. typhi. The course includes invasion of intestinal mucosa, lymphatic spread, bacteremia, spread to spleen, liver, and bone marrow, intracellular growth in monocytes, and prolonged bacteremia.",
              "Rose spots around the umbilical region appear at the second week of fever.",
              "Serious complications include necrotizing cholecystitis, hemorrhage and perforation of the bowel, pneumonia, thrombophlebitis, meningitis, osteomyelitis, endocarditis, and abscesses.",
              "Recovered individuals may harbor organisms in the gallbladder and excrete them in feces (carrier state). Paratyphoid fevers are similar but less severe."
            ]}
          ]},
          { id: "shigella", type: "genus", title: "Shigella", pages: "407–409", objectives: ["obj-6-1-4"], sections: [
            { title: "General characteristics and antigenic structures", page: "407", bullets: [
              "Shigella and Escherichia are so closely related according to molecular analyses that they should be a single genus; for medical purposes and because of the useful association of the genus epithet with shigellosis or bacillary dysentery, they remain separate genera.",
              "Not members of the normal GI flora. Very fragile organism; susceptible to physical and chemical agents, including disinfectants and high concentrations of acids and bile.",
              "All Shigella spp. possess O antigens, identified by serologic grouping. Certain strains possess K antigens that can interfere with detection of O antigen; K antigens are heat labile and can be removed by boiling a cell suspension.",
              "Lack H antigens; non-motile."
            ]},
            { title: "Species and clinical infections", page: "407–408", bullets: [
              "S. sonnei (group D): most common isolate in the United States.",
              "S. flexneri (group B): second most common isolated in the United States; affects young children to young adults (approximately 25 years old).",
              "S. dysenteriae (group A): most common isolate in developing countries, particularly among undernourished children during epidemic outbreaks; most virulent species. Mortality rates range from 5% to 10% and higher.",
              "S. boydii (group C): also common in developing countries.",
              "Humans are the only known reservoir. Highly communicable; transmitted by direct person-to-person contact and fecal-oral spread. Low inoculum: 10 to 200 organisms can cause disease.",
              "Causes dysentery with local inflammation, shedding of intestinal lining containing mucus and blood, ulcer formation, and tenesmus. Symptoms appear approximately 24 to 48 hours after ingestion."
            ]},
            { title: "Laboratory identification", page: "409", bullets: [
              "Initially appear as clear, non-lactose-fermenting colonies; delayed fermentation of lactose on MAC after 48 hours.",
              "IMViC: − + − −; indole can be variable.",
              "Generally do not produce gas from glucose; no urease; no H2S in TSI; no lysine decarboxylation; cannot utilize acetate or mucate as carbon source.",
              "S. sonnei is ONPG positive and ornithine decarboxylase positive. S. flexneri is negative for ONPG and ornithine decarboxylase.",
              "Nonmotile."
            ]}
          ]},
          { id: "yersinia", type: "genus", title: "Yersinia", pages: "410–412", objectives: ["obj-6-1-4"], sections: [
            { title: "General characteristics", page: "410", bullets: [
              "14 named species; most are considered environmental species.",
              "Three species are considered human pathogens: Y. pestis, Y. enterocolitica, and Y. pseudotuberculosis."
            ]},
            { title: "Yersinia pestis", page: "410–411", bullets: [
              "Grows on routine media such as SBA and MAC agar; grows best at 25°C to 30°C.",
              "Gram-negative, short, plump bacillus with bipolar staining; “safety-pin” appearance when stained with methylene blue.",
              "Causes plague: bubonic, septicemic, and pneumonic forms. Bubonic form is transmitted through bite of infected fleas; painful regional lymph nodes (buboes) appear with high fever 2 to 5 days after infection.",
              "Pneumonic plague is transmitted through respiratory droplets and is fatality rate of 100% if untreated, as stated in the course PDF."
            ]},
            { title: "Yersinia enterocolitica", page: "411", bullets: [
              "Acquired from contact with swine, cats, dogs, or ingestion of contaminated food that contacted fecal material. Refrigeration is ineffective because it survives cold temperatures.",
              "Clinical infections include acute enteritis (most common manifestation; appendicitis-like syndrome), gastroenteritis, and arthritis (usually follows a GI episode).",
              "Cefsulodin-irgasan-novobiocin (CIN) agar is commonly used to detect Y. enterocolitica in feces."
            ]},
            { title: "Yersinia pseudotuberculosis", page: "412", bullets: [
              "A pathogen primarily of rodents, particularly guinea pigs. Human infections are rare; transmission via close contact with infected animals or fecal material or ingestion of contaminated drink and foods.",
              "Causes mesenteric lymphadenitis (presentation similar to appendicitis) and pseudo tubercles (a nodule histologically similar to a tuberculous granuloma).",
              "To differentiate from Y. pestis: Y. pseudotuberculosis is motile at 18°C to 25°C, produces urease, and ferments rhamnose."
            ]}
          ]},
          { id: "ent-lab", type: "topic", title: "Laboratory diagnosis", label: "Family-level laboratory workflow", pages: "415–419", objectives: ["obj-6-1-5"], sections: [
            { title: "Specimen collection and transport", page: "415", bullets: [
              "Laboratories must provide appropriate transport media, such as Cary-Blair, Amies, or Stuart media.",
              "Must encourage immediate transport of clinical samples to the laboratory for processing, regardless of the source of the clinical specimen."
            ]},
            { title: "Isolation and identification", page: "415", bullets: [
              "Consider the site of origin.",
              "Enteric opportunistic organisms isolated from sites that are normally sterile are highly significant.",
              "In stool cultures, complete identification should be directed only toward true intestinal pathogens.",
              "Direct microscopic examination is not very helpful in differentiating species, but smears from sterile body fluids or exudates from uncontaminated sites can aid preliminary diagnosis."
            ]},
            { title: "Screening stool cultures for pathogens", page: "415–416", bullets: [
              "Separate enteric pathogens from normal enteric flora: Salmonella, Shigella, Yersinia, E. coli O157:H7, Aeromonas, Campylobacter, Vibrio, and Plesiomonas shigelloides.",
              "All fecal specimens should be routinely screened for Salmonella, Shigella, and Campylobacter. Other pathogens should be addressed based on patient history and travel.",
              "Many laboratories now screen for E. coli O157:H7.",
              "Fecal pathogens are generally non-lactose fermenters: clear or colorless and translucent colonies on MAC. Some non-lactose fermenters and delayed lactose fermenters also need screening to rule out a potential pathogen."
            ]},
            { title: "Media for stool screening", page: "416–417", bullets: [
              "Routine media: SBA and MAC.",
              "Highly selective media: Hektoen enteric (HE), xylose lysine deoxycholate (XLD), and eosin-methylene blue (EMB).",
              "Additional selective media: Salmonella-Shigella agar (SS), CHROM agar, MacConkey agar with sorbitol (SMAC) for E. coli O157:H7, and cefsulodin-irgasan-novobiocin agar (CIN)."
            ]},
            { title: "Biochemical identification and serologic grouping", page: "418–419", bullets: [
              "Colony morphology.",
              "Conventional biochemical tube testing: TSI and LIA combination to determine glucose and lactose or sucrose utilization and H2S production.",
              "Biochemical testing: IMViC reactions, motility, urea hydrolysis, citrate utilization, and carbohydrate fermentation.",
              "Commercial identification kits (e.g., API strips) and automated testing (e.g., VITEK).",
              "Serological testing (grouping): E. coli O157:H7, Salmonella, and Shigella (A through D serogroups)."
            ]}
          ]}
        ]
      },
      {
        id: "lesson-6-2", code: "6.2", title: "Other infectious gram-negative bacilli", objectiveCount: 10,
        description: "Differentiate other infectious gram-negative bacilli.", pages: "421–441",
        topics: [
          { id: "obj-6-2-1", code: "6.2-A", title: "Describe the general characteristics of Vibrio family to include habitats, clinical manifestations, microscopic morphology, physiology, mode of transmission, pathogenesis, and spectrum of disease.", contentIds: ["vibrio"] },
          { id: "obj-6-2-2", code: "6.2-B", title: "Describe biochemical testing of Vibrio family.", contentIds: ["vibrio"] },
          { id: "obj-6-2-3", code: "6.2-C", title: "Discuss antimicrobial susceptibility.", contentIds: ["vibrio"] },
          { id: "obj-6-2-4", code: "6.2-D", title: "Describe the general characteristics of Aeromonas to include habitats, microscopic morphology, physiology, and mode of transmission.", contentIds: ["aeromonas"] },
          { id: "obj-6-2-5", code: "6.2-E", title: "Describe biochemical testing of Aeromonas.", contentIds: ["aeromonas"] },
          { id: "obj-6-2-6", code: "6.2-F", title: "Discuss antimicrobial susceptibility of Aeromonas.", contentIds: ["aeromonas"] },
          { id: "obj-6-2-7", code: "6.2-G", title: "Describe the general characteristics of Plesiomonas to include habitats, microscopic morphology, and mode of transmission.", contentIds: ["plesiomonas"] },
          { id: "obj-6-2-8", code: "6.2-H", title: "Describe the general characteristics of Campylobacter and Campylobacter-like species to include habitats, clinical manifestations, microscopic morphology, physiology, mode of transmission, pathogenesis, and spectrum of disease.", contentIds: ["campylobacter"] },
          { id: "obj-6-2-9", code: "6.2-I", title: "Describe biochemical testing of Campylobacter and Campylobacter-like species.", contentIds: ["campylobacter"] },
          { id: "obj-6-2-10", code: "6.2-J", title: "Discuss antimicrobial susceptibility of Campylobacter and Campylobacter-like species.", contentIds: ["campylobacter"] }
        ],
        branches: [
          { id: "vibrio", type: "family", title: "Vibrio", pages: "422–428", objectives: ["obj-6-2-1", "obj-6-2-2", "obj-6-2-3"], sections: [
            { title: "General characteristics", page: "422", bullets: [
              "10 species involved in human infections.",
              "Facultative anaerobic. Most Vibrios are halophilic, except V. cholerae and V. mimicus.",
              "Commonly found in aquatic environments, including fresh water, brackish or estuarine water, and marine or salt water.",
              "Temperature sensitive; easily isolated in temperate climates when water temperatures exceed 20°C. Numbers decline markedly in winter months.",
              "Usually involved in cyclical epidemics."
            ]},
            { title: "Clinical species", page: "424–425", bullets: [
              "V. cholerae: causative agent of cholera; severe diarrheal disease. Spread mainly through contaminated water and improperly preserved or handled foods. Choleragen causes rice-water stool, vomiting, major water/electrolyte loss, dehydration, hypovolemic shock, and metabolic acidosis.",
              "V. parahaemolyticus: second most common Vibrio species implicated in gastroenteritis after V. cholerae. Associated with coastal waters and raw or improperly cooked seafood, particularly oysters. Symptoms develop after 24 to 48 hours.",
              "V. vulnificus: also known as the lactose-positive Vibrio. Raw or undercooked seafood can cause septicemia, especially in people with increased serum iron; wound infections can progress to necrotizing fasciitis and/or multiple organ system failure.",
              "V. alginolyticus: rarely isolated and least pathogenic; mostly external sites such as eye, ear, wounds, or burns."
            ]},
            { title: "Laboratory identification", page: "426–428", bullets: [
              "BAP works well since it contains enough salt for most Vibrios. On MAC, most are lactose negative except V. vulnificus.",
              "TCBS: yellow colonies include V. cholerae, V. alginolyticus, V. fluvialis, V. furnissii, V. cincinnatiensis, V. metschnikovii, and some V. vulnificus. Green colonies include V. mimicus, V. parahaemolyticus, P. damselae, and most V. vulnificus.",
              "Small, straight, gram-negative rods (1.4–2.6 µm long); can form pleomorphic shapes. “Curved” usually only in Gram stains from clinical specimens.",
              "Catalase positive, oxidase positive, ferments glucose, and reduces nitrate to nitrite.",
              "Susceptible to Vibrio static disk O/129; resistance is common in V. cholerae isolates from India and Bangladesh. Positive string test: mucoid string after emulsifying 2 to 3 colonies in sodium desoxycholate."
            ]},
            { title: "Antimicrobial susceptibility", page: "428", bullets: [
              "Mueller-Hinton agar and broth contain sufficient salt to support growth of Vibrio spp.",
              "CLSI interpretive guidelines are only for V. cholerae and are limited to ampicillin, tetracyclines, trimethoprim, and chloramphenicol.",
              "Most isolates are susceptible to doxycycline and ciprofloxacin."
            ]}
          ]},
          { id: "aeromonas", type: "genus", title: "Aeromonas", pages: "429–432", objectives: ["obj-6-2-4", "obj-6-2-5", "obj-6-2-6"], sections: [
            { title: "General characteristics and groups", page: "429", bullets: [
              "Classified in two groups: mesophilic and psychrophilic.",
              "Mesophilic: all species motile. A. hydrophila complex (A. hydrophila, A. bestiarum, A. salmonicida); A. veronii complex (A. veronii biovar sobria, A. veronii biovar veronii, A. jandaei, A. trota, A. schubertii); A. caviae complex (A. caviae, A. media, A. eucrenophilia).",
              "A. caviae is most frequently associated with gastrointestinal infections, especially in neonate and pediatric populations.",
              "Psychrophilic: A. salmonicida; non-motile, grows best at 22° to 25°C."
            ]},
            { title: "Clinical infections", page: "429–430", bullets: [
              "Gastroenteritis: transmitted by drinking untreated water or eating contaminated seafood. Various types include acute secretory diarrhea with vomiting, acute dysenteric form with blood and mucus, chronic diarrhea lasting more than 10 days, cholera-like disease with rice-water stools, and traveler’s diarrhea.",
              "Extraintestinal infections are associated with injuries while working in tainted water; may present as cellulitis. A. hydrophila is the most isolated in wound infections.",
              "Septicemia is associated with A. veronii biovar sobria; occurs in patients who are immunocompromised, have liver disease, or after traumatic injury."
            ]},
            { title: "Laboratory identification", page: "430–431", bullets: [
              "Grow readily on most media used for routine and stool cultures; often overlooked on MAC as normal colon flora because most aeromonads ferment lactose.",
              "On SBA: large, round, raised, opaque colonies with an entire edge and smooth, often mucoid, surface. Hemolysis is variable, but most major clinical species display strong β-hemolysis.",
              "On CIN or modified CIN II: pink-centered colony from mannitol fermentation, with an uneven, clear apron.",
              "Gram-negative rods; straight (unlike curved rods of Vibrios), 1.0–3.5 µm long.",
              "Oxidase positive; indole positive for most clinically relevant species; string test negative; resistant to Vibrio static disk; grows well in 0% NaCl; inositol negative."
            ]},
            { title: "Antimicrobial susceptibility", page: "432", bullets: [
              "Susceptibilities should be performed on all clinical aeromonad isolates, if possible.",
              "Per CLSI, susceptibility studies should always be determined by the standard Kirby-Bauer disk diffusion method due to serious discrepancies in β-lactamase detection by rapid MIC methods.",
              "As a genus, aeromonads are almost uniformly resistant to penicillin, ampicillin, and carbenicillin.",
              "Generally susceptible to trimethoprim/sulfamethoxazole (SMZ), aminoglycosides, and quinolones."
            ]}
          ]},
          { id: "plesiomonas", type: "genus", title: "Plesiomonas", pages: "433–435", objectives: ["obj-6-2-7"], sections: [
            { title: "General characteristics", page: "433", bullets: [
              "P. shigelloides is the only species in this genus.",
              "The genus was formerly in the family Vibrionaceae; phylogenetic studies have shown that Plesiomonas is actually closely related to members of the family Enterobacteriaceae.",
              "Facultative anaerobe; found in soil and aquatic environments, generally only in fresh and estuarine waters of tropical and subtropical climates.",
              "Potential cause of enteric disease; underreported because of similarity to E. coli on most ordinary enteric media. Antigenically has some similar features to Shigella but much lower virulence."
            ]},
            { title: "Clinical infections and transmission", page: "433–434", bullets: [
              "Gastroenteritis transmission from raw or undercooked seafood or tainted water.",
              "Three major clinical types: watery diarrhea; subacute or chronic disease lasting 2 weeks to 3 months; and dysenteric form resembling colitis.",
              "Extraintestinal risk includes veterinarians, zookeepers, aquaculturists, fish handlers, and athletes participating in water-related sports. Bacteremia and meningitis occur only in severely immunocompromised patients or neonates."
            ]},
            { title: "Laboratory identification", page: "434", bullets: [
              "Shiny, opaque, nonhemolytic colonies with slightly raised centers and a smooth, entire edge.",
              "Inositol brilliant green bile agar (IBB) can enhance isolation; colonies appear white or pink.",
              "Oxidase positive; glucose fermenting but does not produce gas; motile; susceptible to Vibrio static disks; positive ornithine and lysine decarboxylases and arginine dihydrolase.",
              "Differentiation: oxidase positive rules out other Enterobacteriaceae; sensitivity to Vibrio static agent rules out Aeromonas; no growth in high salt rules out Vibrio; inositol fermentation confirms Plesiomonas."
            ]},
            { title: "Antimicrobial susceptibility", page: "434–435", bullets: [
              "Most cases of plesiomonads gastroenteritis are self-limiting; antimicrobial therapy is indicated for patients with severe or chronic disease.",
              "General resistance to penicillin class; penicillins combined with a β-lactamase inhibitor and trimethoprim-sulfamethoxazole can be effective.",
              "Reports of resistance to more than one aminoglycoside. Susceptible to quinolones, cephalosporins, and carbapenems."
            ]}
          ]},
          { id: "campylobacter", type: "genus", title: "Campylobacter and Campylobacter-like species", pages: "436–440", objectives: ["obj-6-2-8", "obj-6-2-9", "obj-6-2-10"], sections: [
            { title: "General characteristics", page: "436", bullets: [
              "Campylobacter and Campylobacter-like species include Helicobacter and Wolinella; Helicobacter and Wolinella are members of the family Helicobacteraceae.",
              "Many subspecies and biovars, including C. jejuni ssp. jejuni and C. fetus ssp. fetus.",
              "Formerly classified with the Vibrios because of their positive oxidase and characteristic microscopic morphology.",
              "Microaerophilic organisms: require oxygen, but at a concentration less than that of room air; 5% is normally optimal."
            ]},
            { title: "Clinical infections", page: "437", bullets: [
              "Transmission of campylobacteriosis has been attributed to direct contact with animals and handling infected pets, such as dogs, cats, and birds.",
              "Campylobacter jejuni: one of the most common causes of bacterial gastroenteritis worldwide (wording in PDF: “The most common causes”). Symptoms include mild abdominal pain within 2 to 10 days, followed by cramps and bloody diarrhea; fever and chills may occur.",
              "C. jejuni is associated with Guillain-Barre syndrome.",
              "Campylobacter fetus: causes enteric infections in immunocompromised and elderly patients; known to cause abortions in cattle, sheep, and pigs.",
              "Helicobacter pylori: colonizes 20% to 40% of adults in the United States; major cause of chronic superficial gastritis. Lives in mucus covering stomach surface; produces urease to break down urea to ammonia and neutralize stomach pH. Associated with type B gastritis, gastric, peptic, and duodenal ulcers, and gastric carcinoma."
            ]},
            { title: "Laboratory identification", page: "438–439", bullets: [
              "Campy blood agar: Brucella agar base with 10% sheep RBCs. Skirrow media: blood agar base, lysed horse RBCs. Cary-Blair is a transport medium for stool if there is a delay in processing.",
              "Incubate in a microaerophilic, capnophilic atmosphere at 42°C: 5% to 10% O2 and 10% CO2; incubate 72 hours.",
              "C. jejuni colonies are moist, runny-looking and spreading, nonhemolytic, raised round or flat. C. fetus subsp. fetus colonies are tan or slight pink, smooth, convex, translucent.",
              "Non-spore-forming gram-negative rods; may appear as long spirals or ‘S’ or seagull-wing shape.",
              "Oxidase positive and motile; exhibits darting motility on hanging drop preparations or phase contrast microscopy. Positive hippurate hydrolysis: C. jejuni."
            ]},
            { title: "Helicobacter identification and antimicrobial susceptibility", page: "439–440", bullets: [
              "Helicobacter is usually identified by non-culture methods.",
              "Gastric biopsy specimen can be tested for rapid urease reaction using Christensen’s urea medium; rapid color change in 2 hours.",
              "Other tests: urea breath test using 13C- or 14C-labeled urea; microscopic examination with Giemsa, Gram, or silver stain; fecal antigen detection; DNA amplification (e.g., PCR); ELISA; IFA.",
              "Antimicrobial susceptibility testing is not routinely performed in the clinical microbiology laboratory and is not standardized.",
              "For C. jejuni, illness is usually self-limited and resolves in 2 to 6 days; azithromycin or erythromycin may be used; gentamicin for systemic infections. Untreated patients can remain carriers for several months.",
              "For H. pylori: macrolide, amoxicillin, and a proton pump inhibitor; treat 7 to 14 days."
            ]}
          ]}
        ]
      },
      {
        id: "lesson-6-3", code: "6.3", title: "Non-fermenting and miscellaneous gram-negative bacilli", objectiveCount: 2,
        description: "Differentiate non-fermenting and miscellaneous gram-negative bacilli.", pages: "442–464",
        topics: [
          { id: "obj-6-3-1", code: "6.3-A", title: "Describe the general characteristics of non-fermentative and miscellaneous gram-negative bacilli.", contentIds: ["nonfermenter-general"] },
          { id: "obj-6-3-2", code: "6.3-B", title: "Discuss clinically significant non-fermentative, gram-negative bacilli to include identifying characteristics, clinical infections, biochemical testing of Pseudomonas fluorescent and non-fluorescent group.", contentIds: ["pseudomonas", "acinetobacter", "stenotrophomonas", "burkholderia", "other-nonfermenters"] }
        ],
        branches: [
          { id: "nonfermenter-general", type: "topic", title: "General characteristics", pages: "443–444", objectives: ["obj-6-3-1"], sections: [
            { title: "General characteristics", page: "443", bullets: [
              "Most are oxidase positive; most non-fermentative, gram-negative bacilli are oxidase positive, a feature that differentiates them from Enterobacteriaceae (Plesiomonas sp. is the only oxidase-positive member of Enterobacteriaceae).",
              "Do not ferment carbohydrates (oxidative-fermentative [O/F] media).",
              "Grow only in an aerobic environment.",
              "Ubiquitous: soil and water, plants and decaying vegetation, and many foodstuffs.",
              "Prefer moist environments; isolated in nebulizers, dialysate fluids, saline, catheters, and other devices.",
              "Can easily colonize hospitalized patients, especially those who are immunocompromised.",
              "Resist treatment with chlorhexidine and quaternary ammonium compounds; resistant to multiple classes of antimicrobial agents.",
              "Energy utilization: oxidizers oxidize carbohydrates to derive energy; non-oxidizers are asaccharolytic and do not break down carbohydrates at all (inert or biochemically inactive).",
              "Microscopic morphology: long, thin, gram-negative bacilli or coccobacilli; usually motile with polar or polar tufts of flagella."
            ]},
            { title: "Clinical infections", page: "444", bullets: [
              "Account for 15% of all gram-negative bacilli isolated in clinical infections.",
              "Pseudomonas aeruginosa: 5% to 15%. Acinetobacter spp. are opportunists and account for 1% to 3% of all nosocomial infections.",
              "Stenotrophomonas maltophilia is the third most common non-fermentative, gram-negative bacillus isolated in the clinical laboratory.",
              "Associated infections include septicemia, meningitis, osteomyelitis, and wound infections."
            ]}
          ]},
          { id: "pseudomonas", type: "genus", title: "Pseudomonas", pages: "445–450", objectives: ["obj-6-3-2"], sections: [
            { title: "Fluorescent group", page: "445", bullets: [
              "Members include P. aeruginosa, P. fluorescens, P. putida, P. veronii, P. mosselii, and P. monteilii."
            ]},
            { title: "Pseudomonas aeruginosa", page: "445–447", bullets: [
              "Most commonly isolated species of the genus in clinical specimens; considered an opportunistic pathogen.",
              "Accounts for 5% to 15% of all nosocomial infections, especially pneumonia and bacteremia; leading cause of nosocomial respiratory tract infection.",
              "When isolated from a sterile body site (blood, pleural fluid, joint fluids or tissues, or CSF), it almost always constitutes a true infection.",
              "Can cause pulmonary disease, especially among individuals with cystic fibrosis. Other conditions: otitis externa in swimmers/divers, Jacuzzi or hot tub syndrome, nail bed infections in people with artificial nails, keratitis, endophthalmitis.",
              "Virulence factors: LPS endotoxin; exotoxin A blocks protein synthesis similarly to diphtheria toxin; alginate overproduction produces mucoid colonies, seen primarily in cystic fibrosis patients; motility, pili, proteases, hemolysin, capsule, lecithinase, elastase, and DNase.",
              "Culture: most isolates β-hemolytic on SBA and MAC; flat spreading colonies with characteristic metallic green sheen; many strains produce fruity, grapelike odor due to 2-aminoacetophenone; pyoverdine and pyocyanin produce the characteristic green color.",
              "Biochemical identification: oxidase positive, motile, indole negative, denitrification of nitrates and nitrites to nitrogen gas, arginine dihydrolase positive, growth at 42°C, citrate positive, acetamide utilization."
            ]},
            { title: "P. fluorescens and P. putida", page: "448", bullets: [
              "Low virulence; isolated from respiratory specimens, transfusion-associated septicemia, urine, cosmetics, hospital equipment, and fluids.",
              "Clinical infections: UTIs, postsurgical abscesses, empyema, septic arthritis, and wound infections.",
              "Produce pyoverdine, but neither produces pyocyanin; do not grow at 42°C; cannot reduce nitrate to nitrogen gas; can produce acid from xylose.",
              "Gelatin hydrolysis: P. putida negative; P. fluorescens positive."
            ]},
            { title: "Non-fluorescent group", page: "449–450", bullets: [
              "Members include P. stutzeri, P. mendocina, P. pseudoalcaligenes, P. alcaligenes, P. luteola, and P. oryzihabitans.",
              "P. stutzeri: rare isolate and even rarer pathogen. Recognizable by wrinkled, leathery, adherent colonies that may produce light yellow or brown pigment. Arginine dihydrolase negative; starch hydrolysis positive; can grow anaerobically in nitrate-containing media, producing nitrogen gas.",
              "P. mendocina and P. alcaligenes are considered contaminants. P. pseudoalcaligenes is arginine dihydrolase positive, weakly ferments fructose, and is considered a contaminant.",
              "P. luteola and P. oryzihabitans: rarely isolated from humans; gram-negative, non-fermentative, oxidase-negative bacilli; catalase positive and motile; oxidize glucose; often produce intracellular non-diffusible yellow pigment on SBA."
            ]}
          ]},
          { id: "acinetobacter", type: "genus", title: "Acinetobacter", pages: "451–452", objectives: ["obj-6-3-2"], sections: [
            { title: "General characteristics and clinical infections", page: "451", bullets: [
              "Now a member of the family Moraxellaceae.",
              "Species most commonly seen in clinical specimens: A. baumannii, A. lwoffii, A. haemolyticus.",
              "Ubiquitous in soil, water, and food; isolated in ventilators, humidifiers, catheters, and other hospital devices.",
              "Clinical infections: UTIs, pneumonia, endocarditis, septicemia, meningitis, wound and burn infections, and eye infections."
            ]},
            { title: "Laboratory identification", page: "451–452", bullets: [
              "Have few growth requirements and can grow on most laboratory media; on MAC produce a purplish hue that resembles a lactose fermenter; strictly aerobic.",
              "Gram-negative coccobacilli or gram-negative cocci; can appear as gram-positive cocci.",
              "Oxidase negative, catalase positive, non-motile. DNA hybridization testing is helpful in grouping.",
              "A. baumannii is saccharolytic and glucose-oxidizing. A. lwoffii is asaccharolytic and glucose-negative."
            ]},
            { title: "Antimicrobial susceptibility", page: "452", bullets: [
              "A. baumannii resistant to many antimicrobials, including penicillins, first- and second-generation cephalosporins, and fluoroquinolones. Variable susceptibility to aminoglycosides and β-lactam plus β-lactamase inhibitor combinations. Some strains exhibit carbapenem resistance.",
              "A. lwoffii is susceptible to almost all antimicrobials."
            ]}
          ]},
          { id: "stenotrophomonas", type: "species", title: "Stenotrophomonas maltophilia", scientific: "Stenotrophomonas maltophilia", pages: "453–454", objectives: ["obj-6-3-2"], sections: [
            { title: "General characteristics and clinical infections", page: "453", bullets: [
              "Third most common non-fermentative, gram-negative bacillus isolated in the clinical laboratory.",
              "Ubiquitous in water, sewage, and plant materials; common contaminant of blood drawing equipment, disinfectants, transducers, and other equipment.",
              "Not considered part of normal human microbiota; can quickly colonize the respiratory tract of hospitalized patients.",
              "Clinical infections: endocarditis, wound infections, bacteremia, meningitis (rare), UTIs, and occasional lower respiratory tract infections."
            ]},
            { title: "Laboratory identification and susceptibility", page: "453–454", bullets: [
              "Non-fermentative; colonies may appear bluish on MAC agar; gram-negative bacillus.",
              "Catalase positive, oxidase negative, DNase positive, esculin positive, lysine decarboxylase positive, gelatin hydrolysis positive.",
              "CLSI recommends broth microdilution testing; an E-test or agar dilution can be performed.",
              "Usually susceptible to SXT, the drug of choice for most infections. May demonstrate in vitro susceptibility to ticarcillin-clavulanate, levofloxacin, and tetracyclines including tigecycline."
            ]}
          ]},
          { id: "burkholderia", type: "genus", title: "Burkholderia", pages: "454–456", objectives: ["obj-6-3-2"], sections: [
            { title: "B. cepacia complex", page: "454–455", bullets: [
              "A complex of at least 17 distinct genomic species (genomovars). Plant pathogens that have arisen as opportunistic organisms usually associated with pneumonia in patients with cystic fibrosis or chronic granulomatous disease (CGD).",
              "Isolated from irrigation fluids, anesthetics, nebulizers, detergents, and disinfectants.",
              "Clinical infections: pneumonia, endocarditis (specifically in IV drug abusers), UTIs, osteomyelitis, dermatitis, and wound infections.",
              "Selective media include PC, OFPBL, and BCSA. Colonies produce a yellow pigment and are non-wrinkled; can produce non-fluorescing yellow or green pigment that may diffuse into media.",
              "Oxidase negative (may be weak/slow positive); motility positive; oxidizes glucose, maltose, lactose, and mannitol; LDC and ODC positive; ADH negative.",
              "Intrinsically resistant to aminoglycosides and polymyxins; many strains resistant to several β-lactams; susceptibility can vary and resistance can develop rapidly during treatment."
            ]},
            { title: "Other Burkholderia species", page: "456", bullets: [
              "B. gladioli resembles B. cepacia; found in CF and CGD patients; recovered from blood and tissue of immunocompromised patients, particularly CF patients after lung transplant; high mortality rate.",
              "B. mallei causes glanders, a respiratory tract zoonosis; rare in humans and affects livestock such as horses, mules, and donkeys; considered by CDC as a possible agent of bioterrorism.",
              "B. pseudomallei causes melioidosis, an aggressive granulomatous pulmonary disease that may cause overwhelming septicemia. Transmission via ingestion, inhalation, or inoculation; found in water and muddy soils in Southeast Asia, Northern Australia, and Mexico. Ashdown medium: wrinkled, deep pink, earthy odor."
            ]}
          ]},
          { id: "other-nonfermenters", type: "topic", title: "Other non-fermenters", pages: "457–463", objectives: ["obj-6-3-2"], sections: [
            { title: "Moraxella", page: "457", bullets: [
              "Opportunistic; resides on mucous membranes of humans (respiratory tract, urinary tract, eyes). Asaccharolytic.",
              "Oxidase positive, non-motile, aerobic; usually susceptible to penicillin."
            ]},
            { title: "Alcaligenes and Achromobacter", page: "458–460", bullets: [
              "Family Alcaligenaceae includes clinically relevant genera Alcaligenes and Achromobacter; the family also includes Bordetella, Advenella, and Kertensia (spelling as presented in source text may need page-image review).",
              "Found in water; resistant to disinfectants such as chlorhexidine and quaternary ammonium compounds.",
              "A. xylosoxidans can cause nosocomial infection associated with IV catheters; advanced age and neutropenia are risk factors. Also associated with otitis media, meningitis, pneumonia, surgical wound infections, UTIs, peritonitis, bacteremia, and CF colonization.",
              "Obligately aerobic; usually grows on most laboratory media, including MAC. Most species non-pigmented on SBA; can cause green discoloration.",
              "Gram-negative bacilli possessing peritrichous flagella. Motile; reduce nitrates to nitrites. Negative for indole, esculin, and gelatin hydrolysis."
            ]},
            { title: "Significant but rarely encountered organisms", page: "461–463", bullets: [
              "Brevundimonas; Chromobacterium violaceum; Comamonas and Delftia; Elizabethkingia meningosepticum; Balneatrix alpaca; Chryseobacterium indologenes; Empedobacter; Wautersiella; Myroides odoratimimus; Weeksella; Sphingobacterium; Methylobacterium; Roseomonas mucosa; Ralstonia pickettii; Cupriavidus paucula; Shewanella putrefaciens and S. algae; Sphingomonas paucimobilis and S. parapaucimobilis."
            ]}
          ]}
        ]
      }
    ]
  }]
};

/*
  Taxonomy presentation layer. This intentionally stores references to content-node IDs
  instead of copying organism data. It can be expanded as more course content is entered.
*/
(() => {
  const lessons = new Map(window.COURSE_DATA.units.flatMap(unit => unit.lessons).map(lesson => [lesson.id, lesson]));
  const ref = id => ({ ref: id });
  const group = (refId, children) => ({ ref: refId, children });

  lessons.get("lesson-6-1").taxonomyTree = {
    root: group("ent-family", [
      ref("escherichia"),
      group("klebsielleae", [
        ref("klebsiella"), ref("enterobacter"), ref("raoultella"),
        ref("pantoea"), ref("cronobacter"), ref("serratia"), ref("hafnia")
      ]),
      group("proteeae", [ref("proteus"), ref("morganella"), ref("providencia")]),
      ref("edwardsiella"), ref("citrobacter"), ref("salmonella"), ref("shigella"), ref("yersinia")
    ])
  };

  lessons.get("lesson-6-2").taxonomyTree = {
    root: {
      label: "Other infectious gram-negative bacilli",
      type: "lesson group",
      children: [ref("vibrio"), ref("aeromonas"), ref("plesiomonas"), ref("campylobacter")]
    }
  };

  lessons.get("lesson-6-3").taxonomyTree = {
    root: {
      label: "Non-fermenting and miscellaneous gram-negative bacilli",
      type: "lesson group",
      children: [
        ref("nonfermenter-general"), ref("pseudomonas"), ref("acinetobacter"),
        ref("stenotrophomonas"), ref("burkholderia"), ref("other-nonfermenters")
      ]
    }
  };
})();
