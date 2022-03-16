import path from 'path';
import fs from 'fs/promises';

export const buildFilePath = (fileName) => {
  return path.join(process.cwd(), 'pages', 'api', 'data', fileName);
};

export const extractFileData = async (path) => {
  const jsonData = await fs.readFile(path);
  return JSON.parse(jsonData);
};
