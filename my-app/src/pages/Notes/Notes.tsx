import { ThemeProvider, Typography, Box, TextField, Button, Link } from "@mui/material";
import theme from "../../theme/theme";
import "./Notes.scss";

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
              <span className="line-through">Will - Admiral - Hippo Man Fighter</span>
              <br />
              Will - Squinty Eyes Willy
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
              His husband was trying to climb a mountain. The dog was his.
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
              Asteriks - Female Tiefling (Dead)
              <br />
              The Torgs came with them, their plan was to cut across the Dwarven Valley to Caer-Dineval
            </Typography>
            <Typography variant="h3" color="textPrimary">Week 9:</Typography>
            <Typography variant="body1">
              Brown bag with lots of spells that Tony is now responsible for.
              <br />
              Both Garret and Fish Finger do not know Kerchack or Elira
              <br />
              Keegan gives us a box of 4 statues worth 10 gold each. Smiling fox is mine.
              <br />
              Keegan also has made it so that we have free lodging in Targos.
            </Typography>
            <Typography variant="h3" color="textPrimary">Week 10:</Typography>
            <Typography variant="body1">
              Etnice in The Frozen Far Expeditions has a scout - Jarthra (Shield Dwarf) who is helping us find the missing lantern for 10G per day.
            </Typography>
            <Typography variant="h3" color="textPrimary">Week 11:</Typography>
            <Typography variant="body1">
              Dear my brother nildar you will find me on the frozen ferry in east haven the search for chardalyn continues - Dirth.
              <br />
              Chardalyn are rare, shiny black stones - possibly can be turned into magic.
              <br />
              We find 3 human-like plant prisoners - they attacked us so we killed them.
              <br />
              I wake up in the lobby faintly hearing Bane's voice but can't make it out.
              <br />
              We run into the Torgs finally
              <br />
              Sepheck - Warlock who made his pact with The Frostmaiden, blue eyes, made ice longsword apppear out of nowhere on his waist.
              <br />
              During the conversation with Sepheck, I was feeling a burning rage that I wasn't the source of. It was making me really really want to kill him. I was white-knuckling my hilt.
            </Typography>
            <Typography variant="h3" color="textPrimary">Week 12:</Typography>
            <Typography variant="body1">
              Admiral is gone...
              <br />
              Will's new character: Squinty Eyes Willy older Halfling
              <br />
              We killed Sepheck and Torga.
              <br />
              Rumor 1: did you hear what happened to the evil wizard in east haven? They burned him at the stake. Tower of Auril is directly east of Caer-Konig
              <br />
              Rumor 2: The Everlasting Rime is the Arcane Brotherhood's doing. Vaelish Gant is behind this all. An informant is locked away in Rebel's End
              <br />
              Rumor 3: No new rumor
              <br />
              Rumor 4: Frost Giants' leaders, The Jarls are out to the west
              <br />
              Rumor 5: Northwest of Bremen there's a frozen pirate ship. Possibly full of treasure
            </Typography>
            <Typography variant="h3" color="textPrimary">Week 13:</Typography>
            <Typography variant="body1">
              Crimnas died to a random ancient white dragon
              <br />
              I feel the inner stuggle again one night. I try to lean into it and hear Bane telling me to "Fight it" and "Struggle". I respond by trying to lean into my warlock spells
              <br />
              Innkeeper at Easthaven - Ronaldo
              <br />
              Inn is haunted by Innkeeper's wife
              <br />
              Raymond Rockwell - Brendo's new character
              <br />
            </Typography>
            <Typography variant="h3" color="textPrimary">Week 14:</Typography>
            <Typography variant="body1">
              Dezzan has been recognized and arrested for crimes against the Dalefolk. (Killed a group of adventurers)
              <br />
              Captain Arlaggath - Half Elf town captain from East Haven
              <br />
              4 fishers have gone missing, it's hard to sail obviously, there are a few competing fishers here. Names are "Bunch O Knuckleheads"
              <br />
              Rewards are a scroll and a small gray bag.
              <br />
              We are now in a cave in Lac Dinneshere trying to find them.
              <br />
              We killed a Water Weird.
            </Typography>
            <Typography variant="h3" color="textPrimary">Week 15:</Typography>
            <Typography variant="body1">
              Fairy was run by Skython, he's hanging out at the Wet Trout (bar in town)
            </Typography>
            <Typography variant="h3" color="textPrimary">Week 16:</Typography>
            <Typography variant="body1">
              We killed Dirth. So now we've killed both Nildar and Dirth.
              <br />
              We bought 4 Axbeaks for travelling.
            </Typography>
            <Typography variant="h3" color="textPrimary">Week 17:</Typography>
            <Typography variant="body1">
              I have a new patron but I don't know who it is... voice is a soft femail voice
              <br />
              Heading back to Targos to question Narth about my family. Mentioned Zentarem may be involved.
              <br />
              I now know <Link href="https://www.dndbeyond.com/spells/ray-of-frost" target="_blank">Ray of Frost</Link>
              <br />
              Caer-Dineval is a good spot to find Luskans because The Blades have a presence there.
              <br />
              Scath is a mercenary hired by The Zhentarim.
              <br />
              Narth is about to tell us everything or we're killing him
            </Typography>
          </div>
        </main>
      </ThemeProvider>
    </div>
  )
}

export default Notes