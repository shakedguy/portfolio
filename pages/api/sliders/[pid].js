import { buildFilePath, extractFileData } from '../../../services/helpers';
const handler = async (req, res) => {
  if (req.method === 'GET') {
    const filePath = buildFilePath('sliders.json');
    const data = await extractFileData(filePath);
    const slider = data.sliders.find((slide) => slide.id === req.query.pid);

    res.status(200).json({
      slider,
    });
  }
};

export default handler;
