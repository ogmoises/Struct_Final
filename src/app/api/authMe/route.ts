import type { NextApiRequest, NextApiResponse } from 'next';
import { verifyToken } from '../../utils/auth'; // Supondo que você tenha uma função para verificar tokens

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const user = await verifyToken(token); // Verifique o token e obtenha o usuário
    if (!user) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
