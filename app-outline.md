## APP OUTLINE

Backend database with at least three tables, one consisting of animals, one of animal facts, and another that stores comments posted by app users. The animal table includes animal id, animal image, animal name, and animal scientific name. The fact table has the animal id that corresponds to the animal table, and a fact. Animal ids can be repeated in the facts table.

Frontend grabs a random animal and a random fact, checks to make sure it is not a repeat animal from the past x amount of days, and then dynamically populates the page with the image, animal name, animal scientific name, a single random fact from the fact array, and any corresponding comments for that animal.
