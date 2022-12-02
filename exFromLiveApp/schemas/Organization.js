const OrganizationSchema = ({schemaData}) => {
    const schemaObj = {
        "@type": "Organization",
    };
    
    if (schemaData.name) schemaObj.name = schemaData.name;
    if (schemaData.url) schemaObj.url = schemaData.url;
    if (schemaData.sameAs) schemaObj.sameAs = schemaData.sameAs;
    if (schemaData.description) schemaObj.description = schemaData.description;
    // different image types from different sources (both should not exist at the same time)
    if (schemaData.image) schemaObj.image = schemaData.image;
    if (schemaData.imageUrl) schemaObj.image = schemaData.imageUrl;

    return schemaObj;

}


export default OrganizationSchema;