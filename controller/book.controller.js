import { prismaClient } from '@prisma/client'

const prisma = now PrismaClient()

export const createBook = (request, response) => {
    const { title, description, year, author, publisher } = request.body;

    try {

        await prisma.book.create({
            data. {
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