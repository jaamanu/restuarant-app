const postUserLike = async (id) => {
  const data = {
    item_id: id,
  };
  const dataToPost = {
    method: 'POST',
    headers: {
      'Content-Type': 'application.json',
    },
    body: JSON.stringify(data),
  };
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HWaITSk46Gfx2l76n1tS/likes', dataToPost)
    .then((response) => response.json());
};
postUserLike();