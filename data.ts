import icon1 from "./public/images/c1.png";

export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  image: string;
  salary: string;
  description: string;
  requirements: string;
};

export type JobCategory = {
  id: number;
  name: string;
  description: string;
  icon: string;
  jobs: Job[];
  open: number;
};

export const JobData: JobCategory[] = [
  {
    id: 1,
    name: "Technology",
    description: "Explore job opportunities in the tech industry.",
    icon: icon1,
    open: 25,
    jobs: [
      {
        id: 101,
        title: "Software Engineer",
        company: "Tech Solutions Inc.",
        location: "San Francisco, CA",
        image: "/public/images/software-engineer.png",
        salary: "80k - 100k",
        description:
          "Design and develop software applications using various programming languages.",
        requirements:
          "Bachelor's degree in Computer Science or related field, proficiency in Java, Python, or C++.",
      },
      {
        id: 102,
        title: "Data Scientist",
        company: "Data Insights Co.",
        location: "New York, NY",
        image: "/public/images/data-scientist.png",
        salary: "90k - 110k",
        description:
          "Analyze complex data sets to uncover insights and drive decision-making.",
        requirements:
          "Master's degree in Statistics, Mathematics, or Computer Science, experience with machine learning algorithms.",
      },
      {
        id: 103,
        title: "Web Developer",
        company: "Web Solutions Co.",
        location: "Seattle, WA",
        image: "/public/images/web-developer.png",
        salary: "70k - 90k",
        description:
          "Build and maintain websites and web applications using HTML, CSS, and JavaScript.",
        requirements:
          "Bachelor's degree in Computer Science or related field, proficiency in front-end technologies like React or Angular.",
      },
      {
        id: 104,
        title: "UX/UI Designer",
        company: "Design Innovations Inc.",
        location: "Los Angeles, CA",
        image: "/public/images/ux-ui-designer.png",
        salary: "75k - 95k",
        description:
          "Create user-friendly interfaces and designs for digital products and applications.",
        requirements:
          "Bachelor's degree in Design or related field, proficiency in design tools like Adobe XD or Sketch.",
      },
      {
        id: 105,
        title: "Network Engineer",
        company: "Network Solutions Ltd.",
        location: "Chicago, IL",
        image: "/public/images/network-engineer.png",
        salary: "85k - 110k",
        description:
          "Design, implement, and manage computer networks to ensure smooth communication and connectivity.",
        requirements:
          "Bachelor's degree in Network Engineering or related field, experience with network protocols and hardware.",
      },
      {
        id: 106,
        title: "Product Manager",
        company: "Product Innovations Co.",
        location: "San Jose, CA",
        image: "/public/images/product-manager.png",
        salary: "100k - 130k",
        description:
          "Lead the development and launch of new products by collaborating with cross-functional teams.",
        requirements:
          "Bachelor's degree in Business, Engineering, or related field, experience in product management.",
      },
    ],
  },
  {
    id: 2,
    name: "Healthcare",
    description: "Find rewarding careers in the healthcare sector.",
    icon: icon1,
    open: 233,
    jobs: [
      {
        id: 201,
        title: "Registered Nurse",
        company: "Healthcare Services LLC",
        location: "Chicago, IL",
        image: "/public/images/registered-nurse.png",
        salary: "60k - 80k",
        description:
          "Provide patient care, administer medications, and assist in medical procedures.",
        requirements: "Bachelor of Science in Nursing (BSN), valid RN license.",
      },
      {
        id: 202,
        title: "Medical Doctor",
        company: "General Hospital",
        location: "Los Angeles, CA",
        image: "/public/images/medical-doctor.png",
        salary: "150k - 200k",
        description:
          "Diagnose and treat illnesses, injuries, and other medical conditions.",
        requirements:
          "Doctor of Medicine (MD) or Doctor of Osteopathic Medicine (DO) degree, valid medical license.",
      },
      {
        id: 203,
        title: "Licensed Practical Nurse",
        company: "Care Providers Inc.",
        location: "New York, NY",
        image: "/public/images/licensed-practical-nurse.png",
        salary: "40k - 60k",
        description:
          "Provide basic nursing care under the supervision of registered nurses or physicians.",
        requirements:
          "Completion of a state-approved LPN program, valid LPN license.",
      },
      {
        id: 204,
        title: "Medical Assistant",
        company: "Healthcare Clinics Ltd.",
        location: "Houston, TX",
        image: "/public/images/medical-assistant.png",
        salary: "30k - 40k",
        description:
          "Assist healthcare professionals in medical offices or clinics with administrative and clinical tasks.",
        requirements:
          "Completion of a medical assistant program, certification is preferred.",
      },
      {
        id: 205,
        title: "Pharmacist",
        company: "Pharmacy Solutions Inc.",
        location: "Philadelphia, PA",
        image: "/public/images/pharmacist.png",
        salary: "90k - 120k",
        description:
          "Dispense medications, provide drug information, and ensure safe medication use.",
        requirements:
          "Doctor of Pharmacy (PharmD) degree, valid pharmacist license.",
      },
      {
        id: 206,
        title: "Physical Therapist",
        company: "Rehabilitation Center",
        location: "Miami, FL",
        image: "/public/images/physical-therapist.png",
        salary: "70k - 90k",
        description:
          "Assess and treat patients with physical injuries or disabilities to improve movement and function.",
        requirements:
          "Doctor of Physical Therapy (DPT) degree, valid physical therapy license.",
      },
    ],
  },
  {
    id: 3,
    name: "Sales",
    description: "Exciting opportunities in the sales field.",
    icon: icon1,
    open: 313,
    jobs: [
      {
        id: 301,
        title: "Sales Representative",
        company: "Sales Solutions Inc.",
        location: "New York, NY",
        image: "/public/images/sales-representative.png",
        salary: "50k - 70k",
        description:
          "Identify and pursue new sales leads, build relationships with clients, and close deals.",
        requirements:
          "Bachelor's degree in Business Administration or related field, strong communication and negotiation skills.",
      },
      {
        id: 302,
        title: "Sales Manager",
        company: "Global Sales Corp.",
        location: "Chicago, IL",
        image: "/public/images/sales-manager.png",
        salary: "80k - 120k",
        description:
          "Lead and motivate sales teams, develop sales strategies, and oversee sales operations.",
        requirements:
          "Bachelor's degree in Marketing, Business Administration, or related field, proven experience in sales management.",
      },
    ],
  },
  {
    id: 4,
    name: "Marketing",
    description: "Explore dynamic careers in the marketing industry.",
    icon: icon1,
    open: 63,
    jobs: [
      {
        id: 401,
        title: "Marketing Coordinator",
        company: "Marketing Solutions Agency",
        location: "Los Angeles, CA",
        image: "/public/images/marketing-coordinator.png",
        salary: "45k - 60k",
        description:
          "Assist in the development and implementation of marketing campaigns, analyze market trends, and coordinate promotional activities.",
        requirements:
          "Bachelor's degree in Marketing, Communications, or related field, experience with marketing tools and platforms.",
      },
      {
        id: 402,
        title: "Digital Marketing Specialist",
        company: "Tech Marketing Group",
        location: "San Francisco, CA",
        image: "/public/images/digital-marketing-specialist.png",
        salary: "60k - 80k",
        description:
          "Manage digital marketing campaigns, optimize online presence, and analyze digital marketing performance.",
        requirements:
          "Bachelor's degree in Marketing, Advertising, or related field, proficiency in digital marketing tools and platforms.",
      },
    ],
  },
  {
    id: 5,
    name: "Front Desk",
    description:
      "Welcome guests, handle reservations, and provide excellent customer service.",
    icon: icon1,
    open: 113,
    jobs: [
      {
        id: 101,
        title: "Front Desk Agent",
        company: "Hospitality Suites",
        location: "Los Angeles, CA",
        image: "./public/images/front-desk-agent.png",
        salary: "$30,000 - $40,000",
        description:
          "Check-in and check-out guests, handle inquiries, and assist with various administrative tasks.",
        requirements:
          "High school diploma or equivalent, customer service experience preferred.",
      },
      {
        id: 102,
        title: "Front Office Manager",
        company: "Luxury Hotels Inc.",
        location: "Miami, FL",
        image: "./public/images/front-office-manager.png",
        salary: "$50,000 - $60,000",
        description:
          "Oversee front desk operations, manage staff, and ensure smooth guest experiences.",
        requirements:
          "Bachelor's degree in Hospitality Management or related field, previous front desk experience.",
      },
    ],
  },
  {
    id: 6,
    name: "Housekeeping",
    description:
      "Maintain cleanliness and order in guest rooms and common areas.",
    icon: icon1,
    open: 132,
    jobs: [
      {
        id: 201,
        title: "Housekeeper",
        company: "Clean Sweep Resorts",
        location: "Orlando, FL",
        image: "./public/images/housekeeper.png",
        salary: "$25,000 - $30,000",
        description:
          "Clean and tidy guest rooms, replenish amenities, and ensure high standards of cleanliness.",
        requirements: "Previous housekeeping experience preferred.",
      },
      {
        id: 202,
        title: "Housekeeping Supervisor",
        company: "Grand Hospitality Group",
        location: "Las Vegas, NV",
        image: "./public/images/housekeeping-supervisor.png",
        salary: "$35,000 - $45,000",
        description:
          "Supervise housekeeping staff, assign tasks, and maintain inventory of supplies.",
        requirements: "Previous housekeeping experience, leadership skills.",
      },
    ],
  },
  {
    id: 7,
    name: "Customer Service",
    description:
      "Opportunities to provide excellent customer support and assistance.",
    icon: icon1,
    open: 43,
    jobs: [
      {
        id: 401,
        title: "Customer Service Representative",
        company: "Service First Corporation",
        location: "Chicago, IL",
        image: "./public/images/customer-service-representative.png",
        salary: "$35,000 - $45,000",
        description:
          "Assist customers with inquiries, resolve issues, and ensure high levels of satisfaction.",
        requirements:
          "Strong communication skills, ability to multitask, previous customer service experience preferred.",
      },
      {
        id: 402,
        title: "Customer Support Specialist",
        company: "Supportive Solutions Ltd.",
        location: "Seattle, WA",
        image: "./public/images/customer-support-specialist.png",
        salary: "$40,000 - $50,000",
        description:
          "Provide technical support, troubleshoot problems, and offer solutions to customers.",
        requirements:
          "Technical background, excellent problem-solving skills, previous customer support experience.",
      },
    ],
  },
  {
    id: 8,
    name: "Engineering",
    description: "Exciting opportunities in the field of engineering.",
    icon: icon1,
    open: 14,
    jobs: [
      {
        id: 501,
        title: "Software Engineer",
        company: "Tech Innovations LLC",
        location: "San Francisco, CA",
        image: "./public/images/software-engineer.png",
        salary: "$80,000 - $120,000",
        description:
          "Design, develop, and maintain software applications, systems, and solutions.",
        requirements:
          "Bachelor's degree in Computer Science or related field, proficiency in programming languages such as Java, Python, or JavaScript.",
      },
      {
        id: 502,
        title: "Mechanical Engineer",
        company: "Precision Engineering Corp.",
        location: "Houston, TX",
        image: "./public/images/mechanical-engineer.png",
        salary: "$70,000 - $100,000",
        description:
          "Design and analyze mechanical systems and components, create prototypes, and oversee manufacturing processes.",
        requirements:
          "Bachelor's degree in Mechanical Engineering or related field, proficiency in CAD software.",
      },
    ],
  },
  {
    id: 9,
    name: "Education and Teaching",
    description:
      "Opportunities to make a difference through teaching and education.",
    icon: icon1,
    open: 13,
    jobs: [
      {
        id: 601,
        title: "Elementary School Teacher",
        company: "Sunshine Elementary School",
        location: "Austin, TX",
        image: "./public/images/elementary-teacher.png",
        salary: "$45,000 - $60,000",
        description:
          "Plan and deliver engaging lessons, assess student progress, and create a positive learning environment.",
        requirements:
          "Bachelor's degree in Education, teaching certification, strong communication and organizational skills.",
      },
      {
        id: 602,
        title: "High School Math Teacher",
        company: "Bright Minds High School",
        location: "New York, NY",
        image: "./public/images/high-school-math-teacher.png",
        salary: "$50,000 - $70,000",
        description:
          "Teach math concepts to high school students, differentiate instruction, and provide support to students as needed.",
        requirements:
          "Bachelor's degree in Mathematics or Education, teaching certification, subject-specific knowledge.",
      },
    ],
  },
  {
    id: 10,
    name: "Legal",
    icon: icon1,
    open: 70,
    jobs: [
      {
        id: 701,
        title: "Associate Attorney",
        company: "Smith & Associates Law Firm",
        location: "Washington, D.C.",
        image: "./public/images/associate-attorney.png",
        salary: "$80,000 - $100,000",
        description:
          "Assist with legal research, draft legal documents, and represent clients in court proceedings.",
        requirements:
          "Juris Doctor (J.D.) degree, admission to the bar, strong analytical and communication skills.",
      },
      {
        id: 702,
        title: "Legal Assistant",
        company: "Legal Support Services Inc.",
        location: "Boston, MA",
        image: "./public/images/legal-assistant.png",
        salary: "$40,000 - $50,000",
        description:
          "Provide administrative support to legal professionals, organize files, and prepare documents.",
        requirements:
          "Associate degree in Paralegal Studies or related field, attention to detail, proficiency in legal software.",
      },
    ],
  },
];
