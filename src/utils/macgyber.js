import {BMI} from './BMI.js'; // BMI 계산기
import {BMR} from './BMR.js'; // BMR 계산기
import {calorieConsumptionMeters} from './calorieConsumptionMeters.js'; // 칼로리 계산기
import {childbearingPeriod} from './childbearingPeriod.js'; // 가임기 계산기
import {normalWeight} from './normalWeight.js'; // 정상체중 계산기
import {targetHeartRate} from './targetHeartRate.js'; // 목표 심박수 계산기
import {getAge} from './age.js'; // 나이 계산기
import {getDistance} from './distance.js'; // 거리 계산기
import {calculateLoanPayment} from './loan.js'; // 이자 계산기
import {tempConversion} from './tempConversion.js'; // 온도 변환 계산기
import { getIp } from './ipconfig.js';


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BMI

const BMIModalOpenButton = document.getElementById('BMIModalOpenButton');
const BMIModalCloseButton = document.getElementById('BMIModalCloseButton');
const BMIModal = document.getElementById('BMIModal');

// 열기
BMIModalOpenButton.addEventListener('click', () => {
  BMIModal.classList.remove('hidden');
});

// 닫기
BMIModalCloseButton.addEventListener('click', () => {
  BMIModal.classList.add('hidden');
});


// BMI 계산 버튼 이벤트
document.getElementById('BMIForm').addEventListener('submit', () => {
  // 사용자 입력값 가져오기
  let weight = parseInt(document.getElementById('BMIWeight').value); // kg
  let height = parseFloat(document.getElementById('BMIHeight').value)/100; // m

  BMI(weight, height);
  
});





//////////////////////////////////////////////////////////////////////////////////////////////////////////
// BMR


  const BMRModalOpenButton = document.getElementById('BMRModalOpenButton');
  const BMRModalCloseButton = document.getElementById('BMRModalCloseButton');
  const BMRModal = document.getElementById('BMRModal');
  
  // 열기
  BMRModalOpenButton.addEventListener('click', () => {
    BMRModal.classList.remove('hidden');
  });
  
  // 닫기
  BMRModalCloseButton.addEventListener('click', () => {
    BMRModal.classList.add('hidden');
  });

  document.getElementById('BMRForm').addEventListener('submit', () => { 
    const gender = document.querySelector('input[type=radio][name="gender"]:checked').value; // 성별
    const height = parseFloat(document.getElementById('BMRHeight').value); // 키
    const weight = parseFloat(document.getElementById('BMRWeight').value); // 몸무게
    const age = parseInt(document.getElementById('BMRAge').value); // 나이

    BMR(gender, height, weight, age);
  });





  ////////////////////////////////////////////////////////////////////////////////////
  // 칼로리 계산기

  const CalorieModalOpenButton = document.getElementById('CalorieModalOpenButton');
  const CalorieModalCloseButton = document.getElementById('CalorieModalCloseButton');
  const CalorieModal = document.getElementById('CalorieModal');
    
    // 열기
  CalorieModalOpenButton.addEventListener('click', () => {
    CalorieModal.classList.remove('hidden');
    });
    
    // 닫기
  CalorieModalCloseButton.addEventListener('click', () => {
    CalorieModal.classList.add('hidden');
    });

  document.getElementById('CalorieForm').addEventListener('submit', () => {
    const excersise = document.querySelector('input[type=radio][name="excersise"]:checked').value; // 운동종류
    const weight = parseInt(document.getElementById('CalorieWeight').value); // 몸무게
    const exerciseTime =parseInt(document.getElementById('CalorieTime').value); // 분

    calorieConsumptionMeters(excersise, weight, exerciseTime);
  });




////////////////////////////////////////////////////////////////////////////////////////////////
// 가임기 계산기

const ChildbearingPeriodModalOpenButton = document.getElementById('ChildbearingPeriodModalOpenButton');
const ChildbearingPeriodModalCloseButton = document.getElementById('ChildbearingPeriodModalCloseButton');
const ChildbearingPeriodModal = document.getElementById('ChildbearingPeriodModal');

