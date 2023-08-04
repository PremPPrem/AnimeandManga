import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Loading from "../Loading";
import { ApiDataContext } from "@/pages/context/ApiData";

export default function Picture() {
  const { loading, getPicture, Picture } = useContext(ApiDataContext);
  const [image, setImage] = useState(0);
  const router = useRouter();
  const { mal_id } = router.query;

  const handleImageClick = (i) => {
    setImage(i);
  };

  useEffect(() => {
    getPicture(mal_id);
  }, [mal_id]);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <div>
          <div className="flex justify-center items-start mt-[5rem] mb-12  ">
            <div className="border-[3px] border-amber-custom h-[450px] w-[300px] fold:mx-2 fold:h-[350px]" id="pictureTop">
              <img
                src={Picture[image]?.jpg.image_url}
                alt=""
                className="w-full h-full "
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center ">
            {Picture.length &&
              Picture.map((data, index) => {
                return (
                  <div
                    className="m-4"
                    onClick={() => {
                      handleImageClick(index);
                    }}
                    key={index}
                  >
                <a href="#pictureTop">
                <img
                      src={data?.jpg.image_url}
                      style={{
                        border:
                          index === image
                            ? "3px solid #FFC107"
                            : "3px solid #FFF",
                        filter:
                          index === image ? "grayscale(0)" : "grayscale(50%)",
                        transform: index === image ? "scale(1.1)" : "scale(1)",
                        transition: "all .3s ease-in-out",
                      }}
                      alt=""
                      className="max-w-[120px] max-h-[150px]"
                    />
                </a>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}
