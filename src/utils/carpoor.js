export async function carpoor(salary, model, type, callback){

		// 연봉 입력 확인
		if(!salary){
			alert("연봉을 입력하세요.");
			return;
		}
		
		
		// 비동기처리, html에서 정보 가져와서 dto 클래스에 전달
		const res = await fetch("/calculate", { // 반드시 컨트롤러의 postmapping 경로랑 통일
		  method: "POST",
		  headers: {"Content-Type": "application/json"}, // 텍스트의 형식
		  body: JSON.stringify({ salary, model, type }) // 연봉, 차종을 넘김
		})
		

		
		// 계산 결과 
		const data = await res.json();
		// console.log(data.result);
		document.getElementById("carpoorResult").innerText =
		  data.message || `${data.result}`; // dto 클래스에서 계산 결과 가져옴
		  
		  
		// 결과가 로또면 호출
		if(data.result === '아래를 확인하세요🔽'){
			const lottoResult = document.getElementById('carpoorResult'); // 결과창
			const goToLotto = document.createElement('div'); // 바로가기 버튼 영역 생성
			const goToLottoBtn = document.createElement('button'); // 바로가기 버튼 생성
			
			goToLottoBtn.classList.add('button'); // 버튼 스타일
			goToLottoBtn.innerHTML = '로또번호 추출';
			goToLottoBtn.id = 'Lotto';
			
			
			// 부모자식 설정
			lottoResult.appendChild(goToLotto);
			goToLotto.appendChild(goToLottoBtn);
			

			
			
			// 바로가기 클릭 이벤트
			goToLottoBtn.addEventListener('click', () => {
				
				// 카푸어 모달창 닫기
				const CarpoorModal = document.getElementById('CarpoorModal');
				CarpoorModal.classList.add('hidden');
				
				// 로또 모달창 열기
				const LottoModal = document.getElementById("LottoModal");
				LottoModal.classList.remove('hidden');
				
				callback(event);
				
				
			})
		}
      
}