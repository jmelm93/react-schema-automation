### Schema Markup Testing w/ Next.js

This is a very basic app meant to test automating Schema markup w/ Next.js. 

### App Structure
```bash
< PROJECT ROOT >  
   |  
   |-- components/  
   |    |-- schemas/                        # Directory: Schema Templates  
   |    |       |-- Article.js              # Template: Article Schema Type 
   |    |       |-- FAQPage.js              # Template: FAQPage Schema Type 
   |    |-- JsonSchemaWrapper.js            # Parent Wrapper for the Schema Object
   |  
   |-- data/                                # Directory: Mock Data for Testing
   |    |-- articles.json                   # Test Json Object  
   |  
   |-- pages/                                # Directory: Pages for App
   |    |-- index.js                         # Page: '/' - Test Page  
   |  

```
