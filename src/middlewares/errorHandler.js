export const errorHandler = (err, req, res, next) => {
  res.status.json({
    status: 500,
    message: 'Something went wrong',
    data: err.message,
  });
};
