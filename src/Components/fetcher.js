import axios from 'axios'

// export const fetchFunc = async() => {
//         const options = {
//           method: 'GET',
//           url: 'https://crypto-news16.p.rapidapi.com/news/top/20',
//           headers: {
//             'X-RapidAPI-Key': 'd7f7be8390msh9a338685327a39fp197c71jsn2c35e89ad712',
//             'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
//           }
//         };

//         const response = await axios.request(options)
//           if (!response.ok) {
//             throw new Error('Damn there is a fucking error')
//           }
//           return response.json()
// }

const getDate = new Date()
const year = getDate.getFullYear();
const month = getDate.getMonth() + 1;
const day = getDate.getDate();


export const fetchFunc = async () => {
  const request = await axios.get(
    `https://reuters-business-and-financial-news.p.rapidapi.com/article-date/${day}-${month}-${year}`,
    {
      headers: {
        'X-RapidAPI-Key': 'd7f7be8390msh9a338685327a39fp197c71jsn2c35e89ad712',
        'X-RapidAPI-Host': 'reuters-business-and-financial-news.p.rapidapi.com',
      },
    }
  )
  if (!request.status >= 200 && !request.status < 300){
    throw new Error('Error you have done rubbish')
  }
  return request.data
}
