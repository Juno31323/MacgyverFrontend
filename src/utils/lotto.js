export function generateLotto() {
    let ball = [];

    // 1~45 채우기
    for (let i = 0; i < 45; i++) {
        ball[i] = i + 1;
    }



    // const result = ball.slice(0, 6).sort((a, b) => a - b);

    // 애니메이션용 가짜 번호 돌리기


    let animationCount = 0; // 로또가 몇 번 나왔나 체크하는 변수
    // 차례대로 나오게 하려고 인터벌 씀
    const interval = setInterval(function() {
        let temp = [];
        while (temp.length < 6) {
            let random = Math.floor(Math.random() * 45) + 1;
            if (!temp.includes(random)) {
                temp.push(random);
            }
        }

        // 결과 출력
        document.getElementById('lottoResult').innerText = `추첨 중: ${temp.join(', ')}`;
        // 돌 때마다 횟수 증가
        animationCount++;

        // 애니메이션 종료
        if (animationCount >= 20) {
            clearInterval(interval);

            // 실제 로또 뽑기 반복문
            for (let i = 0; i < 6; i++) {
                let j = Math.floor(Math.random() * 45);
                [ball[i], ball[j]] = [ball[j], ball[i]];
            }

            const result = ball.slice(0, 6).sort((a, b) => a - b);

            document.getElementById('lottoResult').innerText = `추첨 결과: ${result.join(', ')}`;
            saveLotto(result);
        }
    }, 100);
    // 인터벌 끝
}

// 이전 결과 저장 배열
const historyList = [];

function saveLotto(result) {
    historyList.unshift(result);

    if (historyList.length > 5) {
        historyList.pop();
    }
    showHistory();
}

// 저장 결과 보여주기
function showHistory() {
    const saveBox = document.getElementById("lottoHistory");
    saveBox.innerHTML = '';

    historyList.forEach(function(nums, idx) {
        const div = document.createElement('div');
        div.textContent = (idx + 1) + '회차: ' + nums.join(', ');

        saveBox.appendChild(div);
    })
}