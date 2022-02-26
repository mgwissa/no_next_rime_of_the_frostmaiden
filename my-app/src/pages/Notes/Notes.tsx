import { ThemeProvider, Typography, Box, TextField, Button } from "@mui/material";
import theme from "../../theme/theme";

function Notes() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <main>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '50rem' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="entry"
              label="Entry"
              placeholder="Entry"
              multiline
              variant="filled"
            />
            <Button variant="outlined">Submit</Button>
          </Box>
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
              Grundall and Grimshander - blacksmith 10% discount
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
              She thinks Sephik Kaltro (very very blue eyes) who works at Torg's which is run by Torga Icevain (a shady dwarf)
              <br />
              Were here 5 days ago, she guessed heading to Bremen next
              <br />
              come back in 5 days for scale mail
              <br />
              Renug Flathand - glassblower that was murdered. Had some interesting meetings with Tilna Mellow (fancy dressed) who's on the speaker's board.
              <br />
              - sherif lives near the council hall
              <br />
              - Flint, Admiral, Calidan, and me put our names in the box
              <br />
              - Sherif Markham Southwell and Speaker Duvessa Shane.
              - Tell Captain Arlaggath (East Haven) and "Swine" Scath (Targos) that Sherif Markham will find out who did it.
              - Calvin's Can makes these weird type of weapons, Selphek has a sword made of the same stuff (maybe)
            </Typography>
          </div>
          <div>
            <Typography variant="h3" color="textPrimary">Week 5:</Typography>
            <Typography variant="body1">
              Amaunator - Preaching about The God of The Sun (Their version of The Morning Lord)
              <br />
              Lathander - A servant of Amaunator's light
              <br />
              Markham doesn't believe the board is drawing fairly. There's 8 of them. Tilna Melo hung out with Renug.
              <br />
              Recent Losers: Ratumil Nazaren (female half-elf), Garos Ros (male half-ling) Roa (male half-orc)
              <br />
              My Number: 17
              <br />
              Ako Gaglin
              <br />
              Bremen:
              <br />
              5 taverns - stones, even keel, the river's mouth, the grumpy moose, the black-bearded brother 
              <br />
              Inn on south side of town "Buried Treasures"
              <br />
              Now in Targos:
              <br />
              Shield seal is a Ship
              <br />
              Keegan Velren, a human born in 10 Towns
              <br />
              His husband was trying to calm a mountain. The dog was his.
              <br />
              Will pay us in free board at the Inn and artwork (?) to find his husband
            </Typography>
          </div>
          <div>
            <Typography variant="h3" color="textPrimary">Week 6:</Typography>
            <Typography variant="body1">
              Narth - The Speaker, shady af
              <br />
              Scath - The speaker's minion (Narth's captain)
              <br />
              Has 3 flying snakes in a cage.
              <br />
              Victim - Taryn, an official on the board. Found on the north end of the docks.
              <br />
              Bartender - Ethan
              <br />
              We hear about a band of adventurers that were heading to Calvin's Caryn. Looking for Oya Minartark, a goliath lycanthrope that can transform into a polar bear
              <br />
              Drow board member - Zauar Gith
              <br />
              Board member in charge of the finances - Umptar Gap
              <br />
              Narth may be in trouble, he was apprehensive and then started acting really weird until eventually handing me a piece of paper with two names on it: 
              <br />
              Kerchack Fidgrath and Elira Songsteel 
            </Typography>
          </div>
          <div>
            <Typography variant="h3" color="textPrimary">Week 8:</Typography>
            <Typography variant="body1">
              Got to the cave and they were attacked by a Yeti.
              <br />
              Who we're looking for:
              <br />
              Makingo Growling Bear - Male Goliath Warior (Dead)
              <br />
              Fish Finger - Female Lightfoot Halfling
              <br />
              Asteriks - Female Tiefling
              <br />
              The Torgs came with them, their plan was to cut across the Dwarven Valley to Caer-Dineval
            </Typography>
          </div>
        </main>
      </ThemeProvider>
    </div>
  )
}

export default Notes