// 나이 계산
export function calculateAge(birth){
    let today = new Date();
    let birthday = new Date(birth)
    let todayMMDD = today.getMonth()*100 + today.getDate();
    let birthMMDD = birthday.getMonth()*100 + birthday.getDate();
    let yourAge = today.getFullYear() - birthday.getFullYear();


    if (birthday > today) {
        alert("생일이 오늘 이후일 수 없습니다.");
        return ;
      }

    if(todayMMDD - birthMMDD < 0){
        yourAge -= 1;
    }

    return ("당신의 만 나이는 "+ yourAge+"살 입니다.");

    
}

// let test1 = document.querySelector(".test1")
// let test2 = document.querySelector(".test2")
// let AgeForm = document.getElementById('AgeForm');


// AgeForm.addEventListener("submit", function(){
//     age(test2.value);
//     alert("")
// });



