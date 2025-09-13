// Vercel serverless function for health check
module.exports = (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Prahari API is running' });
};