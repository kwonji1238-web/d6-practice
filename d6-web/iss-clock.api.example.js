// 이 파일은 견본이다. 복사해서 iss-clock.api.js로 만들고 "여기에_"로 시작하는 값을 채운다. (iss-clock.api.js는 git 제외)
// iss-clock.html이 메인 스크립트보다 먼저 불러온다. 값을 채우지 않으면 화면에 "API 설정 파일이 없어요" 안내가 뜬다.
"use strict";

// 🔌 API 주소: 값을 바꾸면 화면 내용이 바뀐다
const API = {
  now: "여기에_ISS_지금_위치_주소",              // 🔌 ISS 지금 위치 (키가 필요 없는 공개 API만)
  positions: "여기에_ISS_지난_위치_주소",        // 🔌 ISS 지난 위치 (?timestamps=… 를 화면이 붙인다)
  intervalMs: 5000,        // 🔌 자동 갱신 간격
  maxBackoffMs: 60000,     // 🔌 실패가 이어질 때 재시도 간격 상한 (호출 제한 429 대비)
  timeoutMs: 8000,         // 🔌 응답 대기 한도
  historyStepSec: 300,     // 🔌 지난 궤적 점 간격(초)
  historyCount: 19,        // 🔌 지난 궤적 점 개수 (19점 × 5분 = 95분)
  perCall: 10,             // 🔌 한 번에 물을 수 있는 시각 개수(문서상 한도)
  historyRetryMs: 60000    // 🔌 지난 궤적 실패 후 다시 시도하기까지 기다리는 시간
};
