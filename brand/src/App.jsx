import { Link } from 'react-router-dom';
import './style.scss';
import { Subscribe } from './components/Subscribe';
import { Information } from './components/Information';
import { Footer } from './components/Footer';
import { HeadingCenter } from './components/HeadingCenter';
import { useEffect, useState } from 'react';
import { NavigationMenu } from './components/NavigationMenu';
const images = require.context('./img', true, /\.(jpg|png|svg)$/);

function App() {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = './data.json';
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Something went wrong. Try again!')
        }
        const res = await response.json();
        console.log('Data:', res);
        setData(res);
      } catch (error) {
        console.error('Error:', error);
        setError(error.message);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const addBoxes = document.querySelectorAll('.add-box');
      addBoxes.forEach((addBox, index) => {
        addBox.addEventListener('click', () => {
          const selectedProduct = data[index];
          const headingBucketBox = document.querySelector('.heading__bucket-box');
          let count = 1;

          if (localStorage.getItem(index + 1)) {
            const existingProduct = JSON.parse(localStorage.getItem(index + 1));
            count = existingProduct.count + 1;
            existingProduct.count = count;
            localStorage.setItem(index + 1, JSON.stringify(existingProduct));
            const existingItem = document.querySelector(`.heading__bucket-items[data-id="${selectedProduct.id}"]`);
            if (existingItem) {
              existingItem.querySelector('.heading__bucket-price').textContent = `${count} x ${selectedProduct.price}`;
            }
          } else {
            selectedProduct.count = count;
            localStorage.setItem(index + 1, JSON.stringify(selectedProduct));
            headingBucketBox.insertAdjacentHTML('afterbegin', `
              <div class="heading__bucket-items" data-id="${selectedProduct.id}">
                <Link to="/single_page">
                  <img class="heading__bucket-item" src=${images(`./${selectedProduct.img}`)} alt=""/>
                </Link>
                <div class="heading__bucket-text">
                  <h5 class="heading__bucket-title">${selectedProduct.title}</h5>
                  <img class="heading__bucket-stars" src=${images(`./stars.png`)} alt=""></img>
                  <p class="heading__bucket-price">${count} x ${selectedProduct.price}</p>
                </div>
                <img class="heading__bucket-close" src=${images(`./button_close.png`)} alt=""></img>
              </div>
              `
            );
          }
        })
      })

      const headingBucketBox = document.querySelector('.heading__bucket-box');
      headingBucketBox.addEventListener("click", ev => {
        if (ev.target.closest('.heading__bucket-close')) {
          const item = ev.target.closest(".heading__bucket-items");
          if (item) {
            item.remove();
            localStorage.removeItem(item.dataset.id);
          }
        }
      })
    }
  }, [data]);


  return (
    <>
      <div className="header">
        <HeadingCenter />
        <NavigationMenu />
        <div className="top__content">
          <div className="top__text center">
            <div className="top__text-item1"><span className="top__text-item2">THE BRAND</span><br />OF LUXERIOUS <span
              className="top__text-item3">FASHION</span></div>
          </div>
        </div>
      </div>
      <div className="collection center">
        <div className="collection__men">
          <div className="collection__men-deal">
            <p><span className="collection__men-offer">HOT DEAL</span><br />FOR MEN</p>
          </div>
        </div>
        <div className="collection__accesories">
          <div className="collection__accesories-deal">
            <p><span className="collection__accesories-offer">LUXIROUS & TRENDY</span><br />ACCESORIES</p>
          </div>
        </div>
        <div className="collection__women">
          <div className="collection__women-deal">
            <p><span className="collection__women-offer">30% OFFER</span><br /> WOMEN</p>
          </div>
        </div>
        <div className="collection__kids">
          <div className="collection__kids-deal">
            <p><span className="collection__kids-offer">NEW ARRIVALS</span><br />FOR KIDS</p>
          </div>
        </div>
      </div>
      <section className="closes center">
        <h1 className="closes__title">Fetured Items</h1>
        <p className="closes__text">Shop for items based on what we featured in this week</p>
        <div className="closes__box">
          {data.map((el, index) => (
            <div key={index} className="closes__items">
              <Link to='/product' className="closes__link">
                <img className="closes__items-img" src={images(`./${el.img}`)} alt="" />
                <div className="closes__items-text">
                  <p className="closes__items-title">{el.title}</p>
                  <p className="closes__price">${el.price}</p>
                </div>
              </Link>
              <div className="add-box">
                <a href="#bucket" 
                className="add" 
                onClick={(e) => {
                  e.preventDefault();
                  const bucketElement = document.getElementById('bucket');
                  if (bucketElement) {
                    bucketElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>
                  <img className="add-img" src={images('./bucket_white.png')} alt="" />
                  <p className="add-txt">Add to Cart</p>
                </a>
              </div>
            </div>
          ))}
        </div>
        <Link className="closes__button" to="/product">
          Browse All Product
          <img className="closes__button-img" src={images('./arrow_white_right.png')} alt="" />
        </Link>
      </section>
      <div className="offer center">
        <div className="offer__img">
          <div className="offer__content">
            <p className="offer__left">30%&nbsp;<span className="offer__left-word">OFFER</span><br /><span
              className="offer__category">FOR WOMEN</span></p>
          </div>
        </div>
        <div className="offer__box">
          <article className="offer__box-items">
            <img src={images('./delivery.png')} alt="" />
            <h4 className="offer__title">Free Delivery</h4>
            <p className="offer__text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with
              extensive models.</p>
          </article>
          <article className="offer__box-items">
            <img src={images('./sales.png')} alt="" />
            <h4 className="offer__title">Sales & discounts</h4>
            <p className="offer__text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with
              extensive models.</p>
          </article>
          <article className="offer__box-items">
            <img src={images('./assurance.png')} alt="" />
            <h4 className="offer__title">Quality assurance</h4>
            <p className="offer__text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with
              extensive models.</p>
          </article>
        </div>
      </div>
      <Subscribe />
      <Information />
      <Footer />
    </>
  );
}


export default App;