// 열기
ChildbearingPeriodModalOpenButton.addEventListener('click', () => {
  ChildbearingPeriodModal.classList.remove('hidden');
  });

  // 닫기
  ChildbearingPeriodModalCloseButton.addEventListener('click', () => {
    ChildbearingPeriodModal.classList.add('hidden');
  });

  document.getElementById('ChildbearingPeriodForm').addEventListener('submit', () => {
    const period = parseInt(document.getElementById('ChildbearingPeriod').value) // 생리주기
    const StartDay = new Date(document.getElementById('LastChildbearingPeriod').value); // 시작일
    const EndDay = new Date(document.getElementById('LastChildbearingPeriod').value); // 종료일

    childbearingPeriod(period, StartDay, EndDay);
  });





//////////////////////////////////////////////////////////////////////////////////////////////
// 정상체중 계산기

const NormalWeightModalOpenButton = document.getElementById('NormalWeightModalOpenButton');
const NormalWeightModalCloseButton = document.getElementById('NormalWeightModalCloseButton');
const NormalWeightModal = document.getElementById('NormalWeightModal');

// 열기
NormalWeightModalOpenButton.addEventListener('click', () => {
  NormalWeightModal.classList.remove('hidden');
  });

  // 닫기
  NormalWeightModalCloseButton.addEventListener('click', () => {
    NormalWeightModal.classList.add('hidden');
  });

  // 정상 체중 계산 버튼 이벤트
  document.getElementById('NormalWeightForm').addEventListener('submit', () => {
    const height = parseFloat(document.getElementById('NormalWeightHeight').value); // cm
    let changeHeight = parseFloat(height/100); // m로 변환 

    normalWeight(height, changeHeight);
  });





/////////////////////////////////////////////////////////////////////////////////////////
// 목표 심박수 계산기
const TargetHeartRateModalOpenButton = document.getElementById('TargetHeartRateModalOpenButton');
const TargetHeartRateModalCloseButton = document.getElementById('TargetHeartRateModalCloseButton');
const TargetHeartRateModal = document.getElementById('TargetHeartRateModal');

// 열기
TargetHeartRateModalOpenButton.addEventListener('click', () => {
  TargetHeartRateModal.classList.remove('hidden');
  });

  // 닫기
  TargetHeartRateModalCloseButton.addEventListener('click', () => {
    TargetHeartRateModal.classList.add('hidden');
  });

  // 목표 심박수 계산 버튼 이벤트
  document.getElementById('TargetHeartRateForm').addEventListener('submit', () => {
    const age = parseInt(document.getElementById('TargerHeartRateAge').value);

    targetHeartRate(age);
  });
    


///////////////////////////////////////////////////////////////////////////////////////
// 나이 계산기
const AgeModalOpenButton = document.getElementById('AgeModalOpenButton');
const AgeModalCloseButton = document.getElementById('AgeModalCloseButton');
const AgeModal = document.getElementById('AgeModal');


// 모달 열기
AgeModalOpenButton.addEventListener('click', () => {
  AgeModal.classList.remove('hidden');
});

// 모달 닫기
AgeModalCloseButton.addEventListener('click', () => {
  AgeModal.classList.add('hidden');
});

// 나이 계산하기
document.getElementById('AgeForm').addEventListener('submit', (e) => {
  const birth = parseInt(document.getElementById('birth').value);
  const Age = getAge(birth);

  alert("당신의 나이는 만 " + Age + "세 입니다.")
});




///////////////////////////////////////////////////////////////////////////////////////
// 날짜 계산기
// const DayModalOpenButton = document.getElementById('DayModalOpenButton');
// const DayModalCloseButton = document.getElementById('DayModalCloseButton');
// const DayModal = document.getElementById('AgeModal');


// // 모달 열기
// DayModalOpenButton.addEventListener('click', () => {
//   DayModal.classList.remove('hidden');
// });

// // 모달 닫기
// DayModalCloseButton.addEventListener('click', () => {
//   DayModal.classList.add('hidden');
// });

