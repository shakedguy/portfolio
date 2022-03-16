import { buildFilePath, extractFileData } from '../../services/helpers';
const handler = async (req, res) => {
  if (req.method === 'GET') {
    const filePath = buildFilePath('pages.json');
    const data = await extractFileData(filePath);

    res.status(200).json({
      pages: data.pages,
      titles: data.titles,
    });
  }
};

export default handler;
