// src/components/HistoryList.jsx
import { useHistory } from '../hooks/useHistory';

export default function HistoryList({ onItemClick }) {
  const historyList = useHistory();

  return (
    <>
      {historyList.map((item) => (
        <div
          key={item.id}
          className="historyModalOpenButton p-2 hover:bg-gray-50 rounded cursor-pointer"
          onClick={() => onItemClick(item.calValue)}
        >
          {item.title}
        </div>
      ))}
    </>
  );
}
