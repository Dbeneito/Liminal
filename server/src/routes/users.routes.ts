import { Router } from 'express';
import {
    getUserProfile,
    updateProfile,
    toggleFollow,
    getFeaturedUsers,
    getSavedProjects,
    toggleFavorite
} from '../controllers/users.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

router.get('/featured', getFeaturedUsers);
router.get('/:username', getUserProfile);
router.put('/profile', authMiddleware, updateProfile);
router.post('/:id/follow', authMiddleware, toggleFollow);
router.get('/saved', authMiddleware, getSavedProjects);
router.post('/projects/:id/favorite', authMiddleware, toggleFavorite);

export default router;