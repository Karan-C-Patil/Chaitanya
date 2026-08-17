const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

// Mobile navigation toggle
navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href || href === '#') {
      return;
    }
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Close mobile menu after clicking
      mainNav.classList.remove('open');
    }
  });
});

const languageButtons = document.querySelectorAll('.lang-btn');

const translations = {
  en: {
    academic1Desc: "Foundational learning with play-based activities and English-medium instruction that prepares students for a strong academic journey.",
    academic1Detail1: "Play-based learning methodology",
    academic1Detail2: "English and Kannada medium options",
    academic1Detail3: "Focus on cognitive, social, and motor skills development",
    academic1Detail4: "Individual attention with low student-teacher ratio",
    academic1Detail5: "Art, music, and physical education activities",
    academic1DetailsTitle: "Program Details:",
    academic1Duration: "<strong>Duration:</strong> Age 3-10 years (LKG to 5th Grade)",
    academic1Title: "LKG to 5th Grade",
    academic2Desc: "Balanced learning across core subjects with regular doubt-clearing sessions and continuous assessment.",
    academic2Detail1: "Comprehensive State Board curriculum",
    academic2Detail2: "Mathematics, Science, Social Studies, Languages",
    academic2Detail3: "Regular doubt-clearing sessions",
    academic2Detail4: "Continuous assessment and feedback",
    academic2Detail5: "Computer education and digital literacy",
    academic2DetailsTitle: "Program Details:",
    academic2Duration: "<strong>Duration:</strong> Grades 6-8 (Age 11-14 years)",
    academic2Title: "6th to 8th Grade",
    academic3Desc: "State Board curriculum for grades 9-12 with focus on exam preparation and comprehensive development.",
    academic3Detail1: "State Board curriculum and syllabus",
    academic3Detail2: "Science, Commerce, and Arts streams",
    academic3Detail3: "State Board exam preparation",
    academic3Detail4: "Career guidance and counseling",
    academic3Detail5: "Advanced computer applications",
    academic3DetailsTitle: "Program Details:",
    academic3Duration: "<strong>Duration:</strong> Grades 9-10 (Age 14-16 years)",
    academic3Title: "9th to 10th Grade",
    academic4Desc: "Industrial Training Institute programs offering practical skills and vocational education for career readiness.",
    academic4Detail1: "Various trade courses (e.g., Electrician, Fitter, Mechanic)",
    academic4Detail2: "Hands-on training with industry-standard equipment",
    academic4Detail3: "Practical skill development and job placement assistance",
    academic4Detail4: "Affiliated with NCVT/SCVT",
    academic4Detail5: "Duration: 1-2 years depending on the trade",
    academic4DetailsTitle: "Program Details:",
    academic4Duration: "<strong>Eligibility:</strong> 10th pass or equivalent",
    academic4Title: "ITI Vocational Training",
    address: "Address:",
    contactLabel: "Contact",
    contactText: "Reach out to admissions to learn about class availability, resources, and campus support.",
    contactTitle: "Get in touch for enrollment information",
    email: "Email:",
    event1Date: "January 26, 2026",
    event1Desc: "Celebrating India's Republic Day with patriotic fervor and cultural programs.",
    event1Detail1: "Flag hoisting ceremony",
    event1Detail2: "Patriotic songs and cultural performances",
    event1Detail3: "Speech on national unity",
    event1Detail4: "Student parade and march past",
    event1DetailsTitle: "Event Highlights:",
    event1Link: "Read more about Republic Day →",
    event1Title: "Republic Day",
    event2Date: "December 19, 2025",
    event2Desc: "Grand stage finale celebrating academic excellence and cultural achievements.",
    event2Detail1: "Prize distribution ceremony",
    event2Detail2: "Cultural performances by students",
    event2Detail3: "Guest speakers and chief guest address",
    event2Detail4: "Display of student projects and artwork",
    event2DetailsTitle: "Event Highlights:",
    event2Link: "Read more about Annual Day →",
    event2Title: "Annual Day",
    event3Date: "November 1, 2025",
    event3Desc: "Celebrating Karnataka's formation day with traditional cultural programs.",
    event3Detail1: "Traditional Kannada folk dances",
    event3Detail2: "Kannada literature and poetry recitation",
    event3Detail3: "Traditional music performances",
    event3Detail4: "Speech on Karnataka's culture and heritage",
    event3DetailsTitle: "Event Highlights:",
    event3Link: "Read more about Kannada Rajyotsava →",
    event3Title: "Kannada Rajyotsava",
    eventsTitle: "Events & Gallery",
    feature1Desc: "English and Kannada medium options from LKG to 10th",
    feature1Title: "Dual Medium Education",
    feature2Desc: "Practical skill development for career opportunities",
    feature2Title: "ITI Vocational Training",
    feature3Desc: "Interactive learning with smart classrooms and digital tools",
    feature3Title: "Modern Teaching",
    feature4Desc: "Focus on academics, co-curricular activities, and character development",
    feature4Title: "Holistic Approach",
    footerAddress: "Naganur, Tq. Mudalgi, Belagavi, Karnataka 591224",
    footerAddressLabel: "Address:",
    footerContactTitle: "Contact Information",
    footerCopyright: "&copy; 2026 Chaitanya Education Institute. All rights reserved.",
    footerEmail1: "admissions@chaitanya.edu.in",
    footerEmail2: "info@chaitanya.edu.in",
    footerEmailLabel: "Email:",
    footerHours1: "Monday - Saturday: 8:00 AM - 4:00 PM",
    footerHours2: "Sunday: Closed",
    footerHours3: "Office Hours: 9:00 AM - 5:00 PM",
    footerHoursTitle: "School Hours",
    footerLink1: "About School",
    footerLink2: "Leadership",
    footerLink3: "School Facilities",
    footerLink4: "Admission",
    footerLinksTitle: "Quick Links",
    footerPhone1: "Admissions: +91 99999 99999",
    footerPhone2: "General: +91 88888 88888",
    footerPhoneLabel: "Phone:",
    footerTagline: "Established in 2003 • State Board Affiliation",
    formAdmissionInquiry: "Admission Inquiry",
    formCurriculumInquiry: "Curriculum Information",
    formEmail: "Email Address",
    formFacilitiesInquiry: "School Facilities",
    formFeesInquiry: "Fee Structure",
    formGeneralInquiry: "General Information",
    formGrade: "Grade Applying For",
    formHigh: "High School (9-10)",
    formHigher: "Higher Secondary (11-12)",
    formInquiryType: "Inquiry Type",
    formMessage: "Message",
    formMiddle: "Middle School (6-8)",
    formName: "Full Name",
    formPhone: "Phone Number",
    formPrePrimary: "Pre-Primary",
    formPrimary: "Primary (1-5)",
    formSelectGrade: "Select grade",
    formSelectOption: "Select inquiry type",
    formSubmit: "Send Message",
    formTransferInquiry: "School Transfer",
    galleryLabel: "Gallery",
    galleryTitle: "Explore Our School Life",
    heroBtn1: "Enroll Now",
    heroBtn2: "Learn More",
    heroBtn3: "View Programs",
    heroSubtitle1: "Comprehensive education in English and Kannada mediums from LKG to 10th Standard, plus ITI vocational training.",
    heroSubtitle2: "23+ Years of Academic Excellence in Belagavi with English & Kannada mediums and ITI programs.",
    heroSubtitle3: "Academics in English/Kannada • Sports • Cultural Activities • ITI Vocational Training • Character Building",
    heroTitle1: "Admissions Open for Academic Year 2026-2027",
    heroTitle2: "State Board Excellence Since 2003",
    heroTitle3: "Holistic Development",
    navAbout: "About Us",
    navAcademics: "Academics",
    navAdmissions: "Admissions",
    navContact: "Contact Us",
    navHome: "Home",
    navNews: "News & Events",
    news1Conclusion: "The event concluded with prize distribution and a message from our principal emphasizing the importance of sports in holistic development.",
    news1Date: "March 15, 2026",
    news1Detail1: "100m, 200m, and 400m sprint winners",
    news1Detail2: "Relay race champions in both categories",
    news1Detail3: "Long jump and high jump medalists",
    news1Detail4: "Team spirit awards for outstanding participation",
    news1DetailsTitle: "Event Summary:",
    news1Text: "Our students showcased exceptional talent in athletics, winning multiple medals and demonstrating the spirit of teamwork and sportsmanship.",
    news1Title: "Annual Sports Day Success",
    news2Conclusion: "The inauguration was graced by local education officials and parents, marking a significant step in our commitment to digital education.",
    news2Date: "March 10, 2026",
    news2Detail1: "30 high-performance computers with latest processors",
    news2Detail2: "High-speed internet connectivity",
    news2Detail3: "Educational software and programming tools",
    news2Detail4: "Interactive whiteboards and projectors",
    news2DetailsTitle: "Lab Features:",
    news2Text: "State-of-the-art computer lab with latest technology inaugurated, providing students with modern digital learning tools.",
    news2Title: "New Computer Lab Inauguration",
    news3Conclusion: "Our students demonstrated exceptional creativity and scientific thinking, making Chaitanya Education Institute proud at the district level.",
    news3Date: "March 5, 2026",
    news3Detail1: "First prize in Environmental Science category",
    news3Detail2: "Second prize in Physics innovation project",
    news3Detail3: "Third prize in Chemistry experiments",
    news3Detail4: "Special mention for sustainable energy project",
    news3DetailsTitle: "Achievements:",
    news3Text: "Our students brought home numerous prizes at the district-level science fair, showcasing innovative projects and research.",
    news3Title: "Science Fair Winners",
    newsLabel: "Latest News",
    newsTitle: "School Updates & Events",
    phone: "Phone:",
    readMore: "Read more →",
    studentWinsTitle: "2025-26 Student Wins",
    tab1Label: "Life at Chaitanya Education",
    tab2Label: "Science Lab",
    tab3Label: "Classroom Learning",
    tab4Label: "Study Resources",
    tab5Label: "Student Achievements",
    tab6Label: "Sports Activities",
    tab7Label: "Cultural Events",
    testimonial1: "\"Our son Sri Ram has been a student at Chaitanya Education Institute since pre-kindergarten years and is now in 6th grade. During these crucial formative years, we have seen him steadily grow in academics, confidence, and overall abilities. One of Chaitanya's key strengths is the personalized attention given to each student. The teachers are easily approachable, supportive, and genuinely interested in every child's development.\"",
    testimonial2: "\"As parents, we chose the best education and values for our children's bright future. Over the years, the continuous support, cooperation, and encouragement provided to our children is something we are grateful for to all the teachers, principal, and support staff. Their teaching methods focused on meaningful learning, not just memorization.\"",
    testimonial3: "\"The school's emphasis on character building along with academics has made a significant difference in my child's personality development. The teachers are supportive and genuinely care about each student's growth.\"",
    testimonialsTitle: "Testimonials",
    viewAllEvents: "View All Events",
    whyChoosePoint1: "State Board curriculum with modern teaching methods",
    whyChoosePoint2: "Experienced faculty with personalized attention",
    whyChoosePoint3: "State-of-the-art facilities including smart classrooms and labs",
    whyChoosePoint4: "Focus on co-curricular activities and sports",
    whyChoosePoint5: "Safe, secure, and nurturing learning environment",
    whyChooseText: "Chaitanya Education Institute has been a cornerstone of quality education in Mudalgi since 2003. We provide comprehensive State Board curriculum education with a focus on holistic development, character building, and academic excellence.",
    whyChooseTitle: "Why Choose Chaitanya Education Institute?",
    win1Desc: "Outstanding performance in Taekwondo competitions",
    win1Title: "Taekwondo Champions",
    win2Desc: "Science Olympiad Foundation exam achievers",
    win2Title: "SOF Exam Winners",
    win3Desc: "Top performers in State Board examinations",
    win3Title: "Academic Excellence",
  },
  kn: {
    academic1Desc: "ಆಟ-ಆಧಾರಿತ ಚಟುವಟಿಕೆಗಳೊಂದಿಗೆ ಆಧಾರವಾದ ಕಲಿಕೆ ಮತ್ತು ಇಂಗ್ಲೀಷ್ ಮಾಧ್ಯಮದ ಬೋಧನೆಯು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಬಲವಾದ ಅಧ್ಯಯನಿಕ ಪ್ರಯಾಣಕ್ಕೆ ಸಿದ್ಧಪಡಿಸುತ್ತದೆ.",
    academic1Detail1: "ಆಟಾಧಾರಿತ ಕಲಿಕಾ ವಿಧಾನ",
    academic1Detail2: "ಇಂಗ್ಲೀಷ್ ಮತ್ತು ಕನ್ನಡ ಮಾಧ್ಯಮ ಆಯ್ಕೆಗಳು",
    academic1Detail3: "ಜ್ಞಾನಾತ್ಮಕ, ಸಾಮಾಜಿಕ ಮತ್ತು ಚಲನೆ ಕೌಶಲ್ಯಗಳ ಮೇಲಿನ ಗಮನ",
    academic1Detail4: "ಕನಿಷ್ಠ ವಿದ್ಯಾರ್ಥಿ-ಗುರು ಅನುಪಾತದೊಂದಿಗೆ ವೈಯಕ್ತಿಕ ಗಮನ",
    academic1Detail5: "ಕಲೆ, ಸಂಗೀತ ಮತ್ತು ದೈಹಿಕ ಶಿಕ್ಷಣ ಚಟುವಟಿಕೆಗಳು",
    academic1DetailsTitle: "ಕಾರ್ಯಕ್ರಮ ವಿವರಗಳು:",
    academic1Duration: "<strong>ಅವಧಿ:</strong> ವಯಸ್ಸು 3-10 ವರ್ಷಗಳು (LKG ರಿಂದ 5ನೇ ತರಗತಿ)",
    academic1Title: "LKG ರಿಂದ 5ನೇ ತರಗತಿ",
    academic2Desc: "ಇಂಗ್ಲೀಷ್ ಅಥವಾ ಕನ್ನಡ ಮಾಧ್ಯಮದಲ್ಲಿ ಪ್ರಧಾನ ವಿಷಯಗಳಲ್ಲಿ ಸಮತೋಲನ ಕಲಿಕೆ ನಿಯಮಿತ ಸಂದೇಹ ನಿವಾರಣಾ ಸೆಷನ್‌ಗಳು ಮತ್ತು ನಿರಂತರ ಮೌಲ್ಯಮಾಪನದೊಂದಿಗೆ.",
    academic2Detail1: "ಸಂಪೂರ್ಣ ರಾಜ್ಯ ಮಂಡಳಿ ಪಠ್ಯಕ್ರಮ",
    academic2Detail2: "ಗಣಿತ, ವಿಜ್ಞಾನ, ಸಾಮಾಜಿಕ ಅಧ್ಯಯನ, ಭಾಷೆಗಳು",
    academic2Detail3: "ಸಂದೇಹ ನಿವಾರಣೆಯ ನಿಯಮಿತ ಸೆಶನ್‌ಗಳು",
    academic2Detail4: "ಸ್ಥಿರ ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ಪ್ರತಿಕ್ರಿಯೆ",
    academic2Detail5: "ಕಂಪ್ಯೂಟರ್ ಶಿಕ್ಷಣ ಮತ್ತು ಡಿಜಿಟಲ್ ಸಾಕ್ಷರತೆ",
    academic2DetailsTitle: "ಕಾರ್ಯಕ್ರಮ ವಿವರಗಳು:",
    academic2Duration: "<strong>ಅವಧಿ:</strong> 6-8 ತರಗತಿಗಳು (ವಯಸ್ಸು 11-14 ವರ್ಷಗಳು)",
    academic2Title: "6ನೇ ರಿಂದ 8ನೇ ತರಗತಿ",
    academic3Desc: "ಪರೀಕ್ಷೆ ಸಿದ್ಧತೆ ಮತ್ತು ಸಮಗ್ರ ಅಭಿವೃದ್ಧಿಯ ಮೇಲೆ ಒತ್ತು ನೀಡುವ ಇಂಗ್ಲೀಷ್ ಅಥವಾ ಕನ್ನಡ ಮಾಧ್ಯಮದಲ್ಲಿ ರಾಜ್ಯ ಮಂಡಳಿ ಪಠ್ಯಕ್ರಮ.",
    academic3Detail1: "ರಾಜ್ಯ ಮಂಡಳಿ ಪಠ್ಯಕ್ರಮ ಮತ್ತು ಅಧ್ಯಯನ",
    academic3Detail2: "ವಿಜ್ಞಾನ, ವಾಣಿಜ್ಯ ಮತ್ತು ಕಲೆ ವಿಭಾಗಗಳು",
    academic3Detail3: "ರಾಜ್ಯ ಪರೀಕ್ಷಾ ತಯಾರಿ",
    academic3Detail4: "ಉದ್ಯೋಗ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಸಲಹೆ",
    academic3Detail5: "ಅಧುನಿಕ ಕಂಪ್ಯೂಟರ್ ಅನ್ವಯಿಕೆಗಳು",
    academic3DetailsTitle: "ಕಾರ್ಯಕ್ರಮ ವಿವರಗಳು:",
    academic3Duration: "<strong>ಅವಧಿ:</strong> 9-10 ತರಗತಿಗಳು (ವಯಸ್ಸು 14-16 ವರ್ಷಗಳು)",
    academic3Title: "9ನೇ ರಿಂದ 10ನೇ ತರಗತಿ",
    academic4Desc: "ಕೆಲಸ ಸಿದ್ಧತೆಗಾಗಿ ಪ್ರಾಯೋಗಿಕ ಕೌಶಲ್ಯಗಳು ಮತ್ತು ಉದ್ಯೋಗ ಶಿಕ್ಷಣವನ್ನು ನೀಡುವ ಔದ್ಯೋಗಿಕ ತರಬೇತಿ ಸಂಸ್ಥೆ ಕಾರ್ಯಕ್ರಮಗಳು.",
    academic4Detail1: "ವಿವಿಧ ವ್ಯಾಪಾರ ಕೋರ್ಸ್‌ಗಳು (ಉದಾ. ಎಲೆಕ್ಟ್ರಿಶಿಯನ್, ಫಿಟರ್, ಮೆಕ್ಯಾನಿಕ್)",
    academic4Detail2: "ಉದ್ಯಮ ಮಾನದ ಸಾಧನಗಳೊಂದಿಗೆ ಕೈಯಾರಿಕ ತರಬೇತಿ",
    academic4Detail3: "ಪ್ರಾಯೋಗಿಕ ಕೌಶಲ್ಯ ಅಭಿವೃದ್ಧಿ ಮತ್ತು ಉದ್ಯೋಗ ಸ್ಥಾನೀಕರಣ ಸಹಾಯ",
    academic4Detail4: "NCVT/SCVT ಗೆ ಸಂಬಂಧಿಸಿದೆ",
    academic4Detail5: "ಅವಧಿ: ವ್ಯಾಪಾರವನ್ನು ಅವಲಂಬಿಸಿ 1-2 ವರ್ಷಗಳು",
    academic4DetailsTitle: "ಕಾರ್ಯಕ್ರಮ ವಿವರಗಳು:",
    academic4Duration: "<strong>ಅರ್ಹತೆ:</strong> 10ನೇ ಉತ್ತೀರ್ಣ ಅಥವಾ ಸಮಾನ",
    academic4Title: "ITI ಉದ್ಯೋಗ ತರಬೇತಿ",
    academicsTitle: "ಅಧ್ಯಯನ",
    address: "ವಿಳಾಸ:",
    contactLabel: "ಸಂಪರ್ಕ",
    contactText: "ತರಗತಿ ಲಭ್ಯತೆ, ಸಂಪನ್ಮೂಲಗಳು ಮತ್ತು ಕ್ಯಾಂಪಸ್ ಬೆಂಬಲದ ಬಗ್ಗೆ ತಿಳಿದುಕೊಳ್ಳಲು ಪ್ರವೇಶಕ್ಕೆ ಸಂಪರ್ಕಿಸಿ.",
    contactTitle: "ದಾಖಲಾತಿ ಮಾಹಿತಿಗಾಗಿ ಸಂಪರ್ಕಿಸಿ",
    email: "ಇಮೇಲ್:",
    event1Date: "ಜನವರಿ 26, 2026",
    event1Desc: "ಭಾರತದ ಗಣರಾಜ್ಯೋತ್ಸವವನ್ನು ದೇಶಪ್ರೇಮದ ಭಾವನೆ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳೊಂದಿಗೆ ಆಚರಿಸುವುದು.",
    event1Detail1: "ಧ್ವಜಾರೋಹಣ ಸಮಾರಂಭ",
    event1Detail2: "ದೇಶಭಕ್ತಿ ಹಾಡುಗಳು ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಪ್ರದರ್ಶನಗಳು",
    event1Detail3: "ರಾಷ್ಟ್ರೀಯ ಏಕತೆಯ ಕುರಿತು ಭಾಷಣ",
    event1Detail4: "ವಿದ್ಯಾರ್ಥಿ ಪೆರೇಡ್ ಮತ್ತು ಮಾರ್ಚ್ ಹಾಸ್‌ಟ್",
    event1DetailsTitle: "ಕಾರ್ಯಕ್ರಮ ವೈಶಿಷ್ಟ್ಯಗಳು:",
    event1Link: "ಗಣರಾಜ್ಯೋತ್ಸವದ ಬಗ್ಗೆ ಇನ್ನಷ್ಟು ಓದಿ →",
    event1Title: "ಗಣರಾಜ್ಯೋತ್ಸವ",
    event2Date: "ಡಿಸೆಂಬರ್ 19, 2025",
    event2Desc: "ಅಧ್ಯಯನಿಕ ಉತ್ಕೃಷ್ಟತೆ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಸಾಧನೆಗಳನ್ನು ಆಚರಿಸುವ ದೊಡ್ಡ ವೇದಿಕೆ.",
    event2Detail1: "ಪ್ರಶಸ್ತಿ ವಿತರಣೆ ಸಮಾರಂಭ",
    event2Detail2: "ವಿದ್ಯಾರ್ಥಿಗಳ ಸಾಂಸ್ಕೃತಿಕ ಪ್ರದರ್ಶನಗಳು",
    event2Detail3: "ಅತಿಥಿ ಭಾಷಣಗಾರರು ಮತ್ತು ಮುಖ್ಯ ಅತಿಥಿಯ ಉಪನ್ಯಾಸ",
    event2Detail4: "ವಿದ್ಯಾರ್ಥಿ ಯೋಜನೆಗಳು ಮತ್ತು ಕಲಾಕೃತಿಗಳ ಪ್ರದರ್ಶನ",
    event2DetailsTitle: "ಕಾರ್ಯಕ್ರಮ ವೈಶಿಷ್ಟ್ಯಗಳು:",
    event2Link: "ವಾರ್ಷಿಕ ದಿನದ ಬಗ್ಗೆ ಇನ್ನಷ್ಟು ಓದಿ →",
    event2Title: "ವಾರ್ಷಿಕ ದಿನ",
    event3Date: "ನವೆಂಬರ್ 1, 2025",
    event3Desc: "ಕರ್ನಾಟಕದ ರಚನೆ ದಿನವನ್ನು ಸಾಂಪ್ರದಾಯಿಕ ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳೊಂದಿಗೆ ಆಚರಿಸುವುದು.",
    event3Detail1: "ಪ್ರಚಲಿತ ಕನ್ನಡ ಜನಪದ ನೃತ್ಯಗಳು",
    event3Detail2: "ಕನ್ನಡ ಸಾಹಿತ್ಯ ಮತ್ತು ಕವನ ಪಠಣೆ",
    event3Detail3: "ಸಾಂಪ್ರದಾಯಿಕ ಸಂಗೀತ ಪ್ರದರ್ಶನಗಳು",
    event3Detail4: "ಕರ್ನಾಟಕದ ಸಂಸ್ಕೃತಿ ಮತ್ತು ಪರಂಪರೆಯ ಕುರಿತು ಭಾಷಣ",
    event3DetailsTitle: "ಕಾರ್ಯಕ್ರಮ ವೈಶಿಷ್ಟ್ಯಗಳು:",
    event3Link: "ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವದ ಬಗ್ಗೆ ಇನ್ನಷ್ಟು ಓದಿ →",
    event3Title: "ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವ",
    eventsTitle: "ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಗ್ಯಾಲರಿ",
    feature1Desc: "LKG ರಿಂದ 10ನೇ ತರಗತಿವರೆಗೆ ಇಂಗ್ಲೀಷ್ ಮತ್ತು ಕನ್ನಡ ಮಾಧ್ಯಮ ಆಯ್ಕೆಗಳು",
    feature1Title: "ದ್ವಿಭಾಷಾ ಶಿಕ್ಷಣ",
    feature2Desc: "ಕೆಲಸ ಅವಕಾಶಗಳಿಗಾಗಿ ಪ್ರಾಯೋಗಿಕ ಕೌಶಲ್ಯ ಅಭಿವೃದ್ಧಿ",
    feature2Title: "ITI ಉದ್ಯೋಗ ತರಬೇತಿ",
    feature3Desc: "ಸ್ಮಾರ್ಟ್ ಕ್ಲಾಸ್‌ರೂಮ್‌ಗಳು ಮತ್ತು ಡಿಜಿಟಲ್ ಉಪಕರಣಗಳೊಂದಿಗೆ ಸಂವಾದಾತ್ಮಕ ಕಲಿಕೆ",
    feature3Title: "ಆಧುನಿಕ ಬೋಧನೆ",
    feature4Desc: "ಅಧ್ಯಯನ, ಸಹ-ಪಠ್ಯಕ್ರಮ ಚಟುವಟಿಕೆಗಳು ಮತ್ತು ವ್ಯಕ್ತಿತ್ವ ಅಭಿವೃದ್ಧಿಯ ಮೇಲೆ ಕೇಂದ್ರೀಕರಣ",
    feature4Title: "ಸಮಗ್ರ ವಿಧಾನ",
    footerAddress: "ನಾಗನೂರು, ತಾ. ಮುದಲಗಿ, ಬೆಳಗಾವಿ, ಕರ್ನಾಟಕ 591224",
    footerAddressLabel: "ವಿಳಾಸ:",
    footerContactTitle: "ಸಂಪರ್ಕ ಮಾಹಿತಿ",
    footerCopyright: "&copy; 2026 ಚೈತನ್ಯ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    footerEmail1: "admissions@chaitanya.edu.in",
    footerEmail2: "info@chaitanya.edu.in",
    footerEmailLabel: "ಇಮೇಲ್:",
    footerHours1: "ಸೋಮವಾರ - ಶನಿವಾರ: ಬೆಳಗ್ಗೆ 8:00 - ಸಂಜೆ 4:00",
    footerHours2: "ಭಾನುವಾರ: ಮುಚ್ಚಿದೆ",
    footerHours3: "ಕಛೇರಿ ಸಮಯ: ಬೆಳಗ್ಗೆ 9:00 - ಸಂಜೆ 5:00",
    footerHoursTitle: "ಶಾಲೆ ಸಮಯ",
    footerLink1: "ಶಾಲೆಯ ಬಗ್ಗೆ",
    footerLink2: "ನಾಯಕತ್ವ",
    footerLink3: "ಶಾಲೆ ಸೌಲಭ್ಯಗಳು",
    footerLink4: "ಪ್ರವೇಶ",
    footerLinksTitle: "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು",
    footerPhone1: "ಪ್ರವೇಶ: +91 99999 99999",
    footerPhone2: "ಸಾಮಾನ್ಯ: +91 88888 88888",
    footerPhoneLabel: "ದೂರವಾಣಿ:",
    footerTagline: "2003 ರಲ್ಲಿ ಸ್ಥಾಪಿತ • ರಾಜ್ಯ ಮಂಡಳಿ ಅನುಮೋದಿತ",
    formAdmissionInquiry: "ಪ್ರವೇಶ ವಿಚಾರಣೆ",
    formCurriculumInquiry: "ಪಠ್ಯಕ್ರಮ ಮಾಹಿತಿ",
    formEmail: "ಇಮೇಲ್ ವಿಳಾಸ",
    formFacilitiesInquiry: "ಶಾಲಾ ಸೌಲಭ್ಯಗಳು",
    formFeesInquiry: "ಶೂಲ್ಕ ರಚನೆ",
    formGeneralInquiry: "ಸಾಮಾನ್ಯ ಮಾಹಿತಿ",
    formGrade: "ಅರ್ಜಿ ಹಾಕುತ್ತಿರುವ ತರಗತಿ",
    formHigh: "ಹೈ ಸ್ಕೂಲ್ (9-10)",
    formHigher: "ಹೈಯರ್ ಸೆಕೆಂಡರಿ (11-12)",
    formInquiryType: "ವಿಚಾರಣೆ ವಿಧಾನ",
    formMessage: "ಸಂದೇಶ",
    formMiddle: "ಮಧ್ಯಮ ಶಾಲೆ (6-8)",
    formName: "ಪೂರ್ಣ ಹೆಸರು",
    formPhone: "ದೂರವಾಣಿ ಸಂಖ್ಯೆ",
    formPrePrimary: "ಪ್ರಿ-ಪ್ರಾಥಮಿಕ",
    formPrimary: "ಪ್ರಾಥಮಿಕ (1-5)",
    formSelectGrade: "ತರಗತಿ ಆಯ್ಕೆಮಾಡಿ",
    formSelectOption: "ವಿಚಾರಣೆಯ ವಿಧ ಆಯ್ಕೆಮಾಡಿ",
    formSubmit: "ಸಂದೇಶ ಕಳುಹಿಸಿ",
    formTransferInquiry: "ಶಾಲಾ ಬದಲಾವಣೆ",
    galleryLabel: "ಗ್ಯಾಲರಿ",
    galleryTitle: "ನಮ್ಮ ಶಾಲೆಯ ಜೀವನವನ್ನು ಅನ್ವೇಷಿಸಿ",
    heroBtn1: "ಈಗ ನೋಂದಾಯಿಸು",
    heroBtn2: "ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ",
    heroBtn3: "ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ನೋಡಿ",
    heroSubtitle1: "ಮಕ್ಕಳಿಗೆ ತರಗತಿಯಿಂದ 11ನೇ ತರಗತಿ / 1ನೇ PUC • ರಾಜ್ಯ ಮಂಡಳಿ ಪಠ್ಯಕ್ರಮ",
    heroSubtitle2: "ಬೆಂಗಳೂರಿನಲ್ಲಿ 23+ ವರ್ಷಗಳ ಅಧ್ಯಯನಿಕ ಉತ್ಕೃಷ್ಟತೆ",
    heroSubtitle3: "ಅಧ್ಯಯನ • ಕ್ರೀಡೆ • ಸಾಂಸ್ಕೃತಿಕ ಚಟುವಟಿಕೆಗಳು • ಚರಿತ್ರ ನಿರ್ಮಾಣ",
    heroTitle1: "ಶೈಕ್ಷಣಿಕ ವರ್ಷ 2026-2027 ಗೆ ಪ್ರವೇಶ ತೆರೆದಿದೆ",
    heroTitle2: "2003 ರಿಂದ ರಾಜ್ಯ ಮಂಡಳಿ ಶಿಕ್ಷಣದ ಉತ್ಕೃಷ್ಟತೆ",
    heroTitle3: "ಸಮಗ್ರ ಅಭಿವೃದ್ಧಿ",
    navAbout: "ನಮ್ಮ ಬಗ್ಗೆ",
    navAcademics: "ಅಧ್ಯಯನ",
    navAdmissions: "ಪ್ರವೇಶ",
    navContact: "ಸಂಪರ್ಕಿಸಿ",
    navHome: "ಮುಖ್ಯ ಪುಟ",
    navNews: "ಸುದ್ದಿ ಮತ್ತು ಕಾರ್ಯಕ್ರಮಗಳು",
    news1Conclusion: "ಕಾರ್ಯಕ್ರಮವು ಪ್ರಶಸ್ತಿ ವಿತರಣೆ ಮತ್ತು ನಮ್ಮ ಪ್ರಾಂಶುಪಾಲರು ಸಮಗ್ರ ಅಭಿವೃದ್ಧಿಯ ಮಹತ್ವವನ್ನು ಒತ್ತಿ ಹೇಳುವ ಸಂದೇಶದೊಂದಿಗೆ ಮುಕ್ತಾಯವಾಯಿತು.",
    news1Date: "ಮಾರ್ಚ್ 15, 2026",
    news1Detail1: "100 ಮೀ, 200 ಮೀ ಮತ್ತು 400 ಮೀ ಸ್ಪ್ರಿಂಟ್ ವಿಜೇತರು",
    news1Detail2: "ಎರಡು ವರ್ಗಗಳಲ್ಲಿಯೂ ರಿಲೇ ರೇಸ್ ಚಾಂಪಿಯನ್ಸ್",
    news1Detail3: "ಲಾಂಗ್ ಜಂಪ್ ಮತ್ತು ಹೈ ಜಂಪ್ ಮೆಡಲಿಸ್ಟ್‌ಗಳು",
    news1Detail4: "ಉತ್ತಮ ಪಾಲ್ಗೊಳ್ಳುವಿಕೆಗೆ ತಂಡದ ಆತ್ಮವಿಶ್ವಾಸ ಪ್ರಶಸ್ತಿ",
    news1DetailsTitle: "ಕಾರ್ಯಕ್ರಮ ಸಾರಾಂಶ:",
    news1Text: "ನಮ್ಮ ವಿದ್ಯಾರ್ಥಿಗಳು ಕ್ರೀಡೆಗಳಲ್ಲಿ ಅಸಾಧಾರಣ ಪ್ರತಿಭೆಯನ್ನು ಪ್ರದರ್ಶಿಸಿದರು, ಅನೇಕ ಪದಕಗಳನ್ನು ಗೆದ್ದು ತಂಡದ ಕೆಲಸ ಮತ್ತು ಕ್ರೀಡಾ ಮನಸ್ಥಿತಿಯ ಆತ್ಮವನ್ನು ಪ್ರದರ್ಶಿಸಿದರು.",
    news1Title: "ವಾರ್ಷಿಕ ಕ್ರೀಡಾ ದಿನ ಯಶಸ್ಸು",
    news2Conclusion: "ಉದ್ಘಾಟನೆ ಸ್ಥಳೀಯ ಶಿಕ್ಷಣ ಅಧಿಕಾರಿಗಳು ಮತ್ತು ಪಾಲಕರು ಉಪಸ್ಥಿತರಿದ್ದರು, ಡಿಜಿಟಲ್ ಶಿಕ್ಷಣದ ನಮ್ಮ ಬದ್ಧತೆಯ ಮಹತ್ವದ ಹೆಜ್ಜೆಯಾಗಿದೆ.",
    news2Date: "ಮಾರ್ಚ್ 10, 2026",
    news2Detail1: "ತಾಜಾ ಪ್ರೊಸೆಸರ್‌ಗಳೊಂದಿಗೆ 30 ಉನ್ನತ ಕಾರ್ಯಕ್ಷಮತೆ ಕಂಪ್ಯೂಟರ್‌ಗಳು",
    news2Detail2: "ಹೈ-ಸ್ಪೀಡ್ ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕ",
    news2Detail3: "ಶೈಕ್ಷಣಿಕ ಸಾಫ್ಟ್‌ವೇರ್ ಮತ್ತು ಪ್ರೋಗ್ರಾಮಿಂಗ್ ಸಾಧನಗಳು",
    news2Detail4: "ಇಂಟರ್ಯಾಕ್ಟಿವ್ ವೈಟ್‌ಬೋರ್ಡುಗಳು ಮತ್ತು ಪ್ರೊಜೆಕ್ಟರ್‌ಗಳು",
    news2DetailsTitle: "ಲ್ಯಾಬ್ ವೈಶಿಷ್ಟ್ಯಗಳು:",
    news2Text: "ಅತ್ಯಾಧುನಿಕ ತಂತ್ರಜ್ಞಾನದೊಂದಿಗೆ ಕಂಪ್ಯೂಟರ್ ಲ್ಯಾಬ್ ಉದ್ಘಾಟಿಸಲಾಯಿತು, ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಆಧುನಿಕ ಡಿಜಿಟಲ್ ಕಲಿಕೆ ಉಪಕರಣಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    news2Title: "ಹೊಸ ಕಂಪ್ಯೂಟರ್ ಲ್ಯಾಬ್ ಉದ್ಘಾಟನೆ",
    news3Conclusion: "ನಮ್ಮ ವಿದ್ಯಾರ್ಥಿಗಳು ಅತ್ಯುತ್ತಮ ಸೃಷ್ಟಿಕರ ದಕ್ಷತೆ ಮತ್ತು ವಿಜ್ಞಾನ ಚಿಂತನೆ ತೋರಿಸಿದರು, ಜಿಲ್ಲಾ ಮಟ್ಟದಲ್ಲಿ ಚೈತನ್ಯ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಗೆ ಹೆಮ್ಮೆ ತಂದರು.",
    news3Date: "ಮಾರ್ಚ್ 5, 2026",
    news3Detail1: "ಪರಿಸರ ವಿಜ್ಞಾನ ವಿಭಾಗದಲ್ಲಿ ಪ್ರಥಮ ಬಹುಮಾನ",
    news3Detail2: "ಭೌತಶಾಸ್ತ್ರ ನವೀನ ಯೋಜನೆಗೆ ದ್ವಿತೀಯ ಬಹುಮಾನ",
    news3Detail3: "ರಸಾಯನಶಾಸ್ತ್ರ ಪ್ರಯೋಗಗಳಿಗೆ ಮೂರನೆ ಬಹುಮಾನ",
    news3Detail4: "ಸ್ಥಿರ ಶಕ್ತಿ ಯೋಜನೆಗೆ ವಿಶೇಷ ಉಲ್ಲೇಖ",
    news3DetailsTitle: "ಸಾಧನೆಗಳು:",
    news3Text: "ನಮ್ಮ ವಿದ್ಯಾರ್ಥಿಗಳು ಜಿಲ್ಲೆಯ ಮಟ್ಟದ ವಿಜ್ಞಾನ ಮೇಳದಲ್ಲಿ ಅನೇಕ ಬಹುಮಾನಗಳನ್ನು ತಂದರು, ನವೀನ ಪ್ರಾಜೆಕ್ಟ್‌ಗಳು ಮತ್ತು ಸಂಶೋಧನೆಯನ್ನು ಪ್ರದರ್ಶಿಸಿದರು.",
    news3Title: "ವಿಜ್ಞಾನ ಮೇಳ ಗೆದ್ದವರು",
    newsLabel: "ಇತ್ತೀಚಿನ ಸುದ್ದಿ",
    newsTitle: "ಶಾಲೆ ನವೀಕರಣಗಳು ಮತ್ತು ಕಾರ್ಯಕ್ರಮಗಳು",
    phone: "ದೂರವಾಣಿ:",
    readMore: "ಇನ್ನಷ್ಟು ಓದಿ →",
    studentWinsTitle: "2025-26 ವಿದ್ಯಾರ್ಥಿ ಗೆಲುವುಗಳು",
    tab1Label: "ಚೈತನ್ಯ ಶಿಕ್ಷಣದ ಜೀವನ",
    tab2Label: "ವಿಜ್ಞಾನ ಪ್ರಯೋಗಾಲಯ",
    tab3Label: "ಕ್ಲಾಸ್‌ರೂಮ್ ಕಲಿಕೆ",
    tab4Label: "ಅಧ್ಯಯನ ಸಂಪನ್ಮೂಲಗಳು",
    tab5Label: "ವಿದ್ಯಾರ್ಥಿ ಸಾಧನೆಗಳು",
    tab6Label: "ಕ್ರೀಡಾ ಚಟುವಟಿಕೆಗಳು",
    tab7Label: "ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು",
    testimonial1: "\"ನಮ್ಮ ಮಗನು ಪೂರ್ವ ಪ್ರಾಥಮಿಕದಿಂದಲೂ ಚೈತನ್ಯದಲ್ಲಿದ್ದು ಈಗ 8ನೇ ತರಗತಿಯಲ್ಲಿದ್ದಾನೆ. ಶಿಕ್ಷಕರು ಅತ್ಯಂತ ನಿರತರಾಗಿದ್ದು ಪ್ರತಿ ವಿದ್ಯಾರ್ಥಿಗೂ ವೈಯಕ್ತಿಕ ಗಮನವನ್ನು ನೀಡುತ್ತಾರೆ. ಪಠ್ಯಕ್ರಮವು ಚೆನ್ನಾಗಿ ರಚಿಸಲ್ಪಟ್ಟಿದ್ದು ಸಮಗ್ರ ಅಭಿವೃದ್ಧಿಯ ಮೇಲೆ ಕೇಂದ್ರೀಕರಿಸಿದೆ.\"",
    testimonial2: "\"ಚೈತನ್ಯ ಪ್ರತಿ ವಿದ್ಯಾರ್ಥಿಯೂ ಮೌಲ್ಯವಂತನೆಂದು ಭಾವಿಸುವ ಪೋಷಕ ಪರಿಸರವನ್ನು ಒದಗಿಸುತ್ತದೆ. ಇಂಗ್ಲೀಷ್ ಮಾಧ್ಯಮದ ವಿಧಾನವು ನನ್ನ ಮಗಳಿಗೆ ಎಲ್ಲಾ ವಿಷಯಗಳಲ್ಲಿ ಉತ್ಕೃಷ್ಟತೆ ಸಾಧಿಸಲು ಸಹಾಯ ಮಾಡಿದೆ. ಶಾಲೆಯ ಸಮಗ್ರ ಅಭಿವೃದ್ಧಿಯ ಮೇಲಿನ ಕೇಂದ್ರೀಕರಣವು ಶ್ಲಾಘನೀಯ.\"",
    testimonial3: "\"ಅಧ್ಯಯನದ ಜೊತೆಗೆ ಚರಿತ್ರ ನಿರ್ಮಾಣದ ಮೇಲಿನ ಶಾಲೆಯ ಒತ್ತು ನನ್ನ ಮಗನ ಶಕ್ತಿಯ ಅಭಿವೃದ್ಧಿಯಲ್ಲಿ ಗಮನಾರ್ಹ ವ್ಯತ್ಯಾಸವನ್ನು ಮಾಡಿದೆ. ಶಿಕ್ಷಕರು ಬೆಂಬಲಕಾರಿಯಾಗಿದ್ದು ಪ್ರತಿ ವಿದ್ಯಾರ್ಥಿಯ ಬೆಳವಣಿಗೆ ನಿಜವಾಗಿಯೂ ಕಾಳಜಿ ವಹಿಸುತ್ತಾರೆ.\"",
    testimonialsTitle: "ಸಾಕ್ಷ್ಯಗಳು",
    viewAllEvents: "ಎಲ್ಲಾ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ನೋಡಿ",
    whyChoosePoint1: "ಆಧುನಿಕ ಬೋಧನಾ ವಿಧಾನಗಳೊಂದಿಗೆ ರಾಜ್ಯ ಮಂಡಳಿ ಪಠ್ಯಕ್ರಮ",
    whyChoosePoint2: "ವೈಯಕ್ತಿಕ ಗಮನದೊಂದಿಗೆ ಅನುಭವಿ ಅಧ್ಯಾಪಕರು",
    whyChoosePoint3: "ಸ್ಮಾರ್ಟ್ ಕ್ಲಾಸ್‌ರೂಮ್‌ಗಳು ಮತ್ತು ಪ್ರಯೋಗಾಲಯಗಳನ್ನು ಒಳಗೊಂಡ ಅತ್ಯಾಧುನಿಕ ಸೌಲಭ್ಯಗಳು",
    whyChoosePoint4: "ಸಹ-ಪಠ್ಯಕ್ರಮ ಚಟುವಟಿಕೆಗಳು ಮತ್ತು ಕ್ರೀಡೆಗಳ ಮೇಲೆ ಒತ್ತು",
    whyChoosePoint5: "ಸುರಕ್ಷಿತ, ಸುರಕ್ಷಿತ ಮತ್ತು ಪೋಷಕ ಕಲಿಕೆ ಪರಿಸರ",
    whyChooseText: "ಚೈತನ್ಯ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆ 2003 ರಿಂದ ಮುದಲಗಿಯಲ್ಲಿ ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣದ ಆಧಾರಸ್ತಂಭವಾಗಿದೆ. ನಾವು ಸಮಗ್ರ ಅಭಿವೃದ್ಧಿಯನ್ನು, ವ್ಯಕ್ತಿತ್ವ ನಿರ್ಮಾಣವನ್ನು ಮತ್ತು ಶೈಕ್ಷಣಿಕ ವಿಜೃಂಭಣೆಯನ್ನು ಒದಗಿಸುತ್ತೇವೆ.",
    whyChooseTitle: "ಚೈತನ್ಯ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಯನ್ನು ಏಕೆ ಆಯ್ಕೆ ಮಾಡಬೇಕು?",
    win1Desc: "ಟೈಕ್ವಾಂಡೋ ಸ್ಪರ್ಧೆಗಳಲ್ಲಿ ಅತ್ಯುತ್ತಮ ಕಾರ್ಯಕ್ಷಮತೆ",
    win1Title: "ಟೈಕ್ವಾಂಡೋ ಚಾಂಪಿಯನ್‌ಗಳು",
    win2Desc: "ಸೈನ್ಸ್ ಒಲಿಂಪಿಯಾಡ್ ಫೌಂಡೇಶನ್ ಪರೀಕ್ಷೆ ಸಾಧಕರು",
    win2Title: "SOF ಪರೀಕ್ಷೆ ಗೆದ್ದವರು",
    win3Desc: "ರಾಜ್ಯ ಮಂಡಳಿ ಪರೀಕ್ಷೆಯ ಉನ್ನತ ಕಾರ್ಯಕ್ಷಮತೆಗಾರರು",
    win3Title: "ಅಧ್ಯಯನಿಕ ಉತ್ಕೃಷ್ಟತೆ",
  }
};

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

