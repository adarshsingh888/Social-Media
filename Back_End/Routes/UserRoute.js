import express from 'express';
import { getUser, updateUser,deleteUser,followUser, unfollowUser ,getAllUser} from '../controllers/userController.js';
import authMiddleWare from '../AuthMiddleware.js/AuthMiddleware.js';
const router=express.Router();

router.get("/",getAllUser);
router.get('/:id',getUser);
router.put('/update/:id',updateUser);
router.delete('/delete/:id',deleteUser)
router.put('/follow/:id',followUser);
router.put('/unfollow/:id',unfollowUser);

export default router;