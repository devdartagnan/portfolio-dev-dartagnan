import { promises as fsP } from 'fs';
import fs from 'fs'
import path from 'path';



// export default async function handler(req, res) {
//   const jsonDirectory = path.join(process.cwd(), 'src/pages/api/json');
//   const fileContents = await fsP.readFile(jsonDirectory + '/data.json');
//   const objectData = JSON.parse(fileContents);

//   res.status(200).json(objectData);

// }
export default async function GET(req, res) {
  const dirRelativeToJsonFolder = 'json'
  const dir = path.resolve('./src/pages/api', dirRelativeToJsonFolder);
  const filenames = fs.readdirSync(dir);
  const fullPath = path.join(dir, `${filenames}`)
  const jsonData = await fsP.readFile(fullPath);
  const objectData = JSON.parse(jsonData);
  res.status(200).json(objectData);
}

// export default async function handler(req, res) {

//   if (req.method === 'GET') {
//     const dirRelativeToJsonFolder = 'json'
//     const dir = path.resolve('./src/pages/api', dirRelativeToJsonFolder);
//     const filenames = fs.readdirSync(dir);
//     const fullPath = path.join(dir, `${filenames}`)
//     const jsonData = await fsP.readFile(fullPath);
//     const objectData = JSON.parse(jsonData);
//     res.status(200).json(objectData);
//   } else if (req.method === 'POST') {
//     try {
//       // Read the existing data from the JSON file
//       const jsonData = await fsPromises.readFile(dataFilePath);
//       const objectData = JSON.parse(jsonData);

//       // Get the data from the request body
//       const { name, email } = req.body;

//       // Add the new data to the object
//       const newData = {
//         name,
//         email
//       };
//       objectData.push(newData);

//       // Convert the object back to a JSON string
//       const updatedData = JSON.stringify(objectData);

//       // Write the updated data to the JSON file
//       await fsPromises.writeFile(dataFilePath, updatedData);

//       // Send a success response
//       res.status(200).json({ message: 'Data stored successfully' });
//     } catch (error) {
//       console.error(error);
//       // Send an error response
//       res.status(500).json({ message: 'Error storing data' });
//     }
//   }

// }

export async function POST(req, res) {
  try {
    // Read the existing data from the JSON file
    const jsonData = await fsPromises.readFile(dataFilePath);
    const objectData = JSON.parse(jsonData);

    // Get the data from the request body
    const { name, email } = req.body;

    // Add the new data to the object
    const newData = {
      name,
      email
    };
    objectData.push(newData);

    // Convert the object back to a JSON string
    const updatedData = JSON.stringify(objectData);

    // Write the updated data to the JSON file
    await fsPromises.writeFile(dataFilePath, updatedData);

    // Send a success response
    res.status(200).json({ message: 'Data stored successfully' });
  } catch (error) {
    console.error(error);
    // Send an error response
    res.status(500).json({ message: 'Error storing data' });
  }
}
