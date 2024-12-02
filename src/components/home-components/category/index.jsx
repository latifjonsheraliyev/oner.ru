import React, { useEffect, useState } from "react";
import axios from "axios";

const Category = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios
      .get("https://674a9424868020296634d45d.mockapi.io/categories")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <section className="category mt-[60px]">
        <div className="container">
          {loading && (
            <div className="text-center text-gray-500">Yuklanmoqda...</div>
          )}

          {error && (
            <div className="text-center text-red-500 mt-5">
              Xatolik yuz berdi: {error}
            </div>
          )}

          {!loading && !error && (
            <div className="gap-[0px] grid grid-cols-[repeat(3,1fr)]">
              {data.map((value) => (
                <div
                  key={value.id}
                  className="category-item cursor-pointer p-[20px] rounded-[5px] h-[100px] flex items-center gap-[22px] [transition:0.6] [box-shadow:0_0_2px_rgb(168,_167,_167)] hover:[box-shadow:0_0_5px_rgb(168,_167,_167)]"
                >
                  <img
                    className="w-[40px] h-[40px] rounded-full object-cover"
                    src={value.image}
                    alt={value.name}
                  />
                  <div className="flex flex-col gap-[7px] w-full">
                    <h5 className="font-normal text-[16px] text-[#1B1D1F]">
                      {value.name}
                    </h5>
                    <p className="font-normal text-[12px] text-[#55556D]">
                      {new Intl.NumberFormat("uz-UZ").format(
                        value.products_count
                      )}{" "}
                      mahsulot
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Category;
