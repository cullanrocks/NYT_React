import axios from "axios";

const API = {
    // Retrieves all articles from the db
    //   getArticle() {
    //   return axios.get("/api/articles");
    // },

    getArticle(topic, StartYear, EndYear) {
        const authKey = "5904196b68c24e018f6d9c214405542d";
        // console.log(topic)
        const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
            authKey + "&q=" + topic + "&begin_date=" + StartYear + "0101&end_date=" + EndYear + "1231";
        return axios.get(queryURL).then(function(NYTdata) {
            // console.log(NYTdata.data.response.docs)
            return NYTdata.data.response.docs;
        });
    },


    // Saves a new article to the db
    saveArticles(articles) {
        // console.log(articles)
        for (var i = 0; i < articles.length; i++) {
                return axios.post("/api/articles", 
                  { article: articles[i].lead_paragraph, 
                    date: articles[i].pub_date, 
                    url: articles[i].web_url, 
                    favorite: false })
                .then((results)=> {
                    console.log(results)
                    return (results.data.op);
                });
        }
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