function setLanguage(lang) {
  document.querySelectorAll('[data-key]').forEach((element) => {
    const key = element.dataset.key;
    const value = translations[lang] && translations[lang][key];
    if (value !== undefined) {
      element.innerHTML = value;
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

setLanguage('en');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');

      // Trigger counter animation for stats section
      if (entry.target.id === 'stats') {
        animateCounters();
      }
    }
  });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Observe cards for staggered animation
document.querySelectorAll('.card, .program-card, .academic-card, .news-card, .testimonial-item, .image-box').forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.1}s`;
  observer.observe(card);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
  }
});

// Add loading animation
window.addEventListener('load', () => {
  const loadingSpinner = document.getElementById('loadingSpinner');
  if (loadingSpinner) {
    loadingSpinner.classList.add('hidden');
    setTimeout(() => {
      loadingSpinner.style.display = 'none';
    }, 300);
  }
  document.body.classList.add('loaded');
});

// Mouse tracking effects for interactive elements
document.addEventListener('DOMContentLoaded', () => {
  // Add mouse tracking to buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      button.style.setProperty('--mouse-x', `${x}px`);
      button.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // Add parallax effect to hero background
  const hero = document.querySelector('.hero');
  if (hero) {
    document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      hero.style.setProperty('--mouse-x', mouseX);
      hero.style.setProperty('--mouse-y', mouseY);
    });
  }

  // Enhanced scroll animations with stagger
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add staggered delay based on index
        const delay = index * 0.1;
        entry.target.style.animationDelay = `${delay}s`;
        entry.target.classList.add('animate-in');

        // Special handling for counters
        if (entry.target.closest('#stats') && !entry.target.classList.contains('counter-animated')) {
          setTimeout(() => {
            animateCounters();
            entry.target.classList.add('counter-animated');
          }, delay * 1000);
        }
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll('.academic-card, .program-card, .news-card, .testimonial-item, .image-box').forEach((element, index) => {
    observer.observe(element);
  });

  // Add floating animation to decorative elements
  const addFloatingAnimation = () => {
    const elements = document.querySelectorAll('.btn, .program-card, .news-card');
    elements.forEach((element, index) => {
      element.style.animationDelay = `${index * 0.5}s`;
    });
  };

  addFloatingAnimation();

  // Enhanced counter animation with easing
  function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      if (counter.classList.contains('animated')) return;

      counter.classList.add('animated');
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000; // 2 seconds
      const step = target / (duration / 16); // 60fps
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          counter.textContent = target.toLocaleString();
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(current).toLocaleString();
        }
      }, 16);
    });
  }

  // Scroll-triggered animations
  let scrollTimeout;
  const handleScroll = () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;

      // Parallax effect for hero
      const hero = document.querySelector('.hero');
      if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
      }

      // Show/hide scroll to top button
      const scrollButton = document.querySelector('.scroll-to-top');
      if (scrollButton) {
        if (scrolled > 300) {
          scrollButton.classList.add('visible');
        } else {
          scrollButton.classList.remove('visible');
        }
      }
    }, 16);
  };

  window.addEventListener('scroll', handleScroll);

  // Add click ripple effect to buttons
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      this.appendChild(ripple);

      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Enhanced form interactions
  const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');
  formInputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', () => {
      if (!input.value) {
        input.parentElement.classList.remove('focused');
      }
    });
  });

  // Add magnetic effect to certain elements
  const magneticElements = document.querySelectorAll('.btn-primary');
  magneticElements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * 0.1;
      const deltaY = (e.clientY - centerY) * 0.1;

      element.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.05)`;
    });

    element.addEventListener('mouseleave', () => {
      element.style.transform = '';
    });
  });
});

