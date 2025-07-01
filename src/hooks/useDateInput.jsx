import { useState } from 'react';

export function useDateInput() {
  const [birth, setBirth] = useState('');

  const onChange = (e) => {
    const selectedDate = new Date(e.target.value);
    selectedDate.setHours(0, 0, 0, 0); // ✅ 시간 제거
    
    const today = new Date();
    today.setHours(0, 0, 0, 0); // ✅ 오늘도 시간 제거

    if (selectedDate > today) {
      alert('오늘 이후 날짜는 입력할 수 없습니다.');
      return;
    }

    setBirth(e.target.value);
  };

  const max = new Date().toISOString().split('T')[0];

  return { birth, onChange, max };
}