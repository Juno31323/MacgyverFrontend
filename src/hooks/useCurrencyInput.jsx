import { useState, useRef } from 'react';

export function useCurrencyInput() {
  const [rawValue, setRawValue] = useState('');
  const inputRef = useRef(null);

  const onChange = (e) => {
    const selectionStart = e.target.selectionStart;
    const oldLength = e.target.value.length;

    const numeric = e.target.value.replace(/[^0-9]/g, '');
    const number = Number(numeric);
    setRawValue(number);

    const newLength = number.toLocaleString().length;

    // 다음 틱에서 커서 위치 조정
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.setSelectionRange(
          selectionStart + (newLength - oldLength),
          selectionStart + (newLength - oldLength)
        );
      }
    }, 0);
  };

  return {
    value: rawValue.toLocaleString(),   // 쉼표 붙은 문자열
    onChange,
    rawValue,                  // 숫자 원본
    inputRef                  // ref 연결
  };
}