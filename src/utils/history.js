export function history(event){

	let title;
	let calValue;
	

	// 히스토리에서 접근
	if(!(event.currentTarget.querySelector('h3'))){
		title = event.currentTarget.textContent; // 계산기 한글 이름
		calValue = event.currentTarget.id; // 계산기 영어 이름
		console.log('h3 없을때 탐')
	}
	// 일반 계산기에서 접근
	else{
		title = event.currentTarget.querySelector('h3').textContent; // 계산기 한글 이름
		calValue = event.currentTarget.querySelector('h3').id; // 계산기 영어 이름
		
		console.log('h3 있을때 탐')
		
	}

		let history = {t : title}; // 저장값


		// 로컬스토리지 저장
		localStorage.setItem("history", JSON.stringify(history));

		// 로컬스토리지에서 정보 가져옴
		const getlocalStorage =  JSON.parse(localStorage.getItem("history")); 
		
		console.log('calValue'+calValue);




////////////////////////////// 히스토리 영역 생성 /////////////////////////////////////////
				// 일단 중복되는건 다 삭제
					const historyModal = document.querySelectorAll(`.${calValue}`);
					historyModal.forEach((h) => {
						h.remove();
						console.log('모두 삭제 너만타냐');
					})

				// 새로 히스토리 남김
					console.log('생성도 타라고');
					const createHistory = document.createElement('div'); // 히스토리 컨테이너
					const historyContainer = document.getElementById('historyContainer'); // 히스토리 목록
					historyContainer.prepend(createHistory);
					console.log('div 생성 완');


					createHistory.textContent = `${getlocalStorage.t}`; // 클릭한 계산기 히스토리에 추가

					createHistory.className = calValue + ' historyModalOpenButton p-2 hover:bg-gray-50 rounded'; // 구분용 클래스명 추가
					
					createHistory.id = calValue;
					
					 
					// 히스토리 클릭하면 모달창 열림
					document.querySelector('.'+calValue+'.historyModalOpenButton').addEventListener('click', () => {
					
						const modal = document.getElementById(calValue+'Modal');
						modal.classList.remove('hidden');
					})

	
	
}