import JsonSchemaWrapper from "components/schema/index";
import {mappedVariables} from "components/schema/utils/mappedVariables";

export default function ArticleSchema({ schemaData }) {
    
    const schemaObj = {
        "@type": "Article",
        publisher: JsonSchemaWrapper({ schemaType: "Organization", require: "noWrapper" }), 
    };

    if (schemaData.headline) schemaObj.headline = schemaData.headline;
    if (schemaData.datePublished) schemaObj.datePublished = schemaData.datePublished;
    if (schemaData.dateModified) schemaObj.dateModified = schemaData.dateModified;
    if (schemaData.description) schemaObj.description = schemaData.description;
    if (schemaData.author) schemaObj.author = JsonSchemaWrapper(
        { 
            schemaType: "Person",  
            schemaData: schemaData.author, 
            require: "noWrapper" 
        }
    );
    if (schemaData.image) mappedVariables(
        "image", 
        "image", 
        "ImageObject", 
        schemaObj, 
        schemaData, 
        "array"
    );

    return schemaObj;

}
