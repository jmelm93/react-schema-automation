import ArticleSchema from "./schemas/Article";
import FaqPageSchema from "./schemas/FaqPage";

export default function JsonSchemaWrapper({ type, schemaData }) {

    // create object based on type
    let schemaObject = null;
    if (type === "Article") {
        schemaObject = ArticleSchema({ schemaData });
    } 
    if (type === "FAQPage") {
        schemaObject = FaqPageSchema({ schemaData });
    }

    // return final schema object
    return { "@context": "https://schema.org", "@type": type, ...schemaObject }; 

}

