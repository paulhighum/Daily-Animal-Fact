exports.seed = function(knex, Promise){
  return knex("facts")
    .del()
    .then(function(){
      return knex("facts").insert([
        {
          id: 1,
          fact: "The African bush elephant is the largest extant terrestrial animal. The largest specimen on record stood 13ft tall at the shoulder and weighed over 22,000 lb",
          animal_id: 50
        },{
          id: 2,
          fact: "The African bush elephant, along with the other species of its genus, has the longest gestation period of any mammal, which lasts an average of about 22 months",
          animal_id: 50
        },{
          id: 3,
          fact: "The kri-kri, found only on the Grecian Islands of Crete, Dia, Thodorou, and Agii Pantes, is not actually a sub-species of wildgoat, but is instead a feral domestic goat. It's ancestors were originally domesticated around the Eastern Mediterranean about 10,000 years ago",
          animal_id: 49
        },{
          id: 4,
          fact: "The chamois is a species of goat-antelope native to the mountains of Europe. In 1907 chamois were sent to New Zealand by Austrian Emperor, Franz Joseph I as a gift and have since gradually spread throughout much of the South Island",
          animal_id: 48
        },{
          id: 5,
          fact: "The Eurasian lynx is the largest species of lynx, with the largest members of its species reaching over 80 lb in weight. Thanks in part to their size they are the only species of lynx in which ungulates make up a large portion of their diet.",
          animal_id: 47
        },{
          id: 6,
          fact: "The barasingha, also known as the swamp deer, is the only Indian deer species that has antlers with more than three tines. Mature stags typically have 10 - 14 tines on their antlers, from which they get their name baransingha meaning 'twelve-tined'.",
          animal_id: 46
        },{
          id: 7,
          fact: "The sand cat is the only cat living foremost in true deserts and is widely distributed throughout the deserts of North Africa, the Middle East, and Central Asia. One of the main adaptions that allows it to survive in drastic desert environments are its thickly furred feet, which protect their paws while moving over hot sands.",
          animal_id: 45
        },{
          id: 8,
          fact: "The margay is an extremely skilled climber, being one of only two cats with the ankle flexibility to climb down trees head first. Due to its skill as a climber the margay lives and hunts in trees, chasing prey such as birds, squirrels, and monkeys.",
          animal_id: 44
        },{
          id: 9,
          fact: "The dhole, a medium-sized canid, is a highly social animal living in clans that range in size from 3 up to 40 members. They live in clans as opposed to packs, because packs refers to groups that always hunt together and dholes frequently break up into smaller packs of 3-5 animals for hunting.",
          animal_id: 43
        },{
          id: 10,
          fact: "The ocelot, a medium-sized spotted cat, is found throughout South American and southern North America. The record for highest ocelot density belongs to the Barro Colorado Island in the middle of the Panama Canal, which has a species density of 4.1-4.5 ocelots per square mile.",
          animal_id: 42
        },{
          id: 11,
          fact: "The clouded leopard is considered the smallest of the big cats and represents an evolutionary link between the big cats and the small cats as it can both chuff like big cats and purr like small cats.",
          animal_id: 41
        },{
          id: 12,
          fact: "Lions are the most social of all wild cats living in prides that can number over 30 individuals, and typically hunting in groups. Prides consist of several adult females, a coalition of males (anywhere from 1-4), and their cubs.",
          animal_id: 40
        },{
          id: 13,
          fact: "The coalition of male lions associated with a pride spends much of its time on the fringes of its territory, patrolling in an effort to defend their relationship to the pride from outside males who will attempt to take over.",
          animal_id: 40
        },{
          id: 14,
          fact: "The lion has the loudest roar of any big cat, which can be heard up to 5 miles away.",
          animal_id: 40
        },{
          id: 15,
          fact: "The tiger is the largest species of extant cat. The largest members of the species stand as high as 4ft tall at the shoulder, weigh nearly 700 lb, and have a total body length of over 11ft",
          animal_id: 39
        },{
          id: 16,
          fact: "Tigers mostly feed on large and medium-sized animals, preferring prey that weighs at least 200lbs. In Siberia, Asiatic black bears and Ussuri brown bears can constitute a large portion of a tigers diet.",
          animal_id: 39
        },{
          id: 17,
          fact: "Although tigers are primarily solitary creatures, an adult of either sex will sometimes share a kill with other tigers, even ones it may not be related to. Furthermore, unlike male lions, male tigers will allow female tigers and cubs to feed before they have finished.",
          animal_id: 39
        },{
          id: 18,
          fact: "The peregrine falcon is the fastest member of the animal kingdom, reaching speeds of over 200 mph during a hunting dive. The fastest recorded speed of a peregrine is 242 mph.",
          animal_id: 38
        },{
          id: 19,
          fact: "The ocean sunfish is the heaviest known bony fish on Earth. Adults typically weigh between 545 and 2,205 lb, with the heaviest sunfish on record weighing over 5,000 lb.",
          animal_id: 37
        },{
          id: 20,
          fact: "Female sunfish can produce up to 300 million eggs at a time, the most of any known vertebrate",
          animal_id: 37
        },{
          id: 21,
          fact: "The axolotl is unusual among amphibians because it reaches adulthood without undergoing metamorphosism, developing lungs and taking to land. Instead adult axolotl remain aquatic and gilled.",
          animal_id: 36
        },{
          id: 22,
          fact: "Axolotl are used extensively for scientific studies due to their impressive regeneration capabilities. They can regenerate entire appendages in a period of months and have even been known to regenerate less vital parts of their brain.",
          animal_id: 36
        },{
          id: 23,
          fact: "Although the crowned eagle is not the largest eagle in Africa, it is considered Africa's most powerful eagle. It is perhaps the only living accipitrid to regularly attack prey weighing over 20 lb and can reportedly carry more than its own body weight during flight.",
          animal_id: 35
        },{
          id: 24,
          fact: "The peregrine falcon is the most widespread raptor in the world, inhabiting near every environment except extreme polar regions, very high mountains, and dense tropical rainforests.",
          animal_id: 38
        },{
          id: 25,
          fact: "Fish make up 99% of an osprey's diet. The raptor has multiple adaptions to enable it to easily catch fish, including closable nostrils for diving into water and reversible outer toes that allow them to grasp with two toes in front and two behind.",
          animal_id: 34
        },{
          id: 26,
          fact: "The waterbuck is the largest member of the genus Kobus, which contains six species of African antelopes associated with marshes, floodplains, or other grassy areas near water.",
          animal_id: 33
        },{
          id: 27,
          fact: "The Masai giraffe is the largest subspecies of giraffe and the tallest extant terrestrial animal. The tallest recorded male stood over 19ft tall.",
          animal_id: 32
        },{
          id: 28,
          fact: "Giraffes have a prehensile, black-purplish tongue that is 18 inches long, which they use for grasping foliage off thorny trees.",
          animal_id: 32
        },{
          id: 29,
          fact: "The plains zebra is the most common and widespread species of zebra. It ranges from Ethiopia in the north to South Africa in the south.",
          animal_id: 31
        },{
          id: 30,
          fact: "Although it was previously thought that zebras were white with black stripes, recent embryological evidence has shown that they are actually black with white stripes. Each zebra's stripes are unique and zebras may be able to identify each other based on their stripe patterns.",
          animal_id: 31
        },{
          id: 31,
          fact: "The golden poison frog is one of the most toxic animals on Earth. The average dose carried by a single frog can kill between 10 and 20 humans. Scientists believe it assimilates its toxins from some species of insect or arthropod, as captive-bred poison frogs are born harmless.",
          animal_id: 30
        },{
          id: 32,
          fact: "The golden poison frog is the largest species of poison dart frog, measuring a little over two inches.",
          animal_id: 30
        },{
          id: 33,
          fact: "The golden poison frog is a social animal, living in groups of up to 6 members in the wild and much larger groups in captivity.",
          animal_id: 30
        },{
          id: 34,
          fact: "The black footed cat is the smallest African cat. However it is also one of Africa's most successful hunters, succeeding on around 60% of its hunts and killing up to 14 small animals a night.",
          animal_id: 29
        },{
          id: 35,
          fact: "The serval has the longest legs of any cat relative to its body size.",
          animal_id: 28
        },{
          id: 36,
          fact: "With a diet primarily consisting of rodents, Servals are very efficient hunters. One study showed they succeeded on over 50% of their hunts, making 15-16 kills in a 24 hour period.",
          animal_id: 28
        },{
          id: 37,
          fact: "African penguins have distinctive pink patches of skin above their eyes that help them cope with changing temperatures. When the temperature gets warmer, the penguin sends more blood to the glands above the eye to be cooled by the air surrounding it, which they can then distribute throughout their body. This in turn causes the gland to turn a darker shade of pink.",
          animal_id: 27
        },{
          id: 38,
          fact: "Male blue-footed boobies use their distinctive feet for their elaborate mating ritual, lifting them up and down while strutting before the female.",
          animal_id: 26
        },{
          id: 39,
          fact: "Mantis shrimps have the fastest limb movement in the animal kingdom, with specially adapted club like claws that move so fast they produce a small flash of light on impact. This occurs because the club moves so quickly that it lowers the water pressure in front of it causing it to boil.",
          animal_id: 25
        },{
          id: 40,
          fact: "Mantis shrimp have some of the most elaborate eyes ever discovered. Their eyes carry 16 types of color receptive cones, in comparison to human eyes which carry 3 types of color receptive cones, and they can tune the sensitivity of their long-wavelength vision to adapt to their environment.",
          animal_id: 25
        },{
          id: 41,
          fact: "The mata mata is a freshwater turtle found in South America. It's appearance resembles probably most resembles bark, camoflauging it from potential predators. After being first classified as Testudo fimbriata in 1783, it was renamed 14 different times in two centuries before finally being renamed Chelus fimbriata in 1992.",
          animal_id: 24
        },{
          id: 42,
          fact: "Humboldt squid are carnivorous marine invertebrates that move in shoals of up to 1,200 individuals. Their tentacles bear between 100 and 200 suckers, each lined with razor-sharp teeth. These grab prey and drag it toward their large beak.",
          animal_id: 23
        },{
          id: 43,
          fact: "The mimic octopus is the only known marine animal capable of mimicking multiple other species of marine animals, possibly as many as 15 other species. This includes species such as lion fish, flounders, sea snakes, jellyfish, and sponges. It decides which mimicry would be most appropriate for a situation and then acts upon it, for example they have been observed mimicking a sea snake when being attacked by damselfish as sea snakes are damselfish predators.",
          animal_id: 22
        },{
          id: 44,
          fact: "Spotted eagle rays have specialized chevron-shaped teeth that help them crush the hard shells of the mollusks and crustaceans that they primarily feed on.",
          animal_id: 21
        },{
          id: 45,
          fact: "Humpback whales are one of two species of whales, the other being the Bryde's whale, known to engage in bubble-net feeding. Bubble-net feeding is a cooperative feeding technique where a group of whales blow bubbles from their blowholes as they circle beneath a school of fish. This creates a net of bubbles that surround the fish and keep them from escaping.",
          animal_id: 20
        },{
          id: 46,
          fact: "The Coquerel's sifaka spends much of its time in trees, however when it does descend to the ground it moves in a series of forward bipedal hops, similar to the bounds of a kangaroo.",
          animal_id: 19
        },{
          id: 47,
          fact: "The ring-tailed lemur is the most terrestrial of all extant lemurs, spending as much as 33% of its time on the ground.",
          animal_id: 18
        },{
          id: 48,
          fact: "Prairie dogs dig extensive burrows that can be over 30 ft in length and can have up to six entrances. These tunnel systems channel rainwater into the water table, preventing runoff and erosion.",
          animal_id: 17
        },{
          id: 49,
          fact: "Sun bears are the smallest bears, weighing on average between 60 and 170 lb. It uses its powerful jaw and claws to tear open tropical hardwood trees in search of food such as insects, larvae, and honey.",
          animal_id: 16
        },{
          id: 50,
          fact: "The riger quoll is a carnivorous marsupial, the largest on mainland australia and the world's second largest behind the Tasmanian devil. Male tiger quolls weigh, on average, a little over 7 lb.",
          animal_id: 15
        },{
          id: 51,
          fact: "The gray wolf is the largest extant member of the family Canidae, with the largest recorded weighing 176 lb.",
          animal_id: 14
        },{
          id: 52,
          fact: "Gray wolves are the only species of their genus to have a range in both the Old and New Worlds.",
          animal_id: 14
        },{
          id: 53,
          fact: "Kaiser's spotted newt is endemic to the Zagros mountains of Iran, and is known from only 4 streams in a single catchment area there. The species has a total area of occupation of under 4 square miles.",
          animal_id: 13
        },{
          id: 54,
          fact: "The emu is the second tallest living bird, reaching heights of over 6 ft.",
          animal_id: 12
        },{
          id: 55,
          fact: "The giant pangolin is the largest of all pangolin species, with body lengths of over 4ft.",
          animal_id: 11
        },{
          id: 56,
          fact: "The brown to reddish-brown armored scales of a pangolin are made of keratin.",
          animal_id: 11
        },{
          id: 57,
          fact: "The giant pangolin subsists almost entirely on ants and termites.",
          animal_id: 11
        },{
          id: 58,
          fact: "The Arctic fox is the only canid whose foot pads are covered in fur, an important adaption for surviving their cold environments.",
          animal_id: 10
        },{
          id: 59,
          fact: "The Arctic fox, which is common throughout the Arctic tundra biome, is the only land mammal native to Iceland, having come to the island at the end of the last ice age by walking over the frozen seas.",
          animal_id: 10
        },{
          id: 60,
          fact: "The fennec fox is the smallest extant species of the family Canidae, weighing about 1.5 to 3.5 lb.",
          animal_id: 9
        },{
          id: 61,
          fact: "Snow leopards inhabit alpine and subalpine zones at elevations ranging from 9,800 to 14,800 ft. To live at these elevations they have several cold weather adaptions, such as wide paws for better walking on snow.",
          animal_id: 8
        },{
          id: 62,
          fact: "American marten activity is generally greater in the summer, when it may be active as much as 60% of the day, in comparison to the winter, when it may be active as little as 16% of the day.",
          animal_id: 7
        },{
          id: 63,
          fact: "Silky anteaters are the smallest extant anteaters, weighing between 6.2 and 14.1 oz.",
          animal_id: 6
        },{
          id: 64,
          fact: "Silky anteaters can eat between 700 and 5,000 ants a day.",
          animal_id: 6
        },{
          id: 65,
          fact: "Gorillas are the largest extant primates and are capable of reaching weights of over 600 lb.",
          animal_id: 5
        },{
          id: 66,
          fact: "Asian elephants can be identified from their African cousins by their smaller, rounded ears and by the fact that female Asian elephants either lack tusks or have very small ones where both genders of African elephants have tusks.",
          animal_id: 4
        },{
          id: 67,
          fact: "The West Indian manatee is the largest extant member of the order Sirenia, with the largest recorded weighing 3,649 lb. Apart from other species of manatees and dugongs, Elephants are its closest living relative.",
          animal_id: 3
        },{
          id: 68,
          fact: "Although not very territorial, black rhinoceroses will fight each other and have the highest rates of mortal combat among any species of mammal, with 50% of males and 30% of females perishing from combat-related injuries.",
          animal_id: 2
        },{
          id: 69,
          fact: "The spotted hyena is the most social of any animal in the order Carnivora, living in the largest groups with the most complex social behaviors. Clans can comprise up to 80 members and clan rank is determined based on ally networks as opposed to size or aggression.",
          animal_id: 1
        },{
          id: 70,
          fact: "Spotted hyenas live in a matriarchal society, with even the lowest ranking females being dominant over the highest ranking males. Females are also, on average, larger than males.",
          animal_id: 1
        },{
          id: 71,
          fact: "Spotted hyenas are the largest extant member of the family Hyaenidae, reaching weights of nearly 200 lb.",
          animal_id: 1
        },{
          id: 72,
          fact: "Spotted hyenas have one of the most powerful jaws within the order Carnivora, which are capable of crushing open the long bones of giraffes. Their jaws generate 40% more force than the jaws of a leopard, and their bonecrushing ability outmatches that of a brown bear.",
          animal_id: 1
        },{
          id: 73,
          fact: "Spotted hyenas are highly intelligent creatures, with a published study finding that hyenas outperformed chimpanzees at cooperative-problem-solving tests.",
          animal_id: 1
        },{
          id: 74,
          fact: "There is a common misconception that spotted hyenas are primarily scavengers, however they are actually very efficient hunters that can hunt alone, in small groups of 3 to 5, or in large groups. In fact in some areas lions are more likely to steal a kill from hyenas than hyenas are to steal a kill from lions",
          animal_id: 1
        },{
          id: 75,
          fact: "Elephants go through 6 sets of teeth in their life. Other mammals go through 2.",
          animal_id: 4
        },{
          id: 76,
          fact: "Elephants go through 6 sets of teeth in their life. Other mammals go through 2.",
          animal_id: 50
        },{
          id: 77,
          fact: "Elephants cannot trot, jump, or gallup.",
          animal_id: 4
        },{
          id: 78,
          fact: "Elephants cannot trot, jump, or gallup.",
          animal_id: 50
        },{
          id: 79,
          fact: "",
          animal_id: 1
        },{
          id: 80,
          fact: "",
          animal_id: 1
        },

      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE facts_id_seq RESTART WITH 75;")
    })
}
