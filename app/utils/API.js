import axios from "axios";

const API = {
    // Retrieves all articles from the db
    //   getArticle() {
    //   return axios.get("/api/articles");
    // },
   getArticles() {
    return axios.get("/api/articles");
  },

    // Saves a new article to the db
    saveArticles(topic, StartYear, EndYear) {
        const authKey = "5904196b68c24e018f6d9c214405542d";
        // console.log(topic)
        const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
            authKey + "&q=" + topic + "&begin_date=" + StartYear + "0101&end_date=" + EndYear + "1231";
        return axios.get(queryURL).then((NYTdata) =>{
            const NYTresults = NYTdata.data.response.docs;
            const formattedResultsArray = [];
            for (let i = 0; i < NYTresults.length; i++){
                let formattedArticle = {};
                formattedArticle.article = NYTresults[i].lead_paragraph;
                formattedArticle.url= NYTresults[i].web_url;
                formattedArticle.date = NYTresults[i].pub_date;
                formattedResultsArray.push(formattedArticle);
            }
            return axios.post("/api/articles", formattedResultsArray)
        });
    },

    // Deletes an article from the db
    deleteArticle(id) {
        return axios.delete(`/api/articles/${id}`);
    },


    // Toggles an article's favorite property in the db
    favoriteArticle(article) {
        article.favorited = !article.favorited;
        const { _id, favorited } = article;
        return axios.patch(`/api/articles/${_id}`, { favorited });
    }
};

export default API;
