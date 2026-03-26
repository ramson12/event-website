import londonPoster from "../assets/posters/fusionFest-London.png";
import manchesterPoster from "../assets/posters/fusionFest-Manchester.png";
import leicesterPoster from "../assets/posters/fusionFest-Leicester.png";
import pastp from "../assets/posters/p1.jpeg";
import past2 from "../assets/posters/P2.jpeg";
import past3 from "../assets/posters/P3.jpeg";

const events = [
    {
      id:1,
      title: "FusionFest 2006 - North London",
      location: "Byron Hall, Harrow",
      date: "2026-07-12",
      time: "2:00 PM to 11:30 PM",
      category: "Music Festival",
      image:londonPoster,
      artists:["Tsumyoki","DJ Skeletron","Mark Revlon Band"]
    },
  
    {
      id:2,
      title: "FusionFest 2006 - Manchester",
      location: "Lighthouse, Manchester",
      date: "2026-07-18",
      time: "2:00 PM to 11:30 PM",
      category: "Music Festival",
      image:londonPoster,
      artists:["Tsumyoki","DJ Skeletron","Mark Revlon Band"]
    },
  
    {
      id:3,
      title: "FusionFest 2006 - Swindon",
      location: "Venue 3, Swindon",
      date: "2026-07-24",
      time: "7:00 PM to 3:00 AM",
      category: "Music Festival",
      image:londonPoster,
      artists:["Tsumyoki","DJ Skeletron","Mark Revlon Band"]
    },
  
    {
      id:4,
      title: "FusionFest 2006 - Leicester",
      location: "Ramgharia Hall, Leicester",
      date: "2026-08-01",
      time: "7:00 PM to 3:00 AM",
      category: "Music Festival",
      image:leicesterPoster,
      artists:["Tsumyoki","DJ Skeletron","Mark Revlon Band"]
    },
  
    {
      id:5,
      title: "FusionFest 2006 - West London",
      location: "West London",
      date: "2026-08-02",
      time: "2:00 PM to 11:00 PM",
      category: "Music Festival",
      image:leicesterPoster,
      artists:["Tsumyoki","DJ Skeletron","Mark Revlon Band"]
    },

    {
      id:6,
      title: "Batshow",
      location: "Byron Hall, Harrow, London, HA3 5BD",
      date: "27 July 2025",
      time: "11:00 AM - 08:00 PM",
      category: "Music Festival",
      image:pastp,
      "eventAbout":"Beatshow was an unforgettable experience filled with energy, music, and culture. The night brought together diverse audiences, electrifying performances, and moments that will be remembered for years.",
      "attendenceCount":"3000+",
      "artistCount":"12+",
      status: "soldout"
    },
    {
      id:7,
      title: "Beatshow After party",
      location: "Byron Hall, Harrow, London, HA3 5BD",
      date: "27 July 2025",
      time: "09:00 PM - 01:00 AM",
      category: "Music Festival",
      image:past2,
      "eventAbout":"Beatshow After party was an unforgettable experience filled with energy, music, and culture. The night brought together diverse audiences, electrifying performances, and moments that will be remembered for years.",
      "attendenceCount":"1500+",
      "artistCount":"7+",
      status: "soldout"
    },
    {
      id:8,
      title: "Freedom Blast",
      location: "Thistle Heathrow (Terminal 5), Uxbridge, UB7 0EQ",
      date: "27 July 2025",
      time: "09:00 PM - 01:00 AM",
      category: "Music Festival",
      image:past3,
      "eventAbout":"Freedom Blast was an unforgettable experience filled with energy, music, and culture. The night brought together diverse audiences, electrifying performances, and moments that will be remembered for years.",
      "attendenceCount":"1500+",
      "artistCount":"7+",
      status: "soldout"
    }
/*
  {
    id: 1,
    title: "FusionFest 2006 - London",
    date: "2026-08-08",
    time: "7:00 PM",
    location: "London, UK",
    category: "Music Festival",
    image:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
    artists: [
      {
        name: "DJ Nova",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        role: "DJ",
        headliner: true
      },
      {
        name: "Pulse",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        role: "Electronic Artist",
        headliner: false
      },
      {
        name: "DJ Nova",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        role: "DJ",
        headliner: false
      },
      {
        name: "Pulse",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        role: "Electronic Artist",
        headliner: false
      }
    ],
    description:
      "FusionFest UK Tour opening night in London bringing Indian and global music together.",
    status: "available"
  },
  
  {
    id: 4,
    title: "Live & Loud Rock Concert",
    date: "2025-02-18",
    time: "7:30 PM",
    location: "Bangalore",
    category: "Live Band",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    artists: [
      {
        name: "DJ Nova",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        role: "DJ",
        headliner: true
      },
      {
        name: "Pulse",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        role: "Electronic Artist",
        headliner: false
      },
      {
        name: "DJ Nova",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        role: "DJ",
        headliner: false
      },
      {
        name: "Pulse",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        role: "Electronic Artist",
        headliner: false
      }

    ],
    description:
      "A night of raw energy and powerful performances by top rock bands.",
    status: "soldout"
  },
  {
    id: 5,
    title: "Cultural Fusion Night",
    date: "2025-06-01",
    time: "6:30 PM",
    location: "Kochi",
    category: "Cultural Event",
    image:
      "https://images.unsplash.com/photo-1522158637959-30385a09e0da",
    artists: [
      {
        name: "DJ Nova",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        role: "DJ",
        headliner: true
      },
      {
        name: "Pulse",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        role: "Electronic Artist",
        headliner: false
      },
      {
        name: "DJ Nova",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        role: "DJ",
        headliner: false
      },
      {
        name: "Pulse",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        role: "Electronic Artist",
        headliner: false
      }

    ],
    description:
      "A celebration of culture, music, dance, and traditional performances.",
    status: "available"
  },
  {
    id: 6,
    title: "Dream Wedding Showcase",
    date: "2025-01-25",
    time: "4:00 PM",
    location: "Udaipur",
    category: "Wedding Event",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552",
    artists: [
      {
        name: "DJ Nova",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        role: "DJ",
        headliner: true
      },
      {
        name: "Pulse",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        role: "Electronic Artist",
        headliner: false
      },
      {
        name: "DJ Nova",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        role: "DJ",
        headliner: false
      },
      {
        name: "Pulse",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        role: "Electronic Artist",
        headliner: false
      }
    ],
    description:
      "An elegant wedding showcase featuring décor, music, and luxury planning.",
    status: "few"
  },
  {
    id: 7,
    title: "Retro Bollywood Night",
    date: "2024-12-15",
    time: "8:00 PM",
    location: "Pune",
    category: "Theme Night",
    image:
      "https://images.unsplash.com/photo-1541532713592-79a0317b6b77",
    artists: [
      {
        name: "DJ Nova",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        role: "DJ",
        headliner: true
      },
      {
        name: "Pulse",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        role: "Electronic Artist",
        headliner: false
      },
      {
        name: "DJ Nova",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        role: "DJ",
        headliner: false
      },
      {
        name: "Pulse",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        role: "Electronic Artist",
        headliner: false
      }
    ],
    description:
      "A nostalgic night celebrating classic Bollywood hits and timeless dance numbers.",
    status: "soldout"
  }*/
];

export default events;
