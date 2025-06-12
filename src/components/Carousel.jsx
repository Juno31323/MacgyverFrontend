import React, { useState, useRef, useEffect } from 'react';

export default function Carousel({ koreanModels, foreignModels }) {
  const [country, setCountry] = useState('koreaCar'); // "koreaCar" 또는 "foreignCar"
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  const models = country === 'koreaCar' ? koreanModels : foreignModels;

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (containerRef.current) {
      const slideWidth = containerRef.current.querySelector('.model')?.offsetWidth || 0;
      containerRef.current.style.transition = 'transform 0.5s ease';
      containerRef.current.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
    }
  }, [currentSlide, country]);

  const handlePrev = () => {
    const newIndex = currentSlide > 0 ? currentSlide - 1 : models.length - 1;
    goToSlide(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentSlide < models.length - 1 ? currentSlide + 1 : 0;
    goToSlide(newIndex);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setCurrentSlide(0); // 초기화
  };

  return (
    <div>
      <select id="country" value={country} onChange={handleCountryChange}>
        <option value="">--국가를 선택해주세요--</option>
        <option value="koreaCar">국산차</option>
        <option value="foreignCar">외제차</option>
      </select>

      <div className="slide-wrapper mt-2">
        <button className="prev btn" onClick={handlePrev}>◀</button>

        <div className="slides overflow-hidden" style={{ width: '100%', position: 'relative' }}>
          <div
            ref={containerRef}
            className="slidesContainer flex"
            style={{ width: `${models.length * 100}%` }}
          >
            {models.map((model, index) => (
              <div
                key={index}
                className={`model ${index === currentSlide ? 'active' : ''}`}
                style={{ flex: '0 0 100%', textAlign: 'center' }}
              >
                <p>{model.name}</p>
                <img src={model.image} alt={model.name} style={{ width: '200px', height: 'auto' }} />
              </div>
            ))}
          </div>
        </div>

        <button className="next btn" onClick={handleNext}>▶</button>
      </div>
    </div>
  );
}
