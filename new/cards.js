export default function getCards() {
    return {
        "work": [
            {
                "title": "Dassault Systèmes",
                "subtitle": "RnD Web Development Intern",
                "small": "May 2023 - Present",
                "image": "img/ds.jpeg",
                "text": "- Improved error response times by 80% through the development of user-friendly PHP scripts for automated error reporting and testing in web applications, using Regex and language parsing techniques.<br><br>- Optimized script performance significantly, achieving up to a 90% speed boost and reducing file sizes by 70%.<br><br>- Increased operational efficiency by 40% by redesigning search APIs and user interfaces within the internal RobotLib Management and Request content management application, eliminating workflow bottlenecks.<br><br>- Led the development of a new internal web application, utilizing an Apache-MySQL stack and RequireJS to monitor employee performance under an Agile workflow, providing valuable real-time insights.",
                "tags": ["PHP", "JavaScript", "HTML", "CSS", "SQL", "Apache", "MySQL"],
                "filter": ["relevant", "work"]
            },
            {
                "title": "MSU Information Services",
                "subtitle": "Web Development Intern",
                "small": "Jan 2023 - May 2023",
                "image": "img/msu.jpg",
                "text": "- Maintained and updated functionalities for 10+ Drupal web applications on a LAMP stack, including analytics, security, and front-end templates, focusing on user experience, performance, and design.<br><br>- Responded to 20+ user tickets to resolve technical issues and implement requested features on various school websites.",
                "tags": ["PHP", "HTML", "CSS", "SQL", "Apache", "MySQL"],
                "filter": ["relevant", "work"]
            },
            {
                "title": "AISolutionsJSC",
                "subtitle": "Backend Development Intern",
                "small": "Jun 2022 - Aug 2022",
                "image": "img/ais.jpg",
                "text": "- Adapted the Django open-source database management system Mayan EDMS by adding new features such as revamping SQL search queries and operators, hashing authentication procedures, comments, and notifications, successfully bringing the project to official internal use with daily usage of up to 60 employees.<br><br>- Developed and optimized equivalent REST API endpoints for the mobile version, achieving a 30% reduction in response time.",
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
                "text": "I regularly work with raw HTML, CSS, and JavaScript, and related libraries and frameworks such as jQuery and Bootstrap. I should learn React or something someday, but you know what they say about getting too comfortable.",
                "tags": ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
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
                "text": "A project inspired by my girlfriend who is studying advertising sciences. A DSP manages ads from advertisers, using algorithms to determine a suitable ad to serve on websites based on user demographics and other factors.<br><br>Gross oversimplification, I know.<br><br>The back-end is built in Python, using sklearn models trained on advertising datasets to make a bidding decision based on several factors. It is very rudimentary, though. The hardest part was to actually find a public dataset with categorical values not hashed into oblivion. I must have tried a hundred different approaches to engineer features out of multiple pieces of discrete data, but in the end, I had to settle for a dataset with only like 10 categories.<br><br>I don't have an interface yet so it's just an API right now. The old version of this portfolio used to use cat pictures as placeholders, too bad you can't see it anymore.",
                "links": "<span><a href='https://dsp-555b3b937386.herokuapp.com/ad_request?user_tags=10001&floor_price=10' class='btn btn-light btn-sm m-1' target='_blank'>View</a><a href='https://github.com/loop-index/DebtTracker' class='btn btn-light btn-sm m-1' target='_blank'>Code</a></span>",
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