// import React ,{useState} from 'react'
// import Newsitems from './Newsitems';

// export default function News(){
//     const [articles,setArticles]=useState([])
//     const [text setText]=setState;
//     async function fetchNews(){
//         let data=await fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-12-24&sortBy=publishedAt&apiKey=bdd6e4e77986490d8621ee4fb8ffb760')
//         let news=await data.json();
//         console.log(news.articles)  
//         setArticles(news.articles)
//     }

//     return (
//         <div>
//             {articles.map(item=><Newsitems title={item.title} description={item.description}
//             url={item.url} img={item.urlToImage}/>)}
//             <button onClick={()=>fetchNews()}>getnews</button>
//         </div>
//     )
// }