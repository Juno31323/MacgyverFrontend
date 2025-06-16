// Supabase 초기화
const SUPABASE_URL = 'https://xaayfpualnmhhgywhgyf.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhYXlmcHVhbG5taGhneXdoZ3lmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4ODcyOTgsImV4cCI6MjA2MDQ2MzI5OH0.ArO9tot97fc9N5LRV6PujBEo3QihFuqygQQUnT2Lb-w';
const country = document.getElementById('country'); // 국산, 외제 선택

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

country.addEventListener('change', () => {
  const selectedCountry = country.value; // 선택된 값 읽기

  console.log('선택된 나라:', selectedCountry);
  
  if (selectedCountry === 'koreaCar') {
    KRLoadDB(selectedCountry);
	
  } else if (selectedCountry === 'foreignCar') {
    foreignLoadDB(selectedCountry);
  }

});




// 국산 데이터 불러오기
async function KRLoadDB(selectedCountry) {
  const { data, error } = await supabase
    .from('korea_car')      // 테이블 이름
    .select('*');      // 사진 데이터 조회

  if (error) {
    console.error('에러 발생:', error);
    return;
  }
  else{
	console.log('데이터 : ',  data);
  }

  const container = document.querySelector(`.${selectedCountry} .slidesContainer`);
  container.innerHTML = ''; // 기존 내용 초기화

  // HTML에 추가
  data.forEach((koreaCar, i) => {
    const models = document.createElement('div');
	const modelimg = document.createElement('img');
	
	models.className = `${selectedCountry} model KR` + i // class명 추가
    models.innerText = koreaCar.model || '[꽝]';
	modelimg.src = koreaCar.photo || '사진안뜸';
	models.style.width = '300px';
	
	console.log(models);
	
    container.appendChild(models);
	models.appendChild(modelimg);
	
	country === ''; // 리셋
  });
  
  
  // 첫 모델에 자동 active 추가
  const KRFirstModel = document.querySelector('.KR0');
  KRFirstModel.classList.add('active');
}




// 외제 데이터 불러오기
async function foreignLoadDB(selectedCountry) {
  const { data, error } = await supabase
    .from('foreign_car')      // 테이블 이름
    .select('*');      // 사진 데이터 조회

  if (error) {
    console.error('에러 발생:', error);
    return;
  }
  else{
	console.log('데이터 : ',  data);
  }

  const container = document.querySelector(`.${selectedCountry} .slidesContainer`);
  container.innerHTML = ''; // 기존 내용 초기화

  // HTML에 추가
  data.forEach((foreignCar, i) => {
    const models = document.createElement('div');
	const modelimg = document.createElement('img');
	models.className = `${selectedCountry} model foreign` + i // class명 추가
	
    models.innerText = foreignCar.model || '[꽝]';
	modelimg.src = foreignCar.photo || '사진안뜸';
	models.style.width = '300px';
	
	console.log(models);
	
    container.appendChild(models);
	models.appendChild(modelimg);
	
	country === ''; // 리셋
  });
  
  // 첫 모델에 자동 active 추가
  const foreignFirstModel = document.querySelector('.foreign0');
  foreignFirstModel.classList.add('active');
}

