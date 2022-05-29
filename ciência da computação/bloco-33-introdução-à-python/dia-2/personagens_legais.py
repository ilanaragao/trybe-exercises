characters_file = open("personagens_legais.txt", mode="w")

characters_file.write("Tanjiro\n")
characters_file.write("Itadori\n")
characters_file.write("Caiman\n")

more_characters = ["Kakashi\n", "Naruto\n", "Sasuke\n"]

characters_file.writelines(more_characters)

characters_file.close()
