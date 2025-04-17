import {Router} from 'express'
import animeGroup from './animeGroup.js'

const router = Router()


router.use('/anime', animeGroup)




export default router 