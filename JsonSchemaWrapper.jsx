import { jsonLdScriptProps } from "react-schemaorg";
import ArticleSchema from "./schemas/Article";
import FaqPageSchema from "./schemas/FaqPage";

export default function JsonSchemaWrapper({ type, schemaData }) {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": type,
        ...schemaObject
    };

    // create object based on type
    let schemaObject = null;
    if (type === "Article") {
        schemaObject = <ArticleSchema schemaData={schemaData} />;
    } 
    if (type === "FAQPage") {
        return <FaqPageSchema schemaData={schemaData} />;
    }

    return (
        <script
            {...jsonLdScriptProps(jsonLd)}
        />
    );
}