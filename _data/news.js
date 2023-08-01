/*const EleventyFetch = require("@11ty/eleventy-fetch");

async function getson() {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const response = EleventyFetch(url, {duration: "1d", type: "json" });
    const articles = response;
    return articles;
}
module.exports = getson; */

/* const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.NEWS_API_KEY;
console.log(API_KEY);
const options = {
    method: 'GET',
    url: 'https://news-api14.p.rapidapi.com/top-headlines',
    params: {
      country: 'gb',
      language: 'en',
      pageSize: '6',
      category: 'technology'
    },
    headers: {
      'X-RapidAPI-Key': //populate with own API key
       `${process.env.NEWS_API_KEY}`,
      'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
    }
  };

async function getson() { 
try {
	const response = await axios.request(options);
    const articles = response.data;
    return articles.articles; //trim to receive only articles instead of results header
} catch (error) {
	console.error(error);
}
}

module.exports = getson;  */
