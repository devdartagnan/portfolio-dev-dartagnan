import { promises as fsP } from 'fs';
import fs from 'fs'
import path from 'path';

const fullPath = getDataLocal();

function getDataLocal() {
  const dirRelativeToJsonFolder = 'json';
  const dir = path.resolve('./src/pages/api', dirRelativeToJsonFolder);
  const filenames = fs.readdirSync(dir);
  const fullPath = path.join(dir, `${filenames}`);
  return fullPath;
}

export default async function Handler(req, res) {
  if (req.method === 'GET') {
    const jsonData = await fsP.readFile(fullPath);
    const objectData = JSON.parse(jsonData);
    res.status(200).json(objectData);
  }
  if (req.method === 'POST')
    try {
      const jsonData = await fsP.readFile(fullPath);
      const objectData = JSON.parse(jsonData);

      const data = req.body;
      objectData.push(data);

      const updatedData = JSON.stringify(objectData);

      await fsP.writeFile(fullPath, updatedData);

      res.status(200).json({ message: 'Data stored successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error storing data' });
    }
}

