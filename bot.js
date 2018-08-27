const   Twit = require('twit'),
        config = require('./config1'),
        tracery = require('tracery-grammar'),
        
        // new Twitter instance 
        T = new Twit(config),

        // Tracery grammar set up 
        grammar = tracery.createGrammar({

            'verb': ['is', 'lies', 'feels', 'exists', 'thrives', 'glistens', 'glimmers', 'shines', 'plays',
                    'prays', 'flies', 'falls', 'braves', 'fears', 'ails', 'sails', 'soars', 'jumps', 'cries', 
                    'dies', 'grows', 'veers', 'slinks', 'wakes', 'sleeps', 'heals', 'fails'],

            /* can be any noun, but MUST be one syllable and make 
            realtive sense in the sentence: "What is in the ___?"   
            */
            'noun': ['air', 'wind', 'fire', 'seas', 'earth', 'ground', 'soul', 'mind', 
                    'depths', 'dark', 'rain', 'brain', 'trees', 'way', 'ink', 'shell', 'ghost', 
                    'core', 'sky', 'land', 'life', 'stones', 'rocks', 'code', 'tea', 'milk', 
                    'breeze', 'farm', 'light', 'haze', 'bush', 'thorn', 'can', 'bowl', 'stars',
                    'leaves', 'couch', 'chair', 'room', 'chest', 'cup', 'glass', 'pot', 'frame',
                    'card', 'hat', 'hosue', 'dust', 'heart', 'hearth', 'space', 'book', 'web', 'screen',
                    'sound', 'rush', 'coin', 'lair', 'maze', 'trap', 'beast', 'song', 'sign', 'keys', 'time',
                    'field', 'well', 'war', 'way', 'truth', 'lie', 'zone', 'peace', 'food', 'drink', 'wine',
                    'pen', 'word', 'car', 'truck', 'shoe', 'vat', 'map', 'game', 'end', 'start', 'mind',
                    'hive', 'throes', 'woes', 'fear', 'quake', 'crust', 'flame', 'gold', 'sludge', 'cage', 'cave',
                    'grass', 'print', 'case', 'chase', 'head', 'page', 'soup', 'brain', 'fight', '"why"', 
                    'now', 'rose', 'street', 'road', 'bag', 'cloak', 'smoke', 'smog', 'wire', 'dream',
                    'cheese', 'boat', 'box', 'lock', 'crate', 'list', 'loss', 'lie', 'home', 'base', 'lake',
                    'faith', 'vase', 'hymn', 'drain', 'hills', 'bills', 'veils', 'teeth', 'mouth', 'eyes', 'ice',
                    'bust', 'head', 'state', 'gate'],

            // Pronouns, articles
            'pronoun': ['Your', 'My', 'Their', 'This', 'That', 'Some', 'Her', 'His', 'Thyne', 'Mine', 'A', 'The'],
            
            /* 'action' word/phrase list MUST be 4 syllables. 
            Can be anything as long as it makes sense in this sentence: 
            (My) heart is _______. */
            'action': ['palpitating', 'racing, racing', 'raging, on fire', 'laughing weirdly', 'chortling hard', 
                    'alight, aghast', 'saying something', 'whispering soft', 'singing sweetly', 'trying to say', 
                    'telling the truth', 'its best darn self', 'looking for answers', 'alone in fear', 'alive in truth',
                    'looking for peace', 'aching for love', 'being the best', 'living the dream', 'speaking in tweets',
                    'trolling the web', 'being a brat', 'telling you no', 'telling you yes', 'saying "FREEDOM"', 'singing "FREEDOM',
                    'magnificent', 'already great', 'still beating fast', 'still working hard', 'trying its best', 
                    'doing the most', 'all of the things', 'never enough', 'in love...sorta', 'meeting the sun', 'slaying a ghoul',
                    'fighting a ghost', 'tripping a wire', 'hitting a wall', 'barely breaking', 'hardly enough', 'sadly melting',
                    'mostly even', 'so not worthy', 'just whispering', 'sure what is best', 'sheer resistance', 'cannot resist',
                    'so protective', 'trying to learn', 'burning one down', 'saying nothing', 'learning faster', 'lying to me', 'lying to them', 
                    'lying to us', 'throwing a fit', 'rolling over', 'jumping in space', 'skipping a beat', 'skipping a skip', 'bouncing around',
                    'laughing at you', 'laughing at me', 'laughing at them', 'laughing at him', 'not a kind soul', 'the kindest soul',
                    'like new plant life', 'like a rainbow', 'like nothing else', 'like no one else', 'like none before', "from someone's dream", 
                    "...just like, can't even", 'ghost riding whip', 'phatter than phat', 'beyond the stars', 'more than merry',
                    'a true gamer', 'a master theif', 'a precedent', 'doing just OK', 'going under', 'slowing down some',
                    'getting tired', 'getting older', 'getting worse still', 'losing the war', 'living a lie', 'living in truth', 'living magic',
                    'forgetting you', 'remembering', 'recalling you', 'not forgetting', 'glittery gold', 'not singing well', 'beating like the',
                    'giggling like', 'emblazoning', 'on the cusp of', 'made of paper', 'made of stardust', 'a peacekeeper', 'trying to change',
                    'fighting culture', 'tired, aching', 'almost running', 'almost enough', 'almost someone', 'failing like truth', 
                    'hustling hard', 'heckling me', 'being plain mean', 'rolling around', 'trying to sleep', 'starting to care',
                    'starting to hurt', 'beginning now', 'incubating', 'infiltrating', 'cascading up', 'ready. Winter', 'beating with the',
                    'leaning into', 'becoming like', 'on my tired', 'on the earth brain', 'bringing the noise', 'a kiss away', 'a call away', 
                    'just out of reach', 'some kind of love', 'a strange figment', 'a live nightmare', 'alive! Alive!', 'st-stuttering', 
                    'flossing its teeth', 'not quite adult', 'still so child-like', 'still innocent', 'like a prayer', 'melting so fast', 'molten lava',
                    'a disaster', 'epically rude', 'on top of it', 'getting sicker', 'going to thrive', 'going to live', 'going to run', 
                    'going to lie', 'going to sleep', 'very evil', 'slightly evil', 'more mean than most', 'hardly a beat', 'pretty much here', 
                    'never gonna', 'just another', 'here to be the', 'versatile, but', 'mine. And yours is', 'here. Where is mine', 'close. Wherever', 
                    'never alone', 'really lonely', 'beyond afraid', 'dreadfully loose', 'carefully sewn', 'soldered solid', 'mechanical',
                    'artificial', 'Robot. AI', 'more like a foot', 'broken like truth', 'breaking us down', 'whirling past time', 
                    'dancing again', 'never to dance', 'want to explode', '...well, faint at heart', 'hard of hearing', 'an epic bore',
                    'heftier still', 'electronic', 'already drunk', 'broken, wasted', 'a tormentor', 'born yodeler'],

            'keyPhrase': ['liberal media.', 'liberal agenda.', "or it's just fake news.", "maybe it's fake news.", "you could be fake news!",
                         "fake news? History?", "liberal history.", "who writes history?", "who wins in fake news?"],

            // What {{ verb }} in the {{ noun }}? / {{ pronoun }} heart is {{action }} / {{ surprise }}
            'origin': ['What #verb# in the #noun#? / #pronoun# heart is #action#... / #keyPhrase#']
        })

