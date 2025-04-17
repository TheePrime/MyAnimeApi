import Anime from '../models/Anime.model.js'


import axios from "axios";


export  const fetchAndSaveAnime = async () => {
  try {
    const res = await axios.get("https://api.jikan.moe/v4/top/anime");
    const animeList = res.data.data;

    for (const anime of animeList) {
      const existing = await Anime.findOne({ mal_id: anime.mal_id });
      if (!existing) {
        await Anime.create({
          mal_id: anime.mal_id,
          title: anime.title,
          image: anime.images.jpg.image_url,
          episodes: anime.episodes,
          score: anime.score,
        });
      }
    }

    console.log("Anime data fetched and saved.");
  } catch (err) {
    console.error("Failed to fetch anime:", err.message);
  }
};


//Get all animeList

export const getAllAnime = async (req,res)=>{
    try {
        const allAnime = await Anime.find()

        res.json(allAnime)

    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}


//Get anime by id 

export const getAnimeById = async (req,res)=>{
    try {

        const {id} = req.params
        const anime = await Anime.findOne(id)

        res.status(200).json(anime)
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
        
    }
}