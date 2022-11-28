import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Container } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/styles.css";
import ListTopHeadlines from "./ListTopHeadlines";
interface TopHeadlinesType {
  author: string;
  title: string;
  id: number;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  description: string;
}

const TopHeadlines = () => {
  const [article, setArticle] = useState<TopHeadlinesType[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=25ef6cd8a77d4015b00dec35c7fa6159"
      )
      .then((res) => {
        console.log(res.data.articles.slice(1, 10));
        setArticle(res.data.articles.slice(0, 1));
      });
  }, []);

  return (
    <Container>
      {article.map((art, index) => {
        return (
          <ImageListItem
            className="ImageList"
            key={index}
            style={{
              height: 400,
              textAlign: "center",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          >
            <img src={art.urlToImage} alt="test" loading="lazy" />
            <ImageListItemBar title={art.title} subtitle={art.author} />
          </ImageListItem>
        );
      })}
      {/* </img> */}

      <ListTopHeadlines />
    </Container>
  );
};

export default TopHeadlines;
