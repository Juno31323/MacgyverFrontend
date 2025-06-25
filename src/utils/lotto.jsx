import { useEffect, useRef, useState } from "react";

// 번호 6 개 생성
function generateNumbers() {
  const set = new Set();
  while (set.size < 6) {
    set.add(Math.floor(Math.random() * 45) + 1);
  }
  return Array.from(set).sort((a, b) => a - b);
}
//
//로또 번호 생성 함수
/**
 * @returns {number[][]} 5세트의 로또 번호 (배열 안의 배열)
 */
export default function generateLotto() {
  const results = [];
  for (let i = 0; i < 5; i++) {
    results.push(generateNumbers());
  }
  return results;
}
