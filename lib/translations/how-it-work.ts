import { Users, ScreenShare, MessageSquare, Award, Target, Lightbulb } from "lucide-react"

export const learningLoop = {
    es: {
        title: "Ruta de Aprendizaje",
        description: "Cada módulo sigue nuestra metodología de seis pasos, diseñada para asegurar la comprensión y el desarrollo práctico de habilidades.",
        methodology: [
            {
                icon: Lightbulb,
                title: "Introducción de Conceptos",
                description: "Clases breves y enfocadas presentan los conceptos clave en un contexto real, explicados por profesores en vivo.",
            },
            {
                icon: ScreenShare,
                title: "Aprendizaje Activo",
                description: "Aplica inmediatamente lo aprendido en ejercicios prácticos y discusiones guiadas durante las clases en vivo.",
            },
            {
                icon: MessageSquare,
                title: "Retroalimentación Directa",
                description: "Recibe comentarios personalizados de tus profesores y mentores mientras trabajas en tus tareas y proyectos.",
            },
            {
                icon: Users,
                title: "Colaboración con Compañeros",
                description: "Trabaja en equipo con otros estudiantes, resuelve desafíos juntos y aprende de la experiencia colectiva.",
            },
            {
                icon: Target,
                title: "Aplicación en Proyectos Reales",
                description: "Lleva lo aprendido a proyectos concretos que forman parte de tu portafolio académico y profesional.",
            },
            {
                icon: Award,
                title: "Revisión por Expertos",
                description: "Mentores de la industria y profesores revisan tu trabajo y te brindan orientación para mejorar y crecer profesionalmente.",
            },
        ],
    },
    en: {
        title: "Learning Loop",
        description: "Every module follows our six-step methodology designed to maximize understanding and practical skill development.",
        methodology: [
            {
                icon: Lightbulb,
                title: "Concept Introduction",
                description: "Short, focused live classes present key concepts in a real-world context, explained by professors.",
            },
            {
                icon: ScreenShare,
                title: "Active Learning",
                description: "Immediately apply what you learn through practical exercises and guided discussions in live sessions.",
            },
            {
                icon: MessageSquare,
                title: "Direct Feedback",
                description: "Receive personalized comments from professors and mentors as you work on assignments and projects.",
            },
            {
                icon: Users,
                title: "Peer Collaboration",
                description: "Work together with other students to solve challenges and learn from shared experiences.",
            },
            {
                icon: Target,
                title: "Real Project Application",
                description: "Apply your knowledge to concrete projects that become part of your academic and professional portfolio.",
            },
            {
                icon: Award,
                title: "Expert Review",
                description: "Industry mentors and professors review your work and provide guidance to help you grow professionally.",
            },
        ],
    },
};


export const howItWork = {
    es: {
        title: "Tu camino hacia el éxito",
        description: "Te guiamos a lo largo de tu aprendizaje, combinando clases en vivo, proyectos prácticos y acompañamiento continuo para potenciar tu crecimiento profesional.",
        phases: [
            {
                number: "01",
                title: "Aprende Haciendo",
                description: "Participa en clases en vivo con profesores y compañeros, resolviendo problemas reales y aplicando tus conocimientos en tiempo real.",
                image: "/images/step-learn.jpg",
                features: [
                    "Clases en vivo e interactivas",
                    "Aprendizaje práctico desde el primer día",
                    "Resolución de problemas reales",
                    "Retroalimentación directa de profesores",
                ],
            },
            {
                number: "02",
                title: "Construye Proyectos Reales",
                description: "Trabaja en equipo con otros estudiantes para desarrollar proyectos reales, aplicando lo aprendido en un entorno colaborativo y dinámico.",
                image: "/images/step-build.jpg",
                features: [
                    "Proyectos en equipo con compañeros",
                    "Colaboración y trabajo interdisciplinario",
                    "Retroalimentación de profesores y mentores",
                    "Resultados concretos para tu portafolio académico",
                ],
            },
            {
                number: "03",
                title: "Impulsa Tu Carrera",
                description: "Te preparamos para tu futuro profesional con orientación personalizada, ayudándote a construir tu perfil académico y profesional para dar el siguiente paso.",
                image: "/images/step-launch.jpg",
                features: [
                    "Asesoría en desarrollo profesional",
                    "Optimización de CV y perfil académico",
                    "Preparación para entrevistas y oportunidades",
                    "Guía para tu próximo paso profesional",
                ],
            },
        ],
        learningLoop: learningLoop.es
    },
    en: {
        title: "Your Path to Success",
        description: "We guide you through your learning journey, combining live classes, hands-on projects, and continuous support to boost your professional growth.",
        phases: [
            {
                number: "01",
                title: "Learn by Doing",
                description: "Join live classes with professors and peers, solving real-world problems and applying your knowledge in interactive sessions.",
                image: "/images/step-learn.jpg",
                features: [
                    "Live, interactive classes",
                    "Hands-on learning from day one",
                    "Solving real-world challenges",
                    "Direct feedback from professors",
                ],
            },
            {
                number: "02",
                title: "Build Real Projects",
                description: "Collaborate with fellow students to develop real projects, applying what you learn in a dynamic and supportive team environment.",
                image: "/images/step-build.jpg",
                features: [
                    "Team-based projects with peers",
                    "Collaboration and interdisciplinary work",
                    "Feedback from professors and mentors",
                    "Concrete deliverables for your academic portfolio",
                ],
            },
            {
                number: "03",
                title: "Launch Your Career",
                description: "We prepare you for your professional future with personalized guidance, helping you build your academic and professional profile for your next step.",
                image: "/images/step-launch.jpg",
                features: [
                    "Professional development guidance",
                    "CV and academic profile optimization",
                    "Interview and opportunity preparation",
                    "Support for your next career move",
                ],
            },
        ],
        learningLoop: learningLoop.en

    }
};



