import express from 'express'
import credentialController from '../controllers/credentialController.js'

const router = express.Router()

router.post('/users/register',credentialController.userRegistration)
router.post('/users/login',credentialController.userLogin)

export default  router