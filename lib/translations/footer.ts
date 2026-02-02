import { programs } from "./programs";
import { resources } from "./resources";


export const footer = {
    es: {
        ...programs.es,
        ...resources.es,
        tagline: "Redefiniendo la educacion en linea para la proxima generacion de lideres tecnologicos.",
        programs: "Programas",
        resources: "Recursos",
        contact: "Contacto",


        productManagement: "Gestion de Producto",
        scholarships: "Becas",
        studentBlog: "Blog Estudiantil",
        copyright: "© 2026 Nexus Instituto de Tecnologia. Todos los derechos reservados.",
        privacyPolicy: "Politica de Privacidad",
        termsOfService: "Terminos de Servicio",
        cookiePolicy: "Politica de Cookies",
    },
    en: {
        ...programs.en,
        ...resources.en,

        tagline: "Redefining online education for the next generation of tech leaders.",
        programs: "Programs",
        resources: "Resources",
        contact: "Contact",        

        productManagement: "Product Management",
        
        copyright: "© 2026 Institute of Technology Caribia. All rights reserved.",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        cookiePolicy: "Cookie Policy",
    }
}