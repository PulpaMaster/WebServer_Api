import { type Express } from 'express'
import { initializePostsAPI } from './posts'
import { initializeAuthAPI } from './auth'


export const initializeAPI = (app: Express) => {
  initializePostsAPI(app)
  initializeAuthAPI(app)
}
