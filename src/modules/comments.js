/* eslint-disable */
const getUserComment = async (id) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HWaITSk46Gfx2l76n1tS/comments?item_id=${id}`);
  const data = response.json();
  return data;
};

export default getUserComment;
