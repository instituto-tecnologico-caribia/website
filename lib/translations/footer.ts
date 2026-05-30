import { programs } from "./programs";
import { resources } from "./resources";


export const footer = {
    es: {
        ...programs.es,
        ...resources.es,
        tagline: "Redefiniendo la educación en línea para la próxima generación de líderes tecnológicos.",
        programs: "Programas",
        resources: "Recursos",
        contact: "Contacto",

        productManagement: "Gestión de Producto",
        scholarships: "Becas",
        studentBlog: "Blog Estudiantil",
        copyright: "© 2026 Institute of Technology Caribia. All rights reserved.",
        privacyPolicy: "Política de Privacidad",
        termsOfService: "Términos de Servicio",
        cookiePolicy: "Política de Cookies",
    },
    en: {
        ...programs.en,
        ...resources.en,

        tagline: "Redefining online education for the next generation of tech leaders.",
        programs: "Programs",
        resources: "Resources",
        contact: "Contact",

        productManagement: "Product Management",

        copyright: "© 2026 Institute of Technology Caribia.",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        cookiePolicy: "Cookie Policy",
    }
}