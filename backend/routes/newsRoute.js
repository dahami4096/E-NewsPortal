import express from 'express';
import { News } from '../models/newsModel.js';

const router = express.Router();

//route for add a news
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.description ||
            !request.body.author ||
            !request.body.date
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, description, author, date',
            });
        }

        const newNews = {
            title: request.body.title,
            description: request.body.description,
            author: request.body.author,
            date: request.body.date,
        };

        const news = await News.create(newNews);

        return response.status(201).send(news);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }

});

//route for get all news from database
router.get('/', async (request, response) => {
    try {
        const news = await News.find({});

        return response.status(200).json({
            count: news.length,
            data: news
        });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//route for get one news from database by id
router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const news = await News.findById(id);

        return response.status(200).json(news);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//route for update a news
router.put('/:id', async (request, response) => {
    try {

        if (
            !request.body.title ||
            !request.body.description ||
            !request.body.author ||
            !request.body.date
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, description, author, date',
            });
        }
        const { id } = request.params;

        const result = await News.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'News not found' });
        }
        return response.status(200).send({ message: 'News updated successfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//route delete a news
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await News.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'News not found' });
        }
        return response.status(200).send({ message: 'News deleted successfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;