// Gallery image carousel

// Gallery image carousel
let currentImageIndex = 0;
const galleryImages = [
  'Classroom Learning',
  'Study Resources',
  'Student Achievements',
  'Sports Activities',
  'Cultural Events',
  'Science Lab'
];

function updateGalleryImage() {
  const imageBoxes = document.querySelectorAll('.image-box');
  imageBoxes.forEach((box, index) => {
    const imageIndex = (currentImageIndex + index) % galleryImages.length;
    box.textContent = galleryImages[imageIndex];
  });
}

// Auto-rotate gallery images
setInterval(() => {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  updateGalleryImage();
}, 3000);

// Initialize gallery
updateGalleryImage();

// Hero slider
let heroCurrentIndex = 0;
const heroSlides = document.querySelectorAll('.hero-slide');
const heroPrevBtn = document.querySelector('.hero-nav-btn.prev');
const heroNextBtn = document.querySelector('.hero-nav-btn.next');

function showHeroSlide(index) {
  if (!heroSlides.length) return;
  heroCurrentIndex = (index + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, slideIndex) => {
    slide.classList.toggle('active', slideIndex === heroCurrentIndex);
  });
}

if (heroPrevBtn && heroNextBtn) {
  heroPrevBtn.addEventListener('click', () => showHeroSlide(heroCurrentIndex - 1));
  heroNextBtn.addEventListener('click', () => showHeroSlide(heroCurrentIndex + 1));
  showHeroSlide(heroCurrentIndex);
  setInterval(() => showHeroSlide(heroCurrentIndex + 1), 8000);
}

