// src/pages/api/comments/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose, { ConnectionStates } from 'mongoose';

// Define proper response types
interface CommentData {
    _id: string;
    name: string;
    email: string;
    message: string;
    createdAt: string;
}

type SuccessResponse = {
    success: true;
    data: CommentData | CommentData[];
}

type ErrorResponse = {
    success: false;
    error: string;
}

type ResponseData = SuccessResponse | ErrorResponse;

// Request body type
interface CommentRequestBody {
    name?: string;
    email?: string;
    message?: string;
}

const MONGODB_URI = process.env.MONGODB_URI!;

// Simple connection helper
async function connectDB() {
    if (mongoose.connection.readyState >= ConnectionStates.connected) {
        return;
    }
    return mongoose.connect(MONGODB_URI);
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    try {
        await connectDB();
        
        const db = mongoose.connection.db;
        if (!db) {
            throw new Error('Database not connected');
        }
        
        const commentsCollection = db.collection('comments');

        // GET - Fetch comments
        if (req.method === 'GET') {
            try {
                const rawComments = await commentsCollection
                    .find()
                    .sort({ createdAt: -1 })
                    .limit(50)
                    .toArray();
                
                const transformedComments: CommentData[] = rawComments.map((doc) => ({
                    _id: doc._id.toString(),
                    name: doc.name as string,
                    email: (doc.email as string) || '',
                    message: doc.message as string,
                    createdAt: new Date(doc.createdAt as Date).toISOString()
                }));
                
                return res.status(200).json({ 
                    success: true, 
                    data: transformedComments 
                });
            } catch (error) {
                console.error('GET Error:', error);
                return res.status(400).json({ 
                    success: false, 
                    error: 'Failed to fetch comments' 
                });
            }
        }
        
        // POST - Create comment
        if (req.method === 'POST') {
            try {
                const body = req.body as CommentRequestBody;
                const { name, email, message } = body;

                // Validate required fields
                if (!name?.trim() || !message?.trim()) {
                    return res.status(400).json({ 
                        success: false, 
                        error: 'Name and message are required' 
                    });
                }

                // Create new comment
                const newComment = {
                    name: name.trim(),
                    email: email?.trim() ?? '',
                    message: message.trim(),
                    createdAt: new Date(),
                };

                const result = await commentsCollection.insertOne(newComment);
                
                const commentData: CommentData = {
                    _id: result.insertedId.toString(),
                    name: newComment.name,
                    email: newComment.email,
                    message: newComment.message,
                    createdAt: newComment.createdAt.toISOString()
                };
                
                return res.status(201).json({ 
                    success: true, 
                    data: commentData
                });
            } catch (error) {
                console.error('POST Error:', error);
                const errorMessage = error instanceof Error ? error.message : 'An error occurred';
                return res.status(400).json({ 
                    success: false, 
                    error: errorMessage 
                });
            }
        }
        
        // Method not allowed
        return res.status(405).json({ 
            success: false, 
            error: 'Method not allowed' 
        });
        
    } catch (error) {
        console.error('Connection Error:', error);
        return res.status(500).json({ 
            success: false, 
            error: 'Database connection failed' 
        });
    }
}