import { formatISO } from "date-fns";

// https://developers.google.com/search/docs/appearance/structured-data/article

export default function ArticleSchema({ schemaData }) {

    const returnedObject = {
        "headline": schemaData.title,
        "image": schemaData.imageList,
        "datePublished": formatISO(schemaData.date),
        "dateModified": formatISO(schemaData.date),
        "author": {
            "@type": "Person",
            "name": schemaData.author,
            "url": schemaData.authorUrl
        }
    };

    return returnedObject;

}
