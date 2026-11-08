/*
  MLT 107 Unit 7 content extension.
  Course wording, organisms, and page references are based only on Unit 7 Anaerobes.pdf.
  Some tables and figures are retained as original-PDF references where their visual layout
  carries information that is best viewed in the source document.
*/
(() => {
  // Complete two referenced Unit 6 tribe entries that were present in its taxonomy map
  // but had not yet been added to the content-node collection.
  const unit6Lesson = window.COURSE_DATA.units.find(unit => unit.id === "unit-6")?.lessons.find(lesson => lesson.id === "lesson-6-1");
  if (unit6Lesson) {
    unit6Lesson.branches.push(
      { id: "pantoea", type: "genus", title: "Pantoea", pages: "395", objectives: ["obj-6-1-2"], sections: [
        { title: "Pantoea agglomerans", page: "395", bullets: [
          "Formerly Enterobacter agglomerans.",
          "Similar to Klebsiella pneumoniae, so it needs to be differentiated.",
          "Primarily a plant pathogen.",
          "Yellow-pigmented colonies on sheep blood agar (SBA)."
        ]}
      ]},
      { id: "cronobacter", type: "genus", title: "Cronobacter", pages: "395", objectives: ["obj-6-1-2"], sections: [
        { title: "Cronobacter sakazakii", page: "395", bullets: [
          "Colonies produce a yellow pigment.",
          "Isolated in cases of meningitis and bacteremia in neonates due to contaminated powdered infant formula.",
          "Also isolated from brain abscesses, respiratory infections, and wound infections."
        ]}
      ]}
    );
  }

  const unit = {
    id: "unit-7",
    code: "UNIT 7",
    title: "Anaerobes",
    description: "Cultivation, clinical significance, specimen handling, identification, susceptibility testing, and treatment of anaerobic bacteria.",
    sourceFile: "unit-7-anaerobes.pdf",
    printedPageStart: 475,
    lessons: [{
      id: "lesson-7-1",
      code: "7.1",
      title: "Anaerobes",
      objectiveCount: 23,
      description: "Differentiate between the various anaerobic bacteria.",
      pages: "475–528",
      topics: [
        { id: "obj-7-1-1", code: "7.1-A", title: "Describe terms associated with anaerobic bacteria to include their atmospheric requirements.", contentIds: ["anaerobe-concepts"] },
        { id: "obj-7-1-2", code: "7.1-B", title: "Describe why anaerobic bacteria are sensitive to oxygen.", contentIds: ["anaerobe-concepts"] },
        { id: "obj-7-1-3", code: "7.1-C", title: "Describe where anaerobic bacteria might be found in the environment to include the human body.", contentIds: ["anaerobe-concepts"] },
        { id: "obj-7-1-4", code: "7.1-D", title: "Describe factors that predispose patients to anaerobic infections.", contentIds: ["anaerobe-concepts"] },
        { id: "obj-7-1-5", code: "7.1-E", title: "Describe indications of anaerobe involvement in human disease.", contentIds: ["anaerobe-concepts"] },
        { id: "obj-7-1-6", code: "7.1-F", title: "Describe gram-positive, spore-forming anaerobic bacilli to include their clinical infections.", contentIds: ["clostridium"] },
        { id: "obj-7-1-7", code: "7.1-G", title: "Describe gram-positive, non-spore-forming anaerobic bacilli to include their clinical infections.", contentIds: ["gp-nonspore", "actinomyces", "bifidobacterium", "propionibacterium", "mobiluncus", "eggerthella", "lactobacillus"] },
        { id: "obj-7-1-8", code: "7.1-H", title: "Describe anaerobic gram-negative bacilli to include their clinical infections.", contentIds: ["gnb-anaerobes", "bacteroides", "bilophila", "prevotella", "porphyromonas", "fusobacterium"] },
        { id: "obj-7-1-9", code: "7.1-I", title: "Describe anaerobic cocci to include their clinical infections.", contentIds: ["anaerobic-cocci", "gram-positive-anaerobic-cocci", "gram-negative-anaerobic-cocci"] },
        { id: "obj-7-1-10", code: "7.1-J", title: "Describe acceptable specimens for anaerobic culture.", contentIds: ["anaerobe-specimens"] },
        { id: "obj-7-1-11", code: "7.1-K", title: "Describe how anaerobic specimens are transported to include processing for recovery of anaerobic pathogens.", contentIds: ["anaerobe-specimens"] },
        { id: "obj-7-1-12", code: "7.1-L", title: "Describe the macroscopic and microscopic examination of anaerobic cultures.", contentIds: ["anaerobe-lab-general"] },
        { id: "obj-7-1-13", code: "7.1-M", title: "Describe the media of choice for the cultivation of anaerobes.", contentIds: ["anaerobe-media"] },
        { id: "obj-7-1-14", code: "7.1-N", title: "Describe the incubation conditions for cultivation of anaerobes.", contentIds: ["anaerobe-incubation"] },
        { id: "obj-7-1-15", code: "7.1-O", title: "Describe the colony morphology and pigmentation of anaerobes.", contentIds: ["anaerobe-lab-general", "clostridium", "gnb-anaerobes", "anaerobic-cocci"] },
        { id: "obj-7-1-16", code: "7.1-P", title: "Describe the presumptive identification of anaerobes based on the results of key biochemical laboratory results.", contentIds: ["anaerobe-presumptive"] },
        { id: "obj-7-1-17", code: "7.1-Q", title: "Describe definitive identification of anaerobes.", contentIds: ["anaerobe-definitive"] },
        { id: "obj-7-1-18", code: "7.1-R", title: "Describe the identification of Clostridium species.", contentIds: ["clostridium-lab-identification", "clostridium"] },
        { id: "obj-7-1-19", code: "7.1-S", title: "Describe the identification of gram-positive, non-spore-forming anaerobic bacilli.", contentIds: ["gp-nonspore-identification", "gp-nonspore"] },
        { id: "obj-7-1-20", code: "7.1-T", title: "Describe the identification of anaerobic gram-negative bacilli.", contentIds: ["gnb-identification", "gnb-anaerobes"] },
        { id: "obj-7-1-21", code: "7.1-U", title: "Describe the identification of anaerobic cocci.", contentIds: ["cocci-identification", "anaerobic-cocci"] },
        { id: "obj-7-1-22", code: "7.1-V", title: "Discuss antimicrobial susceptibility testing of anaerobes.", contentIds: ["anaerobe-ast"] },
        { id: "obj-7-1-23", code: "7.1-W", title: "Describe treatment of anaerobe-associated diseases.", contentIds: ["anaerobe-treatment"] }
      ],
      branches: [
        {
          id: "anaerobe-concepts", type: "topic", title: "Concepts of anaerobic bacteria", pages: "477–480", objectives: ["obj-7-1-1", "obj-7-1-2", "obj-7-1-3", "obj-7-1-4", "obj-7-1-5"], sections: [
            { title: "Terms and atmospheric requirements", page: "477", bullets: [
              "Anaerobes: able to replicate in the absence of oxygen (O2).",
              "Capnophilic: increased (5% to 10%) carbon dioxide (CO2), reduced (15%) oxygen (O2).",
              "Microaerophilic: oxygen reduced to 5% or less.",
              "Facultative anaerobes: prefer to use oxygen if available but can grow well without oxygen.",
              "Obligate (strict) anaerobes: killed in the presence of oxygen; grow only in the absence of oxygen. Free radicals in oxygen lead to cell destruction.",
              "Aerotolerant (moderate anaerobes): oxygen steals electrons used in metabolism."
            ]},
            { title: "Why oxygen is toxic to anaerobes", page: "477–478", bullets: [
              "Oxygen has a direct toxic effect. Anaerobes lack the enzymes to break down toxic products: superoxide anion, hydrogen peroxide, and hydroxyl radical.",
              "Strict aerobes and facultative anaerobes can protect themselves because they possess enzymes to break down toxic products, including superoxide dismutase and catalase.",
              "Bactericidal: antimicrobial agent that kills a bacterial isolate.",
              "Bacteriostatic: antimicrobial that inhibits bacterial growth but does not kill the bacteria."
            ]},
            { title: "Exogenous and endogenous anaerobes", page: "478", bullets: [
              "Exogenous: organisms exist outside of the bodies of animals. Infections develop when the agent is ingested or has gained entrance through trauma. Examples: Clostridium, Sarcina, Fusobacterium, and others.",
              "Endogenous: organisms exist inside the bodies of animals and become sources of infection. Examples: Bacteroides, Porphyromonas, Prevotella, Fusobacterium, Clostridium, Propionibacterium, and anaerobic cocci."
            ]},
            { title: "Endogenous anaerobes associated with human infections", page: "478–479", bullets: [
              "Actinomycosis: Actinomyces israelii and other Actinomyces spp.",
              "Antibiotic-associated diarrhea / pseudomembranous colitis: Clostridium difficile.",
              "Bacteremia: B. fragilis group, Fusobacteria, Clostridia, Peptostreptococci.",
              "Brain abscess: Bacteroides spp., Prevotella spp., Porphyromonas spp., Fusobacterium spp., and Clostridium spp.; these infections are often polymicrobial.",
              "Female genitourinary infections: Peptostreptococci, Bacteroides spp., Clostridium spp., Prevotella bivia, P. disiens, and Actinomyces israelii (IUD associated).",
              "Intraabdominal infections, liver abscess, peritonitis, perineal and perirectal infections: B. fragilis group, other Bacteroides spp., Fusobacterium spp., C. perfringens, other Clostridium spp., and Peptostreptococci; frequently polymicrobial.",
              "Myonecrosis: C. perfringens, C. novyi, and C. septicum (80% to 95% of the cases).",
              "Oral, sinus, and dental infections: Peptostreptococci, Porphyromonas spp., and Fusobacterium spp.; often polymicrobial.",
              "Aspiration pneumonia and pleuropulmonary infections: Porphyromonas spp., F. nucleatum, Peptostreptococci, B. fragilis group, and Actinomyces spp."
            ]},
            { title: "Anaerobes at specific anatomic sites", page: "479", bullets: [
              "Skin: Propionibacterium and Peptostreptococci.",
              "Upper respiratory tract: Peptostreptococci, Actinomyces, Propionibacterium, Fusobacterium, Prevotella, and Veillonella.",
              "Gastrointestinal tract: Bifidobacterium, Eubacterium/Eggerthella, Clostridium, Peptostreptococci, B. fragilis group, Bilophila, Fusobacterium, Porphyromonas, Prevotella, Sutterella, and Veillonella.",
              "Genitourinary tract: Peptostreptococci, Bifidobacterium, Fusobacterium, Lactobacillus, Mobiluncus, Prevotella, and Veillonella.",
              "Oral cavity: Actinomyces, Eubacterium/Eggerthella, Peptostreptococci, Fusobacterium, Prevotella, Bifidobacterium, Porphyromonas, and Veillonella."
            ]},
            { title: "Factors that predispose patients to anaerobic infections", page: "480", bullets: [
              "Trauma to protective barriers.",
              "Vascular stasis: prevention of oxygen flow to a particular site; examples include inflammation of a wound or diabetes.",
              "Organisms gain entry and have ideal conditions that allow a suitable growth environment: bite wounds; aspiration of oral flora into deep lung; oral surgery; puncture wounds or burns with soil contamination.",
              "Table 7.1 lists potential virulence factors, possible roles, and anaerobes known or thought to possess them. See the linked original PDF page for the full table."
            ]},
            { title: "Indications of anaerobe involvement in infectious processes", page: "480", bullets: [
              "Infection in close proximity to a mucosal surface.",
              "Presence of foul odor.",
              "Presence of a large quantity of gas.",
              "Presence of black color or brick-red fluorescence when exposed to long-wave UV light, such as a Wood’s light.",
              "Presence of sulfur granules: dense clumps of bacteria that may be colored."
            ]}
          ]
        },
        {
          id: "anaerobe-clinical-overview", type: "topic", title: "Frequently encountered anaerobes", pages: "481", objectives: ["obj-7-1-6", "obj-7-1-7", "obj-7-1-8", "obj-7-1-9"], sections: [
            { title: "Frequently encountered groups", page: "481", bullets: [
              "Clostridium spp. — gram-positive.",
              "Peptococcaceae — gram-positive.",
              "Bacteroides spp. — gram-negative.",
              "Fusobacterium spp. — gram-negative.",
              "Prevotella spp. and Porphyromonas spp. — gram-negative.",
              "Veillonella spp. — gram-negative."
            ]}
          ]
        },
        {
          id: "clostridium", type: "genus", title: "Clostridium", pages: "481–512", objectives: ["obj-7-1-6", "obj-7-1-18"], sections: [
            { title: "General identification characteristics", page: "481–482", bullets: [
              "All spore-forming anaerobic bacilli are classified in the genus Clostridium and are collectively termed clostridia.",
              "Grouped according to the location of the endospore within the cell.",
              "Commonly encountered species and features: C. perfringens — boxcar, large, square rods; C. tetani — swollen terminal spores; C. septicum and C. sordellii — thin rods with subterminal spores; C. difficile — thin rods, rare spores."
            ]},
            { title: "Species-level clinical and colony features", page: "481–483", bullets: [
              "C. perfringens: boxcar, large, square gram-positive rods; produces a double zone of hemolysis; subterminal spores.",
              "C. tetani: slow growing, heavily swarming; terminal spores.",
              "C. septicum: heavy swarming; gray, circular, glossy, translucent colonies resembling a “Medusa head”; beta-hemolytic; subterminal spores.",
              "C. botulinum: gray-white, circular to irregular colonies, usually beta-hemolytic; subterminal spores.",
              "C. histolyticum: “bread crumb” colony description; subterminal spores.",
              "C. novyi and C. bifermentans: subterminal spores.",
              "C. difficile: large, flat colonies; barnyard odor; chartreuse (yellow-green) fluorescence; subterminal spores.",
              "C. tertium: convex, smooth; aerotolerant growth; terminal spores.",
              "The identification section also names C. sordellii; the presumptive identification table describes very large, lobate, irregular, flat colonies and thin rods with subterminal spores."
            ]},
            { title: "Clinical infections associated with Clostridium", page: "482–485", bullets: [
              "Food poisoning; botulism; tetanus; myonecrosis; bacteremia; Clostridium difficile-associated diseases."
            ]}
          ], children: [
            { id: "c-perfringens", type: "species", title: "Clostridium perfringens", scientific: "Clostridium perfringens", pages: "481, 483–485, 510–512", objectives: ["obj-7-1-6", "obj-7-1-18"], sections: [
              { title: "Morphology and identification", page: "481, 511–512", bullets: ["Boxcar, large, square gram-positive rods.", "Produces a double zone of hemolysis.", "Subterminal spores.", "Lecithinase-positive reaction on egg-yolk agar is associated with C. perfringens; the source's identification algorithm begins with double-zone hemolysis on blood agar."]},
              { title: "Food poisoning", page: "483", bullets: ["Causative agent of food poisoning.", "Type A produces α toxin. Type C produces α and β toxins.", "Type A: diarrhea and cramps 8–30 hours after ingestion, linked to sporulation.", "Type C: acute onset of severe abdominal pain and diarrhea, often bloody and may be accompanied by vomiting; symptoms may occur as soon as 5–6 hours.", "Source: ingestion of enterotoxin-producing strains in contaminated food.", "Type A is usually self-resolving. Type C: oral rehydration or, in severe cases, intravenous fluids and electrolyte replacement can prevent or treat dehydration. Proper food handling is listed for prevention."]},
              { title: "Myonecrosis and bacteremia", page: "484–485", bullets: ["C. perfringens is the most common cause of myonecrosis (gas gangrene). Alpha toxin causes tissue necrosis and deeper invasion.", "Myonecrosis presents with pain and swelling with obvious tissue necrosis; infected wounds may require amputation. Treatment includes antibiotics and surgical debridement; hyperbaric oxygen can help destroy anaerobes.", "C. perfringens is the most common Clostridium isolate from blood cultures."]}
            ]},
            { id: "c-botulinum", type: "species", title: "Clostridium botulinum", scientific: "Clostridium botulinum", pages: "481, 483–484", objectives: ["obj-7-1-6"], sections: [
              { title: "Morphology and botulism", page: "481, 483–484", bullets: ["Gray-white, circular to irregular colonies, usually beta-hemolytic; subterminal spores.", "Produces botulinum toxins A through G, but only types A, B, and E are associated with human disease.", "Toxin A is used in medical treatments such as Botox®. Botulinum toxin prevents release of acetylcholine, causing paralysis and sometimes death.", "Symptoms: flaccid paralysis, double vision, blurred vision, droopy eyelids, slurred speech, difficulty swallowing, dry mouth, and muscle weakness. Symptoms may appear 2 hours to 8 days later.", "Sources: home canning, home-cured meats, and honey. Infant botulism follows ingestion of spores in contaminated honey; spores germinate, vegetative cells colonize the colon, and subsequently produce toxins.", "Treatment/prevention listed: proper food handling during manufacture and antitoxin."]}
            ]},
            { id: "c-tetani", type: "species", title: "Clostridium tetani", scientific: "Clostridium tetani", pages: "481, 484", objectives: ["obj-7-1-6"], sections: [
              { title: "Morphology and tetanus", page: "481, 484", bullets: ["Slow growing and heavily swarming; terminal spores; swollen terminal spores are noted in the laboratory identification section.", "Produces tetanospasmin neurotoxin. It acts on inhibitory neurons, preventing release of neurotransmitters and causing contortion of muscles.", "Symptoms: muscular rigidity of the jaw, neck, and lumbar region; difficulty swallowing; sometimes limbs are involved. Begins about 7 days after inoculation.", "Sources: wounds contaminated with dirt, feces, or spit (saliva); puncture wounds; burns; crush injuries.", "The course PDF lists the diphtheria, pertussis, tetanus (DPT) vaccine under treatment/prevention."]}
            ]},
            { id: "c-septicum", type: "species", title: "Clostridium septicum", scientific: "Clostridium septicum", pages: "481–485", objectives: ["obj-7-1-6"], sections: [
              { title: "Characteristics and clinical significance", page: "481, 485", bullets: ["Heavily swarming; gray, circular, glossy, translucent colonies resembling a “Medusa head”; beta-hemolytic; subterminal spores.", "Listed among causes of myonecrosis.", "C. septicum in bacteremia is described as a marker organism for malignancy of the gastrointestinal tract."]}
            ]},
            { id: "c-difficile", type: "species", title: "Clostridium difficile", scientific: "Clostridium difficile", pages: "481–482, 486, 497, 505–506", objectives: ["obj-7-1-6", "obj-7-1-15", "obj-7-1-16"], sections: [
              { title: "Morphology and laboratory features", page: "481–482, 497", bullets: ["Large, flat colonies; barnyard odor; chartreuse (yellow-green) fluorescence; subterminal spores. The identification section describes thin rods with rare spores.", "Cycloserine–cefoxitin–fructose agar (CCFA) is selective and differential for recovery and presumptive identification. C. difficile produces yellow ground-glass colonies and a characteristic odor resembling a horse stable.", "Chartreuse fluorescence under long-wave UV light is listed for C. difficile and C. innocuum."]},
              { title: "C. difficile-associated disease", page: "486", bullets: ["A common cause of health care-associated (nosocomial) infection and the most common isolate in antibiotic-associated diarrhea.", "Pseudomembranous colitis: necrosis of colon tissue and bloody diarrhea.", "Toxin A is an enterotoxin; toxin B is a cytotoxin.", "Sources include transfer among patients and the hands of hospital personnel.", "Virulent strain B1/NAP1/027 produces larger amounts of toxins A and B plus a third toxin, binary toxin, and has high-level resistance to fluoroquinolones.", "Treatment/prevention listed: antibiotics such as metronidazole, vancomycin, or fidaxomicin; hand washing and proper hygiene."]}
            ]},
            { id: "c-histolyticum", type: "species", title: "Clostridium histolyticum", scientific: "Clostridium histolyticum", pages: "481, 485", objectives: ["obj-7-1-6"], sections: [{ title: "Characteristics", page: "481, 485", bullets: ["“Bread crumb” colony description; subterminal spores.", "Listed among organisms causing myonecrosis."]}]},
            { id: "c-novyi", type: "species", title: "Clostridium novyi", scientific: "Clostridium novyi", pages: "481, 485", objectives: ["obj-7-1-6"], sections: [{ title: "Characteristics", page: "481, 485", bullets: ["Subterminal spores.", "Listed among organisms causing myonecrosis."]}]},
            { id: "c-bifermentans", type: "species", title: "Clostridium bifermentans", scientific: "Clostridium bifermentans", pages: "481, 485", objectives: ["obj-7-1-6"], sections: [{ title: "Characteristics", page: "481, 485", bullets: ["Subterminal spores.", "Listed among causes of myonecrosis and among organisms isolated in bacteremia."]}]},
            { id: "c-tertium", type: "species", title: "Clostridium tertium", scientific: "Clostridium tertium", pages: "481, 485", objectives: ["obj-7-1-6"], sections: [{ title: "Characteristics", page: "481, 485", bullets: ["Convex, smooth colonies; aerotolerant growth; terminal spores.", "Listed among organisms isolated in bacteremia."]}]},
            { id: "c-sordellii", type: "species", title: "Clostridium sordellii", scientific: "Clostridium sordellii", pages: "511–512, 522", objectives: ["obj-7-1-18"], sections: [{ title: "Presumptive identification", page: "511–512, 522", bullets: ["The course's identification section describes thin rods with subterminal spores.", "Table 7.10 describes very large, lobate, irregular, flat colonies and thin rods with subterminal spores.", "Included in the Clostridium identification algorithm; see original PDF page 512 for the flowchart."]}]}
          ]
        },
        {
          id: "gp-nonspore", type: "topic", title: "Gram-positive non-spore-forming anaerobic bacilli", pages: "486–488, 513–514", objectives: ["obj-7-1-7", "obj-7-1-19"], sections: [
            { title: "Groups and colony morphology", page: "486", bullets: [
              "Phylum Actinobacteria: Actinomyces spp. — small, smooth, flat, convex, gray-white, translucent colonies.",
              "Bifidobacterium — small, white, convex, shiny colonies with irregular edge.",
              "Propionibacterium spp. — small gray-white colonies that become larger and more yellowish tan with age.",
              "Mobiluncus spp. — small, low, convex, translucent colonies.",
              "Eggerthella — small, gray, translucent, circular, convex colonies; catalase variable.",
              "Phylum Firmicutes: Lactobacillus spp. — colony appearance varies greatly; some species produce pinpoint alpha-hemolytic colonies on SBA, others are gray, medium, rough; spiral-shaped; usually considered a contaminant, but serious bacteremia and endocarditis occur in immunocompromised patients."
            ]},
            { title: "Clinical infections", page: "486–487", bullets: ["Clinical infections listed include actinomycosis and bacterial vaginosis.", "Actinomycosis is a chronic, granulomatous disease characterized by sinus tracts and fistulae that erupt to the surface and drain pus containing sulfur granules.", "Bacterial vaginosis: Lactobacillus spp. usually comprise the largest portion of vaginal biota. In BV, a shift in the vaginal biota results in overgrowth of other endogenous anaerobes. Causative agents listed: Mobiluncus spp., Bacteroides spp., Prevotella spp., Gardnerella spp. Symptoms: gray-white, homogeneous, malodorous vaginal discharge. Treatment/prevention: antibiotics."]}
          ], children: [
            { id: "actinomyces", type: "genus", title: "Actinomyces", pages: "478–479, 486–487, 513–514", objectives: ["obj-7-1-7", "obj-7-1-19"], sections: [
              { title: "Morphology and identification", page: "486–487, 513–514", bullets: ["Actinomyces spp. colonies: small, smooth, flat, convex, gray-white, translucent.", "Actinomyces may appear as straight to slightly curved short rods to long filaments; short rods with clubbed ends in diphtheroid arrangements; short chains or small clusters; longer rods and filaments may be straight or wavy and branched.", "A. israelii colonies may have a molar-tooth appearance. Depending on species, colonies may be red, pink, tan, yellow, white, or grayish."]},
              { title: "Actinomycosis", page: "487", bullets: ["Chronic, granulomatous disease characterized by sinus tracts and fistulae that erupt to the surface and drain pus containing sulfur granules (dense clumps of bacteria that may be colored).", "Causative Actinobacteria agents listed: Actinomyces israelii; Bifidobacterium; Propionibacterium.", "Symptoms include abscesses, tissue fibrosis, and draining sinuses that discharge sulfur granules.", "Often follows dental sepsis or manipulation, trauma, tonsillitis, otitis, or mastoiditis.", "Penicillin is the preferred treatment."]}
            ], children: [
              { id: "a-israelii", type: "species", title: "Actinomyces israelii", scientific: "Actinomyces israelii", pages: "478, 487, 514", objectives: ["obj-7-1-7", "obj-7-1-19"], sections: [{ title: "Key features", page: "487, 514", bullets: ["Associated with actinomycosis.", "Molar-tooth colony appearance.", "Sulfur granules in draining pus; penicillin is the preferred treatment listed in the course PDF."]}]}
            ]},
            { id: "bifidobacterium", type: "genus", title: "Bifidobacterium", pages: "479, 486–487, 513–514", objectives: ["obj-7-1-7", "obj-7-1-19"], sections: [
              { title: "Characteristics", page: "486–487, 513–514", bullets: ["Small, white, convex, shiny colonies with an irregular edge.", "Variable in shape, ranging from coccobacilli to long branching rods. Cell ends may be pointed, bent, club-shaped, spatulated, or bifurcated (forked).", "Listed among causative Actinobacteria agents in actinomycosis.", "Table 7.7 includes characteristics for Bifidobacterium spp.; see the original PDF for the full comparative table."]}
            ]},
            { id: "propionibacterium", type: "genus", title: "Propionibacterium", pages: "478–479, 486–487, 513–514", objectives: ["obj-7-1-7", "obj-7-1-19"], sections: [
              { title: "Characteristics", page: "486–487, 513–514", bullets: ["Small gray-white colonies become larger and more yellowish tan with age.", "Variable in shape, ranging from coccoid and short diphtheroidal rods to long, branched filaments.", "Listed among causative Actinobacteria agents in actinomycosis.", "P. acnes: pleomorphic rods with a diphtheroid appearance; table 7.10 describes small, opaque, enamel-white, circular, catalase-positive colonies and coryneform rods.", "Propionibacterium propionicum is associated with sulfur granules in the anaerobe indications section."]}
            ], children: [
              { id: "p-acnes", type: "species", title: "Propionibacterium acnes", scientific: "Propionibacterium acnes", pages: "480, 513–514, 522", objectives: ["obj-7-1-19"], sections: [{ title: "Identification", page: "513–514, 522", bullets: ["Pleomorphic rods with a diphtheroid appearance.", "Table 7.10 describes small, opaque, enamel-white, circular colonies (catalase-positive) and coryneform rods.", "Named in the source discussion of sulfur granules and related organisms."]}]}
            ]},
            { id: "mobiluncus", type: "genus", title: "Mobiluncus", pages: "486, 488", objectives: ["obj-7-1-7"], sections: [{ title: "Characteristics and clinical significance", page: "486, 488", bullets: ["Small, low, convex, translucent colonies.", "Listed as a causative agent associated with bacterial vaginosis."]}]},
            { id: "eggerthella", type: "genus", title: "Eggerthella", pages: "486, 505–506", objectives: ["obj-7-1-7", "obj-7-1-16"], sections: [{ title: "Characteristics", page: "486, 505–506", bullets: ["Small, gray, translucent, circular, convex colonies; catalase variable.", "Eggerthella lenta is listed as producing red or no fluorescence under long-wave UV light in Table 7.5."]}]},
            { id: "lactobacillus", type: "genus", title: "Lactobacillus", pages: "486, 488", objectives: ["obj-7-1-7"], sections: [{ title: "Characteristics and clinical significance", page: "486, 488", bullets: ["Phylum Firmicutes.", "Colony appearance varies greatly; some species produce pinpoint alpha-hemolytic colonies on SBA, others are gray, medium, and rough.", "Spiral-shaped; usually considered a contaminant.", "Serious infections, primarily bacteremia and endocarditis, are known to occur in immunocompromised patients.", "Lactobacillus spp. usually comprise the largest portion of the vaginal biota."]}]}
          ]
        },
        {
          id: "gnb-anaerobes", type: "topic", title: "Anaerobic gram-negative bacilli", pages: "488–489, 515–518", objectives: ["obj-7-1-8", "obj-7-1-20"], sections: [
            { title: "Clinical significance and general morphology", page: "488–489", bullets: ["Frequently associated with abscesses, peritoneal infections, diabetic foot ulcers, and decubitus pressure sores.", "Genera most commonly encountered in clinical specimens: Bacteroides fragilis group, Porphyromonas, Prevotella, and Fusobacterium.", "General colony descriptions: B. fragilis group — white to gray, circular, convex, translucent to semiopaque; Porphyromonas — dark brown to black, mucoid or white circular convex colonies, translucent to opaque; Prevotella — white, circular, convex, translucent to opaque; Fusobacterium — chartreuse fluorescence.", "Clinical infections listed: bacteremia and Lemierre’s disease."]},
            { title: "Bacteremia", page: "489", bullets: ["Causative agents: B. fragilis group and Fusobacteria.", "B. fragilis is the most common species of anaerobic bacteria isolated from infectious processes of soft tissue and anaerobic bacteremia and is responsible for more than 60% of infections caused by the B. fragilis group.", "Symptoms: fever, rapid heart rate, shaking chills, low blood pressure; may progress to sepsis, severe sepsis, or septic shock with abdominal pain, nausea, vomiting, diarrhea, rapid breathing, and confusion.", "Sources include abscesses beneath mucosal surfaces, peritoneal infections, diabetic foot ulcers, and decubitus pressure sores.", "The course lists kanamycin-sensitive and colistin-sensitive for Fusobacteria; antibiotics for the B. fragilis group."]},
            { title: "Lemierre’s disease", page: "489", bullets: ["Causative agent: Fusobacterium necrophorum.", "A peritonsillar abscess containing a number of bacterial species.", "A rare condition that can occur following group A streptococcal pharyngitis and leads to thrombophlebitis of the jugular vein.", "The course lists kanamycin-sensitive and colistin-sensitive under treatment/prevention."]}
          ], children: [
            { id: "bacteroides", type: "genus", title: "Bacteroides", pages: "478–479, 488–489, 515, 518", objectives: ["obj-7-1-8", "obj-7-1-20"], sections: [
              { title: "B. fragilis group", page: "515, 518", bullets: ["Bile resistant.", "KVLB agar and BBE agar are listed for recovery.", "B. fragilis: most common species of anaerobic bacteria isolated from infectious processes of soft tissue and anaerobic bacteremia; responsible for more than 60% of infections caused by the B. fragilis group.", "Other named group members: B. caccae, B. thetaiotaomicron, and B. uniformis.", "B. thetaiotaomicron: second most frequently encountered species of the group and has the highest degree of antimicrobial resistance of the group.", "B. uniformis: nonpigmented; esculin hydrolysis negative."]},
              { title: "Bacteroides ureolyticus", page: "515, 518", bullets: ["Bile sensitive and nonpigmented.", "Isolated from blood following tooth extraction.", "Urease positive.", "Tiny rods or coccobacilli.", "Table 7.8 describes translucent, sometimes pitting colony morphology; no growth on BBE; catalase variable; formate–fumarate positive."]}
            ], children: [
              { id: "b-fragilis", type: "species", title: "Bacteroides fragilis", scientific: "Bacteroides fragilis", pages: "489, 515, 518", objectives: ["obj-7-1-8", "obj-7-1-20"], sections: [{ title: "Identification and significance", page: "489, 515, 518", bullets: ["Member of the bile-resistant B. fragilis group; grows on KVLB and BBE.", "Most common species of anaerobic bacteria isolated from infectious processes of soft tissue and anaerobic bacteremia.", "Responsible for more than 60% of infections caused by the B. fragilis group.", "Table 7.8 describes large (>1 mm) colony morphology, growth on KVLB and BBE, and regular cellular morphology."]}]},
              { id: "b-caccae", type: "species", title: "Bacteroides caccae", scientific: "Bacteroides caccae", pages: "515", objectives: ["obj-7-1-8"], sections: [{ title: "Characteristics", page: "515", bullets: ["Listed as a member of the B. fragilis group."]}]},
              { id: "b-thetaiotaomicron", type: "species", title: "Bacteroides thetaiotaomicron", scientific: "Bacteroides thetaiotaomicron", pages: "515", objectives: ["obj-7-1-8"], sections: [{ title: "Characteristics", page: "515", bullets: ["Second most frequently encountered species of the B. fragilis group.", "Has the highest degree of antimicrobial resistance of the group."]}]},
              { id: "b-uniformis", type: "species", title: "Bacteroides uniformis", scientific: "Bacteroides uniformis", pages: "515", objectives: ["obj-7-1-8", "obj-7-1-20"], sections: [{ title: "Characteristics", page: "515", bullets: ["Nonpigmented.", "Esculin hydrolysis negative."]}]},
              { id: "b-ureolyticus", type: "species", title: "Bacteroides ureolyticus", scientific: "Bacteroides ureolyticus", pages: "515, 518", objectives: ["obj-7-1-8", "obj-7-1-20"], sections: [{ title: "Characteristics", page: "515, 518", bullets: ["Bile sensitive; nonpigmented; urease positive.", "Isolated from blood following tooth extraction.", "Tiny rods or coccobacilli.", "Table 7.8: translucent, pitting (some) colony morphology; no growth on BBE; catalase variable; formate–fumarate positive."]}]}
            ]},
            { id: "bilophila", type: "genus", title: "Bilophila", pages: "479, 489, 516, 525", objectives: ["obj-7-1-8", "obj-7-1-20", "obj-7-1-22"], sections: [
              { title: "Bilophila wadsworthia", page: "516", bullets: ["Bile resistant and pigmented.", "BBE agar produces a characteristic fish-eye appearance.", "Included among organisms commonly resistant to antimicrobial agents in the susceptibility section."]}
            ], children: [
              { id: "bilophila-wadsworthia", type: "species", title: "Bilophila wadsworthia", scientific: "Bilophila wadsworthia", pages: "516, 525", objectives: ["obj-7-1-8", "obj-7-1-20", "obj-7-1-22"], sections: [{ title: "Identification", page: "516", bullets: ["Bile resistant; pigmented; BBE agar produces a characteristic fish-eye appearance.", "Listed among anaerobes that are highly virulent and/or commonly resistant to antimicrobial agents."]}]}
            ]},
            { id: "prevotella", type: "genus", title: "Prevotella", pages: "478–480, 488–489, 505–506, 516, 523, 525", objectives: ["obj-7-1-8", "obj-7-1-16", "obj-7-1-20", "obj-7-1-22"], sections: [
              { title: "General characteristics", page: "516", bullets: ["Bile sensitive and pigmented.", "Produce protoporphyrin, causing a brown-black color shift of macroscopic colonies over 2 to 3 weeks.", "Brick-red fluorescence under long-wave UV light.", "Tiny coccobacilli or bacilli; associated with vagina and oral cavities.", "P. denticola is esculin positive. P. intermedia is indole positive and lipase positive.", "Some bile-sensitive pigmented species can be categorized as pitting or nonpitting colonies.", "Table 7.5 lists P. bivia and P. disiens as light orange to pink (coral) under long-wave UV; other pigmented Prevotella as brick red."]}
            ], children: [
              { id: "p-denticola", type: "species", title: "Prevotella denticola", scientific: "Prevotella denticola", pages: "516", objectives: ["obj-7-1-8", "obj-7-1-20"], sections: [{ title: "Biochemical feature", page: "516", bullets: ["Esculin positive."]}]},
              { id: "p-intermedia", type: "species", title: "Prevotella intermedia", scientific: "Prevotella intermedia", pages: "516, 523", objectives: ["obj-7-1-8", "obj-7-1-20"], sections: [{ title: "Identification", page: "516, 523", bullets: ["Indole positive and lipase positive.", "Table 7.11 describes tiny coccobacilli, small translucent or opaque colonies with brick-red fluorescence on blood and KVLB agar, and no growth on BBE."]}]},
              { id: "p-bivia", type: "species", title: "Prevotella bivia", scientific: "Prevotella bivia", pages: "478, 505–506", objectives: ["obj-7-1-8", "obj-7-1-16"], sections: [{ title: "Characteristics", page: "478, 505–506", bullets: ["Listed among organisms associated with female genitourinary infections.", "Table 7.5 lists light orange to pink (coral) fluorescence under long-wave UV light."]}]},
              { id: "p-disiens", type: "species", title: "Prevotella disiens", scientific: "Prevotella disiens", pages: "478, 505–506", objectives: ["obj-7-1-8", "obj-7-1-16"], sections: [{ title: "Characteristics", page: "478, 505–506", bullets: ["Listed among organisms associated with female genitourinary infections.", "Table 7.5 lists light orange to pink (coral) fluorescence under long-wave UV light."]}]}
            ]},
            { id: "porphyromonas", type: "genus", title: "Porphyromonas", pages: "478–480, 488–489, 495–496, 505–506, 516", objectives: ["obj-7-1-8", "obj-7-1-12", "obj-7-1-15", "obj-7-1-20"], sections: [
              { title: "General characteristics", page: "516", bullets: ["Bile sensitive and pigmented.", "Brick-red fluorescence under long-wave UV light.", "Tiny coccobacilli.", "No growth on media containing vancomycin.", "Some species produce foul-smelling metabolic end products; pigmented species can produce brick-red fluorescence before becoming darkly pigmented."]}
            ]},
            { id: "fusobacterium", type: "genus", title: "Fusobacterium", pages: "478–480, 488–489, 495, 505–506, 516–517", objectives: ["obj-7-1-8", "obj-7-1-15", "obj-7-1-20"], sections: [
              { title: "General characteristics", page: "517", bullets: ["Generally considered gram-negative, long, thin, tapered rods (fusiform); may appear pleomorphic.", "Foul-smelling metabolic end products are described for many Fusobacterium species.", "Fusobacterium spp. are listed among causes of bacteremia; F. necrophorum is the causative agent of Lemierre’s disease.", "Fusobacterium produces chartreuse fluorescence in the fluorescence identification section."]}
            ], children: [
              { id: "f-nucleatum", type: "species", title: "Fusobacterium nucleatum", scientific: "Fusobacterium nucleatum", pages: "479, 488–489, 505–506, 517–518", objectives: ["obj-7-1-8", "obj-7-1-16", "obj-7-1-20"], sections: [{ title: "Identification", page: "517–518", bullets: ["Bile sensitive; classic fusiform shape; indole positive.", "Produces butyric acid from peptone–yeast extract–glucose (PYG) medium.", "Chartreuse fluorescence under long-wave UV light.", "Table 7.8 describes slender, pointed cells and chartreuse fluorescence."]}]},
              { id: "f-mortiferum", type: "species", title: "Fusobacterium mortiferum", scientific: "Fusobacterium mortiferum", pages: "517–518", objectives: ["obj-7-1-8", "obj-7-1-20"], sections: [{ title: "Identification", page: "517–518", bullets: ["Bile resistant; indole negative; esculin positive.", "Table 7.8 describes chartreuse fluorescence and bizarre, round bodies."]}]},
              { id: "f-russi", type: "species", title: "Fusobacterium russi", scientific: "Fusobacterium russi", pages: "517", objectives: ["obj-7-1-8", "obj-7-1-20"], sections: [{ title: "Identification", page: "517", bullets: ["Bile sensitive; indole negative."]}]},
              { id: "f-necrophorum", type: "species", title: "Fusobacterium necrophorum", scientific: "Fusobacterium necrophorum", pages: "489", objectives: ["obj-7-1-8"], sections: [{ title: "Clinical significance", page: "489", bullets: ["Causative agent of Lemierre’s disease.", "The course describes Lemierre’s disease as a rare condition that can follow group A streptococcal pharyngitis and lead to thrombophlebitis of the jugular vein."]}]}
            ]}
          ]
        },
        {
          id: "anaerobic-cocci", type: "topic", title: "Anaerobic cocci", pages: "490–491, 519–521", objectives: ["obj-7-1-9", "obj-7-1-21"], sections: [
            { title: "General characteristics and clinical infections", page: "490–491", bullets: ["Gram-positive anaerobic cocci were formerly grouped as Peptostreptococcus but have now been reclassified into at least five genera: Peptostreptococcus, Anaerococcus, Finegoldia, Parvimonas, and Peptoniphilus.", "Peptococcus niger: tiny, black, convex, shiny, smooth, circular colonies with entire edge; become light gray when exposed to air.", "Peptostreptococcus: medium white to gray, opaque colonies with a sweet, fetid odor.", "Anaerococcus: small, white, translucent, smooth colonies.", "Finegoldia: tiny, gray, translucent, nonhemolytic colonies.", "Veillonella spp. are gram-negative anaerobic cocci; small, almost translucent, grayish-white, smooth, opaque colonies.", "Anaerobic cocci are weakly pathogenic but can be isolated from a wide variety of infections: brain abscess, meningitis, aspiration pneumonia, lung abscess, gingivitis, and other periodontal diseases.", "Most often associated with polymicrobial infections; also isolated from blood cultures and infections following orthopedic surgery.", "The course lists vancomycin sensitivity for Peptostreptococcus; kanamycin and vancomycin sensitivity for Finegoldia; kanamycin and colistin sensitivity for Veillonella."]}
          ], children: [
            { id: "gram-positive-anaerobic-cocci", type: "group", title: "Gram-positive anaerobic cocci", pages: "490–491, 519–521", objectives: ["obj-7-1-9", "obj-7-1-21"], sections: [
              { title: "Genera and identification", page: "490–491, 519–521", bullets: ["Formerly grouped as Peptostreptococcus; now reclassified into Peptostreptococcus, Anaerococcus, Finegoldia, Parvimonas, and Peptoniphilus.", "Peptostreptococcus: medium white-to-gray, opaque colonies with sweet, fetid odor.", "Anaerococcus: small, white, translucent, smooth colonies.", "Finegoldia: tiny, gray, translucent, nonhemolytic colonies.", "Parvimonas and Peptoniphilus are listed as genera; species-level distinctions are shown in the original tables and identification flowchart."]}
            ], children: [
              { id: "peptococcus-niger", type: "species", title: "Peptococcus niger", scientific: "Peptococcus niger", pages: "490, 519–521", objectives: ["obj-7-1-9", "obj-7-1-21"], sections: [{ title: "Identification", page: "490, 519–521", bullets: ["Tiny, black, convex, shiny, smooth, circular colonies with an entire edge; become light gray when exposed to air.", "Black pigmentation is the key differentiating feature in the identification flowchart.", "Described as weakly catalase-positive and rarely isolated from clinical specimens in the flowchart on page 521."]}]},
              { id: "peptostreptococcus-anaerobius", type: "species", title: "Peptostreptococcus anaerobius", scientific: "Peptostreptococcus anaerobius", pages: "490–491, 507, 519–521", objectives: ["obj-7-1-9", "obj-7-1-16", "obj-7-1-21"], sections: [{ title: "Identification", page: "490–491, 507, 519–521", bullets: ["Medium white-to-gray, opaque colonies with sweet, fetid odor.", "Sodium polyanethol sulfonate (SPS) susceptible.", "Not black pigmented.", "Table 7.9 and Figure 7.23 contain additional differentiation features; see original PDF pages 521 and 521."]}]},
              { id: "peptoniphilus-asaccharolyticus", type: "species", title: "Peptoniphilus asaccharolyticus", scientific: "Peptoniphilus asaccharolyticus", pages: "507, 519–521", objectives: ["obj-7-1-9", "obj-7-1-16", "obj-7-1-21"], sections: [{ title: "Identification", page: "507, 519–521", bullets: ["SPS resistant; indole positive; does not reduce nitrate; not black pigmented.", "Table 7.9 and the gram-positive cocci identification flowchart contain further differentiation details."]}]},
              { id: "anaerococcus", type: "genus", title: "Anaerococcus", pages: "490, 521", objectives: ["obj-7-1-9", "obj-7-1-21"], sections: [{ title: "Characteristics", page: "490, 521", bullets: ["Small, white, translucent, smooth colonies.", "The identification flowchart includes Anaerococcus (Peptostreptococcus) tetradius; see source PDF page 521."]}]},
              { id: "finegoldia", type: "genus", title: "Finegoldia", pages: "490–491, 521", objectives: ["obj-7-1-9", "obj-7-1-21"], sections: [{ title: "Characteristics", page: "490–491, 521", bullets: ["Tiny, gray, translucent, nonhemolytic colonies.", "The course lists kanamycin-sensitive and vancomycin-sensitive under treatment.", "Additional species characteristics appear in Table 7.9 on original PDF page 521."]}]},
              { id: "parvimonas", type: "genus", title: "Parvimonas", pages: "490, 521", objectives: ["obj-7-1-9", "obj-7-1-21"], sections: [{ title: "Characteristics", page: "490, 521", bullets: ["Listed as one of the reclassified gram-positive anaerobic cocci genera.", "Parvimonas micra is included in Table 7.9 on original PDF page 521."]}]},
              { id: "peptoniphilus", type: "genus", title: "Peptoniphilus", pages: "490, 521", objectives: ["obj-7-1-9", "obj-7-1-21"], sections: [{ title: "Characteristics", page: "490, 521", bullets: ["Listed as one of the reclassified gram-positive anaerobic cocci genera.", "Peptoniphilus asaccharolyticus and P. indolicus are included in Table 7.9 on original PDF page 521."]}]}
            ]},
            { id: "gram-negative-anaerobic-cocci", type: "group", title: "Gram-negative anaerobic cocci", pages: "490–491, 519–521", objectives: ["obj-7-1-9", "obj-7-1-21"], sections: [{ title: "Veillonella", page: "490–491, 519", bullets: ["Veillonella spp. are gram-negative anaerobic cocci.", "Small, almost translucent, grayish-white, smooth, opaque colonies.", "The course lists kanamycin-sensitive and colistin-sensitive under treatment."]}], children: [
              { id: "veillonella", type: "genus", title: "Veillonella", pages: "490–491, 505–507, 519", objectives: ["obj-7-1-9", "obj-7-1-16", "obj-7-1-21"], sections: [{ title: "Identification", page: "490–491, 505–507, 519", bullets: ["Gram-negative cocci.", "Small, almost translucent, grayish-white, smooth, opaque colonies.", "Catalase positive and red fluorescence; red fluorescence depends on culture medium and fades rapidly.", "The course lists susceptibility to kanamycin and colistin."]}]}
            ]}
          ]
        },
        {
          id: "anaerobe-specimens", type: "topic", title: "Specimen processing and transport", pages: "492–494", objectives: ["obj-7-1-10", "obj-7-1-11"], sections: [
            { title: "Acceptable specimens", page: "492", bullets: [
              "Central nervous system: cerebrospinal fluid, aspirated abscess material, tissue from biopsy or autopsy.",
              "Dental / ear-nose-throat: aspirated abscess material, biopsied tissue.",
              "Localized abscesses: needle and syringe aspiration of closed abscesses.",
              "Decubitus ulcers: aspirated pus.",
              "Sinus tracts or draining wounds: aspirated material.",
              "Deep tissue or bone: specimens obtained during surgery from depths of wound or underlying bone lesion.",
              "Pulmonary: aspirate obtained by direct lung puncture; pleural fluid obtained by thoracentesis; open lung biopsy; sulfur granules from draining fistula.",
              "Intra-abdominal: aspirate from abscess, ascites fluid, peritoneal fluid, tissue.",
              "Urinary tract: suprapubic bladder aspiration.",
              "Female genital tract: aspirate from loculated abscess; culdocentesis specimen.",
              "Other: blood, bone marrow, synovial fluid, biopsied tissue from any normally sterile site."
            ]},
            { title: "Unacceptable specimens", page: "493", bullets: [
              "Dental / ear-nose-throat: throat swabs, nasopharyngeal swabs, gingival swabs, or any other intraoral surface swabs.",
              "Pulmonary: sputum obtained by nasotracheal or endotracheal suction; bronchial washings or other specimens obtained via a bronchoscope (unless a protected double-lumen catheter is used); expectorated sputum.",
              "Female genital tract: vaginal, cervical, or urethral swabs; female genital tract specimens collected via the vagina; swabs of a vaginal discharge.",
              "Urinary tract: voided or catheterized urine.",
              "Feces: large bowel contents, feces, ileostomy and colostomy effluents, rectal swabs, gastric and small bowel contents.",
              "Ulcers / wounds: surface swabs from decubitus ulcers, perirectal abscesses, foot ulcers, exposed wounds, eschars, pilonidal sinuses, and other sinus tracts.",
              "Other: any material adjacent to a mucous membrane that has not been adequately decontaminated."
            ]},
            { title: "Specimen quality, transport, and processing", page: "494", bullets: [
              "Collect an acceptable sample from the site of infection; this prevents misleading and nonuseful clinical results.",
              "Rapid processing is required to prevent shocking anaerobes due to oxygen toxicity and drying of the specimen.",
              "Aspirates: collecting with needle and syringe prevents contamination and can expel any air. Best to inject specimen into prereduced anaerobically sterilized (PRAS) media. Vortex to mix sample and plate to appropriate isolation media.",
              "Use a few drops on PRAS media and streak for isolated colonies; this is vital since most anaerobic infections are polymicrobial and isolated colonies are required to verify relevant organisms.",
              "Swabs are not recommended and should only be collected under prereduced conditions. The eSwab transport system is the only liquid-based multipurpose collection and transport system listed as maintaining viability of aerobic, anaerobic, and fastidious bacteria for up to 48 hours at room and refrigerated temperature.",
              "Tissue: place a small piece into PRAS media or reduced transport medium.",
              "Blood: aseptic inoculation of both anaerobic and aerobic blood culture bottles with meticulous preparation of the venipuncture site to avoid contamination."
            ]}
          ]
        },
        {
          id: "anaerobe-lab-general", type: "topic", title: "Laboratory diagnosis: specimen and culture examination", pages: "495–496, 502–504", objectives: ["obj-7-1-12", "obj-7-1-15"], sections: [
            { title: "Processing clinical samples for recovery", page: "495", bullets: ["Macroscopic and microscopic examination of specimen using Gram stain.", "Inoculation of appropriate plated and tubed media.", "Anaerobic incubation of inoculated media."]},
            { title: "Macroscopic examination", page: "495", bullets: ["Determine whether the specimen is appropriate; inappropriate specimens should be rejected.", "Check whether it was submitted in an appropriate transport container or medium; improperly transported specimens should be rejected.", "Check for foul odor. Many anaerobes, especially Fusobacterium and Porphyromonas, have foul-smelling metabolic end products.", "Check for brick-red fluorescence when exposed to long-wave (366-nm) ultraviolet light. Pigmented Porphyromonas and Prevotella produce substances that fluoresce before becoming darkly pigmented; brick-red fluorescence is presumptive evidence, although some members fluoresce other colors.", "Check whether necrotic tissue or exudate is black; this may be caused by pigment produced by pigmented Porphyromonas and Prevotella.", "Check for sulfur granules, associated with actinomycosis caused by Actinomyces, Propionibacterium propionicum, and closely related organisms such as Propionibacterium acnes."]},
            { title: "Direct microscopic examination", page: "496", bullets: ["CLSI guidelines recommend Gram stains on all anaerobic specimens.", "Gram stain establishes a polymicrobial or monomicrobial infection; starts presumptive identification; aids selection of culture media; and determines quality of specimen collected.", "Use methanol as fixative instead of heat.", "Absence of leukocytes may indicate necrotizing toxins.", "Morphology for presumptive identification: gram-positive bacilli — Clostridium; thin gram-negative bacilli — Fusobacteria; tiny gram-negative cocci that are gram-variable — Veillonella; gram-negative coccobacilli — Bacteroides, Porphyromonas, Prevotella."]},
            { title: "Indications of anaerobes in cultures", page: "502", bullets: ["Foul odor when opening an anaerobic jar or bag.", "Characteristic colonial morphology on anaerobic agar plates but not on aerobic culture plates.", "Unique morphology on Gram stain of clinical specimens or isolates.", "Good growth on Bacteroides bile-esculin agar (BBE).", "Double zone of hemolysis on blood agar.", "Brick-red fluorescence on kanamycin-vancomycin-laked blood (KVLB) agar."]},
            { title: "Processing colonies suspected of being anaerobes", page: "502–503", bullets: ["Describe colony morphology and growth on selective media.", "Describe the Gram-stain reaction and cell morphology.", "Set up an aerotolerance test.", "Inoculate a pure culture/subculture plate and add appropriate disks.", "Magnify the plate to observe fine details of each colony morphotype and pick colonies for isolation."]}
          ]
        },
        {
          id: "anaerobe-media", type: "topic", title: "Media for cultivation of anaerobes", pages: "496–498", objectives: ["obj-7-1-13"], sections: [
            { title: "Primary setup media", page: "496–497", bullets: [
              "Anaerobic blood agar (CDC): supports growth of almost all obligate and facultative anaerobes; best for anaerobic gram-positive cocci. Enriched medium containing sheep blood for enrichment and detection of hemolysis, vitamin K (required by some Porphyromonas spp.), and yeast extract.",
              "Bacteroides bile esculin agar (BBE): supports growth of bile-tolerant Bacteroides spp.; some strains of Fusobacterium mortiferum, Klebsiella pneumoniae, enterococci, and yeast may grow to a limited extent.",
              "Brucella blood agar (BRU/BA): supports growth of almost all obligate and facultative anaerobes; best for gram-negative bacteria. Enriched medium containing sheep red blood cells for enrichment and detection of hemolysis, casein peptones, dextrose, yeast extract, vitamin K, and hemin.",
              "Kanamycin–vancomycin–laked blood agar (KVLB): supports growth of Bacteroides and Prevotella spp.; yeasts and kanamycin-resistant facultative gram-negative bacilli will also grow.",
              "Phenylethyl alcohol agar (PEA): supports growth of almost all obligate anaerobes (gram-positive and gram-negative) and gram-positive facultative anaerobes.",
              "Colistin nalidixic acid blood agar plate (CNA): supports growth of almost all obligate anaerobes (gram-positive and gram-negative) and gram-positive facultative anaerobes, as stated in the source.",
              "Anaerobic broth (e.g., thioglycollate [THIO] and chopped or cooked meat): supports growth of almost all types of bacteria. In THIO, obligate aerobes and microaerophiles grow near the top, obligate anaerobes at the bottom, and facultative anaerobes throughout the broth.",
              "Cycloserine–cefoxitin–fructose agar (CCFA): selective and differential for recovery and presumptive identification of C. difficile. C. difficile produces yellow ground-glass colonies and has a characteristic horse-stable odor."
            ]},
            { title: "PRAS media and aerobic companion media", page: "498–499", bullets: [
              "PRAS media are prepared by boiling, autoclaving, and replacing any air with an O2-free gas mixture.",
              "In most cases, an anaerobic culture request is also accompanied by a request for aerobic culture.",
              "Plated media incubated aerobically in a CO2 incubator are also inoculated: 5% sheep blood, MacConkey, chocolate agar, and CNA blood agar (selective for gram-positive bacteria)."
            ]},
            { title: "Source tables and figures", page: "497–498", bullets: ["Figure 7.4 shows colonies on KVLB agar; Figure 7.5 shows PRAS media. View the linked original PDF pages for the images."]}
          ]
        },
        {
          id: "anaerobe-incubation", type: "topic", title: "Anaerobic incubation conditions", pages: "499–501", objectives: ["obj-7-1-14"], sections: [
            { title: "Inoculation procedures", page: "499", bullets: ["Inoculation of appropriate plated and tubed media may be performed in an area with a suitable nitrogen gas holding system or near-anaerobic conditions.", "Batch processing places inoculated media into a holding system, such as a jar, box, or other small chamber."]},
            { title: "Anaerobic incubation systems", page: "500–501", bullets: ["Anaerobic chambers (most ideal for incubating anaerobic media), glove boxes, anaerobe jars, and anaerobic bags.", "Chamber gases: hydrogen 5%–10%; CO2 5%–10%; nitrogen 80%–90%.", "Palladium-coated alumina pellets act as catalysts and help remove residual oxygen.", "A desiccant absorbs excess water produced when the catalyst removes oxygen to form water.", "Indicator is colorless when no oxygen is present; blue or pink when oxygen is present, depending on dye.", "Incubation time: 5–7 days routinely to allow growth of slow-growing anaerobes; at least 10 days whenever Actinomyces is suspected. Incubate at 35°C to 37°C.", "Glove boxes may be sealed, with airtight rubber gloves; gloveless chambers use airtight rubber sleeves.", "Anaerobe jars are suitable for small laboratories and low volumes of anaerobic cultures; newer models accommodate more plates and identification or susceptibility materials.", "For anaerobic bags, one or two inoculated plates are placed in a bag, an oxygen-removal system is activated, and the bag is sealed and incubated."]}
          ]
        },
        {
          id: "anaerobe-presumptive", type: "topic", title: "Presumptive identification", pages: "502–510", objectives: ["obj-7-1-16"], sections: [
            { title: "Presumptive versus definitive identification", page: "502", bullets: ["Presumptive identification is based on colony morphology, Gram stain observations, and simple tests (e.g., disks, catalase, spot indole). Its capability is limited; many clinically encountered anaerobes cannot be identified this way.", "Definitive identification is available through commercially available, preexisting, enzyme-based identification systems; most commonly encountered, clinically significant anaerobes can be identified."]},
            { title: "Aerotolerance test", page: "504–505", bullets: ["Determines whether a microorganism isolated under anaerobic conditions is a strict anaerobe or facultative anaerobe.", "Inoculate with a short streak onto blood agar and chocolate agar for incubation in a CO2 incubator, and onto anaerobic blood agar (CDC) incubated anaerobically.", "Some aerotolerant anaerobes (e.g., certain Clostridium, Actinomyces, Propionibacterium, and Lactobacillus spp.) can grow on CO2-incubated chocolate agar, but usually grow much better on the anaerobically incubated plate.", "Table 7.4 compares blood agar incubated aerobically in a non-CO2 incubator, chocolate agar incubated aerobically in a CO2 incubator, and blood agar incubated anaerobically for capnophilic aerobes, facultative anaerobes, and obligate anaerobes. See the original table for the complete reaction grid."]},
            { title: "Rapid tests: fluorescence", page: "505–506", bullets: ["Porphyromonas and pigmented Prevotella spp.: brick-red fluorescence.", "Fusobacterium nucleatum and Clostridium difficile: chartreuse fluorescence.", "Veillonella spp.: red fluorescence, dependent on culture medium and fades rapidly.", "Table 7.5 also lists P. bivia and P. disiens as light orange to pink (coral); Porphyromonas as brick red (some no fluorescence); Fusobacterium as chartreuse; C. innocuum and C. difficile as chartreuse; Eggerthella lenta as red or no fluorescence."]},
            { title: "Rapid tests: catalase, indole, urease, and motility", page: "506–507", bullets: ["Catalase: add 15% hydrogen peroxide to organism on slide. Bubbling is positive; separates Clostridium (negative) from Bacillus (positive).", "Spot indole: DCMA reagent (filter paper saturated with para-dimethylaminocinnamaldehyde). Blue or green is positive; pink or orange is negative.", "Rapid urease test: add urease test tablet to 1 ml distilled water, heavily inoculate, and incubate at 37°C. A positive reaction may occur in 15 minutes to 6 hours with color change from yellow to red. The section heading states 2–3 hours.", "Rapid motility test may be performed as soon as 18 hours. Wet mount uses 4–6-hour broth cultures or 24–48-hour colonies. Touch a small portion of colony to saline on a slide, place coverslip, and examine with a light microscope; purposeful movement is positive."]},
            { title: "Special-potency antimicrobial disks", page: "507–509", bullets: ["Special-potency disks can help determine the true Gram-stain reaction of an isolate.", "Vancomycin disk: susceptibility indicates gram-positive bacillus or Porphyromonas.", "Kanamycin disk: susceptibility indicates Bacteroides other than the fragilis group; also Bilophila, Fusobacterium, and Veillonella.", "Colistin disk: susceptibility indicates the same groups as kanamycin plus Prevotella.", "Nitrate disk: detects ability to reduce nitrate.", "Sodium polyanethol sulfonate (SPS) disk: Peptostreptococcus anaerobius is susceptible; Peptoniphilus asaccharolyticus is resistant.", "Bile disk: growth in 20% bile indicates the B. fragilis group.", "Figures 7.13 and Table 7.6 show interpretation patterns and presumptive differentiation; view the original PDF for the complete matrix."]},
            { title: "Lecithinase and lipase reactions", page: "510", bullets: ["Egg yolk agar (EYA) reactions are useful in identifying many species of Clostridia.", "Lecithinase cleaves lecithin in egg yolk, releasing insoluble fat and forming an opaque zone around the colony; associated with Clostridium perfringens.", "Lipase hydrolyzes triglycerides and diglycerides to fatty acids and glycerol; produces an iridescent, multicolored sheen; associated with Fusobacterium necrophorum."]}
          ]
        },
        {
          id: "clostridium-lab-identification", type: "topic", title: "Identification of Clostridium species", pages: "511–512", objectives: ["obj-7-1-18"], sections: [
            { title: "Microscopic morphology and colony appearance", page: "511–512", bullets: ["C. difficile: thin rods, rare spores; large, flat colonies, barnyard odor, chartreuse fluorescence.", "C. perfringens: boxcar, large, square rods; large, irregular-shaped colonies; double zone of beta-hemolysis.", "C. septicum: thin rods with subterminal spores; smoothly swarming colonies.", "C. sordellii: thin rods with subterminal spores; Table 7.10 describes very large, lobate, irregular, flat colonies.", "C. tetani: swollen terminal spores; smoothly swarming but slow-growing colonies.", "Figure 7.17 provides an identification algorithm for some clinically encountered Clostridium species; see original PDF page 512."]}
          ]
        },
        {
          id: "gp-nonspore-identification", type: "topic", title: "Identification of gram-positive non-spore-forming bacilli", pages: "513–514", objectives: ["obj-7-1-19"], sections: [
            { title: "Morphologic identification", page: "513–514", bullets: ["Actinomyces: straight to slightly curved short rods to long filaments; short rods with clubbed ends in diphtheroid arrangements; short chains or small clusters; longer rods and filaments may be straight or wavy and branched.", "Bifidobacterium: variable shape, from coccobacilli to long branching rods; ends may be pointed, bent, club-shaped, spatulated, or bifurcated.", "Lactobacillus: highly pleomorphic; may appear coccoid or spiral-shaped.", "Propionibacterium: pleomorphic rods with a diphtheroid appearance.", "Table 7.7 compares A. israelii, other Actinomyces species, Bifidobacterium spp., Eggerthella lenta, Eubacterium spp., Propionibacterium acnes, and P. propionicum using colony and biochemical features. See original PDF page 514 for the complete table."]}
          ]
        },
        {
          id: "gnb-identification", type: "topic", title: "Identification of anaerobic gram-negative bacilli", pages: "515–518, 523", objectives: ["obj-7-1-20"], sections: [
            { title: "Bacteroides", page: "515", bullets: ["B. fragilis group: bile resistant; recovery on KVLB and BBE.", "B. fragilis is the most common anaerobe isolated from infectious processes of soft tissue and anaerobic bacteremia; accounts for more than 60% of infections caused by B. fragilis group.", "B. thetaiotaomicron is the second most frequently encountered of the group and has the highest antimicrobial resistance of the group.", "B. uniformis: nonpigmented; esculin hydrolysis negative.", "B. ureolyticus: bile sensitive, nonpigmented, urease positive, tiny rods or coccobacilli; isolated from blood following tooth extraction."]},
            { title: "Bilophila, Prevotella, and Porphyromonas", page: "516", bullets: ["Bilophila wadsworthia: bile resistant, pigmented; characteristic fish-eye appearance on BBE.", "Prevotella: bile sensitive, pigmented; protoporphyrin causes brown-black macroscopic colony color shift over 2–3 weeks; brick-red long-wave UV fluorescence; tiny coccobacilli or bacilli; associated with vagina and oral cavities. P. denticola esculin positive; P. intermedia indole and lipase positive.", "Porphyromonas: bile sensitive, pigmented; brick-red long-wave UV fluorescence; tiny coccobacilli; no growth on media containing vancomycin."]},
            { title: "Fusobacterium", page: "517–518", bullets: ["Generally gram-negative, long, thin, tapered rods (fusiform), sometimes pleomorphic.", "F. nucleatum: bile sensitive; classic fusiform shape; indole positive; produces butyric acid from PYG media.", "F. mortiferum: bile resistant; indole negative; esculin positive.", "F. russi: bile sensitive; indole negative.", "Table 7.8 compares selected anaerobic gram-negative bacilli and colony / cellular morphology; see original PDF page 518."]},
            { title: "Presumptive differentiation table", page: "523", bullets: ["Table 7.11 compares B. fragilis group, B. ureolyticus, Bilophila wadsworthia, Fusobacterium nucleatum, Porphyromonas, Prevotella intermedia, and Veillonella using colony morphology on blood or KVLB agar, colony morphology on BBE, and cellular morphology. See original PDF page 523 for the full comparative table."]}
          ]
        },
        {
          id: "cocci-identification", type: "topic", title: "Identification of anaerobic cocci", pages: "519–523", objectives: ["obj-7-1-21"], sections: [
            { title: "Species and laboratory characteristics", page: "519–521", bullets: ["Peptococcus niger: black pigmentation.", "Peptostreptococcus anaerobius: SPS susceptible; not black pigmented.", "Peptoniphilus asaccharolyticus: SPS resistant, indole positive, does not reduce nitrate, not black pigmented.", "Veillonella: gram-negative cocci, catalase positive, red fluorescence.", "Table 7.9 and Figure 7.23 provide additional biochemical characteristics and a gram-positive anaerobic cocci identification flowchart; see original PDF page 521."]},
            { title: "Presumptive identification tables", page: "522–523", bullets: ["Table 7.10 summarizes presumptive identification of gram-positive anaerobes, including colony morphology on blood agar and cellular morphology.", "Table 7.11 summarizes presumptive identification of gram-negative anaerobes, including colony morphology on blood or KVLB agar, BBE agar, and cellular morphology.", "See original PDF pages 522–523 for both full tables."]}
          ]
        },
        {
          id: "anaerobe-definitive", type: "topic", title: "Definitive identification", pages: "524", objectives: ["obj-7-1-17"], sections: [
            { title: "Definitive identification methods", page: "524", bullets: ["Biochemical and enzyme-based minisystems: based on the presence of preformed (preexisting) bacterial enzymes; systems do not depend on enzyme induction or bacterial growth. Primarily useful for identifying the most commonly isolated anaerobes. Accurate Gram stain is vital for accurate identification.", "Conventional tubed biochemical identification systems: PRAS and non-PRAS tubed biochemical test media. PRAS media are prepared by boiling, autoclaving, and replacing air with an oxygen-free gas mixture. Biochemical reactions are interpreted by measuring pH with a probe or by color changes based on a bromthymol blue indicator.", "Gas-liquid chromatography: anaerobe to be tested is grown in a tube of peptone–yeast extract–glucose (PYG) medium.", "Cellular fatty acid analysis by high-resolution gas-liquid chromatography (GLC): fatty acids are coded for on bacterial chromosomes and are not affected by simple mutations or plasmid loss.", "16S ribosomal RNA gene sequencing: has highly conserved and highly variable regions that can be used for microbial identification."]}
          ]
        },
        {
          id: "anaerobe-ast", type: "topic", title: "Antimicrobial susceptibility testing", pages: "525–526", objectives: ["obj-7-1-22"], sections: [
            { title: "When susceptibility testing is performed", page: "525", bullets: ["CLSI document provides guidelines for susceptibility testing of anaerobes: Methods for Antimicrobial Susceptibility Testing of Anaerobic Bacteria (Approved Standard, M11-A8).", "Performed on: brain abscess, endocarditis, infection of a prosthetic device or vascular graft, joint infections, osteomyelitis, and bacteremia.", "Organisms listed as highly virulent and/or commonly resistant to antimicrobial agents: Bacteroides fragilis group, Prevotella, Clostridium, Fusobacterium, Bilophila wadsworthia, and Sutterella wadsworthensis.", "β-Lactamase testing is performed on all anaerobes."]},
            { title: "CLSI recommendations", page: "525–526", bullets: ["Gram-negative anaerobes (including B. fragilis group) — primary choices: β-lactam combination agent (e.g., ampicillin-sulbactam, piperacillin-tazobactam, ticarcillin-clavulanic acid), clindamycin, carbapenem (e.g., ertapenem, imipenem, meropenem), and metronidazole.", "Gram-negative anaerobes — supplemental choices: ceftizoxime, ceftriaxone, cefotetan, cefoxitin, and moxifloxacin.", "Gram-positive anaerobes — primary choices: β-lactam combination agent (e.g., ampicillin-sulbactam, piperacillin-tazobactam, ticarcillin-clavulanic acid), clindamycin, carbapenem (e.g., ertapenem, imipenem, meropenem), metronidazole, ampicillin, or penicillin.", "Gram-positive anaerobes — supplemental choices: ceftizoxime, ceftriaxone, tetracycline, and moxifloxacin."]},
            { title: "Problems in susceptibility testing", page: "526", bullets: ["Accuracy of susceptibility methods and their correlation with in vivo or clinical situation.", "Cost and procedure complexity.", "Difficulty reading endpoints with certain susceptibility methods.", "Lack of reproducibility.", "Failure of some anaerobes to grow on or in particular media.", "Lack of comparability between methods."]}
          ]
        },
        {
          id: "anaerobe-treatment", type: "topic", title: "Treatment of anaerobe-associated diseases", pages: "527", objectives: ["obj-7-1-23"], sections: [
            { title: "Treatment approaches", page: "527", bullets: ["Surgical therapy: surgical drainage of the abscess; débridement; eliminating obstructions; decompressing tissues; releasing trapped gas; improving circulation in, and oxygenation of, tissues.", "Hyperbaric oxygen chamber: used to force oxygen into necrotic tissue.", "Antimicrobial therapy: primary role is to limit local and systemic spread of organisms. Selection of the correct antimicrobial agent depends on types of organisms involved, known resistance factors, site of infection, and toxicity of the antimicrobial agent.", "Antitoxins reduce virulence factors. In cases of tetanus and botulism, antitoxins are used to neutralize the effect of neurotoxins produced by C. tetani and C. botulinum."]}
          ]
        },
        {
          id: "anaerobe-checks", type: "topic", title: "Checks on learning", pages: "528", objectives: [], sections: [
            { title: "Questions from the Unit 7 PDF", page: "528", bullets: ["1. An anaerobe is an organism that:", "2. What substances do organisms that use oxygen have to protect themselves from superoxide anions?", "3. What are two important factors that must be taken into consideration when transporting specimens for anaerobic culture?", "The uploaded course PDF provides these questions without answers on this page. Answers are intentionally not supplied here."]}
          ]
        }
      ]
    }]
  };

  window.COURSE_DATA.units.push(unit);

  const ref = id => ({ ref: id });
  const group = (id, children) => ({ ref: id, children: children.map(item => typeof item === "string" ? ref(item) : item) });
  unit.lessons[0].taxonomyTree = {
    root: {
      label: "Anaerobes",
      type: "lesson group",
      children: [
        ref("anaerobe-concepts"),
        ref("anaerobe-clinical-overview"),
        group("clostridium", [
          ref("c-perfringens"), ref("c-botulinum"), ref("c-tetani"), ref("c-septicum"),
          ref("c-difficile"), ref("c-histolyticum"), ref("c-novyi"), ref("c-bifermentans"),
          ref("c-tertium"), ref("c-sordellii")
        ]),
        group("gp-nonspore", [
          group("actinomyces", [ref("a-israelii")]),
          ref("bifidobacterium"), group("propionibacterium", [ref("p-acnes")]),
          ref("mobiluncus"), ref("eggerthella"), ref("lactobacillus")
        ]),
        group("gnb-anaerobes", [
          group("bacteroides", [ref("b-fragilis"), ref("b-caccae"), ref("b-thetaiotaomicron"), ref("b-uniformis"), ref("b-ureolyticus")]),
          group("bilophila", [ref("bilophila-wadsworthia")]),
          group("prevotella", [ref("p-denticola"), ref("p-intermedia"), ref("p-bivia"), ref("p-disiens")]),
          ref("porphyromonas"), group("fusobacterium", [ref("f-nucleatum"), ref("f-mortiferum"), ref("f-russi"), ref("f-necrophorum")])
        ]),
        group("anaerobic-cocci", [
          group("gram-positive-anaerobic-cocci", [
            ref("peptococcus-niger"), ref("peptostreptococcus-anaerobius"),
            ref("peptoniphilus-asaccharolyticus"), ref("anaerococcus"), ref("finegoldia"),
            ref("parvimonas"), ref("peptoniphilus")
          ]),
          group("gram-negative-anaerobic-cocci", [ref("veillonella")])
        ]),
        ref("anaerobe-specimens"),
        ref("anaerobe-lab-general"),
        ref("anaerobe-media"),
        ref("anaerobe-incubation"),
        ref("anaerobe-presumptive"),
        ref("clostridium-lab-identification"),
        ref("gp-nonspore-identification"),
        ref("gnb-identification"),
        ref("cocci-identification"),
        ref("anaerobe-definitive"),
        ref("anaerobe-ast"),
        ref("anaerobe-treatment"),
        ref("anaerobe-checks")
      ]
    }
  };
})();
