
export const programs = {
    es: {
        englishImmersive: {
            slug: "english-immersive",
            title: "English Immersive",
            name: "Inglés por Inmersión",
            tag: "ESL",
            tagColor: "bg-rose-500",
            duration: "1 Año",
            href: "/programs/english-immersive",
            image: "/images/program-english.jpg",
            description:
                "Desarrolla habilidades reales de comunicación en inglés a través de práctica inmersiva, instrucción guiada y constante interacción.",
            fullDescription:
                "Nuestro programa English Immersive está diseñado para estudiantes internacionales que desean alcanzar fluidez en inglés mientras se preparan para el éxito académico y profesional. A través de práctica diaria de conversación, talleres de escritura y actividades de inmersión cultural, desarrollarás la confianza y las habilidades necesarias para comunicarte efectivamente en cualquier entorno de habla inglesa.",
            highlights: [
                "Práctica diaria de conversación en vivo con hablantes nativos",
                "Retroalimentación personalizada en pronunciación y gramática",
                "Módulos de inglés para negocios y escritura académica",
                "Talleres y eventos de integración cultural",
                "Preparación para TOEFL/IELTS incluida",
                "Acceso a nuestros programas de tecnología al completar el curso"
            ],
            curriculum: [
                {
                    title: "Inglés Fundamental",
                    weeks: "Semanas 1-12",
                    topics: [
                        "Fundamentos de gramática",
                        "Ampliación de vocabulario",
                        "Conceptos básicos de pronunciación",
                        "Comprensión auditiva"
                    ]
                },
                {
                    title: "Fluidez Conversacional",
                    weeks: "Semanas 13-24",
                    topics: [
                        "Práctica diaria de conversación",
                        "Expresiones idiomáticas",
                        "Bases de oratoria",
                        "Discusión en grupo"
                    ]
                },
                {
                    title: "Inglés Académico",
                    weeks: "Semanas 25-36",
                    topics: [
                        "Escritura académica",
                        "Habilidades de investigación",
                        "Técnicas de presentación",
                        "Pensamiento crítico en inglés"
                    ]
                },
                {
                    title: "Inglés Profesional",
                    weeks: "Semanas 37-48",
                    topics: [
                        "Comunicación empresarial",
                        "Preparación para entrevistas",
                        "Habilidades de networking",
                        "Escritura profesional"
                    ]
                }
            ],
            mentors: [
                {
                    name: "Sarah Mitchell",
                    role: "Instructora Principal de Idiomas",
                    company: "Cambridge CELTA",
                    image: "/images/mentor-1.jpg"
                },
                {
                    name: "James Rodriguez",
                    role: "Coach de Escritura Académica",
                    company: "Oxford University",
                    image: "/images/mentor-2.jpg"
                }
            ],
            tuition: "$100.00",
            nextCohort: "15 de marzo, 2026",
            applicationDeadline: "28 de febrero, 2026",
            certification: "Certificado de Inglés por Inmersión"
        },

        softwareEngineering: {
            slug: "software-engineering",
            title: "Software Engineering",
            name: "Ingeniería de Software",
            tag: "SE",
            tagColor: "bg-blue-600",
            duration: "18 Meses",
            href: "/programs/software-engineering",
            image: "/images/program-software.jpg",
            description:
                "Aprende a diseñar y construir software escalable utilizando patrones de arquitectura del mundo real, tecnologías modernas y mejores prácticas de la industria.",
            fullDescription:
                "Nuestro programa de Ingeniería de Software transforma a aspirantes a desarrolladores en ingenieros listos para la industria. Dominarás el desarrollo full-stack, diseño de sistemas y arquitectura de software a través de proyectos prácticos y colaboraciones reales.",
            highlights: [
                "Desarrollo full-stack con React, Node.js y tecnologías cloud",
                "Fundamentos de diseño de sistemas y arquitectura",
                "Metodologías ágiles y colaboración en equipo",
                "Proyecto capstone con socios de la industria",
                "Mentoría 1 a 1 con ingenieros senior",
                "Preparación para entrevistas y coaching profesional"
            ],
            curriculum: [
                {
                    title: "Fundamentos de Programación",
                    weeks: "Semanas 1-12",
                    topics: [
                        "JavaScript/TypeScript",
                        "Estructuras de datos y algoritmos",
                        "Git y control de versiones",
                        "Fundamentos de testing"
                    ]
                },
                {
                    title: "Desarrollo Frontend",
                    weeks: "Semanas 13-24",
                    topics: [
                        "React y Next.js",
                        "Manejo de estado",
                        "Diseño responsivo",
                        "Optimización de rendimiento"
                    ]
                },
                {
                    title: "Backend y Bases de Datos",
                    weeks: "Semanas 25-40",
                    topics: [
                        "Node.js y Express",
                        "Bases de datos SQL y NoSQL",
                        "Diseño de APIs y GraphQL",
                        "Autenticación y seguridad"
                    ]
                },
                {
                    title: "Diseño de Sistemas y DevOps",
                    weeks: "Semanas 41-56",
                    topics: [
                        "Infraestructura en la nube (AWS/GCP)",
                        "Pipelines CI/CD",
                        "Arquitectura de microservicios",
                        "Patrones de escalabilidad"
                    ]
                },
                {
                    title: "Proyecto Capstone",
                    weeks: "Semanas 57-72",
                    topics: [
                        "Proyecto con socios de la industria",
                        "Trabajo en equipo ágil",
                        "Code reviews",
                        "Despliegue en producción"
                    ]
                }
            ],
            mentors: [
                {
                    name: "Michael Chen",
                    role: "Ingeniero Principal",
                    company: "Google",
                    image: "/images/mentor-1.jpg"
                },
                {
                    name: "Emily Park",
                    role: "Engineering Manager",
                    company: "Meta",
                    image: "/images/mentor-2.jpg"
                },
                {
                    name: "David Okonkwo",
                    role: "Staff Engineer",
                    company: "Stripe",
                    image: "/images/mentor-3.jpg"
                }
            ],
            tuition: "$18,500",
            nextCohort: "1 de abril, 2026",
            applicationDeadline: "15 de marzo, 2026",
            certification: "Diploma en Ingeniería de Software Nexus"
        },

        dataScience: {
            slug: "artificial-intelligence-data-science",
            title: "Artificial Intelligence & Data Science",
            name: "Ciencia de Datos e Inteligencia Artificial",
            tag: "AI/DS",
            tagColor: "bg-emerald-600",
            duration: "18 Meses",
            href: "/programs/artificial-intelligence-data-science",
            image: "/images/program-data.jpg",
            description:
                "Aprende a construir redes neuronales y gestionar ecosistemas de Big Data desde cero con proyectos prácticos.",
            fullDescription:
                "Sumérgete en el mundo de la inteligencia artificial y la ciencia de datos. Desde fundamentos de machine learning hasta arquitecturas avanzadas de deep learning, adquirirás habilidades para resolver problemas complejos e impulsar la innovación.",
            highlights: [
                "Dominio de Python, TensorFlow y PyTorch",
                "Fundamentos de machine learning y deep learning",
                "Procesamiento de Big Data con Spark y Hadoop",
                "Procesamiento de lenguaje natural y visión computacional",
                "Ética en IA y desarrollo responsable",
                "Proyecto capstone con datos reales"
            ],
            curriculum: [
                {
                    title: "Fundamentos de Datos",
                    weeks: "Semanas 1-12",
                    topics: [
                        "Python para ciencia de datos",
                        "Estadística y probabilidad",
                        "Visualización de datos",
                        "SQL y data wrangling"
                    ]
                },
                {
                    title: "Machine Learning",
                    weeks: "Semanas 13-28",
                    topics: [
                        "Aprendizaje supervisado",
                        "Aprendizaje no supervisado",
                        "Evaluación de modelos",
                        "Ingeniería de características"
                    ]
                },
                {
                    title: "Deep Learning",
                    weeks: "Semanas 29-44",
                    topics: [
                        "Arquitecturas de redes neuronales",
                        "CNNs para visión computacional",
                        "RNNs y transformers",
                        "Modelos generativos"
                    ]
                },
                {
                    title: "Big Data y MLOps",
                    weeks: "Semanas 45-60",
                    topics: [
                        "Computación distribuida",
                        "Pipelines de datos",
                        "Despliegue de modelos",
                        "Monitoreo y optimización"
                    ]
                },
                {
                    title: "Capstone y Especialización",
                    weeks: "Semanas 61-72",
                    topics: [
                        "Proyecto industrial",
                        "Paper de investigación",
                        "Desarrollo de portafolio",
                        "Preparación profesional"
                    ]
                }
            ],
            mentors: [
                {
                    name: "Dr. Aisha Patel",
                    role: "Científica de Investigación",
                    company: "DeepMind",
                    image: "/images/mentor-2.jpg"
                },
                {
                    name: "Robert Kim",
                    role: "Líder de Ingeniería ML",
                    company: "OpenAI",
                    image: "/images/mentor-1.jpg"
                },
                {
                    name: "Lisa Thompson",
                    role: "Directora de Ciencia de Datos",
                    company: "Netflix",
                    image: "/images/mentor-3.jpg"
                }
            ],
            tuition: "$22,500",
            nextCohort: "1 de abril, 2026",
            applicationDeadline: "15 de marzo, 2026",
            certification:
                "Licenciatura en Inteligencia Artificial y Ciencia de Datos"
        }
    },

    en: {
        englishImmersive: {
            slug: "english-immersive",
            title: "English Immersive",
            name: "English Immersive",
            tag: "ESL",
            tagColor: "bg-rose-500",
            duration: "1 Year",
            href: "/programs/english-immersive",
            image: "/images/program-english.jpg",
            description:
                "Develop real-world English communication skills through immersive practice, guided instruction, and constant interaction.",
            fullDescription:
                "Our English Immersive program is designed for international students who want to achieve fluency while preparing for academic and professional success. Through daily conversation practice, writing workshops, and cultural immersion activities, you’ll gain the confidence and skills needed to communicate effectively in any English-speaking environment.",
            highlights: [
                "Daily live conversation practice with native speakers",
                "Personalized feedback on pronunciation and grammar",
                "Business English and academic writing modules",
                "Cultural integration workshops and events",
                "TOEFL/IELTS preparation included",
                "Access to our technology programs upon completion"
            ],
            curriculum: [
                {
                    title: "Fundamental English",
                    weeks: "Weeks 1–12",
                    topics: [
                        "Grammar fundamentals",
                        "Vocabulary expansion",
                        "Pronunciation basics",
                        "Listening comprehension"
                    ]
                },
                {
                    title: "Conversational Fluency",
                    weeks: "Weeks 13–24",
                    topics: [
                        "Daily conversation practice",
                        "Idiomatic expressions",
                        "Public speaking foundations",
                        "Group discussions"
                    ]
                },
                {
                    title: "Academic English",
                    weeks: "Weeks 25–36",
                    topics: [
                        "Academic writing",
                        "Research skills",
                        "Presentation techniques",
                        "Critical thinking in English"
                    ]
                },
                {
                    title: "Professional English",
                    weeks: "Weeks 37–48",
                    topics: [
                        "Business communication",
                        "Interview preparation",
                        "Networking skills",
                        "Professional writing"
                    ]
                }
            ],
            mentors: [
                {
                    name: "Sarah Mitchell",
                    role: "Lead Language Instructor",
                    company: "Cambridge CELTA",
                    image: "/images/mentor-1.jpg"
                },
                {
                    name: "James Rodriguez",
                    role: "Academic Writing Coach",
                    company: "Oxford University",
                    image: "/images/mentor-2.jpg"
                }
            ],
            tuition: "$100.00",
            nextCohort: "March 15, 2026",
            applicationDeadline: "February 28, 2026",
            certification: "English Immersion Certificate"
        },

        softwareEngineering: {
            slug: "software-engineering",
            title: "Software Engineering",
            name: "Software Engineering",
            tag: "SE",
            tagColor: "bg-blue-600",
            duration: "18 Months",
            href: "/programs/software-engineering",
            image: "/images/program-software.jpg",
            description:
                "Learn to design and build scalable software using real-world architecture patterns, modern technologies, and industry best practices.",
            fullDescription:
                "Our Software Engineering program transforms aspiring developers into industry-ready engineers. You’ll master full-stack development, system design, and software architecture through hands-on projects and real-world collaboration.",
            highlights: [
                "Full-stack development with React, Node.js, and cloud technologies",
                "System design and architecture fundamentals",
                "Agile methodologies and team collaboration",
                "Industry partner capstone project",
                "1-on-1 mentorship with senior engineers",
                "Interview preparation and career coaching"
            ],
            curriculum: [
                {
                    title: "Programming Fundamentals",
                    weeks: "Weeks 1–12",
                    topics: [
                        "JavaScript / TypeScript",
                        "Data structures and algorithms",
                        "Git and version control",
                        "Testing fundamentals"
                    ]
                },
                {
                    title: "Frontend Development",
                    weeks: "Weeks 13–24",
                    topics: [
                        "React and Next.js",
                        "State management",
                        "Responsive design",
                        "Performance optimization"
                    ]
                },
                {
                    title: "Backend & Databases",
                    weeks: "Weeks 25–40",
                    topics: [
                        "Node.js and Express",
                        "SQL and NoSQL databases",
                        "API design and GraphQL",
                        "Authentication and security"
                    ]
                },
                {
                    title: "System Design & DevOps",
                    weeks: "Weeks 41–56",
                    topics: [
                        "Cloud infrastructure (AWS/GCP)",
                        "CI/CD pipelines",
                        "Microservices architecture",
                        "Scalability patterns"
                    ]
                },
                {
                    title: "Capstone Project",
                    weeks: "Weeks 57–72",
                    topics: [
                        "Industry partner project",
                        "Agile team collaboration",
                        "Code reviews",
                        "Production deployment"
                    ]
                }
            ],
            mentors: [
                {
                    name: "Michael Chen",
                    role: "Principal Engineer",
                    company: "Google",
                    image: "/images/mentor-1.jpg"
                },
                {
                    name: "Emily Park",
                    role: "Engineering Manager",
                    company: "Meta",
                    image: "/images/mentor-2.jpg"
                },
                {
                    name: "David Okonkwo",
                    role: "Staff Engineer",
                    company: "Stripe",
                    image: "/images/mentor-3.jpg"
                }
            ],
            tuition: "$18,500",
            nextCohort: "April 1, 2026",
            applicationDeadline: "March 15, 2026",
            certification: "Nexus Software Engineering Diploma"
        },

        dataScience: {
            slug: "artificial-intelligence-data-science",
            title: "Artificial Intelligence & Data Science",
            name: "Artificial Intelligence & Data Science",
            tag: "AI/DS",
            tagColor: "bg-emerald-600",
            duration: "18 Months",
            href: "/programs/artificial-intelligence-data-science",
            image: "/images/program-data.jpg",
            description:
                "Learn to build neural networks and manage Big Data ecosystems from scratch with hands-on projects.",
            fullDescription:
                "Dive deep into artificial intelligence and data science. From machine learning fundamentals to advanced deep learning architectures, you’ll gain the skills to solve complex problems and drive innovation.",
            highlights: [
                "Python, TensorFlow, and PyTorch mastery",
                "Machine learning and deep learning fundamentals",
                "Big data processing with Spark and Hadoop",
                "Natural language processing and computer vision",
                "Ethics in AI and responsible development",
                "Industry capstone with real-world data"
            ],
            curriculum: [
                {
                    title: "Data Foundations",
                    weeks: "Weeks 1–12",
                    topics: [
                        "Python for data science",
                        "Statistics and probability",
                        "Data visualization",
                        "SQL and data wrangling"
                    ]
                },
                {
                    title: "Machine Learning",
                    weeks: "Weeks 13–28",
                    topics: [
                        "Supervised learning",
                        "Unsupervised learning",
                        "Model evaluation",
                        "Feature engineering"
                    ]
                },
                {
                    title: "Deep Learning",
                    weeks: "Weeks 29–44",
                    topics: [
                        "Neural network architectures",
                        "CNNs for computer vision",
                        "RNNs and transformers",
                        "Generative AI models"
                    ]
                },
                {
                    title: "Big Data & MLOps",
                    weeks: "Weeks 45–60",
                    topics: [
                        "Distributed computing",
                        "Data pipelines",
                        "Model deployment",
                        "Monitoring and optimization"
                    ]
                },
                {
                    title: "Capstone & Specialization",
                    weeks: "Weeks 61–72",
                    topics: [
                        "Industry project",
                        "Research paper",
                        "Portfolio development",
                        "Career preparation"
                    ]
                }
            ],
            mentors: [
                {
                    name: "Dr. Aisha Patel",
                    role: "Research Scientist",
                    company: "DeepMind",
                    image: "/images/mentor-2.jpg"
                },
                {
                    name: "Robert Kim",
                    role: "ML Engineering Lead",
                    company: "OpenAI",
                    image: "/images/mentor-1.jpg"
                },
                {
                    name: "Lisa Thompson",
                    role: "Data Science Director",
                    company: "Netflix",
                    image: "/images/mentor-3.jpg"
                }
            ],
            tuition: "$22,500",
            nextCohort: "April 1, 2026",
            applicationDeadline: "March 15, 2026",
            certification: "BSc in Artificial Intelligence & Data Science"
        }
    }
}
