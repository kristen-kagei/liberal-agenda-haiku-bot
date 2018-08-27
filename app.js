const   Sentencer = require('sentencer'), // Sentencer package generates sentences based on predetermined word lists 
        syllable = require('syllable'), // Syllable package counts syllables of given words 
        Twit = require('twit'), // Twitter package 
        config = require('./config1'),

        T = new Twit(config), // new instance of Twitter application with credentials 

        phraseList = ['liberal media', 'liberal agenda'],
        NPR_idArray = ['5392522', '14062180', '5741722', '870645067291258881', '20150502', '20246602', '748534654685315072', '135295668'],
        // @NPR, @NPRextra, @NPRpolitics, @NPRNewsNow, @MorningEdition, @WeekendEdition, @NPREmbedded, @NPRWest
        myNounList= ['air', 'wind', 'fire', 'seas', 'earth', 'ground', 'soul', 'mind', 'depths', 'dark', 'rain', 'brain', 'trees', 'way', 'ink', 'shell', 'ghost', 'core', 'sky', 'land', 'life', 'stones', 'rocks', 'code', 'tea', 'milk', 'breeze', 'farm', 'ligh', 'haze'],
        pronounList= ['Your','My','Their'];

Sentencer.configure({
    actions: {
        custom: function(list) {
            return Math.floor(Math.random()*list.length);
        },
        customOneSyll: function(list) {
            const keeper = custom(list);

            if(syllable(keeper)=1){
                return keeper;
            } else {
                return "phone";
            }
        }
    }
})

function generateHaiku() {
    const haiku = Sentencer.make("Something in the {{ noun }}.  Behold, {{ adjective }}.  {{ a_noun }} rings. Pick up.");
    return haiku; 
}


T.post('statuses/update',
    {status: generateHaiku()},
    (err, data, response) => {
        console.log(err,data,response)
    })
