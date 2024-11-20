import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
    res.send('Backend is running!');
});

app.get('/api/games', (req: Request, res: Response) => {
    res.json([
        { id: 1, name: 'Game 1', description: 'Code gta5' },
        { id: 2, name: 'Game 2', description: 'Master assembly language' }
    ]);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
