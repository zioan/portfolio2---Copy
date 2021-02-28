import Mock from "../mock";

const database = {
  information: {
    // English
    name: "Ioan Zaharia",
    aboutContent:
      "I am a web developer. My tasks include further development and implementation of websites. My work as a web developer is mainly programming. My tools of trade are the safe handling of programming or script languages such as JavaScript, and front-end technologies such as HTML5.",
    birth: "25.05.1986, Romania",
    phone: "(+49) 15171641545",
    nationality: "Romanian",
    language: "German, English, Italian, Romanian",
    email: "zaharia.ioan@gmail.com",
    address: "26655 Westerstede, Germany",

    // De
    aboutContentDe:
      "Ich bin ein Webentwickler. Zu meinen Aufgaben gehört die Entwicklung, Weiterentwicklung und Implementierung von Websites. Meine Tätigkeit als Webentwickler ist schwerpunktmäßig die Programmierung. Mein Handwerkszeug ist der sichere Umgang mit Programmier- oder Skriptsprachen wie beispielsweise JavaScript und es kommen häufig Frontend-Technologien wie zum Beispiel HTML5 zum Einsatz.",
    nationalityDe: "rumänisch",
    birthDe: "25.05.1986, Rumänien",
    phoneDe: "015171641545",
    languageDe: "Deutsch, Englisch, Italienisch, Rumänisch",
    addressDe: "26655 Westerstede, Deutschland",
    //

    freelanceStatus: "",
    socialLinks: {
      facebook: "",
      twitter: "",
      pinterest: "",
      behance: "",
      linkedin: "",
      dribbble: "",
      github: "https://github.com/zioan",
    },
    brandImage: "/images/me2.png",
    aboutImage: "/images/me3.jpg",
    cvfile: "/files/empty.pdf",
  },
  skills: [
    {
      title: "HTML5",
      value: 95,
    },
    {
      title: "CSS3",
      value: 90,
    },
    {
      title: "Javascript",
      value: 70,
    },
    {
      title: "ReactJS",
      value: 70,
    },
    {
      title: "SASS",
      value: 60,
    },
    {
      title: "Bootstrap",
      value: 50,
    },
    {
      title: "WordPress",
      value: 80,
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "HTML5 Banner Bundle",
      subtitle: "Mobile-first design, HTML and CSS page clone. ",
      github: "https://github.com/zioan/doto",
      original:
        "https://preview.codecanyon.net/item/mega-html5-banners-bundle-140-multi-purpose-banners/full_screen_preview/21213851?_ga=2.43060965.1385975857.1611996225-2138465394.1611996219",
      imageUrl: "/images/bundle.png",
      url: "https://doto-html-clone.netlify.app",
    },
    {
      id: 2,
      title: "Design Within Reach",
      subtitle: "Mobile-first design, HTML and CSS.",
      github: "https://github.com/zioan/design",
      imageUrl: "/images/design.png",
      url: "https://design-html.netlify.app",
    },
    {
      id: 3,
      title: "Dashboard",
      subtitle: "HTML and CSS page clone. ",
      github: "https://github.com/zioan/clone1",
      original:
        "https://help.one.com/hc/en-us/articles/360000710449-Getting-started-with-Website-Builder",
      imageUrl: "/images/clone1.png",
      url: "https://clone1-html.netlify.app/",
    },
    {
      id: 4,
      title: "Nikola Tesla",
      subtitle:
        "Nikola Tesla life in a nice JavaScript web application. Non-responsive design.",
      github: "https://github.com/zioan/tesla",
      imageUrl: "/images/tesla.png",
      url: "https://tesla-javascript.netlify.app",
    },
    {
      id: 5,
      title: "Movie App",
      subtitle: "JavaScript and Movie DB API",
      github: "https://github.com/zioan/movie-app",
      imageUrl: "/images/movie.png",
      url: "https://movie-javascript.netlify.app",
    },
    {
      id: 6,
      title: "Ioan Zaharia personal Portfolio",
      subtitle: "My personal portfolio is made with React.js and Bootstrap.",
      github: "https://github.com/zioan/portfolio2",
      imageUrl: "/images/portfolio.png",
      url: "https://ioanzaharia.com",
    },
    {
      id: 7,
      title: "Github",
      subtitle: "More code and projects can be found on my Github profile.",
      github: "https://github.com/zioan",
      imageUrl: "/images/github.jpg",
      url: "https://github.com/zioan",
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "10/2019 - Present",
        position: "Order picker",
        company: "Getranke Essmann KG (Westerstede, Germany)",
        details: "",
      },
      {
        id: 2,
        year: "01/2018 - 10/2019",
        position: "Team Leader (responsibility for more than 20 people)",
        company: "ADIENT SRL (Romania) - Car seats factory, branch VW",
        details:
          "Proper operation of the assembly line (many automated components), quality control.",
      },
      {
        id: 3,
        year: "06/2009 - 02/2013",
        position: "Customers Service",
        company: "IKAT SRL (Romania) - Trucks sale and spare part",
        details:
          "Maintaining relationships with existing customers and attract new customers and suppliers, verification of stock levels, updating of financial documents, creation, maintenance and updating of the company's website www.ikat.ro (WordPress), administration and maintenance of the IT system.",
      },
      {
        id: 4,
        year: "03/2008 - 06/2009",
        position: "Plotter Operator",
        company: "Spectrum Media SRL (Romania) - Typography and advertising",
        details:
          "2D design (Corel Draw) according to customer requirements, digital printing at the highest level (different materials), cooperation and development of new creative projects, management and maintenance of the IT system.",
      },
    ],

    // De
    workingExperienceDe: [
      {
        id: 1,
        year: "10.2019 - 2021",
        position: "Kommissionierer",
        company: "Getranke Essmann KG (Westerstede, Deutschland)",
        details: "",
      },
      {
        id: 2,
        year: "01.2018 - 10.2019",
        position: "Gruppenleiter (Verantwortung über 20 Personen)",
        company: "ADIENT SRL (Rumänien) - Autositzfabrik, Niederlassung VW",
        details:
          "Ordnungsgemäßer Betrieb der Montagelinie (viele automatisierte Komponenten), Qualitätskontrolle.",
      },
      {
        id: 3,
        year: "06.2009 - 02.2013",
        position: "Kundenservice",
        company: "IKAT SRL (Rumänien) - LKW-Verkauf und Ersatzteil",
        details:
          "Pflege zu bestehenden Kunden und Gewinnung neuer Kunden und Lieferanten, Nachweis von Warenbeständen, Aktualisierung der Finanzunterlagen, Erstellung, Pflege und Aktualisierung der Website des Unternehmens www.ikat.ro (WordPress), Verwaltung und Wartung des IT-Systems.",
      },
      {
        id: 4,
        year: "03.2008 - 06.2009",
        position: "Plotter Operator",
        company: "Spectrum Media SRL (Rumänien) - Typografie und Werbung",
        details:
          "2D-Design (Corel Draw) nach Kundenwunsch, Digitaldruck auf höchstem Niveau (verschiedene Materialien), Zusammenarbeit und Entwicklung neuer kreativer Projekte, Management und Wartung des IT-Systems.",
      },
    ],
    //

    educationExperience: [
      {
        id: 1,
        year: "2007 - 2008",
        graduation: "Computer Operator and Basic IT Science (Romania)",
        university: "",
        details: "",
      },
      {
        id: 2,
        year: "2004 - 2007",
        graduation: "Higher Schoold Graduation (Romania)",
        university: "",
        details: "",
      },
    ],

    // De
    educationExperienceDe: [
      {
        id: 1,
        year: "2007 - 2008",
        graduation:
          "Computer Operator und grundlegende IT-Wissenschaft (Rumänien)",
        university: "",
        details: "",
      },
      {
        id: 2,
        year: "2004 - 2007",
        graduation: "Höherer Schulabschluss (Rumänien)",
        university: "",
        details: "",
      },
    ],
  },
  //

  contactInfo: {
    phoneNumbers: ["(+49) 015171641545"],
    emailAddress: ["zaharia.ioan@gmail.com"],
    address: "26655 Westerstede, Germany",
  },
};

Mock.onGet("/api/information").reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/skills").reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply((config) => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});
