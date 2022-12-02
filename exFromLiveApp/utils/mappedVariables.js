import JsonSchemaWrapper from "components/schema/index";

export const mappedVariables = (
    cmsVariableName, 
    schemaVariableName, 
    schemaType, 
    schemaBuilderObject, 
    passedInSchemaObject, 
    passedInObjectType="array",
) => {
    if(passedInObjectType === "array") {
        if (passedInSchemaObject[cmsVariableName]  && passedInSchemaObject[cmsVariableName].length>0) 
            schemaBuilderObject[schemaVariableName] = passedInSchemaObject[cmsVariableName].map((item) => {
                return JsonSchemaWrapper(
                    {
                        schemaType: schemaType, 
                        schemaData: item, 
                        require: "noWrapper" 
                    }
                )
            }
        )
    }
    if(passedInObjectType === "object") {
        if (passedInSchemaObject.attributes[cmsVariableName] && passedInSchemaObject.attributes[cmsVariableName].length>0) 
            schemaBuilderObject[schemaVariableName] = passedInSchemaObject.attributes[cmsVariableName].map((item) => {
                return JsonSchemaWrapper(
                    {
                        schemaType:schemaType, 
                        schemaData: item, 
                        require: "noWrapper" 
                    }
                );
            }
        );
    }
}