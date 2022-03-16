import { buildFilePath, extractFileData } from '../../services/helpers';
const handler = async (req, res) => {
  if (req.method === 'GET') {
    const filePath = buildFilePath('home.json');
    const data = await extractFileData(filePath);

    res.status(200).json({
      lines: [data.headers.first, data.headers.second],
    });
  }
};

export default handler;
