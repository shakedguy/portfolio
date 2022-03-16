import { buildFilePath, extractFileData } from '../../services/helpers';
const handler = async (req, res) => {
  if (req.method === 'GET') {
    const filePath = buildFilePath('myWork.json');
    const data = await extractFileData(filePath);

    console.log(data);

    res.status(200).json({
      names: data.names,
      links: data.links,
      images: data.images,
    });
  }
};

export default handler;
