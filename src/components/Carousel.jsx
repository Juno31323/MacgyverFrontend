import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../supabase/client';

export default function Carousel() {
  const [country, setCountry] = useState('koreaCar');
  const [models, setModels] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    async function fetchModels() {
      const table = country === 'koreaCar' ? 'korea_car' : 'foreign_car';
      const { data, error } = await supabase.from(table).select('*');

      if (error) {
        console.error('Supabase 에러:', error);
        setModels([]);
      } else {
        setModels(data);
        setCurrentSlide(0); // 슬라이드 초기화
      }
    }

    fetchModels();
  }, [country]);

  useEffect(() => {
    if (containerRef.current) {
      const slideWidth = containerRef.current.offsetWidth;
      const inner = containerRef.current.querySelector('.slidesInner');
      if (inner) {
        inner.style.transition = 'transform 0.5s ease';
        inner.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
      }
    }
  }, [currentSlide, models]);

  const handlePrev = () => {
    const newIndex = currentSlide > 0 ? currentSlide - 1 : models.length - 1;
    setCurrentSlide(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentSlide < models.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(newIndex);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  if (!models || models.length === 0) {
    return <p className="text-center mt-4">차량 데이터를 불러오는 중입니다...</p>;
  }

  return (
    <div>
      <select
        id="country"
        value={country}
        onChange={handleCountryChange}
        className="border p-2 mb-4 w-full"
      >
        <option value="">--국가를 선택해주세요--</option>
        <option value="koreaCar">국산차</option>
        <option value="foreignCar">외제차</option>
      </select>
    </div>
  );
}
