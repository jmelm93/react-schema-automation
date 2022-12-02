
const ImageObjectSchema = ({schemaData}) => {
    const schemaObj = {
        "@type": "ImageObject",
    };
    
    if (schemaData.attributes.url) schemaObj.url = schemaData.attributes.url;
    if (schemaData.attributes.width) schemaObj.width = schemaData.attributes.width;
    if (schemaData.attributes.height) schemaObj.height = schemaData.attributes.height;
    if (schemaData.attributes.alternativeText) schemaObj.caption = schemaData.attributes.alternativeText;
    
    return schemaObj;

}

export default ImageObjectSchema;