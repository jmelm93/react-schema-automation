import Head from 'next/head'
import { jsonLdScriptProps } from "react-schemaorg";
import articles from '../data/articles.json'
import JsonSchemaWrapper from '../components/JsonSchemaWrapper'

export default function Home() {

  const article = articles[0];

  // create 1 schema object for each type in article.schemaTypes
  const schemaObjects = article.schemaTypes.map((type) => {
    return JsonSchemaWrapper({ type, schemaData: article });
  });

  return (
    <div className="container">
      {/* PAGE HEAD */}
      <Head>
        <title>{article.title}</title>
        <link rel="icon" href="/favicon.ico" />
        
        {schemaObjects ? (
          // map to create a script tag for each schema object
          schemaObjects.map((schemaObject, index) => {
            return (
              <script
                key={index}
                type="application/ld+json"
                {...jsonLdScriptProps(schemaObject)}
              />
            );
          }
        )) : null}
      
      </Head>

      <main>
        {/* TOP PAGE */}
        <div className="grid">
          <div className="card">
            <h1>{article.h1}</h1>
            <p>{article.short_description}</p>
          </div>
        </div>

        {/* PAGE CONTENT */}
        <div className="grid">
          <div className="card">
            <p>{article.content}</p>
          </div>
        </div>
              
        {/* DATE MODIFIED */}
        <div>
          <p>Last updated: {article.dateModified}</p>
        </div>

        {/* AUTHOR */}
        <div className="author">
          <div className="author-name">
            {article.author}
          </div>
        </div>
        
      </main>
    </div>
  )
}
