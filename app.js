const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

const PORT = process.env.PORT || 4000;

let events = [
  { title: "TECHSPO Silicon Valley 2022", desc: "TECHSPO Silicon Valley, two-day technology expo returns June 2nd and 3rd, 2022 to the luxurious Westin San Francisco Airport Hotel in San Francisco, California. TECHSPO Silicon Valley brings together some of the best developers, brands, marketers, technology providers, designers, innovators and evangelists looking to set the pace in our advanced world of technology. Watch exhibitors showcase the next generation of advances in technology & innovation, including; Internet, Mobile, AdTech, MarTech and SaaS technologies. Be prepared to be inspired, amazed and educated on how these evolving technologies will impact your business for greater growth.", img: "https://dylanplayer.com/img/techspo.png", location: "The Westin San Francisco Airport Hotel, 1 Old Bayshore Hwy, San Francisco, CA 94030", date: "Thu, Jun 2, 2022, 9:00 AM – Fri, Jun 3, 2022, 4:00 PM PDT"},
  { title: "Tech Summit 2022", desc: "Two days of incredible masterclasses, workshops, speakers, tech leaders, leading tech brands, networking, opportunities, recruiters and more. This is set to be an unmissable event for anyone in Tech.", img: "https://dylanplayer.com/img/techsummit.jpg", location: "San Francisco Marriott Marquis, 780 Mission St, San Francisco, CA 94103", date: "Tue, 28 Jun 2022, 08:30 – Wed, 29 Jun 2022, 15:30 PDT"},
  { title: "IoT Tech Expo North America 2022", desc: "The IoT Tech Expo North America 2022 will bring together key industries from across the globe for two days of top-level content and discussion across 6 co-located events covering Blockchain, Digital Transformation, IoT, 5G, Cyber Security & Cloud, AI and Big data. 5,000 attendees are expected to congregate at the Santa Clara Convention Center, including CTO’s, Heads of Innovation and Technology, IT Directors, Developers, Start-Up’s, OEM’s, Government, Automotive, Operators, Technology Providers, Investors, VCs and many more.", img: "https://dylanplayer.com/img/iottechexpo.jpg", location: "Santa Clara Convention Center, 5001 Great America Parkway, Santa Clara, CA 95054", date: "Wed, 11 May 2022, 09:00 – Thu, 12 May 2022, 17:00 PDT"},
];

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");

app.get('/', 
  (req, res) => {
    res.render('home');
  }
);

app.get('/events',
  (req, res) => {
    res.render('events/index', { events: events });
  }
);

app.listen(PORT, 
  () => {
    console.log(`Evently listening on http://localhost:${PORT}/`);
  }
);
