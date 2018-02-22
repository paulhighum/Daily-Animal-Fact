exports.seed = function(knex, Promise){
  return knex("animals")
    .del()
    .then(function(){
      return knex("animals").insert([
        {
          id: 1,
          name: "Spotted Hyena",
          scientific_name: "Crocuta crocuta",
          image: "https://i.imgur.com/75ymT8M.jpg"
        },
        {
          id: 2,
          name: "Black Rhinoceros",
          scientific_name: "Diceros bicornis",
          image: "https://i.imgur.com/WycDVIW.jpg"
        },
        {
          id: 3,
          name: "West Indian Manatee",
          scientific_name: "Trichechus manatus",
          image: "https://i.imgur.com/N7VnfNY.jpg"
        },{
          id: 4,
          name: "Asian Elephant",
          scientific_name: "Elephas maximus",
          image: "https://i.imgur.com/cTYsZek.jpg"
        },{
          id: 5,
          name: "Western Gorilla",
          scientific_name: "Gorilla gorilla",
          image: "https://i.imgur.com/fNMloqL.jpg"
        },{
          id: 6,
          name: "Silky Anteater",
          scientific_name: "Cyclopes didactylus",
          image: "https://i.imgur.com/FgTHaEM.jpg"
        },{
          id: 7,
          name: "American Marten",
          scientific_name: "Martes americana",
          image: "https://i.imgur.com/3Z9vqrb.jpg"
        },{
          id: 8,
          name: "Snow Leopard",
          scientific_name: "Panthera uncia",
          image: "https://i.imgur.com/lfljUEN.jpg"
        },{
          id: 9,
          name: "Fennec Fox",
          scientific_name: "Vulpes zerda",
          image: "https://i.imgur.com/fGOWjjQ.jpg"
        },{
          id: 10,
          name: "Arctic Fox",
          scientific_name: "Vulpes lagopus",
          image: "https://i.imgur.com/8wmgqd9.jpg"
        },{
          id: 11,
          name: "Giant Pangolin",
          scientific_name: "Smutsia gigantea",
          image: "https://i.imgur.com/ahpdTeE.jpg"
        },{
          id: 12,
          name: "Emu",
          scientific_name: "Dromaius novaehollandiae",
          image: "https://i.imgur.com/kZk15DI.jpg"
        },{
          id: 13,
          name: "Kaiser's Spotted Newt",
          scientific_name: "Neurergus kaiseri",
          image: "https://i.imgur.com/Ag2YHGW.jpg"
        },{
          id: 14,
          name: "Gray Wolf",
          scientific_name: "Canis lupus",
          image: "https://i.imgur.com/IYtY77c.jpg"
        },{
          id: 15,
          name: "Tiger Quoll",
          scientific_name: "Dasyurus maculatus",
          image: "https://i.imgur.com/yjzW0Hh.jpg"
        },{
          id: 16,
          name: "Sun Bear",
          scientific_name: "Helarctos malayanus",
          image: "https://i.imgur.com/LMWY5CK.jpg"
        },{
          id: 17,
          name: "White-Tailed Prairie Dog",
          scientific_name: "Cynomys leucurus",
          image: "https://i.imgur.com/VY7XbBK.jpg"
        },{
          id: 18,
          name: "Ring-Tailed Lemur",
          scientific_name: "Lemur catta",
          image: "https://i.imgur.com/KIwfQPM.jpg"
        },{
          id: 19,
          name: "Coquerel's Sifaka",
          scientific_name: "Propithecus coquereli",
          image: "https://i.imgur.com/NGcA5Tt.jpg"
        },{
          id: 20,
          name: "Humpback Whale",
          scientific_name: "Megaptera novaeangliae",
          image: "https://i.imgur.com/r6S53wd.jpg"
        },{
          id: 21,
          name: "Spotted Eagle Ray",
          scientific_name: "Aetobatus narinari",
          image: "https://i.imgur.com/e5su9h0.jpg"
        },{
          id: 22,
          name: "Mimic Octopus",
          scientific_name: "Thaumoctopus mimicus",
          image: "https://i.imgur.com/Fn0WO3F.jpg"
        },{
          id: 23,
          name: "Humboldt Squid",
          scientific_name: "Dosidicus gigas",
          image: "https://i.imgur.com/OWDCsKq.jpg"
        },{
          id: 24,
          name: "Mata Mata",
          scientific_name: "Chelus fimbriata",
          image: "https://i.imgur.com/d8QFJlZ.jpg"
        },{
          id: 25,
          name: "Peacock Mantis Shrimp",
          scientific_name: "Odontodactylus scyllarus",
          image: "https://i.imgur.com/u5yCXvH.jpg"
        },{
          id: 26,
          name: "Blue-Footed Booby",
          scientific_name: "Sula nebouxii",
          image: "https://i.imgur.com/QqBo4Tw.jpg"
        },{
          id: 27,
          name: "African Penguin",
          scientific_name: "Spheniscus demersus",
          image: "https://i.imgur.com/aOB9Jlf.jpg"
        },{
          id: 28,
          name: "Serval",
          scientific_name: "Leptailurus serval",
          image: "https://i.imgur.com/p7isLzp.jpg"
        },{
          id: 29,
          name: "Black-Footed Cat",
          scientific_name: "Felis nigripes",
          image: "https://i.imgur.com/oLglAWP.jpg"
        },{
          id: 30,
          name: "Golden Poison Frog",
          scientific_name: "Phyllobates terribilis",
          image: "https://i.imgur.com/XBi97xT.jpg"
        },{
          id: 31,
          name: "Plains Zebra",
          scientific_name: "Equus quagga",
          image: "https://i.imgur.com/FqfG6PK.jpg"
        },{
          id: 32,
          name: "Masai Giraffe",
          scientific_name: "Giraffa tippelskirchi",
          image: "https://i.imgur.com/RqYjNE5.jpg"
        },{
          id: 33,
          name: "Waterbuck",
          scientific_name: "Kobus ellipsiprymnus",
          image: "https://i.imgur.com/iKJjJsa.jpg"
        },{
          id: 34,
          name: "Osprey",
          scientific_name: "Pandion haliaetus",
          image: "https://i.imgur.com/GIJHIMl.png"
        },{
          id: 35,
          name: "Crowned Eagle",
          scientific_name: "Stephanoaetus coronatus",
          image: "https://i.imgur.com/51tOveD.jpg"
        },{
          id: 36,
          name: "Axolotl",
          scientific_name: "Ambystoma mexicanum",
          image: "https://i.imgur.com/uhh96Ve.jpg"
        },{
          id: 37,
          name: "Ocean Sunfish",
          scientific_name: "Mola mola",
          image: "https://i.imgur.com/zclK74t.jpg"
        },{
          id: 38,
          name: "Peregrine Falcon",
          scientific_name: "Falco peregrinus",
          image: "https://i.imgur.com/9P2BvCo.jpg"
        },{
          id: 39,
          name: "Tiger",
          scientific_name: "Panthera tigris",
          image: "https://i.imgur.com/dZHNV5Z.jpg"
        },{
          id: 40,
          name: "Lion",
          scientific_name: "Panthera leo",
          image: "https://i.imgur.com/xHgtxhr.jpg"
        },{
          id: 41,
          name: "Clouded Leopard",
          scientific_name: "Neofelis nebulosa",
          image: "https://i.imgur.com/1vDrKOD.jpg"
        },{
          id: 42,
          name: "Ocelot",
          scientific_name: "Leopardus pardalis",
          image: "https://i.imgur.com/jV3chmi.jpg"
        },{
          id: 43,
          name: "Dhole",
          scientific_name: "Cuon alpinus",
          image: "https://i.imgur.com/XGlOwdn.jpg"
        },{
          id: 44,
          name: "Margay",
          scientific_name: "Leopardus wiedii",
          image: "https://i.imgur.com/438WOcA.jpg"
        },{
          id: 45,
          name: "Sand Cat",
          scientific_name: "Felis margarita",
          image: "https://i.imgur.com/g42o0dy.jpg"
        },{
          id: 46,
          name: "Barasingha",
          scientific_name: "Rucervus duvaucelii",
          image: "https://i.imgur.com/phUYrv0.jpg"
        },{
          id: 47,
          name: "Eurasian Lynx",
          scientific_name: "Lynx lynx",
          image: "https://i.imgur.com/iWLyzFH.jpg"
        },{
          id: 48,
          name: "Chamois",
          scientific_name: "Rupicapra rupicapra",
          image: "https://i.imgur.com/PMj2uBb.jpg"
        },{
          id: 49,
          name: "Kri-kri",
          scientific_name: "Capra aegagrus cretica",
          image: "https://i.imgur.com/jWdOYM6.jpg"
        },{
          id: 50,
          name: "African Bush Elephant",
          scientific_name: "Loxodonta africana",
          image: "https://i.imgur.com/18gALSU.jpg"
        },{
          id: 51,
          name: "Sperm Whale",
          scientific_name: "Physeter macrocephalus",
          image: "https://i.imgur.com/XhuFyDl.jpg"
        },{
          id: 52,
          name: "Killer Whale",
          scientific_name: "Orcinus orca",
          image: "https://i.imgur.com/PNLmHUE.jpg"
        },{
          id: 53,
          name: "Narwhal",
          scientific_name: "Monodon monoceros",
          image: "https://i.imgur.com/o51XX0C.jpg"
        },{
          id: 54,
          name: "Crab-Eating Fox",
          scientific_name: "Cerdocyon thous",
          image: "https://i.imgur.com/ztSdTOU.jpg"
        },{
          id: 55,
          name: "African Bush Elephant",
          scientific_name: "Loxodonta africana",
          image: "https://i.imgur.com/18gALSU.jpg"
        },
      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE animals_id_seq RESTART WITH 51;")
    })
}
