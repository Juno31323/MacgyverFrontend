import React, { useEffect, useState, useRef } from 'react';
import { supabase } from '../supabase/client';

export default function CarSlider({ country, onSelectModel }) {
  const [carList, setCarList] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    async function fetchCars() {
      if (!country) return;

      const table = country === 'koreaCar' ? 'korea_car' : 'foreign_car';
      const { data, error } = await supabase.from(table).select('*');

      if (error) {
        console.error('Supabase 에러:', error);
        return;
      }

      setCarList(data);
      setCurrentSlide(0);
    }

    fetchCars();
  }, [country]);

  useEffect(() => {
    if (containerRef.current) {
      const slideWidth = 300;
      containerRef.current.style.transition = 'transform 0.5s ease';
      containerRef.current.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
  }, [currentSlide]);

  // ✅ 선택된 모델을 상위에 전달
  useEffect(() => {
    if (carList.length > 0 && onSelectModel) {
      onSelectModel(carList[currentSlide]?.model);
    }
  }, [currentSlide, carList, onSelectModel]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : carList.length - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < carList.length - 1 ? prev + 1 : 0));
  };

  if (!country) return null;

  return (
    <div className="relative">
      <div className="slide-wrapper flex justify-between mb-2 items-center">
        <button onClick={handlePrev} className="prev btn text-2xl px-2">◀</button>
        <div className="overflow-hidden w-[300px] mx-2">
          <div
            ref={containerRef}
            className="flex"
            style={{ width: `${carList.length * 300}px` }}
          >
            {carList.map((car, i) => (
              <div
                key={i}
                className={`flex-none text-center ${i === currentSlide ? 'ring-4 ring-blue-500 scale-105' : 'opacity-70'}`}
                style={{ width: 300 }}
              >
                <img src={car.photo} alt={car.model} className="mx-auto h-48 object-cover rounded" />
                <p className="mt-2 font-semibold">{car.model}</p>
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleNext} className="next btn text-2xl px-2">▶</button>
      </div>
    </div>
  );
}
