const postComment = async (id, name, comment) => {
  const data = {
    item_id: id,
    username: name,
    comment,
  };
  const API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HWaITSk46Gfx2l76n1tS/comments';
  await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default postComment;