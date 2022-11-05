import { jsonLdScriptProps } from "react-schemaorg";
import ArticleSchema from "./schemas/Article";
import FaqPageSchema from "./schemas/FaqPage";

export default function JsonSchemaWrapper({ type, schemaData }) {

    // create object based on type
    let schemaObject = null;
    if (type === "Article") {
        schemaObject = ArticleSchema({ schemaData });
    } 
    if (type === "FAQPage") {
        return FaqPageSchema({ schemaData });
    }

    let jsonLd = null;
    if (schemaObject) {
        jsonLd = {
            "@context": "https://schema.org",
            "@type": type,
            ...schemaObject
        };
    }

    console.log('jsonLd: ', jsonLd);
    return jsonLd

}

