import {mappedVariables} from "components/schema/utils/mappedVariables";

const PersonSchema = ({schemaData}) => {
    const schemaObj = {
        "@type": "Person",
    };

    if (schemaData.attributes.username) schemaObj.name = schemaData.attributes.username;
    if (schemaData.attributes.url) schemaObj.url = schemaData.attributes.url;
    if (schemaData.attributes.bio) schemaObj.description = schemaData.attributes.bio;
    if (schemaData.attributes.jobTitle) schemaObj.jobTitle = schemaData.attributes.jobTitle;
    if (schemaData.attributes.social) schemaObj.sameAs = schemaData.attributes.social.map((social) => social.link);
    if(schemaData.attributes.alumniOf) mappedVariables("alumniOf", "alumniOf", "Organization", schemaObj, schemaData, "object");
    if(schemaData.attributes.worksFor) mappedVariables("worksFor", "worksFor", "Organization", schemaObj, schemaData, "object");
    if(schemaData.attributes.affiliation) mappedVariables("affiliation", "affiliation", "Organization", schemaObj, schemaData, "object");

    return schemaObj;

}

export default PersonSchema;