// Testimonials slider
let testimonialIndex = 0;
const testimonialItems = document.querySelectorAll('.testimonial-item');
const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
const testimonialPrevBtn = document.querySelector('.testimonial-btn.prev');
const testimonialNextBtn = document.querySelector('.testimonial-btn.next');

function showTestimonial(index) {
  if (!testimonialItems.length) return;
  testimonialIndex = (index + testimonialItems.length) % testimonialItems.length;
  testimonialItems.forEach((item, itemIndex) => {
    item.classList.toggle('active', itemIndex === testimonialIndex);
  });
  testimonialDots.forEach((dot, dotIndex) => {
    dot.classList.toggle('active', dotIndex === testimonialIndex);
  });
}

if (testimonialPrevBtn && testimonialNextBtn) {
  testimonialPrevBtn.addEventListener('click', () => showTestimonial(testimonialIndex - 1));
  testimonialNextBtn.addEventListener('click', () => showTestimonial(testimonialIndex + 1));
}

testimonialDots.forEach((dot) => {
  dot.addEventListener('click', () => {
    const targetIndex = parseInt(dot.dataset.slide, 10);
    if (!Number.isNaN(targetIndex)) {
      showTestimonial(targetIndex);
    }
  });
});

showTestimonial(0);

// Lightbox support
const lightboxImages = Array.from(document.querySelectorAll('.gallery .image-grid img'));
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
let lightboxIndex = 0;

window.openLightbox = function(image) {
  if (!lightbox || !lightboxImages.length) return;
  lightboxIndex = lightboxImages.indexOf(image);
  if (lightboxIndex < 0) lightboxIndex = 0;
  lightboxImg.src = image.src;
  lightboxCaption.textContent = image.alt || '';
  lightbox.classList.add('open');
};

window.closeLightbox = function() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
};

window.changeImage = function(direction) {
  if (!lightbox || !lightboxImages.length) return;
  lightboxIndex = (lightboxIndex + direction + lightboxImages.length) % lightboxImages.length;
  const nextImage = lightboxImages[lightboxIndex];
  lightboxImg.src = nextImage.src;
  lightboxCaption.textContent = nextImage.alt || '';
};

// Scroll to top button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
