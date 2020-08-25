const input = document.querySelector('#search');
const btnSearch = document.querySelector('.search-btn');
const animeCards = document.querySelector('.anime-cards');

btnSearch.addEventListener('click', async() => {
  try {
    animeCards.innerHTML = '';
    const res = await fetch(`https://api.jikan.moe/v3/search/anime?q=${input.value}`);
    const data = await res.json();
    console.log(data);
    for (let i = 0; i < 50; i++) {
      animeCards.innerHTML += /*html*/`
      <div class="card">
        <div class="card-img">
          <a href="${data.results[i].url}" target="_blank"><img src="${data.results[i].image_url}" alt=""></a>
        </div>
        <div class="card-content">
          <h3>${data.results[i].title}</h3>
          <h4>Score: ${data.results[i].score}/10</h4>
        </div>
      </div>
      `
    }
    input.value = '';
  } catch (error) {
    console.log(error);
  }
})