import { buildFilePath, extractFileData } from '../../services/helpers';
const handler = async (req, res) => {
  if (req.method === 'GET') {
    const filePath = buildFilePath('footer.json');
    const data = await extractFileData(filePath);

    res
      .status(200)
      .json({
        links: data.links,
        tooltips: data.tooltips,
        colors: data.colors,
      });
  }
};

export default handler;
