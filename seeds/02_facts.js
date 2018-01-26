exports.seed = function(knex, Promise){
  return knex("facts")
    .del()
    .then(function(){
      return knex("facts").insert([
        {
          id: 1,
          fact: "The african bush elephant is the largest extant terrestrial animal. The largest specimen on record stood 13ft tall at the shoulder and weighed over 22,000 lb",
          animal_id: 50
        },{
          id: 2,
          fact: "The african bush elephant, along with the other species of its genus, has the longest gestation period of any mammal, which lasts an average of about 22 months",
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
          fact: "The Eurasian lynx is the largest species of lynx, with the largest members of its species reaching over 80 lbs in weight. Thanks in part to their size they are the only species of lynx in which ungulates make up a large portion of their diet.",
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
          fact: "",
          animal_id: 41
        },{
          id: 38,
          fact: "",
          animal_id: 41
        },{
          id: 39,
          fact: "",
          animal_id: 41
        },{
          id: 40,
          fact: "",
          animal_id: 41
        },{
          id: 41,
          fact: "",
          animal_id: 41
        },{
          id: 42,
          fact: "",
          animal_id: 41
        },{
          id: 43,
          fact: "",
          animal_id: 41
        },

      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE facts_id_seq RESTART WITH 51;")
    })
}
