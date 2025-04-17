import {Router} from 'express'

import { getAllAnime, getAnimeById } from '../../controllers/animeController.js'


const router = Router()



router.use('/all', getAllAnime)
router.use('/:mal_id', getAnimeById)





export default router