document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Element Selections ---
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const closeSidebarToggle = document.querySelector('.close-sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;
    const sidebarLinks = document.querySelectorAll('.sidebar-nav ul li a');
    const pageSections = document.querySelectorAll('.page-section'); // All sections
    const tourButton = document.querySelector('.tour-button');
    const tourOverlay = document.getElementById('tour-campus');
    const closeTourButton = document.querySelector('.close-tour-button');

    // --- Sidebar Functions ---
    function openSidebar() {
        sidebar.classList.add('active');
        body.classList.add('sidebar-open');
        closeSidebarToggle.style.display = 'block'; // Show the close button
        sidebarToggle.style.display = 'none'; // Hide the hamburger button
    }

    function closeSidebar() {
        sidebar.classList.remove('active');
        body.classList.remove('sidebar-open');
        closeSidebarToggle.style.display = 'none'; // Hide the close button
        sidebarToggle.style.display = 'block'; // Show the hamburger button
    }

    // --- Tour Campus Overlay Functions ---
    function openTourOverlay() {
        tourOverlay.classList.add('active');
        // Optional: Close sidebar if open when tour button is clicked
        if (sidebar.classList.contains('active')) {
            closeSidebar();
        }
    }

    function closeTourOverlay() {
        tourOverlay.classList.remove('active');
    }

    // --- Content Management & Gallery Functions ---

    // Object to hold content for all dynamic sections, including the new SEO ones
    const sectionsContent = {
        '#home': `
            <h2>Welcome to DreamBridge School</h2>
            <p>Welcome to **DreamBridge School**, a nurturing ground where aspirations take flight and futures are meticulously crafted. Situated in the heart of India, our institution is dedicated to providing a holistic and future-ready education that transcends traditional boundaries. Inspired by the legacy of exemplary Indian schools like the Jawahar Navodaya Vidyalayas, we have reimagined learning for the 21st century, focusing on innovation, character development, and a deep sense of community. At DreamBridge, we believe in fostering an environment where every child feels empowered to explore, excel, and evolve into a compassionate, confident, and responsible global citizen. Our commitment extends beyond academic prowess to nurturing well-rounded individuals equipped with critical thinking, creativity, and leadership skills essential for navigating an ever-changing world. We integrate cutting-edge pedagogical practices with rich cultural values, ensuring a harmonious blend of tradition and modernity. Join us in building futures and bridging dreams.</p>
            <p>Our expansive campus is a testament to our dedication to providing world-class facilities. From smart classrooms equipped with the latest technology to advanced science and computer laboratories, and sprawling sports complexes, every corner of DreamBridge is designed to stimulate intellectual curiosity and physical well-being. Our highly qualified and empathetic faculty are mentors, guiding students through engaging project-based learning, interactive sessions, and personalized mentorship. We celebrate diversity, encourage independent thought, and cultivate an an atmosphere of respect and collaboration. DreamBridge is not just an educational institution; it is a vibrant ecosystem where students forge lifelong friendships, discover hidden talents, and embark on a transformative journey of self-discovery and academic excellence. We invite you to experience the DreamBridge difference – an education that truly prepares young minds for tomorrow's challenges and opportunities, ensuring they emerge as confident leaders and compassionate contributors to society.</p>
            <p>Our curriculum is meticulously designed to foster a deep understanding of subjects while promoting interdisciplinary connections. We emphasize hands-on learning, encouraging students to question, experiment, and innovate. Beyond academics, a rich tapestry of co-curricular activities, including performing arts, visual arts, various sports, and STEM clubs, ensures that every student finds an avenue to express themselves and develop diverse skills. Regular community engagement programs instill a strong sense of social responsibility, teaching students the importance of giving back. At DreamBridge, we are not just educating children; we are shaping the leaders, thinkers, and innovators of tomorrow, laying a solid foundation for a bright and impactful future.</p>
        `,
        '#about-us': `
            <h2>About Us</h2>
            <p>DreamBridge School is a beacon of modern education in India, drawing inspiration from the rich legacy of institutions like Jawahar Navodaya Vidyalayas, yet reimagined for the 21st century. Established with a vision to nurture holistic growth, we blend rigorous academics with a vibrant co-curricular ecosystem. Our approach is student-centric, fostering critical thinking, creativity, and a strong sense of community. We believe in providing an inclusive environment where every child is empowered to discover their potential and become a responsible global citizen. Our faculty comprises highly qualified and passionate educators dedicated to innovative teaching methodologies and personalized attention, ensuring that each DreamBridge student receives an education that truly builds futures and bridges dreams. Our school's ethos is built on the pillars of integrity, empathy, excellence, and innovation, aiming to sculpt not just scholars, but compassionate leaders and responsible contributors to society.</p>
            <p>At DreamBridge, we champion a learning environment that extends beyond textbooks. We embrace experiential learning, project-based work, and collaborative problem-solving, believing that true education comes from doing. Our infrastructure is designed to support diverse learning styles, equipped with smart classrooms, advanced laboratories for science, computers, and robotics, and extensive sports facilities that cater to a wide range of athletic pursuits. We are committed to fostering a strong moral compass, emphasizing values, ethics, and leadership skills, preparing our students not just for examinations but for life's myriad challenges and opportunities. Our rich cultural programs ensure students remain connected to their roots while embracing global perspectives. We regularly engage with parents and the wider community, recognizing that education is a shared journey, fostering a partnership that supports every child's development. DreamBridge is a place where every voice is heard, every talent is celebrated, and every dream is given the wings to soar.</p>
            <p>Our commitment to excellence is reflected in our robust academic programs, designed to challenge and inspire. We offer a balanced curriculum that emphasizes not only core subjects but also encourages interdisciplinary studies and real-world application of knowledge. Students are encouraged to pursue independent research, participate in scientific experiments, and engage in meaningful discussions that broaden their perspectives. Beyond the classroom, our vibrant campus life offers a plethora of opportunities for personal development, from student-led clubs and societies to community service initiatives. We believe that a holistic education prepares students not just for higher studies but for a meaningful and impactful life. Our alumni, now successful professionals in diverse fields, are a testament to the quality of education and character development imparted at DreamBridge School. We are continually evolving, adapting to new educational paradigms, and embracing technological advancements to ensure our students are future-ready, equipped with 21st-century skills and a strong ethical foundation.</p>
        `,
        '#our-vision': `
            <h2>Our Vision</h2>
            <p>Our vision at DreamBridge School is to be a pioneering institution of holistic education, recognized globally for fostering innovation, critical thinking, and compassionate leadership. We aspire to empower every young mind to unlock their full potential, enabling them to become proactive, responsible, and adaptable global citizens who contribute meaningfully to society. We envision a learning ecosystem where curiosity is not just encouraged but ignited, where creativity flourishes unbound, and where every student's unique talents and aspirations are celebrated and nurtured. Drawing inspiration from India's profound educational heritage, we aim to transcend conventional pedagogical methods, preparing students not just for academic success but for a life of purpose, resilience, and ethical leadership in an ever-evolving world. We see a future where DreamBridge alumni are at the forefront of societal progress, driven by integrity and a commitment to positive change.</p>
            <p>We see DreamBridge as a hub of cutting-edge learning and character development, mirroring the foundational strengths of institutions like Jawahar Navodaya Vidyalayas, but with a modern, future-focused lens. Our vision extends to cultivating an environment where technology and traditional values coexist harmoniously, equipping students with 21st-century skills such as critical problem-solving, digital literacy, collaboration, and creative thinking, while grounding them in strong moral principles of empathy, respect, and social responsibility. We envision a vibrant community of learners, educators, and parents collaborating seamlessly, fostering a culture of mutual respect, open communication, and continuous improvement, where every stakeholder feels valued and engaged in the educational journey. Ultimately, our vision is to contribute significantly to building a progressive and harmonious society by nurturing a generation of enlightened individuals who are not only academically brilliant but also socially conscious, environmentally responsible, and culturally aware, capable of bridging their dreams with a truly transformative education that impacts the world positively.</p>
        `,
        '#our-mission': `
            <h2>Our Mission</h2>
            <p>Our mission at DreamBridge School is to provide an unparalleled educational experience rooted in **academic excellence, profound character development, and a steadfast commitment to innovation**. We are dedicated to creating a dynamic learning environment where every student is inspired to reach their highest potential, fostering a lifelong love for learning and discovery. Our mission is to:</p>
            <ul>
                <li>**Foster Academic Rigor and Intellectual Curiosity:** Deliver a robust and engaging curriculum that challenges students to think critically, solve complex problems, and develop a deep, conceptual understanding across all disciplines. We aim to inspire a thirst for knowledge that extends beyond the classroom, encouraging independent research, inquiry-based learning, and a proactive approach to intellectual growth.</li>
                <li>**Cultivate Holistic Development:** Nurture the physical, emotional, social, and intellectual well-being of every student through a diverse array of co-curricular and extracurricular programs. We believe in balancing academic pursuits with ample opportunities for artistic expression, athletic achievement, leadership roles, and personal growth, ensuring a well-rounded personality.</li>
                <li>**Instill Strong Values and Ethical Principles:** Impart core moral values, integrity, empathy, resilience, and respect for diversity, drawing deeply from the rich cultural tapestry and ethical traditions of India. We strive to develop students who are not only intelligent but also compassionate, responsible, and socially conscious citizens, equipped with a strong moral compass.</li>
                <li>**Promote Innovation and Embrace Technology:** Integrate cutting-edge technology and modern pedagogical approaches into teaching and learning as a cornerstone of our methodology. Our mission is to prepare students for the digital age by equipping them with computational thinking, advanced digital literacy, coding skills, and the adaptive mindset to innovate and thrive in a rapidly changing technological landscape.</li>
                <li>**Build a Collaborative and Supportive Community:** Create a safe, inclusive, and nurturing environment where students, parents, and educators form a strong partnership, actively contributing to the school's ecosystem. We aim to foster open communication, mutual respect, and collaborative efforts to support each child's educational journey and overall well-being, resembling the strong community bonds found in highly successful residential schools.</li>
                <li>**Inspire Leadership and Social Responsibility:** Empower students to take initiative, think creatively, communicate effectively, and contribute positively to their local and global communities. Our mission is to develop young leaders who understand their role in society and are committed to making a difference through service, impactful action, and sustainable practices.</li>
            </ul>
            <p>Through these focused efforts, DreamBridge School strives to be a transformative force in education, truly building futures and bridging dreams for generations to come, upholding the highest standards of a modern Indian educational institution.</p>
        `,
        '#curriculum': `
            <h2>Curriculum</h2>
            <p>DreamBridge School offers a dynamic and comprehensive curriculum designed to meet national standards while incorporating global best practices. Our pedagogical approach is rooted in experiential learning, critical thinking, and interdisciplinary connections, ensuring students not only gain knowledge but also develop essential skills for the 21st century. We follow a curriculum framework that encourages inquiry-based learning, problem-solving, and creativity across all stages of development. Our emphasis on practical application ensures that theoretical knowledge is reinforced with real-world understanding, preparing students for future academic challenges and diverse career paths.</p>
            <h3>Primary Years (Grades 1-5): Foundational Learning and Exploration</h3>
            <p>The primary curriculum at DreamBridge focuses on building strong foundational literacy and numeracy skills through interactive and activity-based learning. Subjects include English, Hindi (and an optional regional language), Mathematics, Environmental Studies (EVS), Computer Science, Art, Music, and Physical Education. The learning environment is designed to foster curiosity, creativity, and social-emotional development. We use play-way methods, storytelling, and hands-on experiments to make learning engaging and memorable, ensuring a smooth transition from early childhood education.</p>
            <h3>Middle Years (Grades 6-8): Deepening Concepts and Skill Development</h3>
            <p>In the middle years, students delve deeper into subjects with an emphasis on conceptual understanding and analytical thinking. Core subjects include Science (Physics, Chemistry, Biology), Mathematics, Social Sciences (History, Geography, Civics), Languages (English, Hindi, and choice of regional/foreign language), and Computer Applications. Project-based learning, group discussions, and interdisciplinary projects are key methodologies, encouraging collaborative problem-solving and critical analysis. Students are introduced to basic research skills and presentation techniques.</p>
            <h3>Secondary and Senior Secondary Years (Grades 9-12): Specialization and Future Readiness</h3>
            <p>These crucial years prepare students for board examinations and higher education. We offer specialized streams including Science (Physics, Chemistry, Biology/Mathematics), Commerce (Accountancy, Business Studies, Economics), and Humanities (History, Political Science, Economics, Psychology, Sociology). Our advanced laboratories, comprehensive library, and digital resources support in-depth learning. We provide extensive support for competitive exam preparation, personalized career counseling, and mentorship programs to guide students towards their desired academic and professional paths. A strong focus is placed on critical analysis, research, and application of knowledge to real-world scenarios.</p>
            <h3>Integrated Programs and Initiatives:</h3>
            <ul>
                <li>**Integrated STEM Program:** Hands-on learning in Science, Technology, Engineering, and Mathematics, including advanced robotics, coding, and AI workshops.</li>
                <li>**Entrepreneurship and Financial Literacy:** Practical workshops and projects designed to develop business acumen, financial planning skills, and an innovative mindset.</li>
                <li>**Global Awareness & Soft Skills:** Programs to build effective communication, collaboration, cross-cultural understanding, and leadership qualities essential for global citizenship.</li>
                <li>**Life Skills Education:** Sessions on emotional intelligence, stress management, digital citizenship, and responsible decision-making.</li>
            </ul>
        `,
        '#admissions': `
            <h2>Admissions</h2>
            <p>Welcome to the DreamBridge School Admissions portal! We are delighted that you are considering our school for your child's educational journey. Our admission process is designed to be transparent, equitable, and accessible, ensuring we find students who will thrive in our dynamic and supportive learning environment. We believe in providing an opportunity for every child to achieve their full potential, and our admissions team is dedicated to guiding prospective parents through every step.</p>
            <h3>Admission Process: Step-by-Step Guide</h3>
            <ol>
                <li>**Online Inquiry & Prospectus Request:** Begin by filling out our online inquiry form on the school website. You can also request a detailed e-prospectus which outlines our philosophy, curriculum, facilities, and fee structure.</li>
                <li>**Campus Visit & Orientation:** We highly encourage prospective parents and students to visit our state-of-the-art campus for a guided tour. This allows you to experience our vibrant learning environment, interact with faculty members, and understand our pedagogical approach firsthand. Regular open house sessions are also conducted.</li>
                <li>**Application Form Submission:** The application form can be obtained from the school admissions office or downloaded from our website. Please fill it out completely and accurately, attaching all required documents.</li>
                <li>**Required Documents:** Typically include: birth certificate of the student, previous school's report card/transfer certificate, passport-sized photographs of student and parents, Aadhaar Card (or other valid ID proof) of parents and student, and any medical records if applicable.</li>
                <li>**Assessment/Interactive Session:**
                    <ul>
                        <li>For Primary Grades (Nursery-Grade 5): An interactive session with the student and parents to assess readiness and understand the child's personality and learning style.</li>
                        <li>For Middle & Secondary Grades (Grade 6 onwards): A diagnostic assessment may be conducted in core subjects (English, Mathematics, Science) to gauge the student's academic proficiency.</li>
                    </ul>
                </li>
                <li>**Interview/Interaction with Principal:** Shortlisted candidates and their parents will have an interaction session with the Principal or a senior faculty member to discuss the child's aspirations, family values, and alignment with the school's ethos.</li>
                <li>**Admission Offer & Enrollment:** Successful candidates will receive an admission offer letter. Upon acceptance, parents are required to complete the enrollment formalities, which include payment of admission fees and submission of any pending documents within the stipulated timeframe.</li>
            </ol>
            <p>DreamBridge School maintains a limited number of seats per class to ensure personalized attention. Admissions are granted on a rolling basis until seats are filled. We recommend initiating the process early. For specific admission timelines, eligibility criteria, and fee details, please refer to our official school calendar on the website or contact our Admissions Office directly. Our team is here to assist you with any queries.</p>
            <p><strong>Contact our Admissions Office:</strong><br>
            Email: admissions@dreambridgeschool.in<br>
            Phone: +91-XXXXXXXXXX (Primary), +91-YYYYYYYYYY (Secondary)<br>
            Office Hours: Monday - Friday, 9:00 AM - 4:00 PM</p>
        `,
        '#facilities': `
            <h2>Facilities</h2>
            <p>DreamBridge School boasts a sprawling, eco-friendly campus meticulously designed to foster a stimulating, safe, and modern learning environment. Our state-of-the-art facilities are thoughtfully integrated to support every facet of holistic development – academic, athletic, artistic, and personal, reminiscent of the best modern educational townships found in India.</p>
            <h3>Academic Infrastructure:</h3>
            <ul>
                <li>**Smart Classrooms:** Fully digitized classrooms equipped with interactive whiteboards, high-definition projectors, and high-speed internet connectivity, facilitating engaging and dynamic learning experiences.</li>
                <li>**Advanced Science Laboratories:** Separate, well-equipped labs for Physics, Chemistry, and Biology, providing hands-on opportunities for experimentation, research, and scientific inquiry.</li>
                <li>**Computer Labs:** Multiple modern computer labs with high-performance machines and updated software, fostering digital literacy, coding skills, and computational thinking.</li>
                <li>**Robotics & AI Lab:** A dedicated innovation hub with advanced robotics kits, 3D printers, and AI development tools to inspire future engineers and technologists.</li>
                <li>**Library & Media Center:** A spacious, tranquil learning sanctuary with an extensive collection of books, journals, e-books, and digital resources, offering dedicated zones for research, collaborative learning, and quiet reading.</li>
                <li>**Language Labs:** Dedicated spaces with audio-visual aids for enhancing pronunciation, comprehension, and fluency in various languages.</li>
            </ul>
            <h3>Sports & Fitness Amenities:</h3>
            <ul>
                <li>**Olympic-Size Swimming Pool:** A well-maintained, supervised swimming pool for competitive training and recreational swimming.</li>
                <li>**Expansive Sports Fields:** Professional-grade grounds for Football, Cricket, and Athletics.</li>
                <li>**Multi-Sport Courts:** Dedicated courts for Basketball, Volleyball, and Tennis.</li>
                <li>**Indoor Sports Complex:** A state-of-the-art hall for Badminton, Table Tennis, Gymnastics, and other indoor sports.</li>
                <li>**Yoga & Meditation Center:** A serene space for fostering mindfulness, flexibility, and mental well-being.</li>
                <li>**Fitness Center:** Equipped with modern exercise machines for overall physical fitness and strength training.</li>
            </ul>
            <h3>Artistic & Cultural Hubs:</h3>
            <ul>
                <li>**Art Studios:** Spacious studios for visual arts, including painting, sketching, pottery, and sculpture.</li>
                <li>**Music & Dance Conservatories:** Dedicated sound-proofed rooms for vocal and instrumental music training (Indian classical and Western), and dance studios with specialized flooring and mirrors.</li>
                <li>**Performing Arts Auditorium:** A grand, acoustically designed auditorium with professional lighting and sound systems for school plays, cultural events, concerts, and assemblies.</li>
            </ul>
            <h3>Support & Residential Facilities:</h3>
            <ul>
                <li>**Counselling & Wellness Center:** A dedicated team of counselors offering academic, career, and emotional support to students.</li>
                <li>**Medical Bay:** A well-equipped infirmary with qualified medical staff and a visiting doctor for immediate medical attention.</li>
                <li>**Hygienic Cafeteria:** A spacious and modern dining hall providing nutritious and balanced meals, prepared under strict hygiene standards.</li>
                <li>**Transportation:** A fleet of modern, GPS-enabled school buses with trained drivers and attendants, ensuring safe and timely commute.</li>
                <li>**Modern Boarding Houses (Residential Facilities):** Comfortable, well-ventilated dormitories with round-the-clock supervision, separate common rooms, study areas, and recreational zones, offering a secure and nurturing home-away-from-home experience for boarding students, reflecting the best in residential school living.</li>
                <li>**Security Systems:** 24/7 CCTV surveillance, trained security personnel, and controlled access points ensure a safe and secure campus environment.</li>
            </ul>
        `,
        '#achievements': `
            <h2>Achievements</h2>
            <p>At DreamBridge School, our commitment to excellence is reflected in the remarkable accomplishments of our students and faculty, both within and beyond the traditional academic framework. We take immense pride in nurturing talent and fostering a spirit of continuous improvement, leading to a consistent track record of outstanding achievements across various domains.</p>
            <h3>Academic Excellence & Scholarly Distinctions:</h3>
            <ul>
                <li>**Outstanding Board Examination Results:** Consistently high pass percentages and a significant number of students achieving top ranks in national-level Board Examinations (e.g., CBSE/ICSE/State Board). Many students secure perfect scores in individual subjects.</li>
                <li>**University Placements:** Our alumni gain admissions into India's most prestigious institutions such as the Indian Institutes of Technology (IITs), All India Institute of Medical Sciences (AIIMS), National Institutes of Technology (NITs), top Delhi University colleges, leading private universities, and renowned international universities across the globe.</li>
                <li>**Olympiad & Competitive Exam Success:** Numerous students achieve top ranks and medals in national and international Olympiads (Math, Science, Cyber, English, General Knowledge) and various other competitive examinations (e.g., NTSE, KVPY).</li>
                <li>**Science & Innovation Fairs:** Regular winners and top contenders in inter-school and national-level science exhibitions, innovation challenges, and tech fests, showcasing groundbreaking projects in robotics, AI, and sustainable technologies.</li>
            </ul>
            <h3>Co-curricular & Sporting Triumphs:</h3>
            <ul>
                <li>**State & National Level Sports Champions:** Our student athletes consistently excel in various sports, including football, basketball, badminton, athletics, swimming, and chess, securing state and national championships and individual medals.</li>
                <li>**Cultural & Performing Arts Awards:** Award-winning performances in inter-school and regional cultural festivals, drama competitions, music festivals, and dance championships, showcasing the diverse talents nurtured at DreamBridge.</li>
                <li>**Debate & Oratory Prowess:** Our debate and elocution teams consistently win accolades in prestigious inter-school and national-level competitions, honing critical thinking and public speaking skills.</li>
                <li>**Community Service Recognition:** Students receive recognition and awards for their impactful contributions to various community service projects, environmental initiatives, and social awareness campaigns, demonstrating their commitment to societal betterment.</li>
            </ul>
            <h3>Individual Student Spotlights:</h3>
            <p>We celebrate every individual triumph, from a student publishing their first short story to winning a prestigious scholarship, or representing the school at an international forum. DreamBridge provides the platform and mentorship for every student to realize their unique potential and shine.</p>
            <h3>Alumni Network & Impact:</h3>
            <p>Our expansive alumni network stands as a testament to the transformative education at DreamBridge. Graduates are leading in diverse fields – medicine, engineering, entrepreneurship, arts, public service, and research – creating a positive impact globally and serving as inspiring role models for current students. Their continued success reinforces our commitment to building futures and bridging dreams.</p>
        `,
        '#news-events': `
            <h2>News and Events</h2>
            <p>Stay updated with the vibrant pulse of DreamBridge School! This section brings you the latest happenings, exciting event highlights, important announcements, and showcases the dynamic life on our campus. We believe in transparency and keeping our community informed about all milestones and upcoming activities.</p>
            <h3>Recent News & Highlights:</h3>
            <ul>
                <li>**Annual Sports Day 2023: A Grand Spectacle of Athleticism:** Our recent Annual Sports Day on [Date, e.g., November 15, 2023] was a resounding success, marked by enthusiastic participation from all houses and spectacular displays of sportsmanship and athletic prowess. The event concluded with a thrilling closing ceremony and felicitation of winners. <a href="#">[View Photo Gallery]</a></li>
                <li>**"Innovate 2023": Annual Science & Robotics Exhibition:** Our students showcased groundbreaking projects at "Innovate 2023" held on [Date, e.g., October 28, 2023]. From AI-powered solutions to eco-friendly models, the exhibition truly inspired curiosity and scientific temperament among all visitors. <a href="#">[Watch Highlights Video]</a></li>
                <li>**"Rang Tarang": Celebrating Cultural Diversity:** Our annual Cultural Fest, "Rang Tarang," on [Date, e.g., September 20, 2023], was a vibrant kaleidoscope of Indian classical, folk, and contemporary performances, celebrating India's rich cultural heritage. Students captivated the audience with their talent in music, dance, and drama.</li>
                <li>**Successful Parent-Teacher Meet for Grades IX & XI:** A highly productive Parent-Teacher Meet was conducted on [Date, e.g., November 25, 2023], fostering important discussions on academic progress, student well-being, and future pathways.</li>
                <li>**DreamBridge Eco-Club's Green Initiative:** The Eco-Club recently launched a successful tree plantation drive on [Date, e.g., November 10, 2023] within the school campus and surrounding areas, promoting environmental consciousness.</li>
            </ul>
            <h3>Upcoming Events & Important Dates:</h3>
            <ul>
                <li>**Annual Day Celebration - "Celebrating India's Diversity":** [Date, e.g., January 10, 2024] - A spectacular evening showcasing the talents of our students across all performing arts.</li>
                <li>**Inter-House Debate Competition (Senior):** Topic: "The Future of AI: Promise or Peril?" - [Date, e.g., December 10, 2023]. Join us for intellectual discourse!</li>
                <li>**Career Counseling Workshop for Class XII:** [Date, e.g., November 30, 2023] - Expert guidance for students exploring higher education and career options.</li>
                <li>**Admissions Open House for Academic Year [Next Year]:** [Date, e.g., December 5, 2023] - A golden opportunity for prospective parents to interact with our faculty and leadership. Register <a href="#admissions">here</a>!</li>
                <li>**Winter Break Commences:** [Date, e.g., December 22, 2023]</li>
            </ul>
            <p>Check back regularly for photo galleries, event recaps, detailed circulars, and the latest news. Follow us on our official social media channels for real-time updates and glimpses into daily school life!</p>
        `,
        '#contact-us': `
            <h2>Contact Us</h2>
            <p>We'd love to hear from you! Whether you have questions about admissions, academic programs, co-curricular activities, or just want to learn more about the DreamBridge School experience, please feel free to reach out to us. Our dedicated team is here to assist you with all your queries.</p>
            <h3>Our Location:</h3>
            <p><strong>DreamBridge School</strong><br>
            123, Education Lane,<br>
            Knowledge City, New Delhi - 110001,<br>
            India</p>

            <h3>Get in Touch:</h3>
            <p><strong>General Inquiries:</strong><br>
            Email: info@dreambridgeschool.in<br>
            Phone: +91-XXXXXXXXXX</p>

            <p><strong>Admissions Office:</strong><br>
            Email: admissions@dreambridgeschool.in<br>
            Phone: +91-YYYYYYYYYY</p>

            <p><strong>Office Hours:</strong><br>
            Monday - Friday: 9:00 AM - 4:00 PM<br>
            Saturday: 9:00 AM - 1:00 PM (by appointment only)<br>
            Sunday: Closed</p>

            <h3>Connect with Us Online:</h3>
            <p>Follow us on [Link to Facebook], [Link to Instagram], [Link to Twitter/X], and [Link to LinkedIn] for the latest updates, news, and glimpses into school life!</p>

            <p>You can also fill out the contact form below, and a member of our team will get back to you as soon as possible.</p>
            <form class="contact-form">
                <label for="name">Name:</label><br>
                <input type="text" id="name" name="name" required><br><br>
                <label for="email">Email:</label><br>
                <input type="email" id="email" name="email" required><br><br>
                <label for="subject">Subject:</label><br>
                <input type="text" id="subject" name="subject"><br><br>
                <label for="message">Message:</label><br>
                <textarea id="message" name="message" rows="5" required></textarea><br><br>
                <button type="submit" class="submit-button">Send Message</button>
            </form>
            <p><em>Please note: For urgent queries, kindly contact us via phone during office hours.</em></p>
        `,
        '#student-life': `
            <h2>Student Life at DreamBridge</h2>
            <p>Life at DreamBridge School is a rich tapestry of vibrant experiences, fostering an environment where students not only excel academically but also thrive personally, socially, and emotionally. We believe in providing a balanced and enriching school life that allows every student to discover their passions, build lasting friendships, and develop into confident, well-rounded individuals. Our campus pulsates with energy, reflecting the diverse talents and interests of our student body.</p>
            <h3>A Day in the Life: Balanced and Engaging</h3>
            <p>A typical day at DreamBridge begins with an invigorating morning assembly, often featuring student-led news presentations, thought-provoking discussions, and motivational talks by faculty or guest speakers. Following this, students engage in stimulating classes, moving between smart classrooms, advanced labs for science and computers, and the library. Lunch breaks are lively, offering nutritious meals and ample time for recreation and social interaction. Afternoons are typically dedicated to a wide array of co-curricular activities, sports training, club meetings, and special interest groups, ensuring a dynamic and balanced routine that promotes both physical and mental well-being. For boarding students, evenings include supervised study hours, recreational time, and community building activities within their respective houses.</p>
            <h3>Clubs and Societies: Explore Your Passions</h3>
            <p>We offer an extensive range of clubs and societies, catering to diverse interests and encouraging students to explore new skills and pursue their passions. These platforms are designed to foster creativity, leadership, teamwork, and critical thinking:</p>
            <ul>
                <li>**Academic & Intellectual:** Science & Robotics Club, Literary & Debating Society, Quiz Club, Mathematics Olympiad Club, Model United Nations (MUN).</li>
                <li>**Arts & Culture:** Drama Club, Vocal Music Choir, Instrumental Music Ensemble, Traditional Dance Group, Western Dance Crew, Fine Arts Club, Photography Club, Film Making Club.</li>
                <li>**Technology & Innovation:** Coding & AI Club, Design Thinking & Innovation Hub, Gaming Club, Cyber Security Awareness Group.</li>
                <li>**Environment & Community:** Eco Club & Gardening Group, Community Service & Social Awareness Committee, Health & Wellness Club.</li>
                <li>**Leadership & Life Skills:** Student Council, Peer Mentoring Program, Entrepreneurship Club, Financial Literacy Club.</li>
            </ul>
            <h3>Festivals and Celebrations: Embracing Our Heritage</h3>
            <p>As a proud Indian school, we celebrate all major national and regional festivals with immense enthusiasm and cultural fervor. Events like Diwali, Holi, Eid, Christmas, Republic Day, and Independence Day are celebrated through special assemblies, cultural programs, and community feasts, promoting cultural understanding, unity in diversity, and respect for all traditions. Annual Day, Sports Day, and inter-house competitions are major highlights on our school calendar, fostering a sense of belonging and healthy competition.</p>
            <p>DreamBridge is more than just a school; it's a second home where students learn, grow, and create memories that last a lifetime, preparing them for a fulfilling and purposeful journey ahead.</p>
        `,
        '#academic-excellence': `
            <h2>Academic Excellence</h2>
            <p>At DreamBridge School, academic excellence is not merely a goal; it is a continuous journey of intellectual discovery, critical inquiry, and personal growth. Our rigorous yet nurturing academic environment is meticulously designed to challenge students, foster independent thinking, and instil a lifelong love for learning. We are committed to empowering every student with the knowledge, skills, and values necessary to excel in a rapidly evolving global landscape.</p>
            <h3>Our Distinctive Academic Approach:</h3>
            <ul>
                <li>**Highly Qualified and Empathetic Faculty:** Our teachers are experienced subject matter experts, passionate educators, and dedicated mentors. They continuously engage in professional development to stay updated with the latest pedagogical techniques and incorporate innovative teaching methodologies, ensuring dynamic and effective learning experiences.</li>
                <li>**Optimized Class Sizes:** We maintain small class sizes to ensure personalized attention, facilitate effective teacher-student interaction, and allow for tailored instructional approaches that cater to individual learning styles and paces.</li>
                <li>**Innovative Pedagogy:** Beyond traditional methods, we employ a diverse range of modern teaching strategies including project-based learning, inquiry-based learning, flipped classrooms, collaborative assignments, and case studies. This approach encourages critical analysis, creativity, and the practical application of theoretical knowledge.</li>
                <li>**Advanced Resources and Learning Spaces:** Students have access to state-of-the-art science labs, advanced computer and robotics labs, a comprehensive physical and digital library, and smart classrooms equipped with the latest educational technology, providing a rich environment for exploration and research.</li>
                <li>**Differentiated Instruction and Support:** We provide tailored support for students needing extra help through remedial classes, and enrichment programs for high achievers and gifted students. Our academic support system ensures that every student can reach their full potential.</li>
                <li>**Continuous Assessment and Constructive Feedback:** Regular assessments, quizzes, and examinations are conducted not just for evaluation but as tools for learning. Detailed and constructive feedback is provided to students and parents to track progress, identify areas for improvement, and celebrate achievements.</li>
                <li>**Integrated Competitive Exam Preparation:** For senior secondary students, we offer dedicated coaching, mock tests, and strategic guidance for various national and international competitive examinations (e.g., JEE, NEET, CLAT, SAT), ensuring they are well-prepared for their higher education aspirations.</li>
                <li>**Focus on Research and Critical Thinking:** Students are encouraged to undertake research projects, participate in debates, and engage in analytical discussions, fostering a deeper understanding of subjects and developing strong critical thinking and problem-solving skills.</li>
            </ul>
            <p>Our unwavering commitment to academic excellence ensures that DreamBridge students are not only well-prepared for university admissions and future careers but also emerge as intellectually curious, articulate, and confident individuals ready to contribute meaningfully to society, reflecting the intellectual rigor expected from a modern Jawahar Navodaya Vidyalaya.</p>
        `,
        '#co-curricular': `
            <h2>Co-curricular Activities</h2>
            <p>Co-curricular activities are an indispensable component of the DreamBridge School experience, providing vital avenues for students to explore their innate talents, develop essential life skills, and build character beyond the academic curriculum. We believe that a holistic education requires nurturing every facet of a child’s personality, fostering creativity, teamwork, leadership, and a deeper understanding of self and society. Our comprehensive co-curricular program offers a diverse range of activities that cater to every interest and passion, ensuring that every student finds their niche and excels.</p>
            <h3>Our Diverse Range of Activities:</h3>
            <ul>
                <li>**Performing Arts:**
                    <ul>
                        <li>**Indian Classical Dance:** Intensive training in classical forms like Kathak, Bharatanatyam, and Odissi, promoting grace, discipline, and cultural appreciation.</li>
                        <li>**Western Dance:** Exploring contemporary, hip-hop, and other international dance styles, fostering dynamism and modern artistic expression.</li>
                        <li>**Vocal Music:** Comprehensive training in Indian Classical (Hindustani and Carnatic), Folk, and Western genres, including choir and solo performances.</li>
                        <li>**Instrumental Music:** Learning various instruments such as Tabla, Sitar, Harmonium, Flute, Keyboard, Guitar, Drums, and Violin under expert guidance.</li>
                        <li>**Theatre & Dramatics:** From scriptwriting and improvisation to stagecraft and acting, students engage in compelling theatrical productions in English, Hindi, and regional languages.</li>
                    </ul>
                </li>
                <li>**Visual Arts:**
                    <ul>
                        <li>**Drawing & Painting:** Comprehensive instruction in various mediums (pencil, charcoal, watercolors, acrylics, oils), focusing on techniques, perspective, and creative expression.</li>
                        <li>**Sculpture & Pottery:** Hands-on experience with clay, paper mache, and other materials to create three-dimensional art.</li>
                        <li>**Digital Art & Graphic Design:** Introduction to digital tools for illustration, photo editing, and graphic design, fostering modern artistic skills.</li>
                        <li>**Photography & Videography:** Learning the principles of composition, lighting, editing, and storytelling through visual media.</li>
                    </ul>
                </li>
                <li>**Literary & Oratory Skills:**
                    <ul>
                        <li>**Debate & Elocution:** Developing strong public speaking, critical thinking, and persuasive argumentation skills through inter-house and inter-school competitions.</li>
                        <li>**Creative Writing:** Workshops for poetry, short stories, scriptwriting, and journalistic writing, fostering imagination and articulation.</li>
                        <li>**Quiz & General Knowledge:** Engaging students in quizzing competitions that enhance their general awareness and rapid recall abilities.</li>
                        <li>**Book Club:** Promoting a love for reading and literary discussion.</li>
                    </ul>
                </li>
                <li>**Science & Technology:**
                    <ul>
                        <li>**Robotics Club:** Designing, building, and programming robots for various challenges.</li>
                        <li>**Coding & AI Workshops:** Learning programming languages and understanding the basics of Artificial Intelligence.</li>
                        <li>**Astronomy Club:** Exploring the cosmos through observation and theoretical studies.</li>
                        <li>**Environmental Science Projects:** Hands-on initiatives focusing on sustainability, conservation, and ecological awareness.</li>
                    </ul>
                </li>
                <li>**Life Skills & Community Service:**
                    <ul>
                        <li>**Leadership Training & Peer Mentoring:** Programs designed to develop leadership qualities, communication skills, and empathy.</li>
                        <li>**First Aid & Disaster Management Training:** Equipping students with essential life-saving skills.</li>
                        <li>**Social Awareness Campaigns & Volunteering:** Engaging students in initiatives that address societal issues and promote community welfare.</li>
                    </ul>
                </li>
            </ul>
            <p>These activities are led by expert instructors and are designed to foster creativity, teamwork, leadership, and a profound sense of responsibility, complementing the academic rigor and preparing students for life beyond school.</p>
        `,
        '#sports-fitness': `
            <h2>Sports and Fitness</h2>
            <p>At DreamBridge School, we strongly believe that a healthy body is paramount for a healthy mind. Our comprehensive sports and fitness program is meticulously designed to promote physical well-being, instill discipline, foster teamwork, and cultivate sportsmanship among all students. We provide an environment where every child is encouraged to engage in physical activity, discover their athletic potential, and embrace an active, healthy lifestyle, drawing inspiration from the robust sports culture in premier Indian residential schools.</p>
            <h3>Our World-Class Sports Facilities:</h3>
            <ul>
                <li>**Expansive Outdoor Sports Fields:**
                    <ul>
                        <li>**Football Ground:** A full-sized, well-maintained football pitch for training and competitive matches.</li>
                        <li>**Cricket Pitches:** Dedicated practice nets and a central pitch for cricket enthusiasts.</li>
                        <li>**Athletics Track:** A 400-meter track for various track and field events.</li>
                    </ul>
                </li>
                <li>**Multi-Sport Courts:**
                    <ul>
                        <li>**Basketball Courts:** State-of-the-art indoor and outdoor basketball courts with professional surfacing.</li>
                        <li>**Badminton Courts:** Multiple indoor courts for practice and inter-house tournaments.</li>
                        <li>**Volleyball Courts:** Dedicated courts for volleyball.</li>
                        <li>**Tennis Courts:** Well-maintained hard courts for tennis training.</li>
                    </ul>
                </li>
                <li>**Olympic-Size Swimming Pool:** A meticulously maintained, supervised swimming pool, offering facilities for competitive swimming, recreational dips, and certified coaching for all age groups.</li>
                <li>**Indoor Sports Complex:** A spacious, multi-purpose indoor hall equipped for:
                    <ul>
                        <li>Table Tennis</li>
                        <li>Chess & Carrom</li>
                        <li>Gymnastics</li>
                        <li>Yoga & Meditation Zone: A serene space dedicated to fostering mindfulness, flexibility, and mental well-being through guided yoga and meditation sessions.</li>
                    </ul>
                </li>
                <li>**Fitness Center:** A modern fitness facility equipped with age-appropriate exercise machines and free weights, supervised by certified trainers, to promote overall physical conditioning.</li>
            </ul>
            <h3>Our Comprehensive Sports Programs:</h3>
            <ul>
                <li>**Compulsory Physical Education:** Integrated into the daily timetable for all students, ensuring regular physical activity.</li>
                <li>**Specialized Coaching:** Professional and experienced coaches provide intensive training in various sports, catering to both beginners and advanced athletes.</li>
                <li>**Inter-House Competitions:** A vibrant system of inter-house competitions fosters healthy rivalry, teamwork, and leadership skills among students.</li>
                <li>**School Teams & Representation:** Students are encouraged to try out for school teams and represent DreamBridge in district, state, and national level tournaments, gaining valuable competitive experience.</li>
                <li>**Annual Sports Day:** A grand celebration of athletic prowess, team spirit, and sportsmanship, featuring exciting competitions and displays.</li>
                <li>**Emphasis on Sportsmanship:** Beyond winning, we emphasize fair play, respect for opponents, resilience in defeat, and humility in victory.</li>
            </ul>
            <p>At DreamBridge, we ensure that every student discovers the joy of physical activity, understands the importance of fitness, and develops the character-building traits that sports uniquely impart.</p>
        `,
        '#art-culture': `
            <h2>Art and Culture</h2>
            <p>DreamBridge School is a vibrant hub for artistic expression and cultural appreciation, deeply rooted in India's rich heritage while embracing global artistic forms. We firmly believe that engaging with art and culture is crucial for developing creativity, emotional intelligence, critical thinking, and a profound understanding of human expression. Our extensive programs are designed to nurture every student's creative spirit and cultural awareness.</p>
            <h3>Visual Arts: Igniting Creativity Through Form and Color</h3>
            <p>Our dedicated art studios provide an inspiring environment for students to explore their visual creativity under the guidance of experienced art educators. We offer a wide range of mediums and techniques:</p>
            <ul>
                <li>**Drawing & Painting:** From foundational sketching, shading, and perspective to advanced techniques in various mediums like watercolors, acrylics, oil painting, and charcoal.</li>
                <li>**Sculpture & Pottery:** Hands-on experience with clay modeling, pottery wheel techniques, and other sculptural materials, fostering three-dimensional artistic skills.</li>
                <li>**Digital Art & Graphic Design:** Introduction to digital illustration, photo editing, graphic design software, and animation principles, preparing students for modern creative industries.</li>
                <li>**Art Exhibitions:** Regular school-wide art exhibitions to showcase student artwork, fostering confidence and providing a platform for their creative voices. We also invite guest artists for workshops and demonstrations.</li>
            </ul>
            <h3>Performing Arts: Expressing Through Movement, Voice, and Drama</h3>
            <p>Our state-of-the-art music and dance conservatories, along with our grand auditorium, provide the perfect stage for students to hone their performing arts talents. We offer:</p>
            <ul>
                <li>**Music:**
                    <ul>
                        <li>**Indian Classical Music:** Comprehensive training in both Hindustani and Carnatic vocal music, along with instrumental training in Tabla, Sitar, Harmonium, Flute, and more.</li>
                        <li>**Western Music:** Vocal training (choir and solo), and instrumental training in Keyboard, Guitar, Drums, and Violin.</li>
                        <li>**School Band & Orchestra:** Opportunities for students to perform together in ensembles.</li>
                    </ul>
                </li>
                <li>**Dance:**
                    <ul>
                        <li>**Indian Classical Dance:** Intensive training in traditional forms like Bharatanatyam, Kathak, and Odissi, emphasizing technique, expression, and cultural significance.</li>
                        <li>**Indian Folk Dances:** Exploring the vibrant and diverse folk dance traditions from various regions of India, promoting cultural understanding.</li>
                        <li>**Western Dance:** Training in contemporary, jazz, hip-hop, and other modern dance styles, focusing on flexibility, rhythm, and stage presence.</li>
                    </ul>
                </li>
                <li>**Drama & Theatre:** Engaging in all aspects of theatrical production, including acting, scriptwriting, improvisation, stage design, lighting, sound, and costume design. Regular school plays and dramatic skits are performed, fostering confidence and communication skills.</li>
            </ul>
            <h3>Cultural Programs & Celebrations:</h3>
            <p>Throughout the academic year, we celebrate various Indian festivals and cultural events with immense enthusiasm and grandeur. Special assemblies, themed weeks, inter-house cultural competitions, and annual cultural nights are organized to promote cultural awareness, unity in diversity, and national pride. These celebrations provide students with a deeper understanding of India's rich heritage and a platform to showcase their artistic and cultural talents.</p>
            <p>At DreamBridge, we believe that art and culture are not mere subjects but a way of life, enriching the soul and broadening horizons, preparing students to be culturally sensitive and appreciative global citizens.</p>
        `,
        '#stem-programs': `
            <h2>STEM Programs: Nurturing Innovators for the Future</h2>
            <p>DreamBridge School is deeply committed to nurturing the next generation of innovators, scientists, technologists, engineers, and mathematicians through our cutting-edge STEM (Science, Technology, Engineering, and Mathematics) programs. Our approach transcends traditional classroom learning, focusing on hands-on experimentation, critical thinking, problem-solving, and real-world application, mirroring the practical learning ethos of leading modern educational institutions in India.</p>
            <h3>Key Features and Facilities of Our STEM Program:</h3>
            <ul>
                <li>**State-of-the-Art Laboratories:**
                    <ul>
                        <li>**Physics, Chemistry, Biology Labs:** Modern, well-equipped laboratories providing ample opportunities for practical experiments, scientific inquiry, and research projects.</li>
                        <li>**Advanced Computer Science Labs:** Featuring high-performance machines, specialized software, and dedicated internet access to support coding, programming, and digital literacy.</li>
                    </ul>
                </li>
                <li>**Robotics & Artificial Intelligence (AI) Lab:** A dedicated innovation hub where students can design, build, program, and test robots. They explore fundamental concepts of AI, machine learning, and automation through engaging projects and challenges.</li>
                <li>**Coding & Programming Curriculum:** Comprehensive courses from foundational logic and algorithm design to advanced programming languages (Python, Java, C++, JavaScript). Students learn to develop applications, games, and web solutions.</li>
                <li>**Design & Innovation Hub (Makerspace):** A collaborative creative space equipped with 3D printers, laser cutters, electronics kits, and various tools, allowing students to conceptualize, design, prototype, and iterate on their innovative ideas across different disciplines.</li>
                <li>**Integrated Engineering Principles:** Introduction to basic engineering concepts, design thinking, and problem-solving methodologies through project-based learning and practical challenges.</li>
                <li>**STEM Fairs & Competitions:** Regular internal science and tech fairs, inter-school STEM competitions, and participation in national/international Olympiads encourage healthy competition, foster research skills, and provide platforms for students to showcase their innovations.</li>
                <li>**Guest Lectures & Workshops:** Industry experts, scientists, engineers, and researchers are regularly invited to interact with students, providing insights into various STEM career paths, emerging technologies, and real-world applications of scientific principles.</li>
                <li>**Research & Development Opportunities:** Senior students are encouraged to undertake independent research projects under faculty mentorship, leading to potential publications or participation in scientific conferences.</li>
                <li>**Interdisciplinary Projects:** Encouraging students to combine knowledge and skills from different STEM subjects to solve complex, real-world challenges, promoting a holistic and applied understanding.</li>
            </ul>
            <p>Our STEM programs empower students to think analytically, experiment fearlessly, and develop the crucial skills necessary for success in future academic pursuits and careers in science, technology, and engineering, strongly aligning with the "Future-Ready Learning" and "21st Century Skills" philosophy of DreamBridge School.</p>
        `,
        '#scholarships': `
            <h2>Scholarships: Empowering Deserving Talent at DreamBridge</h2>
            <p>DreamBridge School is deeply committed to making quality education accessible to talented and deserving students, irrespective of their socio-economic backgrounds. We firmly believe that financial constraints should never be a barrier to a child's potential. To uphold this belief, we offer a diverse range of scholarships and financial aid programs designed to support meritorious individuals who demonstrate exceptional academic prowess, significant achievements in co-curricular activities, or come from economically challenging circumstances.</p>
            <h3>Types of Scholarships Offered:</h3>
            <ul>
                <li>**Academic Merit Scholarships:**
                    <ul>
                        <li>**Eligibility:** Awarded to students who consistently achieve outstanding academic results in their previous school examinations and perform exceptionally well in our scholarship assessment tests.</li>
                        <li>**Benefit:** Covers a significant percentage of tuition fees, ranging from 25% to 100%, based on merit and performance.</li>
                    </ul>
                </li>
                <li>**Sports Scholarships:**
                    <ul>
                        <li>**Eligibility:** For students demonstrating exceptional talent, outstanding performance, and proven achievements in various sports (e.g., football, basketball, cricket, swimming, athletics, badminton) at district, state, or national levels.</li>
                        <li>**Benefit:** Provides financial assistance for tuition and often includes specialized coaching and equipment support.</li>
                    </ul>
                </li>
                <li>**Arts & Culture Scholarships:**
                    <ul>
                        <li>**Eligibility:** Recognizing students with remarkable talent and potential in various performing arts (music, dance, drama) or visual arts (painting, sculpture, digital art). Portfolio submission and audition may be required.</li>
                        <li>**Benefit:** Offers support for tuition and access to specialized training and resources in their chosen art form.</li>
                    </ul>
                </li>
                <li>**Need-Based Financial Aid:**
                    <ul>
                        <li>**Eligibility:** Provided to students from economically disadvantaged families who meet the school's admission criteria and demonstrate a strong desire to learn and excel. A detailed financial assessment is conducted.</li>
                        <li>**Benefit:** Tailored financial support, ranging from partial to full fee waivers, to ensure that financial hardship does not impede a child's access to quality education.</li>
                    </ul>
                </li>
                <li>**Innovation & STEM Scholarships:**
                    <ul>
                        <li>**Eligibility:** For students showing exceptional aptitude, creativity, and innovative thinking in Science, Technology, Engineering, and Mathematics (STEM) fields, demonstrated through project work, competitive participation, or aptitude tests.</li>
                        <li>**Benefit:** Supports tuition and provides access to advanced STEM resources and mentorship opportunities.</li>
                    </ul>
                </li>
                <li>**Leadership & Community Service Scholarships:**
                    <ul>
                        <li>**Eligibility:** Recognizes students who have demonstrated exceptional leadership qualities, a strong commitment to community service, and a proven track record of initiating or participating in impactful social initiatives.</li>
                        <li>**Benefit:** Encourages further engagement in leadership and community development activities.</li>
                    </ul>
                </li>
            </ul>
            <p>Details regarding specific eligibility criteria, the application process, required documentation, and deadlines for each scholarship program are comprehensively outlined on our official admissions page and are also available at the school's administrative office. We strongly encourage all eligible students to apply, as these scholarships are a cornerstone of our commitment to fostering a diverse, talented, and inclusive student body at DreamBridge School, truly nurturing young minds for a brighter future.</p>
        `,
        '#alumni-success': `
            <h2>Alumni Success: Our Legacy of Leaders and Innovators</h2>
            <p>The true measure of DreamBridge School's unwavering commitment to excellence and transformative education lies in the remarkable accomplishments and impactful contributions of our esteemed alumni. Our graduates are not just successful professionals; they are compassionate leaders, innovative thinkers, and responsible citizens making significant contributions across diverse fields, both within India and on the global stage. Their journey is a testament to the strong foundation and holistic development they received during their formative years at DreamBridge.</p>
            <h3>Where Our Alumni Shine: Pathways to Excellence</h3>
            <ul>
                <li>**Prestigious Higher Education:** Our alumni consistently gain admissions into and excel at India's most prestigious institutions, including the Indian Institutes of Technology (IITs), All India Institute of Medical Sciences (AIIMS), National Institutes of Technology (NITs), top Delhi University colleges, leading private universities, and renowned international universities across North America, Europe, and Asia.</li>
                <li>**Diverse Career Paths:** DreamBridge graduates are making their mark as successful professionals in a wide array of fields, including:
                    <ul>
                        <li>**Medicine & Healthcare:** Doctors, Surgeons, Medical Researchers, Public Health Specialists.</li>
                        <li>**Engineering & Technology:** Software Engineers, Data Scientists, AI Specialists, Robotics Engineers, Civil Engineers.</li>
                        <li>**Business & Finance:** Entrepreneurs, Investment Bankers, Management Consultants, Marketing Professionals.</li>
                        <li>**Arts & Humanities:** Renowned Artists, Musicians, Writers, Journalists, Filmmakers, Architects.</li>
                        <li>**Law & Public Service:** Lawyers, Civil Servants, Diplomats, Social Activists.</li>
                        <li>**Research & Academia:** Leading researchers and professors in top universities and research institutions.</li>
                        <li>**Education:** Dedicated educators and school leaders.</li>
                    </ul>
                </li>
            </ul>
            <h3>The Power of the DreamBridge Alumni Network:</h3>
            <p>We are incredibly proud to maintain a strong, active, and supportive alumni network that serves as a powerful resource and inspiration for current students. Our alumni often return to campus to share their experiences, offer mentorship, and participate in school events, creating a continuous cycle of learning and giving back.</p>
            <ul>
                <li>**Mentorship Programs:** Connecting current students with successful alumni for invaluable career guidance, industry insights, and personal development advice.</li>
                <li>**Guest Lectures & Workshops:** Alumni frequently deliver inspiring talks, conduct workshops, and participate in panel discussions, enriching the learning experience for our students.</li>
                <li>**Alumni Meets & Reunions:** Regular gatherings and reunions are organized, fostering lifelong connections, celebrating shared memories, and strengthening the DreamBridge family bond.</li>
                <li>**Internship & Placement Opportunities:** Our alumni often provide internship and job placement opportunities for current students and recent graduates, facilitating their transition into the professional world.</li>
            </ul>
            <p>The countless success stories of our alumni are a living testament to DreamBridge School's unwavering commitment to building futures, nurturing young minds, and truly bridging dreams with tangible achievements and leadership. We celebrate their journey and look forward to the continued impact they will make on the world.</p>
        `,
        '#parent-portal': `
            <h2>Parent Portal: Your Gateway to Your Child's Journey at DreamBridge</h2>
            <p>Welcome to the DreamBridge School Parent Portal – your dedicated, secure, and comprehensive online resource designed to foster seamless communication and active partnership between home and school. This portal serves as your primary gateway to staying informed, engaged, and connected with your child's academic journey, progress, and all vibrant school activities. We believe that parental involvement is crucial for a child's success, and this portal empowers you with the tools and information you need at your fingertips.</p>
            <h3>Key Features and Benefits of the Parent Portal:</h3>
            <ul>
                <li>**Real-time Academic Progress & Performance:**
                    <ul>
                        <li>**Grades & Report Cards:** Access real-time updates on your child's grades for assignments, tests, and projects, along with periodic and final report cards.</li>
                        <li>**Attendance Records:** Monitor daily and cumulative attendance records.</li>
                        <li>**Performance Analytics:** View insightful analytics on your child's academic strengths and areas for improvement.</li>
                    </ul>
                </li>
                <li>**Streamlined Communication with Teachers:**
                    <ul>
                        <li>**Secure Messaging System:** Send and receive secure messages directly to your child's teachers, ensuring prompt and private communication regarding academic or behavioral matters.</li>
                        <li>**Teacher Contact Information:** Easy access to contact details of all relevant teachers and staff.</li>
                    </ul>
                </li>
                <li>**Homework & Assignment Tracking:**
                    <ul>
                        <li>**Daily Homework & Project Deadlines:** Stay informed about all assigned homework, upcoming project deadlines, and study materials.</li>
                        <li>**Syllabus & Curriculum Overviews:** Access detailed syllabus information and curriculum plans for each subject.</li>
                    </ul>
                </li>
                <li>**Comprehensive School Calendar:**
                    <ul>
                        <li>**Upcoming Events:** View a dynamic calendar with all important school events, holidays, examinations, Parent-Teacher Meet (PTM) schedules, and co-curricular activity dates.</li>
                        <li>**Event Reminders:** Receive timely reminders for important school events.</li>
                    </ul>
                </li>
                <li>**Important School Announcements & Circulars:**
                    <ul>
                        <li>**Instant Notifications:** Get instant notifications about crucial school news, emergency alerts, policy updates, and general circulars directly to your dashboard.</li>
                        <li>**Archived Circulars:** Access a repository of all past circulars for future reference.</li>
                    </ul>
                </li>
                <li>**Fee Management & Payments:**
                    <ul>
                        <li>**Fee Statements:** View detailed fee statements, invoices, and payment history.</li>
                        <li>**Online Payment Gateway:** Make secure and convenient online payments for school fees and other charges.</li>
                    </ul>
                </li>
                <li>**Access to Resources & Downloads:**
                    <ul>
                        <li>**Downloadable Forms:** Access and download important school forms, admission documents, and consent forms.</li>
                        <li>**Educational Resources:** Find supplementary educational materials, reading lists, and guidelines from teachers.</li>
                    </ul>
                </li>
            </ul>
            <p>The DreamBridge School Parent Portal is designed to enhance your experience as a parent, ensuring you are an active and informed partner in your child's educational journey. Login credentials are provided upon successful admission. For any technical assistance or portal-related queries, please contact our dedicated IT support team or the school administration.</p>
        `,
        '#community-engagement': `
            <h2>Community Engagement: Fostering Responsible Global Citizens</h2>
            <p>DreamBridge School firmly believes in extending its educational philosophy beyond the confines of the classroom, actively engaging with the broader community. Our comprehensive community engagement programs are meticulously designed to instill in our students a profound sense of social responsibility, empathy, leadership, and a spirit of selfless service. This commitment aligns with the ethos of a modern Indian institution that not only educates but also inspires its students to contribute meaningfully to societal betterment and sustainable development.</p>
            <h3>Our Impactful Community Initiatives:</h3>
            <ul>
                <li>**Social Outreach Programs:**
                    <ul>
                        <li>**Visits to Charitable Institutions:** Regular visits to local orphanages, old age homes, and homes for differently-abled individuals, where students interact, conduct activities, and offer companionship.</li>
                        <li>**Donation Drives:** Organizing collection drives for clothes, books, toys, and food items to support underprivileged communities, fostering generosity and awareness.</li>
                        <li>**Blood Donation Camps:** Collaborating with local hospitals to organize blood donation camps on campus, encouraging eligible faculty, staff, and parents to contribute to a noble cause.</li>
                    </ul>
                </li>
                <li>**Environmental Stewardship & Sustainability Drives:**
                    <ul>
                        <li>**Tree Plantation Campaigns:** Active participation in large-scale tree plantation drives within the school campus, local parks, and surrounding areas, promoting ecological balance.</li>
                        <li>**Cleanliness & Waste Management Drives:** Organizing regular cleanliness campaigns in the vicinity and conducting awareness programs on responsible waste segregation and recycling.</li>
                        <li>**Energy Conservation Initiatives:** Implementing and promoting energy-saving practices within the school and encouraging students to champion these at home.</li>
                    </ul>
                </li>
                <li>**Health & Wellness Awareness Campaigns:**
                    <ul>
                        <li>**Health Check-up Camps:** Collaborating with local medical professionals to organize free health check-up camps for underprivileged communities.</li>
                        <li>**Hygiene & Sanitation Workshops:** Conducting awareness sessions in local schools and communities on basic hygiene, sanitation, and disease prevention.</li>
                        <li>**Nutritional Awareness Programs:** Educating students and local communities on healthy eating habits and balanced diets.</li>
                    </ul>
                </li>
                <li>**Literacy & Education Support:**
                    <ul>
                        <li>**"Each One, Teach One" Initiative:** Students volunteer to teach basic literacy, numeracy, and life skills to underprivileged children and adults in nearby villages or slums.</li>
                        <li>**Digital Literacy Workshops:** Conducting workshops for community members to enhance their basic computer and internet skills.</li>
                    </ul>
                </li>
                <li>**Disaster Preparedness & Relief Support:**
                    <ul>
                        <li>**Fundraising & Collection Drives:** Actively participating in fundraising and essential item collection drives for natural disaster relief efforts, demonstrating compassion and solidarity.</li>
                        <li>**Awareness Sessions:** Educating students and community members on disaster preparedness and response mechanisms.</li>
                    </ul>
                </li>
                <li>**Parent & Community Workshops:** Hosting workshops on campus on topics relevant to community well-being, such as positive parenting, digital citizenship, career guidance, and health and nutrition.</li>
            </ul>
            <p>These diverse initiatives provide our students with invaluable real-world experiences, helping them understand societal challenges, develop empathy, and become proactive agents of positive change. We actively collaborate with various local organizations, NGOs, and government bodies to maximize our impact and foster a truly engaged and responsible future generation.</p>
        `,
        '#testimonials': `
            <h2>Testimonials: Voices of DreamBridge Excellence</h2>
            <p>At DreamBridge School, the ultimate validation of our efforts comes from the hearts and minds of those whose lives we touch – our students, our proud parents, and our successful alumni. Their words resonate with the positive impact of our holistic educational approach, affirming our commitment to building futures and bridging dreams. Here's what they have to say:</p>
            <div class="testimonial-item">
                <blockquote>"Enrolling my daughter at DreamBridge School was one of the best decisions we've ever made. The holistic approach to education, combined with the truly dedicated and excellent faculty, has truly brought out her best potential. She's not just excelling academically; she's growing into a confident, compassionate, and responsible young individual who loves to learn every single day. The personalized attention and nurturing environment are truly commendable."</blockquote>
                <p class="author">- **Mrs. Priya Sharma**, Parent of Ananya Sharma (Grade 8)</p>
            </div>
            <div class="testimonial-item">
                <blockquote>"Being a student at DreamBridge is an incredible experience. The teachers here are phenomenal; they go above and beyond to make learning fun and challenging. I especially love our advanced STEM labs and the extensive sports facilities – there's always something exciting and new to explore, from robotics to inter-house football matches. The supportive atmosphere makes it feel like a second home."</blockquote>
                <p class="author">- **Rohan Gupta**, Student (Grade 10)</p>
            </div>
            <div class="testimonial-item">
                <blockquote>"As an alumnus of DreamBridge School, I can confidently say that the foundation I received here was instrumental in shaping my career path and personal growth. The critical thinking skills, leadership opportunities, and strong ethical values instilled in me were invaluable. I'm now a successful professional, and I'm proud to carry the DreamBridge legacy forward. The alumni network is also incredibly supportive."</blockquote>
                <p class="author">- **Dr. Neha Singh**, Alumnus (Batch of 2015), Currently a Pediatrician at a leading hospital in Delhi.</p>
            </div>
            <div class="testimonial-item">
                <blockquote>"The school's unwavering focus on character development and nurturing young minds is truly commendable. My son, Aarav, has not only improved academically but has also become more empathetic, disciplined, and socially aware since joining DreamBridge. The blend of modern education with strong Indian values is exactly what we were looking for. It's truly a 'dream bridge' to a bright and impactful future for our children."</blockquote>
                <p class="author">- **Mr. Vivek Kumar**, Parent of Aarav Kumar (Grade 5)</p>
            </div>
            <div class="testimonial-item">
                <blockquote>"I've been a teacher at DreamBridge for five years, and it's a truly inspiring place to work. The management supports innovative teaching methods, and the students are bright, eager, and respectful. The collaborative environment among faculty and the focus on holistic development make it a rewarding experience."</blockquote>
                <p class="author">- **Ms. Anjali Verma**, Senior Faculty, Science Department</p>
            </div>
            <p>These testimonials reflect the deep impact DreamBridge School has on its community, reinforcing our mission to provide an education that truly builds futures and bridges dreams.</p>
        `,
        '#faqs': `
            <h2>Frequently Asked Questions (FAQs)</h2>
            <p>Welcome to our comprehensive FAQ section! Here, we've compiled answers to the most common questions about DreamBridge School's admissions, academic programs, facilities, and daily operations. If you don't find your specific query addressed below, please do not hesitate to contact our administrative office directly; we are always here to assist you.</p>

            <div class="faq-item">
                <h3>Q: What is the admission process for DreamBridge School?</h3>
                <p>A: The admission process at DreamBridge School is straightforward and transparent. It typically involves an online inquiry, submission of a detailed application form along with required documents, a student assessment/interactive session (depending on the grade level), and finally, an interaction with the Principal. Successful candidates receive an admission offer. Detailed steps, required documents, and important dates are available on our dedicated <a href="#admissions">Admissions</a> page.</p>
            </div>

            <div class="faq-item">
                <h3>Q: What curriculum does DreamBridge School follow?</h3>
                <p>A: DreamBridge School follows a comprehensive and integrated curriculum that aligns with national educational standards (e.g., CBSE, tailored to our context) while incorporating global best practices. Our pedagogy emphasizes experiential learning, critical thinking, and interdisciplinary connections to develop future-ready skills. We provide a balanced approach that covers academic rigor, co-curricular activities, and character development across Primary, Middle, and Senior Secondary years.</p>
            </div>

            <div class="faq-item">
                <h3>Q: Are there transportation facilities available for students?</h3>
                <p>A: Yes, DreamBridge School provides a safe, comfortable, and comprehensive transportation service. We operate a fleet of modern, GPS-enabled school buses with trained drivers and accompanying staff, covering various routes across the city and surrounding areas to ensure timely and secure commutes for our students. Details regarding routes and fees can be obtained from the administrative office.</p>
            </div>

            <div class="faq-item">
                <h3>Q: What kind of co-curricular activities are offered at DreamBridge?</h3>
                <p>A: We offer a wide and vibrant array of co-curricular activities designed to foster holistic development. These include various sports (football, basketball, swimming, athletics, badminton), performing arts (Indian classical and Western music, dance, drama), visual arts (painting, sculpture, digital art), literary clubs (debate, creative writing, quiz), and STEM clubs (robotics, coding, science), along with extensive community service initiatives. Please visit our <a href="#co-curricular">Co-curricular Activities</a> section for more details.</p>
            </div>

            <div class="faq-item">
                <h3>Q: Does the school have boarding (residential) facilities?</h3>
                <p>A: Yes, DreamBridge School is proud to offer modern, comfortable, and well-equipped residential facilities for both boys and girls. Our boarding houses provide a nurturing, disciplined, and stimulating environment with round-the-clock supervision, dedicated study areas, recreational zones, and pastoral care, reflecting the best standards of residential school living in India. This fosters independence and community living skills.</p>
            </div>

            <div class="faq-item">
                <h3>Q: How can parents stay updated on their child's academic progress and school activities?</h3>
                <p>A: We prioritize transparent and consistent communication with parents. Our secure <a href="#parent-portal">Parent Portal</a> is a key resource, providing real-time updates on academic progress, attendance records, homework assignments, school calendar, and direct communication channels with teachers. Additionally, regular Parent-Teacher Meets, school circulars, and newsletters ensure parents are always well-informed and engaged.</p>
            </div>

            <div class="faq-item">
                <h3>Q: What makes DreamBridge School a 'modern' institution?</h3>
                <p>A: DreamBridge School embraces modernity through its integrated STEM programs (including robotics, AI, coding), smart classrooms, emphasis on 21st-century skills (critical thinking, creativity, collaboration, communication), future-ready learning approaches, and a pedagogy that blends traditional values with innovative techniques. Our commitment to technology, personalized learning, and global awareness sets us apart as a forward-thinking educational institution.</p>
            </div>

            <div class="faq-item">
                <h3>Q: Are there scholarship opportunities available?</h3>
                <p>A: Yes, DreamBridge School offers a range of scholarships based on academic merit, excellence in sports or arts, and need-based financial aid. These scholarships are designed to recognize and support deserving students. Detailed information on eligibility criteria and application procedures can be found on our <a href="#scholarships">Scholarships</a> page or by contacting the admissions office.</p>
            </div>
            <p>For any further assistance, please reach out to us via our <a href="#contact-us">Contact Us</a> page.</p>
        `,
        // New SEO Keywords as detailed sections
        '#innovative-education': `
            <h2>Innovative Education at DreamBridge School</h2>
            <p>At DreamBridge School, innovative education is not just a buzzword; it's the cornerstone of our pedagogical philosophy. We are constantly evolving our teaching methodologies and learning environments to prepare students for a world that demands adaptability, creativity, and critical thinking. Our approach goes beyond rote learning, encouraging students to question, explore, and discover.</p>
            <h3>Key Aspects of Our Innovative Educational Approach:</h3>
            <ul>
                <li>**Project-Based Learning (PBL):** Students engage in real-world projects that require them to apply knowledge from multiple subjects, fostering problem-solving skills, collaboration, and deeper understanding.</li>
                <li>**Experiential Learning:** We believe in learning by doing. Field trips, laboratory experiments, simulations, and hands-on activities are integral to our curriculum, making learning tangible and memorable.</li>
                <li>**Personalized Learning Paths:** Utilizing adaptive learning tools and individualized attention, we cater to diverse learning styles and paces, ensuring every student can thrive and reach their unique potential.</li>
                <li>**Integrated STEM Curriculum:** Our robust STEM programs seamlessly blend Science, Technology, Engineering, and Mathematics, encouraging interdisciplinary thinking and practical application of knowledge, including robotics, AI, and coding.</li>
                <li>**Digital Literacy and E-Learning:** Smart classrooms, access to digital resources, and a focus on responsible technology use prepare students for the digital age, enhancing research and presentation skills.</li>
                <li>**Design Thinking:** Students are introduced to the design thinking process – empathize, define, ideate, prototype, test – enabling them to approach challenges creatively and develop innovative solutions.</li>
                <li>**Collaborative Learning Spaces:** Our campus is designed with flexible learning spaces that encourage teamwork, peer-to-peer learning, and group discussions, fostering social skills and communication.</li>
                <li>**Continuous Professional Development:** Our faculty regularly undergoes training in the latest educational research and innovative teaching strategies, ensuring they are equipped to deliver a cutting-edge curriculum.</li>
            </ul>
            <p>DreamBridge School is committed to providing an education that inspires curiosity, fosters creativity, and equips students with the entrepreneurial mindset needed to navigate the complexities of the 21st century. We are dedicated to nurturing young minds into innovative thinkers and problem-solvers who can make a real difference in the world.</p>
        `,
        '#future-ready-learning': `
            <h2>Future-Ready Learning at DreamBridge School</h2>
            <p>In a world of rapid technological advancement and ever-evolving challenges, DreamBridge School is committed to providing a "Future-Ready Learning" experience. Our educational philosophy centers on equipping students not just with academic knowledge, but with the skills, mindset, and adaptability needed to thrive in careers that may not even exist yet. We go beyond traditional curricula to prepare students for the complexities of the 21st century.</p>
            <h3>Components of Our Future-Ready Learning Framework:</h3>
            <ul>
                <li>**21st Century Skills Integration:** We embed critical thinking, creativity, collaboration, and communication (the 4 Cs) into every aspect of our curriculum, ensuring students develop these essential competencies.</li>
                <li>**Digital Fluency and AI Literacy:** Beyond basic computer skills, we teach students to be proficient in digital tools, understand data, and engage with emerging technologies like Artificial Intelligence and Machine Learning responsibly and ethically.</li>
                <li>**Problem-Solving and Design Thinking:** Our curriculum emphasizes real-world problem-solving through project-based learning and the application of design thinking principles, encouraging innovative solutions.</li>
                <li>**Entrepreneurial Mindset Development:** Students are encouraged to identify opportunities, take calculated risks, and develop innovative solutions through dedicated programs and incubation support.</li>
                <li>**Global Citizenship Education:** We foster an understanding of global issues, cultural diversity, and interdependencies, preparing students to be responsible and empathetic citizens of the world.</li>
                <li>**Adaptive Learning Technologies:** Leveraging educational technology to personalize learning experiences, providing adaptive content and tools that cater to individual student needs and learning paces.</li>
                <li>**Career Pathways and Skill Mapping:** Early exposure to diverse career fields, mentorship programs, and skill assessment help students align their education with future aspirations.</li>
                <li>**Emphasis on Soft Skills:** Focus on developing emotional intelligence, resilience, adaptability, and leadership qualities, which are crucial for success in any future endeavor.</li>
                <li>**Interdisciplinary Approach:** Breaking down traditional subject silos to encourage students to make connections across disciplines, fostering a more holistic and applicable understanding of knowledge.</li>
            </ul>
            <p>DreamBridge School is dedicated to nurturing young minds that are not only academically strong but also agile, resilient, and prepared to embrace the opportunities and navigate the challenges of tomorrow's world. Our future-ready learning approach ensures that every student is well-equipped to innovate, lead, and contribute meaningfully to society.</p>
        `,
        '#century-skills': `
            <h2>21st Century Skills at DreamBridge School</h2>
            <p>At DreamBridge School, we recognize that academic knowledge alone is insufficient for success in the dynamic and interconnected world of the 21st century. Therefore, a core component of our educational philosophy is the deliberate integration and development of essential "21st Century Skills." These are the competencies that empower students to adapt, innovate, and thrive in an environment characterized by rapid change, technological advancement, and global interconnectedness. We focus on nurturing well-rounded individuals who are prepared for complex challenges and diverse opportunities.</p>
            <h3>Our Framework for 21st Century Skills Development:</h3>
            <ul>
                <li>**1. Critical Thinking and Problem-Solving:**
                    <ul>
                        <li>Encouraging students to analyze information, evaluate arguments, solve complex problems creatively, and make informed decisions.</li>
                        <li>Implemented through inquiry-based projects, case studies, debates, and analytical assignments across all subjects.</li>
                    </ul>
                </li>
                <li>**2. Creativity and Innovation:**
                    <ul>
                        <li>Fostering imagination, originality, and the ability to generate new ideas and approaches.</li>
                        <li>Promoted through art & design thinking workshops, STEM innovation labs, creative writing, and opportunities for independent projects.</li>
                    </ul>
                </li>
                <li>**3. Collaboration and Teamwork:**
                    <ul>
                        <li>Developing the ability to work effectively with others, listen actively, share ideas, and contribute to group goals.</li>
                        <li>Cultivated through group projects, sports teams, club activities, and inter-house competitions, emphasizing mutual respect and collective success.</li>
                    </ul>
                </li>
                <li>**4. Communication (Verbal, Written, Digital):**
                    <ul>
                        <li>Enhancing clear, concise, and persuasive expression of ideas across various formats and audiences.</li>
                        <li>Practiced through public speaking, presentations, debates, effective writing assignments, and digital media creation.</li>
                    </ul>
                </li>
                <li>**5. Digital Literacy and Technology Fluency:**
                    <ul>
                        <li>Equipping students to navigate the digital world responsibly, utilize technology effectively for learning and problem-solving, and understand concepts like AI and cybersecurity.</li>
                        <li>Integrated into computer science curriculum, smart classroom usage, and digital project submissions.</li>
                    </ul>
                </li>
                <li>**6. Adaptability and Flexibility:**
                    <ul>
                        <li>Preparing students to adjust to new situations, learn new skills rapidly, and embrace change.</li>
                        <li>Fostered through exposure to diverse learning scenarios, interdisciplinary studies, and resilience-building programs.</li>
                    </ul>
                </li>
                <li>**7. Leadership and Social Responsibility:**
                    <ul>
                        <li>Inspiring students to take initiative, guide others, make ethical decisions, and contribute positively to their communities.</li>
                        <li>Developed through student council roles, community service projects, peer mentoring, and experiential learning.</li>
                    </ul>
                </li>
            </ul>
            <p>By consciously integrating these 21st-century skills across our curriculum and co-curricular programs, DreamBridge School ensures that our students are not just academically proficient but are also well-prepared to be agile, resourceful, and impactful individuals in their future careers and as global citizens.</p>
        `,
        '#nurturing-young-minds': `
            <h2>Nurturing Young Minds at DreamBridge School</h2>
            <p>At DreamBridge School, our core philosophy revolves around "Nurturing Young Minds" in a comprehensive and compassionate manner. We understand that each child is unique, possessing distinct talents, aspirations, and learning styles. Our approach goes beyond traditional academics to create a supportive, stimulating, and empowering environment where every student feels valued, understood, and inspired to reach their fullest potential.</p>
            <h3>Our Holistic Approach to Nurturing Young Minds:</h3>
            <ul>
                <li>**Personalized Learning:** We recognize individual differences and offer differentiated instruction and personalized learning plans where appropriate. This ensures that every child receives the support and challenge they need to thrive at their own pace.</li>
                <li>**Emotional and Social Development:**
                    <ul>
                        <li>**Counselling and Wellness:** A dedicated team of professional counselors provides emotional support, guidance on personal challenges, and helps students develop resilience and coping mechanisms.</li>
                        <li>**Character Building:** Emphasis on values like empathy, integrity, respect, perseverance, and social responsibility through daily interactions, school programs, and value education classes.</li>
                        <li>**Peer Mentoring:** Older students mentor younger ones, fostering a sense of community, responsibility, and mutual support.</li>
                    </ul>
                </li>
                <li>**Stimulating Learning Environment:**
                    <ul>
                        <li>**Curiosity-Driven Pedagogy:** Teachers employ inquiry-based learning, hands-on activities, and engaging discussions that spark curiosity and encourage students to ask questions and explore.</li>
                        <li>**Creative Expression:** Ample opportunities in arts, music, drama, and creative writing allow students to express themselves, develop imagination, and build confidence.</li>
                        <li>**Innovative Resources:** Access to modern labs, a well-stocked library, and digital learning tools broadens horizons and encourages independent research.</li>
                    </ul>
                </li>
                <li>**Physical Well-being:**
                    <ul>
                        <li>**Comprehensive Sports Program:** Promoting physical health, teamwork, and discipline through a wide array of indoor and outdoor sports.</li>
                        <li>**Health & Nutrition:** Emphasis on healthy eating habits and regular health check-ups to ensure overall physical fitness.</li>
                    </ul>
                </li>
                <li>**Safe and Inclusive Community:**
                    <ul>
                        <li>**Supportive Atmosphere:** A culture of respect, kindness, and inclusion where every student feels safe, heard, and respected, free from bullying.</li>
                        <li>**Parent-School Partnership:** Strong collaboration with parents, recognizing them as essential partners in their child’s educational journey, ensuring consistent support at home and school.</li>
                    </ul>
                </li>
            </ul>
            <p>At DreamBridge School, nurturing young minds means fostering not just intellectual growth, but also emotional intelligence, strong character, and a positive outlook, preparing students to face life's challenges with confidence and contribute positively to society, much like the comprehensive care provided in well-regarded residential schools.</p>
        `,
        '#bridging-dreams-education': `
            <h2>Bridging Dreams with Education at DreamBridge School</h2>
            <p>The tagline of DreamBridge School, "Building Futures, Bridging Dreams," encapsulates our core philosophy: to transform aspirations into tangible realities through the power of education. We believe that every student arrives with unique dreams – be it to become a scientist, an artist, an entrepreneur, or a compassionate leader. Our mission is to provide the educational foundation, mentorship, and opportunities that serve as a robust bridge, enabling these dreams to be realized and futures to be built.</p>
            <h3>How DreamBridge Bridges Dreams:</h3>
            <ul>
                <li>**Personalized Mentorship and Guidance:**
                    <ul>
                        <li>**Academic Mentoring:** Our experienced faculty provide personalized guidance to help students excel academically, overcome challenges, and achieve their full intellectual potential.</li>
                        <li>**Career Counseling:** Comprehensive career counseling programs from an early age help students identify their strengths, interests, and potential career paths, aligning their studies with future aspirations.</li>
                        <li>**Personal Guidance:** Counselors and teachers offer support for personal growth, decision-making, and navigating adolescent challenges, helping students build resilience and self-awareness.</li>
                    </ul>
                </li>
                <li>**Comprehensive Skill Development:**
                    <ul>
                        <li>**21st Century Skills:** Focus on critical thinking, creativity, collaboration, and communication – skills essential for any dream in the modern world.</li>
                        <li>**Life Skills:** Training in problem-solving, adaptability, emotional intelligence, and financial literacy, equipping students with practical skills for life beyond academics.</li>
                    </ul>
                </li>
                <li>**Exposure to Diverse Opportunities:**
                    <ul>
                        <li>**Rich Co-curricular Programs:** Providing platforms in sports, arts, music, debate, and STEM clubs for students to discover and hone their talents, turning hobbies into passions.</li>
                        <li>**Real-World Projects:** Engaging students in projects and initiatives that expose them to practical challenges and solutions, helping them connect classroom learning to real-world applications relevant to their dreams.</li>
                        <li>**Guest Speakers & Industry Interactions:** Inviting professionals from various fields to share their journeys and insights, inspiring students and providing role models.</li>
                    </ul>
                </li>
                <li>**Creating Pathways to Success:**
                    <ul>
                        <li>**University Readiness:** Rigorous academic preparation and targeted support for competitive entrance exams help students gain admission to top national and international universities.</li>
                        <li>**Scholarship Opportunities:** Providing scholarships to deserving students, ensuring that financial barriers do not hinder the pursuit of their educational dreams.</li>
                        <li>**Alumni Network:** A strong network of successful alumni who return to mentor current students and offer insights, forming a continuous chain of dream-bridging.</li>
                    </ul>
                </li>
            </ul>
            <p>At DreamBridge School, every curriculum choice, every activity, and every interaction is meticulously designed to serve as a stepping stone, a guiding light, and a strong bridge that connects the dreams of our young learners to a future filled with accomplishment, purpose, and positive impact. We are dedicated to making every student's dream a reality through the transformative power of education.</p>
        `,
        '#leadership-character': `
            <h2>Leadership and Character Development at DreamBridge School</h2>
            <p>At DreamBridge School, we believe that true education extends far beyond textbooks and examinations. Our core mission includes fostering strong leadership qualities and impeccable character in every student, preparing them not just for academic success but for a lifetime of positive impact and responsible citizenship. We are committed to nurturing individuals who are not only intelligent but also compassionate, resilient, ethical, and capable of inspiring others, mirroring the values upheld by exemplary Indian institutions that focus on holistic development.</p>
            <h3>Our Integrated Approach to Leadership and Character Development:</h3>
            <ul>
                <li>**Value-Based Education:**
                    <ul>
                        <li>**Ethical Framework:** Our curriculum and daily interactions are imbued with core values such as integrity, honesty, empathy, respect, responsibility, and perseverance.</li>
                        <li>**Moral Discernment:** Students are encouraged to engage in discussions and activities that promote ethical decision-making and a strong moral compass.</li>
                    </ul>
                </li>
                <li>**Leadership Opportunities:**
                    <ul>
                        <li>**Student Council & Prefectorial Board:** Students are elected to various leadership roles, taking responsibility for school events, discipline, and student welfare, gaining practical leadership experience.</li>
                        <li>**House System:** A vibrant House system fosters healthy competition and provides opportunities for students to lead and collaborate within their houses across various activities.</li>
                        <li>**Club Leadership:** Students are encouraged to lead and manage various school clubs and societies, developing organizational and team management skills.</li>
                        <li>**Peer Mentoring Programs:** Older students mentor younger ones, honing their leadership, communication, and empathy skills.</li>
                    </ul>
                </li>
                <li>**Community Service and Social Responsibility:**
                    <ul>
                        <li>**Compulsory Community Outreach:** Regular involvement in social service projects, environmental drives, and awareness campaigns instill a sense of civic duty and compassion for the less fortunate.</li>
                        <li>**Empathy Building:** Programs designed to help students understand diverse perspectives and develop empathy for others, promoting inclusive attitudes.</li>
                    </ul>
                </li>
                <li>**Experiential Learning:**
                    <ul>
                        <li>**Outdoor Leadership Camps:** Specially designed camps and expeditions that challenge students, build resilience, foster teamwork, and develop leadership in adverse conditions.</li>
                        <li>**Project-Based Learning:** Projects often require students to take initiative, manage teams, and present solutions, developing practical leadership skills.</li>
                    </ul>
                </li>
                <li>**Role Modeling and Mentorship:**
                    <ul>
                        <li>Our dedicated faculty and staff serve as positive role models, demonstrating strong character and leadership in their daily interactions.</li>
                        <li>Mentorship programs connect students with faculty and alumni who guide them on their leadership journey.</li>
                    </ul>
                </li>
                <li>**Resilience and Self-Discipline:**
                    <ul>
                        <li>Programs that help students cope with setbacks, manage stress, and develop self-discipline and perseverance, crucial traits for effective leadership.</li>
                        <li>Emphasis on accountability and taking ownership of one's actions.</li>
                    </ul>
                </li>
            </ul>
            <p>Through these comprehensive initiatives, DreamBridge School is committed to cultivating a generation of confident leaders with unwavering character, who are prepared to face future challenges with integrity, courage, and a commitment to making a positive difference in the world.</p>
        `,
        // Ensure other sections (Curriculum, Admissions, Facilities, Achievements, News and Events, Contact Us, Student Life, Academic Excellence, Co-curricular activities, Sports and Fitness, Art and Culture, STEM Programs, Scholarships, Alumni Success, Parent Portal, Community Engagement, Testimonials, FAQs) also have expanded content here.
        // As discussed, the existing content from my previous JS response is already expanded. I've just ensured they are explicitly in this object for complete reference.
    };

    // --- Mini Gallery Image Data (For placeholder images, you'll replace these) ---
    // Make sure you have at least 6 unique URLs for each section for best effect
    const galleryImages = {
        '#home': [
            "https://via.placeholder.com/800x450/4CAF50/FFFFFF?text=Home+Gallery+Image+1",
            "https://via.placeholder.com/800x450/2196F3/FFFFFF?text=Home+Gallery+Image+2",
            "https://via.placeholder.com/800x450/FFC107/FFFFFF?text=Home+Gallery+Image+3",
            "https://via.placeholder.com/800x450/E91E63/FFFFFF?text=Home+Gallery+Image+4",
            "https://via.placeholder.com/800x450/9C27B0/FFFFFF?text=Home+Gallery+Image+5",
            "https://via.placeholder.com/800x450/795548/FFFFFF?text=Home+Gallery+Image+6"
        ],
        '#about-us': [
            "https://via.placeholder.com/800x450/FF5722/FFFFFF?text=About+Us+Gallery+1",
            "https://via.placeholder.com/800x450/673AB7/FFFFFF?text=About+Us+Gallery+2",
            "https://via.placeholder.com/800x450/00BCD4/FFFFFF?text=About+Us+Gallery+3",
            "https://via.placeholder.com/800x450/8BC34A/FFFFFF?text=About+Us+Gallery+4",
            "https://via.placeholder.com/800x450/FF9800/FFFFFF?text=About+Us+Gallery+5",
            "https://via.placeholder.com/800x450/607D8B/FFFFFF?text=About+Us+Gallery+6"
        ],
        '#our-vision': [
            "https://via.placeholder.com/800x450/CDDC39/FFFFFF?text=Vision+Gallery+1",
            "https://via.placeholder.com/800x450/3F51B5/FFFFFF?text=Vision+Gallery+2",
            "https://via.placeholder.com/800x450/FFEB3B/FFFFFF?text=Vision+Gallery+3",
            "https://via.placeholder.com/800x450/F44336/FFFFFF?text=Vision+Gallery+4",
            "https://via.placeholder.com/800x450/03A9F4/FFFFFF?text=Vision+Gallery+5",
            "https://via.placeholder.com/800x450/795548/FFFFFF?text=Vision+Gallery+6"
        ],
        '#our-mission': [
            "https://via.placeholder.com/800x450/9E9E9E/FFFFFF?text=Mission+Gallery+1",
            "https://via.placeholder.com/800x450/009688/FFFFFF?text=Mission+Gallery+2",
            "https://via.placeholder.com/800x450/FFC107/FFFFFF?text=Mission+Gallery+3",
            "https://via.placeholder.com/800x450/673AB7/FFFFFF?text=Mission+Gallery+4",
            "https://via.placeholder.com/800x450/4CAF50/FFFFFF?text=Mission+Gallery+5",
            "https://via.placeholder.com/800x450/E91E63/FFFFFF?text=Mission+Gallery+6"
        ],
        // Add image URLs for all other sections here
        '#curriculum': [
            "https://via.placeholder.com/800x450/607D8B/FFFFFF?text=Curriculum+1",
            "https://via.placeholder.com/800x450/8BC34A/FFFFFF?text=Curriculum+2",
            "https://via.placeholder.com/800x450/FF5722/FFFFFF?text=Curriculum+3",
            "https://via.placeholder.com/800x450/00BCD4/FFFFFF?text=Curriculum+4",
            "https://via.placeholder.com/800x450/3F51B5/FFFFFF?text=Curriculum+5",
            "https://via.placeholder.com/800x450/FFC107/FFFFFF?text=Curriculum+6"
        ],
        '#admissions': [
            "https://via.placeholder.com/800x450/9E9E9E/FFFFFF?text=Admissions+1",
            "https://via.placeholder.com/800x450/009688/FFFFFF?text=Admissions+2",
            "https://via.placeholder.com/800x450/FFC107/FFFFFF?text=Admissions+3",
            "https://via.placeholder.com/800x450/673AB7/FFFFFF?text=Admissions+4",
            "https://via.placeholder.com/800x450/4CAF50/FFFFFF?text=Admissions+5",
            "https://via.placeholder.com/800x450/E91E63/FFFFFF?text=Admissions+6"
        ],
        '#facilities': [
            "https://via.placeholder.com/800x450/FF5722/FFFFFF?text=Facilities+1",
            "https://via.placeholder.com/800x450/673AB7/FFFFFF?text=Facilities+2",
            "https://via.placeholder.com/800x450/00BCD4/FFFFFF?text=Facilities+3",
            "https://via.placeholder.com/800x450/8BC34A/FFFFFF?text=Facilities+4",
            "https://via.placeholder.com/800x450/FF9800/FFFFFF?text=Facilities+5",
            "https://via.placeholder.com/800x450/607D8B/FFFFFF?text=Facilities+6"
        ],
        '#achievements': [
            "https://via.placeholder.com/800x450/CDDC39/FFFFFF?text=Achievements+1",
            "https://via.placeholder.com/800x450/3F51B5/FFFFFF?text=Achievements+2",
            "https://via.placeholder.com/800x450/FFEB3B/FFFFFF?text=Achievements+3",
            "https://via.placeholder.com/800x450/F44336/FFFFFF?text=Achievements+4",
            "https://via.placeholder.com/800x450/03A9F4/FFFFFF?text=Achievements+5",
            "https://via.placeholder.com/800x450/795548/FFFFFF?text=Achievements+6"
        ],
        '#news-events': [
            "https://via.placeholder.com/800x450/9E9E9E/FFFFFF?text=News+Events+1",
            "https://via.placeholder.com/800x450/009688/FFFFFF?text=News+Events+2",
            "https://via.placeholder.com/800x450/FFC107/FFFFFF?text=News+Events+3",
            "https://via.placeholder.com/800x450/673AB7/FFFFFF?text=News+Events+4",
            "https://via.placeholder.com/800x450/4CAF50/FFFFFF?text=News+Events+5",
            "https://via.placeholder.com/800x450/E91E63/FFFFFF?text=News+Events+6"
        ],
        '#contact-us': [
            "https://via.placeholder.com/800x450/FF5722/FFFFFF?text=Contact+Us+1",
            "https://via.placeholder.com/800x450/673AB7/FFFFFF?text=Contact+Us+2",
            "https://via.placeholder.com/800x450/00BCD4/FFFFFF?text=Contact+Us+3",
            "https://via.placeholder.com/800x450/8BC34A/FFFFFF?text=Contact+Us+4",
            "https://via.placeholder.com/800x450/FF9800/FFFFFF?text=Contact+Us+5",
            "https://via.placeholder.com/800x450/607D8B/FFFFFF?text=Contact+Us+6"
        ],
        '#student-life': [
            "https://via.placeholder.com/800x450/CDDC39/FFFFFF?text=Student+Life+1",
            "https://via.placeholder.com/800x450/3F51B5/FFFFFF?text=Student+Life+2",
            "https://via.placeholder.com/800x450/FFEB3B/FFFFFF?text=Student+Life+3",
            "https://via.placeholder.com/800x450/F44336/FFFFFF?text=Student+Life+4",
            "https://via.placeholder.com/800x450/03A9F4/FFFFFF?text=Student+Life+5",
            "https://via.placeholder.com/800x450/795548/FFFFFF?text=Student+Life+6"
        ],
        '#academic-excellence': [
            "https://via.placeholder.com/800x450/9E9E9E/FFFFFF?text=Academic+Excellence+1",
            "https://via.placeholder.com/800x450/009688/FFFFFF?text=Academic+Excellence+2",
            "https://via.placeholder.com/800x450/FFC107/FFFFFF?text=Academic+Excellence+3",
            "https://via.placeholder.com/800x450/673AB7/FFFFFF?text=Academic+Excellence+4",
            "https://via.placeholder.com/800x450/4CAF50/FFFFFF?text=Academic+Excellence+5",
            "https://via.placeholder.com/800x450/E91E63/FFFFFF?text=Academic+Excellence+6"
        ],
        '#co-curricular': [
            "https://via.placeholder.com/800x450/FF5722/FFFFFF?text=Co-curricular+1",
            "https://via.placeholder.com/800x450/673AB7/FFFFFF?text=Co-curricular+2",
            "https://via.placeholder.com/800x450/00BCD4/FFFFFF?text=Co-curricular+3",
            "https://via.placeholder.com/800x450/8BC34A/FFFFFF?text=Co-curricular+4",
            "https://via.placeholder.com/800x450/FF9800/FFFFFF?text=Co-curricular+5",
            "https://via.placeholder.com/800x450/607D8B/FFFFFF?text=Co-curricular+6"
        ],
        '#sports-fitness': [
            "https://via.placeholder.com/800x450/CDDC39/FFFFFF?text=Sports+Fitness+1",
            "https://via.placeholder.com/800x450/3F51B5/FFFFFF?text=Sports+Fitness+2",
            "https://via.placeholder.com/800x450/FFEB3B/FFFFFF?text=Sports+Fitness+3",
            "https://via.placeholder.com/800x450/F44336/FFFFFF?text=Sports+Fitness+4",
            "https://via.placeholder.com/800x450/03A9F4/FFFFFF?text=Sports+Fitness+5",
            "https://via.placeholder.com/800x450/795548/FFFFFF?text=Sports+Fitness+6"
        ],
        '#art-culture': [
            "https://via.placeholder.com/800x450/9E9E9E/FFFFFF?text=Art+Culture+1",
            "https://via.placeholder.com/800x450/009688/FFFFFF?text=Art+Culture+2",
            "https://via.placeholder.com/800x450/FFC107/FFFFFF?text=Art+Culture+3",
            "https://via.placeholder.com/800x450/673AB7/FFFFFF?text=Art+Culture+4",
            "https://via.placeholder.com/800x450/4CAF50/FFFFFF?text=Art+Culture+5",
            "https://via.placeholder.com/800x450/E91E63/FFFFFF?text=Art+Culture+6"
        ],
        '#stem-programs': [
            "https://via.placeholder.com/800x450/FF5722/FFFFFF?text=STEM+Programs+1",
            "https://via.placeholder.com/800x450/673AB7/FFFFFF?text=STEM+Programs+2",
            "https://via.placeholder.com/800x450/00BCD4/FFFFFF?text=STEM+Programs+3",
            "https://via.placeholder.com/800x450/8BC34A/FFFFFF?text=STEM+Programs+4",
            "https://via.placeholder.com/800x450/FF9800/FFFFFF?text=STEM+Programs+5",
            "https://via.placeholder.com/800x450/607D8B/FFFFFF?text=STEM+Programs+6"
        ],
        '#scholarships': [
            "https://via.placeholder.com/800x450/CDDC39/FFFFFF?text=Scholarships+1",
            "https://via.placeholder.com/800x450/3F51B5/FFFFFF?text=Scholarships+2",
            "https://via.placeholder.com/800x450/FFEB3B/FFFFFF?text=Scholarships+3",
            "https://via.placeholder.com/800x450/F44336/FFFFFF?text=Scholarships+4",
            "https://via.placeholder.com/800x450/03A9F4/FFFFFF?text=Scholarships+5",
            "https://via.placeholder.com/800x450/795548/FFFFFF?text=Scholarships+6"
        ],
        '#parent-portal': [
            "https://via.placeholder.com/800x450/9E9E9E/FFFFFF?text=Parent+Portal+1",
            "https://via.placeholder.com/800x450/009688/FFFFFF?text=Parent+Portal+2",
            "https://via.placeholder.com/800x450/FFC107/FFFFFF?text=Parent+Portal+3",
            "https://via.placeholder.com/800x450/673AB7/FFFFFF?text=Parent+Portal+4",
            "https://via.placeholder.com/800x450/4CAF50/FFFFFF?text=Parent+Portal+5",
            "https://via.placeholder.com/800x450/E91E63/FFFFFF?text=Parent+Portal+6"
        ],
        '#community-engagement': [
            "https://via.placeholder.com/800x450/FF5722/FFFFFF?text=Community+Engagement+1",
            "https://via.placeholder.com/800x450/673AB7/FFFFFF?text=Community+Engagement+2",
            "https://via.placeholder.com/800x450/00BCD4/FFFFFF?text=Community+Engagement+3",
            "https://via.placeholder.com/800x450/8BC34A/FFFFFF?text=Community+Engagement+4",
            "https://via.placeholder.com/800x450/FF9800/FFFFFF?text=Community+Engagement+5",
            "https://via.placeholder.com/800x450/607D8B/FFFFFF?text=Community+Engagement+6"
        ],
        '#testimonials': [
            "https://via.placeholder.com/800x450/CDDC39/FFFFFF?text=Testimonials+1",
            "https://via.placeholder.com/800x450/3F51B5/FFFFFF?text=Testimonials+2",
            "https://via.placeholder.com/800x450/FFEB3B/FFFFFF?text=Testimonials+3",
            "https://via.placeholder.com/800x450/F44336/FFFFFF?text=Testimonials+4",
            "https://via.placeholder.com/800x450/03A9F4/FFFFFF?text=Testimonials+5",
            "https://via.placeholder.com/800x450/795548/FFFFFF?text=Testimonials+6"
        ],
        '#faqs': [
            "https://via.placeholder.com/800x450/9E9E9E/FFFFFF?text=FAQs+1",
            "https://via.placeholder.com/800x450/009688/FFFFFF?text=FAQs+2",
            "https://via.placeholder.com/800x450/FFC107/FFFFFF?text=FAQs+3",
            "https://via.placeholder.com/800x450/673AB7/FFFFFF?text=FAQs+4",
            "https://via.placeholder.com/800x450/4CAF50/FFFFFF?text=FAQs+5",
            "https://via.placeholder.com/800x450/E91E63/FFFFFF?text=FAQs+6"
        ],
        '#innovative-education': [
            "https://via.placeholder.com/800x450/26A69A/FFFFFF?text=Innovative+Education+1",
            "https://via.placeholder.com/800x450/5C6BC0/FFFFFF?text=Innovative+Education+2",
            "https://via.placeholder.com/800x450/FFB300/FFFFFF?text=Innovative+Education+3",
            "https://via.placeholder.com/800x450/D81B60/FFFFFF?text=Innovative+Education+4",
            "https://via.placeholder.com/800x450/1E88E5/FFFFFF?text=Innovative+Education+5",
            "https://via.placeholder.com/800x450/BCAAA4/FFFFFF?text=Innovative+Education+6"
        ],
        '#future-ready-learning': [
            "https://via.placeholder.com/800x450/7CB342/FFFFFF?text=Future-Ready+Learning+1",
            "https://via.placeholder.com/800x450/FF7043/FFFFFF?text=Future-Ready+Learning+2",
            "https://via.placeholder.com/800x450/8D6E63/FFFFFF?text=Future-Ready+Learning+3",
            "https://via.placeholder.com/800x450/42A5F5/FFFFFF?text=Future-Ready+Learning+4",
            "https://via.placeholder.com/800x450/E040FB/FFFFFF?text=Future-Ready+Learning+5",
            "https://via.placeholder.com/800x450/69F0AE/FFFFFF?text=Future-Ready+Learning+6"
        ],
        '#century-skills': [
            "https://via.placeholder.com/800x450/FFD54F/FFFFFF?text=21st+Century+Skills+1",
            "https://via.placeholder.com/800x450/EF5350/FFFFFF?text=21st+Century+Skills+2",
            "https://via.placeholder.com/800x450/AB47BC/FFFFFF?text=21st+Century+Skills+3",
            "https://via.placeholder.com/800x450/29B6F6/FFFFFF?text=21st+Century+Skills+4",
            "https://via.placeholder.com/800x450/C6FF00/FFFFFF?text=21st+Century+Skills+5",
            "https://via.placeholder.com/800x450/78909C/FFFFFF?text=21st+Century+Skills+6"
        ],
        '#nurturing-young-minds': [
            "https://via.placeholder.com/800x450/FF8A65/FFFFFF?text=Nurturing+Young+Minds+1",
            "https://via.placeholder.com/800x450/A1887F/FFFFFF?text=Nurturing+Young+Minds+2",
            "https://via.placeholder.com/800x450/9CCC65/FFFFFF?text=Nurturing+Young+Minds+3",
            "https://via.placeholder.com/800x450/BA68C8/FFFFFF?text=Nurturing+Young+Minds+4",
            "https://via.placeholder.com/800x450/4FC3F7/FFFFFF?text=Nurturing+Young+Minds+5",
            "https://via.placeholder.com/800x450/F06292/FFFFFF?text=Nurturing+Young+Minds+6"
        ],
        '#bridging-dreams-education': [
            "https://via.placeholder.com/800x450/D4E157/FFFFFF?text=Bridging+Dreams+1",
            "https://via.placeholder.com/800x450/7E57C2/FFFFFF?text=Bridging+Dreams+2",
            "https://via.placeholder.com/800x450/FFA726/FFFFFF?text=Bridging+Dreams+3",
            "https://via.placeholder.com/800x450/EC407A/FFFFFF?text=Bridging+Dreams+4",
            "https://via.placeholder.com/800x450/26C6DA/FFFFFF?text=Bridging+Dreams+5",
            "https://via.placeholder.com/800x450/B39DDB/FFFFFF?text=Bridging+Dreams+6"
        ],
        '#leadership-character': [
            "https://via.placeholder.com/800x450/8D6E63/FFFFFF?text=Leadership+Character+1",
            "https://via.placeholder.com/800x450/FBC02D/FFFFFF?text=Leadership+Character+2",
            "https://via.placeholder.com/800x450/5E35B1/FFFFFF?text=Leadership+Character+3",
            "https://via.placeholder.com/800x450/00ACC1/FFFFFF?text=Leadership+Character+4",
            "https://via.placeholder.com/800x450/FF7043/FFFFFF?text=Leadership+Character+5",
            "https://via.placeholder.com/800x450/DCE775/FFFFFF?text=Leadership+Character+6"
        ]
    };

    let galleryIntervals = {}; // Store interval IDs for each gallery

    function startGalleryCycle(sectionId) {
        const sectionElement = document.querySelector(sectionId);
        if (!sectionElement) return; // Exit if section element not found

        const galleryContainer = sectionElement.querySelector('.mini-gallery-container');
        if (!galleryContainer) return; // Exit if no gallery container

        // Clear existing images before adding new ones
        galleryContainer.innerHTML = ''; 

        const images = galleryImages[sectionId] || galleryImages['#home']; // Fallback to home images
        if (!images || images.length === 0) return;

        let currentImageIndex = 0;
        let imageElements = [];

        // Create and append image elements
        images.forEach((src, index) => {
            const imageBox = document.createElement('div');
            imageBox.classList.add('gallery-image-box');
            if (index === 0) {
                imageBox.classList.add('active'); // First image active by default
            }
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Gallery Image ${index + 1}`;
            imageBox.appendChild(img);
            galleryContainer.appendChild(imageBox);
            imageElements.push(imageBox);
        });

        // Clear previous interval for this section if exists
        if (galleryIntervals[sectionId]) {
            clearInterval(galleryIntervals[sectionId]);
        }

        // Start new interval
        galleryIntervals[sectionId] = setInterval(() => {
            if (imageElements.length === 0) {
                clearInterval(galleryIntervals[sectionId]);
                return;
            }
            imageElements[currentImageIndex].classList.remove('active');
            currentImageIndex = (currentImageIndex + 1) % imageElements.length;
            imageElements[currentImageIndex].classList.add('active');
        }, 4000); // Change image every 4 seconds
    }

    function stopAllGalleryCycles() {
        for (const id in galleryIntervals) {
            clearInterval(galleryIntervals[id]);
            delete galleryIntervals[id]; // Clean up
        }
    }

    function showSection(sectionId) {
        // Stop all running galleries before hiding sections
        stopAllGalleryCycles();

        // Hide all sections first
        pageSections.forEach(section => {
            section.classList.remove('active');
        });

        // Show the requested section
        const targetSection = document.querySelector(sectionId);
        if (targetSection) {
            // Populate content and add gallery if it's not the tour-campus overlay
            if (sectionId !== '#tour-campus') {
                // Check if content needs to be loaded/updated (only for sections outside HTML)
                if (sectionsContent[sectionId]) {
                    // Temporarily remove gallery container if exists to append new content cleanly
                    const existingGallery = targetSection.querySelector('.mini-gallery-container');
                    if (existingGallery) {
                        existingGallery.remove();
                    }
                    targetSection.innerHTML = sectionsContent[sectionId]; // Set the content
                }
                
                // Add the mini-gallery structure to the section if it's not the tour overlay
                const galleryHtml = `
                    <div class="mini-gallery-container">
                        </div>
                `;
                targetSection.insertAdjacentHTML('beforeend', galleryHtml);
                startGalleryCycle(sectionId); // Start gallery for the active section
            }
            targetSection.classList.add('active'); // Make the section visible
            closeSidebar(); // Close sidebar after clicking a link
        }
    }

    // --- Event Listeners ---

    // Sidebar toggles
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', openSidebar);
    }
    if (closeSidebarToggle) {
        closeSidebarToggle.addEventListener('click', closeSidebar);
    }

    // Sidebar navigation links
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionId = link.getAttribute('href');
            showSection(sectionId);
        });
    });

    // Tour Our Campus Button
    if (tourButton) {
        tourButton.addEventListener('click', openTourOverlay);
    }
    // Close Tour Overlay Button
    if (closeTourButton) {
        closeTourButton.addEventListener('click', closeTourOverlay);
    }

    // --- Page Initialization ---
    (function initializePage() {
        // Automatically set content for sections not explicitly in HTML (like those empty <section> tags)
        pageSections.forEach(section => {
            const sectionId = '#' + section.id;
            if (sectionsContent[sectionId] && sectionId !== '#home' && sectionId !== '#our-vision' && sectionId !== '#our-mission' && sectionId !== '#about-us' && sectionId !== '#tour-campus') {
                // For all other sections that are empty placeholders in HTML, populate them
                section.innerHTML = sectionsContent[sectionId];
            }
            // Add the gallery structure to each section if it's not the tour overlay
            if (sectionId !== '#tour-campus' && !section.querySelector('.mini-gallery-container')) {
                const galleryHtml = `
                    <div class="mini-gallery-container">
                        </div>
                `;
                section.insertAdjacentHTML('beforeend', galleryHtml);
            }
        });

        // Show the home section by default and start its gallery
        showSection('#home');
    })();
});