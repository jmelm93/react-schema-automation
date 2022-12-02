import ArticleSchema from "components/schema/schemas/Article";
// import FaqPageSchema from "components/schema/schemas/FaqPage";
import PersonSchema from "components/schema/schemas/Person";
import ImageObjectSchema from "components/schema/schemas/ImageObject";
import OrganizationSchema from "components/schema/schemas/Organization";
import BreadcrumbListSchema from "components/schema/schemas/BreadcrumbList";

import orgSchema from "components/schema/org.json";

export default function JsonSchemaWrapper({ schemaType, schemaData=orgSchema, require="fullWrapper" }) {    

    // create object based on type
    let schemaObject = null;
    
    if (schemaType === "Article") {
        schemaObject = ArticleSchema({ schemaData });
    } 
    // if (schemaType === "FAQPage") {
    //     schemaObject = FaqPageSchema({ schemaData });
    // }
    if (schemaType === "Person") {
        schemaObject = PersonSchema({ schemaData });
    }
    if (schemaType === "ImageObject") {
        schemaObject = ImageObjectSchema({ schemaData });
    }
    if (schemaType === "Organization") {
        schemaObject = OrganizationSchema({ schemaData });
    }
    if (schemaType === "BreadcrumbList") {
        schemaObject = BreadcrumbListSchema({ schemaData });
    }


    if (require === "fullWrapper") {
        return { "@context": "https://schema.org", ...schemaObject }; 
    } 
    if (require === "noWrapper") {
        return schemaObject;
    }
}

