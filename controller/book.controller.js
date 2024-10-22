import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createBook = (request, response) => {
    const { title, description, year, author, publisher } = request.body;

    try {

        const newBook = await prisma.book.create({
            data: {
                title: title,
                description: description,
                year: year,
                author: author,
                publisher: publisher
            }
        })

        response.status(201).json({
            message: "Book created succesfully.",
            newBook
        })

    } catch (error) {
        response.status(500).json({
            message: "Something happened. Bad luck."
        })
    }
}

export const updateBook = async (request, response) => {
    const { title, description, year, author, publisher } = request.body;
    const { id } = request.params;

    try {

        const updatedBook = await prisma.book.update({
            where: { id: Number(id) },
            data. {
                title,
                description,
                year,
                author,
                publisher
            }
        })
        
        response.status(201).json({
            message: "Book update succesfully",
            updatedBook
        })
    }
}