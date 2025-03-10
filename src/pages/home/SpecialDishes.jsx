import React, {useState, useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from '../../components/Cards';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const SpecialDishes = () => {

    const [recipes, setResipes] = useState([]);
    const slider = React.useRef(null)

    const simpleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return(
            <div className={className} 
            style={{...style, display: "block", backround: "red"}}
            onClick={onClick}
            >
            NEXT
            </div>
        );
    };

    const simplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return(
            <div className={className} 
            style={{...style, display: "block", backround: "green"}}
            onClick={onClick}
            >
            BACK
            </div>
        );
    };

   {/* useEffect(() => {
        fetch("/menu.json").then(res => res.json()).then(data => {
            const specials = data.filter((item) => item.category === "popular")
            //console.log(specials)
            setResipes(specials)
        });

    }, []);*/}

    useEffect(() => {
      fetch("/menu.json")
        .then((res) => res.json())
        .then((data) => {
          // Filter items that belong to the specified categories
          const specials = data.filter((item) =>
            ["kota","chips", "drinks", "extras"].includes(item.category)
          );
          //console.log(specials)
          setResipes(specials);
        })
        .catch((error) => console.error("Error fetching menu:", error));
    }, []);
    


// settings
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ],
        nextArrow: <simpleNextArrow />,
        prevArrow: <simplePrevArrow />

      };


  return (
    <div className='section-container my-20 relative'>
        <div className="text-left">
            <p className="subtitle">Special Dishes</p>
            <h2 className="title md:w-[520px]">Standouts From Our Menu</h2>
        </div>
          {/* Arrow button */}
        <div className='md:absolute right-3 top-8 mb-10 md:mr-24'> 
            <button onClick={() => slider?.current?.slickPrev()} className='btn p-2 rounded-full ml-5'>
                <FaAngleLeft className='w-8 h-8 p-1'/>
            </button>
            <button onClick={() => slider?.current?.slickNext()} className='btn p-2 rounded-full ml-5 bg-green'>
                <FaAngleRight className='w-8 h-8 p-1'/>
            </button>
        </div>

        <Slider ref={slider} {...settings} className="overflow-hidden mt-10 space-x-5">
          {recipes.map((item, i) => (
            <Cards item={item} key={i}/>
          ))}
        </Slider>
    </div>
  )
}

export default SpecialDishes