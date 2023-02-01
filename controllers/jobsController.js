const createJob = async (req, res) => {
  res.send('create job');
};
const getAllJob = async (req, res) => {
  res.send('get all job');
};
const updateJob = async (req, res) => {
  res.send('update job');
};
const deleteJob = async (req, res) => {
  res.send('delete job');
};
const showStats = async (req, res) => {
  res.send('show stats');
};

export { createJob, getAllJob, updateJob, deleteJob, showStats };
