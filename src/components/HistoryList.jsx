
export default function HistoryList({ historyList, onItemClick }) {

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
