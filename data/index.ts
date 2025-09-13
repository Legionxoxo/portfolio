import { link } from "fs";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Reviews", link: "#Reviews" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I build strong partnership through open dialogue and collaboration ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast driven by a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Building an AI-powered app that helps parents 10x their child’s learning through fun, interactive sessions",
        description: "Buzzzi",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "Real-Time Event Tracking & Discord Alerts",
        des: "A real-time event alert platform built with Next.js,featuring Discord webhook notifications and Stripe-powered premium features.",
        img: "/peekpidgey.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
        link: "https://peekpidgey.netlify.app/",
        livelink: "https://peekpidgey.netlify.app/",
    },
    {
        id: 2,
        title: "AI chatbot to answer webpage Questions",
        des: "Check out AI chatbot taht seamlessly answers user questions directly from your webpage using Next.js .",
        img: "/webask.png",
        iconLists: [
            "/next.svg",
            "/tail.svg",
            "/ts.svg",
            "/stream.svg",
            "/c.svg",
        ],
        link: "https://webask.vercel.app/",
        livelink: "https://webask.vercel.app/",
    },
    {
        id: 3,
        title: "Management Dashboard using Recharts and Supabase",
        des: "A responsive React management dashboard featuring Recharts visualization library for interactive bar and line charts with role based authentication.",
        img: "/dashboard-recharts.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
        link: "https://github.com/Legionxoxo/centralHub-recharts",
        livelink: "",
    },
    {
        id: 4,
        title: "React Native Expo Movie App",
        des: "A mobile app built with React Native and Expo that allows users to find movie recommendations and view trending movies effortlessly.",
        img: "/native.png",
        iconLists: ["/re.svg", "/expo1.svg", "/ts.svg", "/tail.svg", "/c.svg"],
        link: "https://github.com/Legionxoxo/native-pr",
        livelink: "",
    },
];

export const testimonials = [
    {
        quote: "We are thrilled with the NFT project created by Shivendra for our Art club. Their creative vision and technical skill have not only captured the esesence of our students' artwork but also elevated it to a new digital platform. The result is a stunning collection that we're incredibly proud of. Shivendra has demonstrated exceptioonal talent and dedication and we highly recommend their work to anyone looking for innovative and impactful digital art solutions",
        name: "Ajay Soni",
        title: "President of Arts club",
    },
    {
        quote: "As the manager of a small local hotel, I was struggling to keep up with guest check-ins and daily operations. The website Shivendra has build for us has been a game-changer. It's user-friendly, efficient, and has streamlined our entire process. Now, we can manage bookings, track room status, and handle guest requests with just a few clicks. Our staff picked it up quickly, and it's saved us countless hours. The custom features designed for our specific needs show Shivendra's attention to detail. I recommend Shivendra's services for best results",
        name: "Rajesh Pratap Singh",
        title: "Manager of PS residency ",
    },
    {
        quote: "We are thrilled with the NFT project created by Shivendra for our Art club. Their creative vision and technical skill have not only captured the esesence of our students' artwork but also elevated it to a new digital platform. The result is a stunning collection that we're incredibly proud of. Shivendra has demonstrated exceptioonal talent and dedication and we highly recommend their work to anyone looking for innovative and impactful digital art solutions",
        name: "Ajay Soni",
        title: "President of Arts club",
    },
    {
        quote: "As the manager of a small local hotel, I was struggling to keep up with guest check-ins and daily operations. The website Shivendra has build for us has been a game-changer. It's user-friendly, efficient, and has streamlined our entire process. Now, we can manage bookings, track room status, and handle guest requests with just a few clicks. Our staff picked it up quickly, and it's saved us countless hours. The custom features designed for our specific needs show Shivendra's attention to detail. I recommend Shivendra's services for best results",
        name: "Rajesh Pratap Singh",
        title: "Manager of PS residency ",
    },
    {
        quote: "We are thrilled with the NFT project created by Shivendra for our Art club. Their creative vision and technical skill have not only captured the esesence of our students' artwork but also elevated it to a new digital platform. The result is a stunning collection that we're incredibly proud of. Shivendra has demonstrated exceptioonal talent and dedication and we highly recommend their work to anyone looking for innovative and impactful digital art solutions",
        name: "Ajay Soni Soni",
        title: "President of Arts club",
    },
];

export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },

    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Fullstack Engineer Intern",
        desc: "Assisted in the development of a web-based platform using Next.js, enhancing interactivity.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "full-Stack study Journal ",
        desc: "Created user-friendly platform to access and search previous semester exam questions using the MERN stack.",
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Freelance website Project",
        desc: "Developed and deployed a responsive website for local business using Next.js exceeding client expectations.",
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Social Media Intern",
        desc: "Managed daily social media operations, ensuring consistent brand voice boosting engagement by 30%.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/Legionxoxo",
    },
    {
        id: 2,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/shiv04singh/",
    },
];