// // 날짜 계산하기
// document.getElementById('DayForm').addEventListener('submit', (e) => {

//   alert("");
// });



///////////////////////////////////////////////////////////////////////////////////////
// 온도 변환 계산기
const TempConversionModalOpenButton = document.getElementById('TempConversionModalOpenButton');
const TempConversionModalCloseButton = document.getElementById('TempConversionModalCloseButton');
const TempConversionModal = document.getElementById('TempConversionModal');


// 모달 열기
TempConversionModalOpenButton.addEventListener('click', () => {
  TempConversionModal.classList.remove('hidden');
});

// 모달 닫기
TempConversionModalCloseButton.addEventListener('click', () => {
  TempConversionModal.classList.add('hidden');
});

// 온도 변환 계산하기
document.getElementById('TempConversionForm').addEventListener('submit', () => {
  const temp = parseInt(document.getElementById('TempConversion').value); // 온도
  const checkedRadio = document.querySelector('input[type=radio][name="Temp"]:checked').value; // 단위

  tempConversion(temp, checkedRadio);

});



///////////////////////////////////////////////////////////////////////////////////////
// 거리 계산기
const DistanceModalOpenButton = document.getElementById('DistanceModalOpenButton'); // 거리 계산기 모달 오픈 버튼
const DistanceModalCloseButton = document.getElementById('DistanceModalCloseButton'); // 거리 계산기 모달 닫기 버튼
const DistanceModal = document.getElementById('DistanceModal'); // 거리 계산기 모달창


// 모달 열기
DistanceModalOpenButton.addEventListener('click', () => {
  DistanceModal.classList.remove('hidden');
});

// 모달 닫기
DistanceModalCloseButton.addEventListener('click', () => {
  DistanceModal.classList.add('hidden');
  
});

// 거리 계산하기
document.getElementById('DistanceForm').addEventListener('submit', (e) => {
  const x1 = parseInt(document.getElementById('DistanceX1').value); // 시작점 x좌표 값
  const y1 = parseInt(document.getElementById('DistanceY1').value); // 시작점 y좌표 값
  const x2 = parseInt(document.getElementById('DistanceX2').value); // 끝점 x좌표 값
  const y2 = parseInt(document.getElementById('DistanceY2').value); // 끝끝점 x좌표 값

  const distance = getDistance(x1, y1, x2, y2);

  alert(distance);

});


///////////////////////////////////////////////////////////////////////////////////////
// 이자 계산기
const LoanModalOpenButton = document.getElementById('LoanModalOpenButton'); // 거리 계산기 모달 오픈 버튼
const LoanModalCloseButton = document.getElementById('LoanModalCloseButton'); // 거리 계산기 모달 닫기 버튼
const LoanModal = document.getElementById('LoanModal'); // 거리 계산기 모달창


// 모달 열기
LoanModalOpenButton.addEventListener('click', () => {
  LoanModal.classList.remove('hidden');
});

// 모달 닫기
LoanModalCloseButton.addEventListener('click', () => {
  LoanModal.classList.add('hidden');
  return;
});

// 이자 계산하기
document.getElementById('LoanForm').addEventListener('submit', (e) => {
  const loanAmount = parseInt(document.getElementById('loanAmount').value); // 금액
  const interestRate = parseInt(document.getElementById('interestRate').value); // 이자율
  const period = parseInt(document.getElementById('period').value); // 기간
 

  calculateLoanPayment(loanAmount, interestRate, period);

});




///////////////////////////////////////////////////////////////////////////////////////
// 내 공인 IP 주소 확인하기
document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("IpCheckCard");
  const modal = document.getElementById("IpModal");
  const closeBtn = document.getElementById("CloseModalBtn");
  const ipSpan = document.getElementById("ip");

  openBtn.addEventListener("click", async () => {
    modal.classList.remove("hidden");
    ipSpan.textContent = "조회 중...";
    const ip = await getIp();
    ipSpan.textContent = ip || "IP를 가져올 수 없습니다.";
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
});