grammar.addModifiers(tracery.baseEngModifiers);

 // function to generate haiku of words from Tracery word bank 
function generateHaiku(){
    const haiku = grammar.flatten('#origin#');
    // console.log(haiku); //delete this, Kristen! 
    return haiku;
    }

// generateHaiku();


// set up Twitter stream and automatic Tweets 
const NPR_idArray = ['5392522', '14062180', '5741722', '870645067291258881', '20150502', '20246602', '748534654685315072', '135295668'];
                    // '@NPR', '@NPRextra', '@NPRpolitics', '@NPRNewsNow', '@MorningEdition', '@NPRWeekend', '@NPREmbedded', '@NPRWest'
// const regex = new RegExp(nprFilterStrings.join( "|" ), "i", "g")
const stream = T.stream('statuses/filter', {follow: NPR_idArray}, {track: ['liberal media', 'liberal agenda']});

stream.on('tweet', twitEvent);

function twitEvent(tweet) {
    const reply_to_who = tweet.in_reply_to_user_id_str,
        instigator_username = tweet.user.screen_name,
        //instigator_status_id = tweet.id_str,
        entts = tweet.urls;

        // doesMatch = regex.test(reply_to_who); 
    
    if(reply_to_who === NPR_idArray[0] || NPR_idArray[2] || NPR_idArray[3]) {
        const newText = "It's the kind of day to share a haiku, @" + instigator_username + ': ' + generateHaiku();
        
        // Post that tweet
        T.post('statuses/update', {status: newText}, tweeted=(err, tweeted) => {
            if(err) {
                console.log(err.message);
            } else {
                return tweeted.text;
            }
        })
    }
}
