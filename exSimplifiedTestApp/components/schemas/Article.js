// https://developers.google.com/search/docs/appearance/structured-data/article

export default function ArticleSchema({ schemaData }) {

    const returnedObject = {
        "headline": schemaData.title,
        "image": schemaData.images,
        "datePublished": schemaData.datePublished,
        "dateModified": schemaData.dateModified,
        "author": {
            "@type": "Person",
            "name": schemaData.author,
            "url": schemaData.authorUrl
        }
    };

    return returnedObject;

}
