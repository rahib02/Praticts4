import React from 'react';
import Carousel from 'nuka-carousel';
import './Home.css'
import { AiOutlineHeart } from 'react-icons/ai';

function Home() {
    return (
        <div className='Home_carusel'>
            <div className='section1'>
                <Carousel >
                    <div className='carusel1'>
                        <h5 className='small_h5'>Floral</h5>
                        <h5 className='big_h5'>Excellent bouquets for you</h5>
                    </div>
                    <div className='carusel2'>
                        <h5 className='small_h5'>Floral</h5>
                        <h5 className='big_h5'>Excellent bouquets for you</h5>
                    </div>
                    <div className='carusel3'>
                        <h5 className='small_h5'>Floral</h5>
                        <h5 className='big_h5'>Excellent bouquets for you</h5>
                    </div>
                </Carousel>
            </div>
            <div className='section2'>
                <div className='section2_text'>
                    <h5>Local Florist Just For You</h5>
                    <p>Lorem ipsum dolor sit amet, pri autem nemore bonorum te. Autem fierent ullamcorper ius no. Te tibique intellegam mediocritatem his, est quis.</p>
                    <p><em>Mary Byrd, owner</em></p>
                    <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png" alt="" />
                </div>
                <div className='section2_img'>
                    <img className='img1' src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/fl1.jpg" alt="" />
                    <img className='img2' src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/fl2.jpg" alt="" />
                </div>
            </div>
            <div className='section3'>
                <div className='section3_body'>
                    <div className='section3_body_text'>
                        <h5>Our Mission</h5>
                        <p>Lorem ipsum dolor sit amet, pri omnium verterem id, sit labore dicunt an, ea civibus.
                        </p>
                        <a><button>Read more</button></a>
                    </div>
                    <div className='section3_body_img'>
                        <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg" alt="" />
                    </div>
                </div>
                <div className='section3_icon'>
                    <div className='section3_icons'><span><AiOutlineHeart /></span><h5>
                        Organic</h5></div>
                    <h5>Vis ne postulant principes accommodare ius modo</h5>
                </div>
            </div>
        </div>
    )
}

export default Home