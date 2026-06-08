/* ============================================================
   ENCORE — seed dataset
   ------------------------------------------------------------
   "Moments" so the prototype works offline and demos cleanly.
   Each models exactly what a live API (Setlist.fm for the show +
   venue geo, YouTube Data API for clips) would return.

   youtubeId is null for all seed entries on purpose: guessed IDs
   resolve to the WRONG videos, so every seed moment shows the
   "watch fan clips on YouTube" poster (which searches the correct
   artist + venue + year). Paste a real link via "pin a moment"
   and it embeds inline — that pipeline is live.
   ============================================================ */

const MOMENTS = [
  {
    id: 1, artist: "Bad Bunny", venue: "Estadio River Plate", city: "Buenos Aires",
    year: 2022, genre: "reggaeton", lat: -34.5453, lng: -58.4498,
    youtubeId: null,
    story: "Last night of the World's Hottest Tour. 80,000 people screaming every word in unison — you couldn't hear him over the crowd, and that was the point.",
    likes: 2840
  },
  {
    id: 2, artist: "Beyoncé", venue: "Wembley Stadium", city: "London",
    year: 2023, genre: "pop", lat: 51.556, lng: -0.2796,
    youtubeId: null,
    story: "Renaissance opened and the whole stadium turned chrome. Felt like stepping into the future for two hours.",
    likes: 3920
  },
  {
    id: 3, artist: "Radiohead", venue: "Glastonbury (Worthy Farm)", city: "Pilton",
    year: 2017, genre: "rock", lat: 51.1539, lng: -2.5876,
    youtubeId: null,
    story: "Rain the whole set. Nobody moved for shelter. 'Fake Plastic Trees' under a grey sky and 100,000 wet strangers crying together.",
    likes: 1560
  },
  {
    id: 4, artist: "Kendrick Lamar", venue: "Coachella", city: "Indio",
    year: 2017, genre: "hip-hop", lat: 33.6797, lng: -116.2375,
    youtubeId: null,
    story: "DAMN. just dropped. The desert dust lit up red under the stage lights when DNA hit. Pure adrenaline.",
    likes: 2210
  },
  {
    id: 5, artist: "Tame Impala", venue: "Red Rocks Amphitheatre", city: "Morrison",
    year: 2021, genre: "indie", lat: 39.6655, lng: -105.2056,
    youtubeId: null,
    story: "Lasers bouncing off 300-million-year-old rock walls during 'Let It Happen'. Felt like the mountains were breathing.",
    likes: 1890
  },
  {
    id: 6, artist: "Daft Punk", venue: "Coachella", city: "Indio",
    year: 2006, genre: "electronic", lat: 33.6797, lng: -116.2375,
    youtubeId: null,
    story: "The pyramid set. The show that changed live electronic music forever. I was 16 in the crowd and nothing was the same after.",
    likes: 4500
  },
  {
    id: 7, artist: "Rosalía", venue: "Foro Sol", city: "Mexico City",
    year: 2023, genre: "latin", lat: 19.4045, lng: -99.0907,
    youtubeId: null,
    story: "MOTOMAMI live. The motorcycle, the choreography, 65,000 people doing the moves. Spain met México and the roof came off.",
    likes: 2670
  },
  {
    id: 8, artist: "Arctic Monkeys", venue: "Sydney Opera House Forecourt", city: "Sydney",
    year: 2019, genre: "rock", lat: -33.8568, lng: 151.2153,
    youtubeId: null,
    story: "Harbour behind the stage, '505' as the last song, the sails of the Opera House glowing. Unreal setting for a band.",
    likes: 1320
  },
  {
    id: 9, artist: "SZA", venue: "Madison Square Garden", city: "New York",
    year: 2023, genre: "r&b", lat: 40.7505, lng: -73.9934,
    youtubeId: null,
    story: "The lifeguard-tower stage, the diving board. 'Snooze' and 20,000 phone flashlights. Soft and massive at the same time.",
    likes: 2050
  },
  {
    id: 10, artist: "Coldplay", venue: "Estadio Maracanã", city: "Rio de Janeiro",
    year: 2023, genre: "pop", lat: -22.9122, lng: -43.2302,
    youtubeId: null,
    story: "The LED wristbands turned the entire stadium into one breathing organism during 'Fix You'. Cried, not ashamed.",
    likes: 3100
  },
  {
    id: 11, artist: "Fred again..", venue: "Tomorrowland", city: "Boom",
    year: 2023, genre: "electronic", lat: 51.0894, lng: 4.3686,
    youtubeId: null,
    story: "Sunset set. He sampled the crowd's screams live and looped them back. We literally became the song.",
    likes: 2480
  },
  {
    id: 12, artist: "Travis Scott", venue: "Circus Maximus", city: "Rome",
    year: 2023, genre: "hip-hop", lat: 41.8859, lng: 12.4853,
    youtubeId: null,
    story: "70,000 people raging in an actual ancient Roman stadium. Ancient ruins + UTOPIA. Most surreal rage of my life.",
    likes: 2890
  }
];
