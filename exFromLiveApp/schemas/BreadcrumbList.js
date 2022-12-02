const BreadcrumbListSchema = ({schemaData}) => {

    const schemaObj = {
        "@type": "BreadcrumbList",
        "itemListElement": []
    };

    schemaData.map((item, index) => {
        schemaObj.itemListElement.push({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.href
        })
    })

    return schemaObj;

}

export default BreadcrumbListSchema;