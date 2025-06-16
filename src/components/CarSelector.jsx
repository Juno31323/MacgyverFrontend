import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase/client';
import ModelCard from './ModelCard';

export default function CarSelector({ country, onSelectModel }) {
  const [models, setModels] = useState([]);

  useEffect(() => {
    if (country) {
      loadModels(country);
    } else {
      setModels([]);
    }
  }, [country]);

  const loadModels = async (country) => {
    const table = country === 'koreaCar' ? 'korea_car' : 'foreign_car';

    const { data, error } = await supabase.from(table).select('*');

    if (error) {
      console.error('데이터 불러오기 실패:', error);
      return;
    }

    setModels(data);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {models.map((country) => (
        <div
          key={country.id}
          onClick={() => onSelectModel(country.model)}
          className="cursor-pointer hover:scale-105 transition-transform"
        >
          <ModelCard model={country.model} photo={country.photo} />
        </div>
      ))}
    </div>
  );
}
