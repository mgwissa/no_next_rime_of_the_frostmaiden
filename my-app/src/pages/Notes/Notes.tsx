import { ThemeProvider, Typography } from "@mui/material"
import theme from "../../theme/theme"

function Notes() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <main>
          <div>
            <Typography variant="h3" color="textPrimary">Week 1:</Typography>
            <Typography variant="body1" color="textPrimary">
              brimshander. First town of 10 towns located in Icewind Dale
              <br />
              Brendan Two - Calidan (the slayer) - Human Bloodhunter
              <br />
              Tony - Flint Pridebreaker - Hill Dwarf Cleric
              <br />
              Brendo - Crimnas Cenovath - Triton Sorceror
              <br />
              Will - Admiral - Hippo Man Fighter
              <br />
              Tavern - Northlook Inn
              <br />
              Dwarves in Tavern - Dendual, Gentrick, Noramona (Goblins stole his "product" - Have a pet bear)
              <br />
              Yetis...
              <br />
              The ONLY sound the gun makes is "toot toot"
              <br />
              KBs: 4
            </Typography>
          </div>
          <div>
          <Typography variant="h3" color="textPrimary">Week 2:</Typography>
          <Typography variant="body1" color="textPrimary">
            Innkeeper: Marta Peskryk (teenager)
            Sky is dull pink for 2 days in a row
            <br />
            Innkeeper song: lady in red cloak that stopped at inn on her way to Lonely Wood. She was alone and very frightened. She paid them with a ring. The wind came through and tossed her around. The parents helped and distracted enough for the woman to get away. The parents were left unconscious
            <br />
            Little kid outside inn - saying that Masthew is offering 50 gold for clearing out a mine. You can find the town speaker ouaros at the Blue Clam on the west side of town on the water.
            <br />
            People tied to the pole: get sacrificed for Auril - the god of winter's wrath
            <br />
            The town has been stuck in an endless winter. The cold is starting to head south. There has been no sun for two years
            <br />
            The children of Auril - some think they're kind of like a church of Auril
            <br />
            Townspeaker - Half Orc
            <br />
            The Gem Mine - 1 miner missing, possibly fell into the underdark
            <br />
            Brylbore - Fishernman, apparently there is a monster in the water
            </Typography>
          </div>
          <div>
            <Typography variant="h3" color="textPrimary">Week 3:</Typography>
            <Typography variant="body1">
              Trex - Friendly Kobold speaking common
            </Typography>
          </div>
          <div>
            <Typography variant="h3" color="textPrimary">Week 4:</Typography>
            <Typography variant="body1">
              Killed an awakened Polar bear
              <br />
              10% discount from blacksmith
              <br />
              Helen Trollbane: paying us 100 gold each to find Sepheric Culturo
              <br />
              3 Murders:
              <br />
              halfling trapper in east haven
              <br />
              ship builder in tartaros
              <br />
              glass blower at the docks
              <br />
              Every victim was found with a dagger of ice through their heart.
              <br />
              She thinks Sepheric Culturo who works at Torg's which is run by Torga Icevain (a shady dwarf)
              <br />
              Were here 5 days ago, she guessed heading to Bremen next
              <br />
              come back in 5 days for scale mail
              <br />
              Renug - glassblower that was murdered. Had some interesting meetings with Tilna Mellow (fancy dressed) who's on the speaker's board.
            </Typography>
          </div>
        </main>
      </ThemeProvider>
    </div>
  )
}

export default Notes