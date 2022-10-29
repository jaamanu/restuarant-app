// const font = () => {
//   const footer = document.getElementById('footer');

//   footer.innerHTML += `<hr class="foot-line">
// <p class="foot-item">Created by microverse under CC license</p>
// `;
// };

// /* eslint-disable */
// export { font };
// /* eslint-enable */

const getUserLike = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HWaITSk46Gfx2l76n1tS/likes');
  const data = await response.json();
  const result = data.sort((a, b) => a.item_id - b.item_id);
  return data;
};

export default getUserLike;