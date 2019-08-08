val lanes = mutableListOf("Top", "Bottom", "Jungle")
val people = mutableListOf("Richard", "Jacob", "Phil")

val letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toMutableList()
val champions = listOf(
    "Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia",
    "Annie", "Ashe", "Aurelion Sol", "Azir", "Bard", "Blitzcrank",
    "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath",
    "Corki", "Darius", "Diana", "Dr. Mundo", "Draven", "Ekko",
    "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz",
    "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves",
    "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna",
    "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "Kai'Sa", "Kalista", "Karma",
    "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix",
    "Kindred", "Kled", "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lissandra",
    "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi",
    "Miss Fortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus",
    "Neeko", "Nidalee", "Nocturne", "Nunu & Willump", "Olaf", "Orianna", "Ornn",
    "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus",
    "Rek'Sai", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Sejuani",
    "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner",
    "Sona", "Soraka", "Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah",
    "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle",
    "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus",
    "Vayne", "Veigar", "Vel'Koz", "Vi", "Viktor", "Vladimir", "Volibear",
    "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yorick",
    "Yuumi", "Zac", "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"
)

fun main() {
    require(lanes.size == people.size) { "Must have same number of people and lanes." }
    repeat(people.size) {
        val letter = letters.random()
        val lane = lanes.random()
        val person = people.random()
        letters.remove(letter)
        lanes.remove(lane)
        people.remove(person)
        println("${person} - ${lane} - ${letter} - ${champions.filter { it.startsWith(letter) }}")
    }
}
