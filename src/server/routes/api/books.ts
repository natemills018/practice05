import { Router } from 'express';
import db from '../../db';
import tokenCheck from '../../middlewares/tokenCheck';


const router = Router();


router.get('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10)
        const [book] = await db.books.getOne(id);

        if(!book) {
            return res.status(404).json({message: 'No Books found at this id'})
        }
        res.json(book)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server error', error})
    }
})


router.get('/', async (req, res) => {
    try {
        const books = await db.books.getAll()
        res.json(books)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error when trying to POST', error})
    }
})

export default router;