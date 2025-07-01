import React from 'react';

export default function ModelCard({ model, photo }) {
  return (
    <div className="model w-[200px] text-center">
      <p className="font-semibold mb-2">{model || '[모델 없음]'}</p>
      <img
        src={photo || '사진안뜸'}
        alt={model}
        className="w-full h-auto rounded"
      />
    </div>
  );
}
