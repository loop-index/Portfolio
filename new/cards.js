export default function getCards() {
    return {
        "work": [
            {
                "title": "Dassault Systèmes",
                "subtitle": "RnD Web Development Intern",
                "small": "May 2023 - Present",
                "image": "img/ds.jpeg",
                "text": "- Improved team productivity by 20% by initiating the development and design of a new performance monitoring application, using React, RequireJS, and an Apache-MySQL-PHP stack<br><br>- Increased operational efficiency by 40% on the RobotLib management application by rewriting critical APIs and front-end components in PHP, Javascript, and Typescript<br><br>- Slashed 25% off test cycle runtimes by working with the Factory Asset Management team to optimize testing suites, reducing file sizes by up to 70%<br><br>- Accelerated error response times by 40% through new utility scripts for automating error reports and analytics",
                "tags": ["PHP", "JavaScript", "Typescript", "ReactJS", "Apache", "MySQL"],
                "filter": ["relevant", "work"]
            },
            {
                "title": "MSU Information Services",
                "subtitle": "Web Development Intern",
                "small": "Jan 2023 - May 2023",
                "image": "img/msu.jpg",
                "text": "- Leveraged GitLab CI/CD pipeline to deploy and update 10+ Dockerized Drupal applications, rewriting outdated PHP code and upgrading modules<br><br>- Ensured smooth operation and content accuracy on various school websites by promptly responding to 20+ service tickets",
                "tags": ["PHP", "HTML", "CSS", "Apache", "MySQL", "Docker", "GitLab"],
                "filter": ["relevant", "work"]
            },
            {
                "title": "AISolutionsJSC",
                "subtitle": "Backend Development Intern",
                "small": "Jun 2022 - Aug 2022",
                "image": "img/ais.jpg",
                "text": "- Spearheaded the migration of the Django open-source database management system Mayan EDMS for official internal use with daily usage by up to 60 employees<br><br>- Engineered 10+ new SQL search functionalities, secure two-step authentication, discussion forums, and notifications<br><br>- Collaborated with front-end and mobile teams to optimize REST API endpoints, reducing response times by 30%",
                "tags": ["Django", "Python", "PostgreSQL", "Docker"],
                "filter": ["relevant", "work"]
            }
        ],
        "skill": [
            {
                "title": "Python Developer",
                "small": "Proficient",
                "icon": "fa-brands fa-python",
                "text": "I have experience with Python, including Django, Flask, and other libraries. It is my go-to language because of simplicity, rich libraries and idiot-proofness. I have also used it for data analysis and machine learning.",
                "tags": ["Python", "Django", "Flask", "Pandas", "NumPy", "SciKit-Learn"],
                "filter": ["relevant", "skill"]
            },
            {
                "title": "Frontend Developer",
                "small": "Good Enough",
                "icon": "fa-brands fa-square-js",
                "text": "I regularly work with raw HTML, CSS, and JavaScript, and related libraries and frameworks such as jQuery and Bootstrap. I should learn React or something someday, but you know what they say about getting too comfortable.<br><br>Edit: I learned React! It's quite easy to pick up actually.",
                "tags": ["HTML", "CSS", "JavaScript", "React", "jQuery", "Bootstrap"],
                "filter": ["relevant", "skill"]
            },
            {
                "title": "Backend Developer",
                "small": "Better Than Frontend",
                "icon": "fa-brands fa-node-js",
                "text": "I have experience with a variety of configurations, using PHP and backends such as Node.js, Django, and Flask. I have used several SQL and NoSQL databases, including MySQL, PostgreSQL, and Google Firebase. I have also used Docker for containerization and tech stacks such as LAMP and XAMPP.",
                "tags": ["PHP", "Node.js", "Django", "Flask", "MySQL", "PostgreSQL", "Docker", "LAMP", "XAMPP"],
                "filter": ["relevant", "skill"]
            },
            {
                "title": "Java Developer",
                "small": "Probably Forgotten",
                "icon": "fa-brands fa-java",
                "text": "My Java experience mostly consisted of my time in FIRST Robotics (3 years learning and teaching), but I have also built some games and did some LeetCode with it.",
                "tags": ["Java", "WPILib"],
                "filter": ["relevant", "skill"]
            },
            {
                "title": "C/C++ Developer",
                "small": "Good Enough",
                "image": "img/c.jpg",
                "text": "I have decent experience with C++, considering half of my college courses use it. I have built fairly complex projects with it for my classes. I have also used it for Arduino, and C for some systems programming.",
                "tags": ["C", "C++"],
                "filter": ["relevant", "skill"]
            },
            {
                "title": "Mobile Developer",
                "small": "Getting Started",
                "icon": "fa-solid fa-mobile-screen-button",
                "text": "I played with MIT App Inventor awhile ago for class, but we know that doesn't count. I have recently started testing out several frameworks like Flutter or Ionic, but I found React Native to be quite intuitive. I will probably wait for a Mac to write Swift though, currently I don't need that much performance.",
                "tags": ["React Native", "Expo"],
                "filter": ["relevant", "skill"]
            },
            {
                "title": "Esoteric Languages",
                "small": "Who Even Uses These",
                "icon": "fa-solid fa-circle-question",
                "text": "I have used some other languages, like Pascal or Assembly. Yeah they are not esoteric, and they were for schoolwork. My faith in them broke the moment I showed that I knew recursion in Pascal to my bored grade 10 IT teacher. I also know Brainf*ck and have written an interpreter for it, but I don't think that counts.",
                "tags": ["Pascal", "Assembly", "Brainf*ck"],
                "filter": ["skill"]
            }
        ],
        "project": [
            {
                "title": "DSP Mockup",
                "small": "Serving What We All Like, Ads",
                "icon": "fa-brands fa-adversal",
                "text": "A project inspired by my girlfriend who is studying advertising sciences. A DSP manages ads from advertisers, using algorithms to determine a suitable ad to serve on websites based on user demographics and other factors.<br><br>Gross oversimplification, I know.<br><br>The back-end is built in Python, using sklearn models trained on advertising datasets to make a bidding decision based on several factors. It is very rudimentary, though. The hardest part was to actually find a public dataset with categorical values not hashed into oblivion. I must have tried a hundred different approaches to engineer features out of multiple pieces of discrete data, but in the end, I had to settle for a dataset with only like 10 categories.<br><br>I don't have an interface yet so it's just an API right now. The old version of this portfolio used to use cat pictures as placeholders, too bad you can't see it anymore.<br><br>Edit: The cats are back! It's a Christmas miracle.",
                "links": "<span><a href='https://dsp-555b3b937386.herokuapp.com/' class='btn btn-light btn-sm m-1' target='_blank'>View</a><a href='https://github.com/loop-index/DebtTracker' class='btn btn-light btn-sm m-1' target='_blank'>Code</a></span>",
                "tags": ["Scikit-Learn", "Pandas", "Python", "Flask", "MySQL"],
                "filter": ["relevant", "project"]
            },
            {
                "title": "PaybackPal",
                "small": "Turns Out Splitwise Already Exists",
                "image": "img/clock.png",
                "text": "An application that I made because I'm in college and I can't keep track of who I'm owing money to after hangouts or shopping trips. I tried to make the process as simple and intuitive as possible, as I am well aware of the leading competition - notepads. And recently I found out about Splitwise, which is basically the same thing but with more features and a better UI. I will catch it up someday.",
                "links": "<span><a href='https://debttracker-68158.web.app' class='btn btn-light btn-sm m-1' target='_blank'>View</a><a href='https://github.com/loop-index/DSP-Project' class='btn btn-light btn-sm m-1' target='_blank'>Code</a></span>",
                "tags": ["jQuery", "Bootstrap", "Firebase"],
                "filter": ["relevant", "project"]
            },
            {
                "title": "SCP Chatbot",
                "small": "Classified Information",
                "image": "img/scp.png",
                "text": "I built this bot when me and the Vietnamese branch of the SCP Foundation website first started up a Discord server, so that the readers can have better access to the articles, translations, stats, and other dumb functions.<br><br>It is built in Python, getting data from another popular SCP Bot, CROM, and other scraping sources. It is now serving a server of 6000 ish members, but I have also talked with CROM's author to start scraping data from the Viet wiki as well, so this bot is now mostly redundant.<br><br>I am also a recognized author on the SCP wiki, but that's a story for another day.",
                "links": "<span><a href='https://discord.com/invite/KtusYP3S87' class='btn btn-light btn-sm m-1' target='_blank'>View</a><a href='https://github.com/loop-index/SCP-Chatbot' class='btn btn-light btn-sm m-1' target='_blank'>Code</a></span>",
                "tags": ["Python", "Discord.py", "GraphQL"],
                "filter": ["relevant", "project"]
            }
        ],
    }
}