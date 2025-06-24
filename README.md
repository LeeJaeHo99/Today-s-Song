<p align="center">
  <img src="https://github.com/user-attachments/assets/f939d121-6997-408d-8a60-8b5179c81cc4" width="120"/>
</p>
<h2 align="center">오느래노래</h1>

### 목차
- [프로젝트 소개](#프로젝트-소개)
- [사용 기술 및 이유](#프로젝트-소개)
- [트러블 슈팅](#프로젝트-소개)
- [성과 및 배운점](#프로젝트-소개)

## 📍 프로젝트 소개
<a href="www.todayssong.co.kr" target="blank">www.todayssong.co.kr</a>
<p>기여도: 100%</p>
<p align="center">
  <img src="https://github.com/user-attachments/assets/f4ab2679-6146-43ed-baf3-cd82bcb70d59" width="800"/>
</p>
<p align="center">(메인 페이지)</p>
<p>하루의 시작과 끝을 음악으로 채우는 감성적인 웹 서비스 <strong>"오느래 노래"</strong> 입니다.</p>
<p>아침, 저녁마다 자동으로 곡이 갱신되며, 사용자들은 각 노래에 대한 감상평을 남길 수 있으며, 자신이 원하는 노래를 신청할 수 있습니다.</p>

## 📍 사용 기술 및 이유
<p>
  <img src="https://github.com/user-attachments/assets/382dea93-0af9-4e8a-8d17-364780745d36" width="48">
  <strong>Next JS</strong>
</p>
<p>다양한 사용자들이 이용했으면 하는 마음에 NextJS의 <strong>SSR</strong> 기능을 사용하여, <strong>SEO 최적화</strong>와 <strong>빠른 초기 렌더링속도</strong>를 위해 선택했습니다.</p>
<p>실제로 성능 최적화를 통해 FCP는 <strong>0.2초까지 단축</strong>되었습니다.</p>

<p>
  <img src="https://github.com/user-attachments/assets/6a9b273e-d93a-40f9-8a9e-3a956bc2648b" width="48">
  <strong>TypeScript</strong>
</p>
<p>정적 타입 시스템을 가진 타입스크립트를 사용하면서, 개발 중이나 빌드시에 <strong>오류를 쉽게 찾아내었습니다.</strong></p>
<p>그렇게 런타임시 발생하는 오류를 줄여 <strong>안정적인 코드를 작성</strong>할 수 있었습니다.</p>

<p>
  <img src="https://github.com/user-attachments/assets/89b94b53-0144-429c-b70f-55ef625e1c0f" width="48">
  <strong>Zustand</strong>
</p>
<p>Context API, Redux 등 이전에 사용했던 상태관리 라이브러리와 비교하여, Zustand는 <strong>코드 가독성</strong>이 뛰어난 부분이 마음에 들었고,</p>
<p>또한, 상태가 변경될 때 해당 상태를 사용하는 컴포넌트만 리렌더링되어, <strong>성능면에서 효율</strong>적인 라이브러리라고 생각해 선택했습니다.</p>

<p>
  <img src="https://github.com/user-attachments/assets/4c1052bc-fe92-491c-a35b-14050adf13ac" width="48">
  <strong>Tanstack Query</strong>
</p>
<p>이전에 추천된 음악을 소개하는 페이지가 존재하는데, 추후 서비스 기간이 길어지게 된다면 <strong>한번에 많은 양의 데이터</strong>를 가져오느라 해당 <strong>페이지의 진입 속도가 매우 느릴것 같다</strong>는 고민을 했습니다.</p>
<p>그래서 무한 스크롤을 이용해, 첫 진입 시 몇개의 데이터만 불러오고, 이후 사용자가 스크롤시 데이터를 추가로 불러오는 방식으로 구현했습니다.</p>
<p>현재는 데이터 양이 적어, 큰 효과를 보이고 있진 않지만, <strong>시간이 지날 수록 데이터 양이 증가하면 더욱 효과적</strong>일 것 같다고 생각하여 선택했습니다.</p>

<p>
  <img src="https://github.com/user-attachments/assets/78e19658-3cdb-4325-84aa-7b26a30e1068" width="48">
  <strong>Mongo DB</strong>
</p>
<p>MongoDB는 JSON 기반 구조로, 프론트엔드에서 다루는 객체와 거의 동일하게 데이터를 저장할 수 있어서 <strong>초기 개발속도가 빠르고</strong>, 구조 변경이 용이하다는 점이 유용하다 생각되어 선택하게 되었습니다.</p>

## 📍 트러블 슈팅

### 🔥 Youtube iframe 로딩 이슈 🔥
<p><strong>문제 상황</strong></p>
<ul>
  <li>음악 재생 버튼을 클릭해도 간헐적으로 <strong>재생이 되지 않는 현상</strong>이 발생했습니다.</li>
  <li>데이터 페칭 로직은 정상적으로 동작하고 있었으며, 콘솔 오류 메시지나 네트워크 이슈도 전혀 발견되지 않았습니다.</li>
  <li>DB에서 받아온 영상 정보에는 문제가 없어, 문제의 <strong>원인을 Youtube Iframe 로딩으로 좁혀 확인</strong>하게 되었습니다.</li>
</ul>
<p><strong>원인 분석</strong></p>
<ul>
  <li>Youtube Iframe API는 비동기적으로 로드되기 때문에, API가 아직 로드되지 않은 상태에서 playVideo()를 호출하면 영상이 재생되지 않는다는 점을 확인했습니다.</li>
  <li>실제로 대기 후 재생하면 정상 작동하는 것을 통해,API 로딩 타이밍 이슈임을 확신할 수 있었습니다.</li>
  <li>이와 함께, Youtube Iframe은 <strong>웹 성능을 저하시킨 주요 원인</strong> 중 하나였으며, 해당 문제는 후속적인 웹 성능 최적화 과정에서도 중점적으로 다뤄졌습니다.</li>
</ul>
<p><strong>해결 과정</strong></p>
<ul>
  <li>사용자 접속 시, Youtube Iframe이 로드되기 전까지는 빈 화면이 출력되지 않도록 하고, 로딩 상태를 명확하게 인지할 수 있도록 <strong>로딩 컴포넌트를 제공</strong>하였습니다.</li>
  <li>이후 API가 완전히 로드된 후에만 음악이 재성되도록 하여, 재생 실패 없이 <strong>안정적인 음악 재생이 가능</strong>하도록 구조를 개선하였습니다.</li>
</ul>
<p><strong>결과</strong></p>
<ul>
  <li>사용자가 재생 버튼을 눌렀을 때 영상이 재생되지 않는 오류가 재현되지 않게 되었고, 음악 재생에 대한 안정성이 확보되었습니다.</li>
  <li>해당 개선은 <strong>웹 성능 최적화에도 긍정적인 영향</strong>을 주었으며, <strong>사용자 경험 향상</strong>에도 기여했습니다.</li>
</ul>

### 🔥 웹 성능 최적화 🔥
<p><strong>문제 상황</strong></p>
<img src="https://github.com/user-attachments/assets/dd1f0fea-626a-4fb6-8d76-06e2d55b8d64" width="480">
<img src="https://github.com/user-attachments/assets/5061c4ac-fa9e-4347-822b-229ab4ab30cf" width="560">

<ul>
  <li>배포 전 웹 성능 점검 도중, 예상보다 전반적인 웹 성능 지표가 낮게 측정되는 현상을 확인했습니다.</li>
  <li>Youtube Iframe이 성능에 영향을 줄 수 있다는 점은 예상했지만, <strong>다양한 요소가 복합적으로 성능 저하를 유발</strong>하고 있었습니다.</li>
</ul>
<p><strong>원인 분석</strong></p>
<ul>
  <li>Youtube Iframe의 초기 렌더링 지연이 주요 원인이었습니다.</li>
  <li>사용자 인터랙션을 높이기 위해 구현한 과도한 애니메이션 효과가 렌더링 비용을 증가시켰습니다.</li>
  <li>음악 정보는 하루에 두 번만 바뀌지만, 매 접속 시마다 API 요청을 보내는 비효율적인 방식으로 구현되어 있었습니다.</li>
  <li>사용하지 않는 폰트, 불필요한 CSS/JS 코드, 최적화되지 않은 이미지 리소스들이 불필요하게 로딩되고 있었습니다.</li>
</ul>
<p><strong>해결 과정</strong></p>
<ul>
  <li>Youtube Iframe은 퍼사드 패턴을 도입해, 초기에는 썸네일만 노출하고, <strong>재생 버튼 클릭 시에만 실제 Iframe을 로드</strong>하도록 변경하였습니다.</li>
  <li>과도한 <strong>애니메이션은 최소화</strong>하여 불필요한 렌더링을 줄였습니다.</li>
  <li>음악 정보 API 호출은 <strong>ISR 방식으로 변경</strong>하여, 페이지 접근 시마다 네트워크 요청을 보내지 않도록 개선했습니다.</li>
  <li>불필요한 리소스(폰트, CSS, JS, 이미지 등)를 제거하고, 이미지에는 next/image 최적화 전략을 적용하였습니다.</li>
</ul>
<p><strong>결과</strong></p>
<img src="https://github.com/user-attachments/assets/69c8f116-5287-4ac8-a05c-a2dc2668f6f4" width="480">
<img src="https://github.com/user-attachments/assets/0c3f9508-0d43-40b8-a167-d48151e2c5f3" width="560">
<ul>
  <li>PageSpeed Insights 기준 LCP, FCP, CLS 등 주요 <strong>지표가 개선</strong>되었고, 사용자 경험 또한 향상되었습니다.</li>
  <li>초기 페이지 로딩 시간이 <strong>약 2초 단축</strong>되었고, 모바일 기준 평균 성능 점수는 20~30점 가량 향상되었습니다.</li>
  <li>이러한 개선 과정을 통해 <strong>성능 최적화에 대한 인사이트와 실전 경험</strong>을 쌓을 수 있었습니다.</li>
</ul>

## 📍 성과 및 배운점

### ✨ 웹 성능 최적화의 중요성과 실전 적용 경험
<ul>
  <li>예상보다 <strong>복합적인 원인으로 성능이 저하</strong>될 수 있다는 점을 직접 겪으면서, 단순한 기능 구현을 넘어서 사용자 경험 관점에서의 기술 선택과 구조 설계의 중요성을 체감했습니다.</li>
  <li>특히 퍼사드 패턴 도입, 리소스 정리, ISR 적용 등 실질적인 성능 개선 작업을 통해 실제 성능 지표(FCP, LCP 등)와 사용자 체감 속도 모두 향상시키는 경험을 얻었습니다.</li>
</ul>

### ✨ UX 중심 설계 사고 확립
<ul>
  <li>단순히 성능을 개선하는 것을 넘어서, 사용자에게 <strong>명확하게 로딩 상태를 제공</strong>하거나 불필요한 요소는 지연 로딩하는 등 UX 측면의 배려가 중요하다는 점을 학습했습니다.</li>
</ul>

### ✨ 상태 관리, 데이터 전략, 캐싱에 대한 경험 확대
<ul>
  <li>Zustand와 Tanstack Query, ISR을 함께 활용하면서, <strong>상태 관리와 네트워크 요청 효율화</strong>에 대한 감각이 생겼고, 서비스 규모가 커졌을 때를 고려한 구조 설계 경험도 얻게 되었습니다.</li>
</ul>
