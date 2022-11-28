import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import ArticleModal from "../Modal";

interface ListTopHeadlinesType {
  author: string;
  title: string;
  id: number;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  description: string;
}
const ListTopHeadlines = () => {
  const [article, setArticle] = useState<ListTopHeadlinesType[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=25ef6cd8a77d4015b00dec35c7fa6159"
      )
      .then((res) => {
        console.log(res.data.articles.slice(0, 10));
        setArticle(res.data.articles.slice(1, 11));
      });
  }, []);
  return (
    <Grid container rowSpacing={1}>
      {article.map((art, index) => {
        return (
          <Grid item xs={12} md={3} lg={4} sm={6} key={index}>
            <Card sx={{ display: "flex", maxWidth: 345 }}>
              <CardMedia
                component="img"
                sx={{ width: 120 }}
                image={art.urlToImage}
                alt="Live from space album cover"
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography
                    sx={{
                      overflow: "hidden",

                      display: "-webkit-box",
                      WebkitLineClamp: "2",
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {art.title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    component="div"
                    display="flex"
                    sx={{ mt: 1 }}
                  >
                    <CalendarMonthTwoToneIcon />
                    {art.publishedAt}
                  </Typography>
                  <ArticleModal
                    title={art.title}
                    desc={art.description}
                    url={art.url}
                    publish={art.publishedAt}
                    content={art.content}
                    author={art.author}
                  />
                </CardContent>
              </Box>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ListTopHeadlines;
