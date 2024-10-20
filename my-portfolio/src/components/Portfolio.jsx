import React from 'react';
import work1 from '../assets/img/netflixclone.avif';
import work2 from '../assets/img/amazon.jfif';
import work3 from '../assets/img/eforum.webp';

const Portfolio = () => {
  const portfolioItems = [
    { imgSrc: work1, title: 'Netflix Clone', category: 'Website', link: 'https://edenesayas-filmsite.netlify.app/' },
    { imgSrc: work2, title: 'Amazon Clone', category: 'Web Design', link: 'https://amazonclonebyeden.netlify.app/' },
    { imgSrc: work3, title: 'Evangadi Forum', category: 'Website', link: 'https://evangadi-forum-by-edenesayas123.netlify.app/' },
  ];

  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="title-box text-center">
          <h3 className="title-a">Portfolio</h3>
          <div className="line-mf"></div>
        </div>
        <div className="row portfoliolen">
          {portfolioItems.map((item, index) => (
            <div className="col-md-3" key={index}>
              <div className="work-box">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio-lightbox">
                  <div className="work-img">
                    <img src={item.imgSrc} alt={item.title} className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="w-title">{item.title}</div>
                  <div className="w-more">{item.category}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
