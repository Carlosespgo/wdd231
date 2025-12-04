const newsSection = document.querySelector('#news');
    const apiKey = '8bbeb4a063d54019859e60a5434fc658'; 
    const url = `https://newsapi.org/v2/everything?q=fútbol&language=es&sources=marca,espn,as&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const articles = data.articles;

            if (articles.length > 0) {
                // Elegimos una noticia aleatoria
                const randomIndex = Math.floor(Math.random() * articles.length);
                const article = articles[randomIndex];

                const newsCard = document.createElement('div');
                newsCard.classList.add('news-card');

                const img = document.createElement('img');
                img.src = article.urlToImage || 'https://via.placeholder.com/300x150';
                img.alt = article.title;

                const title = document.createElement('h3');
                title.textContent = article.title;

                const desc = document.createElement('p');
                desc.textContent = article.description || 'Sin descripción disponible';

                const link = document.createElement('a');
                link.href = article.url;
                link.textContent = 'Leer más';
                link.target = '_blank';

                newsCard.appendChild(img);
                newsCard.appendChild(title);
                newsCard.appendChild(desc);
                newsCard.appendChild(link);

                newsSection.appendChild(newsCard);
            } else {
                newsSection.textContent = 'No hay noticias de fútbol disponibles en este momento.';
            }
        })
        .catch(error => console.error('Error al cargar noticias:', error));
