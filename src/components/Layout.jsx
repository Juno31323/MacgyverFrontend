import { useHistory } from '../hooks/useHistory';

export default function Layout({ children, setActiveCal}) {
  const historyList = useHistory();

    const handleHistoryClick = (calValue) => {
     setActiveCal(calValue); // 모달 열기
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 헤더 */}
      <header className="flex items-center justify-between max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          SmartTools Pro
        </h1>
        <div className="flex items-center space-x-4">
          {/* 히스토리 */}
          <div className="relative group">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              🕖︎<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="hidden group-hover:block absolute right-0 w-72 bg-white shadow-xl p-4 rounded-lg z-50">
              <h3 className="font-semibold mb-2">히스토리</h3>
              <div className="text-sm space-y-2" id="historyContainer">
                {historyList.map((item) => (
                  <div
                    key={item.id}
                    className="historyModalOpenButton p-2 hover:bg-gray-50 rounded cursor-pointer"
                    onClick={() => handleHistoryClick(item.calValue)}
                  >
                    {item.title}
                  </div>
                ))}

              </div>
            </div>
          </div>

          {/* 알림 */}
          <div className="relative group">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              🔔<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="hidden group-hover:block absolute right-0 w-72 bg-white shadow-xl p-4 rounded-lg z-50">
              <h3 className="font-semibold mb-2">알림 (3)</h3>
              <div className="text-sm space-y-2">
                <div className="p-2 hover:bg-gray-50 rounded">새로운 업데이트 가능</div>
                <div className="p-2 hover:bg-gray-50 rounded">미완료된 계산서 2건</div>
              </div>
            </div>
          </div>

          {/* 유저 아이콘 */}
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">👤</div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="max-w-7xl mx-auto px-6">{children}</main>
    </div>
  );
}
