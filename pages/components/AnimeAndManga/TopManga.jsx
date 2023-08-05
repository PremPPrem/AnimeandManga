import { ApiDataContext } from '@/pages/context/ApiData';
import React, { useContext, useEffect } from 'react'
import Loading from '../Loading';
import Link from 'next/link';
import Card from '../Card';
import Slider from "react-slick";

export default function TopManga() {
  const { loading,mangaTop,getMangaTop } = useContext(ApiDataContext);
  useEffect(() => {
    getMangaTop();
    }, []);

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
          {
            breakpoint: 1580,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              initialSlide: 4,
              infinite: true,
              dots: true,
            }
          },
          {
              breakpoint: 1440,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 3,
              }
            },
          {
            breakpoint: 1030,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 1,
            }
          },
          {
            breakpoint: 691,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              initialSlide: 1,
              
              // arrows: false
            }
          }
          ,
          {
            breakpoint: 300,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: false
            }
          }
        ]
    };

  return (
    <div className=" w-[90%] my-0 mx-auto sm:w-[85%] fold:w-full">
      <Slider {...settings}>
      {loading ? (
        <Loading />
      ) : (
        mangaTop.length &&
        mangaTop.map((data) => {
          return (
            <Link
              href={`/components/AnimeAndManga/MangaPage/${data.mal_id}`}
              key={data.mal_id}
            >
              {" "}
              <Card {...data} />
            </Link>
          );
        })
      )}
      </Slider>
    </div>
  )
}
