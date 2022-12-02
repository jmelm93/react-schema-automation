// https://developers.google.com/search/docs/appearance/structured-data/faqpage

export default function FaqPageSchema({ schemaData }) {
    
    const returnedObject = {
        "mainEntity": [{
            // map over the questions and answers
            "mainEntity": schemaData.questions.map((question, index) => {
                return {
                    "@type": "Question",
                    "name": question.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": question.answer
                    }
                }
            })
        }]
    };

    return returnedObject;

}
