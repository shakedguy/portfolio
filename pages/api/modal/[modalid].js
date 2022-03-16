import { buildFilePath, extractFileData } from '../../../services/helpers';
const handler = async (req, res) => {
  if (req.method === 'GET') {
    const filePath = buildFilePath('modalData.json');
    const data = await extractFileData(filePath);

    const modal = data.modals.find((m) => m.id === req.query.modalid);

    res.status(200).json({
      modal: modal,
    });
  }
};

export default handler;
