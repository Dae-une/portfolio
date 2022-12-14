const projects = [
  {
    project: "가계부 및 일정관리 웹앱",
    overall: ["구글 로그인", "가계부 CRUD", "일정 CRUD", "가계부 파이차트"],
    stacks: [
      {
        stack: "React",
        reason:
          "컴포넌트를 이용해서 재사용 가능하며, 논리적으로 파일을 나누어서 개발을 진행할 수 있어 사용했어요.",
      },
      {
        stack: "TypeScript",
        reason:
          "타입을 정의함으로써 인자나 프로터티의 자동완성으로 개발에 편의성을 얻을 수 있으며\n실행 전에 에러를 방지할 수 있어 사용했어요.",
      },
      {
        stack: "Zustand",
        reason:
          "장황한 보일러플레이트 없이, 간편하게 글로벌 스테이트를 관리하며, 데이터를 변환할수 있어 사용했어요.",
      },
      {
        stack: "Emotion",
        reason:
          "컴포넌트 위주의 프로젝트에서 개발 효율성을 중요시 하고, 필요한 CSS 스타일 요소만 로딩하기 때문에 사용했어요.  ",
      },
      {
        stack: "DayJS",
        reason:
          "쉽고 간단하게 Date를 조작할 수 있으며, 불변성을 지니고 있고, 작은 용량을 가지고 있어 사용했어요. ",
      },
      {
        stack: "FireBase",
        reason:
          "간단하게 구글 로그인을 구현할수 있으며, DB를 읽고 쓰기 위해 사용했어요. ",
      },
    ],
    links: [{ name: "GitHub Repo", url: "https://github.com/Dae-une/Ledger" }],
  },
  {
    project: "포트폴리오 사이트",
    overall: ["개인 포트폴리오 사이트", "현재 사이트"],
    stacks: [
      {
        stack: "Next.js",
        reason:
          "페이지의 내용에 변화가 자주 없으며, 정적 사이트로 미리 만들어 빠르게 보여주기 좋은 SSG를 위해 사용했어요.",
      },
      {
        stack: "TypeScript",
        reason:
          "타입을 정의함으로써 인자나 프로터티의 자동완성으로 개발에 편의성을 얻을 수 있으며\n실행 전에 에러를 방지할 수 있어 사용했어요.",
      },
      {
        stack: "@vanilla-extract/css",
        reason:
          "css in js 가 아닌 ts를 이용함으로써 \n작성하는 모든 스타일에 대한 타입 추론이 가능하여 안전한 코드를 위하여 사용했어요. ",
      },
    ],
    links: [
      { name: "GitHub Repo", url: "https://github.com/Dae-une/daeeun.dev" },
    ],
  },
  {
    project: "Weekly Run",
    overall: ["러닝SNS 서비스", "디자이너 1명과 개발자 6명으로 6주 진행"],
    role: [
      "Team Leader",
      "초기 세팅, 런닝 기록 및 공유, 랭킹 시스템, 추천검색어, 댓글 CRUD, 배포 등 담당",
    ],
    stacks: [
      {
        stack: "React-Query",
        reason:
          "작은 사이즈의 프로젝트이긴 하지만, 클라이언트의 복잡도가 높지 않고,\n클라이언트 데이터보단 서버데이터에 높은 비중을 두고 있어 효율적으로 서버데이터를 관리하기 위해 사용했어요.",
      },
      {
        stack: "Recoil",
        reason:
          "리액트 쿼리를 사용함으로써, 클라이언트 데이터를 관리할 툴이 필요해졌어요.\nContext API의 명확한 단점이 존재하여 쉬운 러닝커브와 다양한 데이터 변환이 가능한 Recoil을 채택했어요.",
      },
      {
        stack: "Yarn Berry",
        reason:
          "기존 NPM을 주로 사용하였으나, 의존성 에러 와 node_modules의 비대함이 불편했어요.\nYarn Berry를 사용하여 의존성을 엄격하게 관리하였어요.",
      },
      {
        stack: "broweser-image-compression",
        reason:
          "프로젝트 특성상 많은 이미지를 사용할 수 밖에 없었어요.\n이 때, 이미지의 용량이 크다면 로드 하는데 소요되는 시간이 길어질것으로 예상하여 사이지를 줄여 더 나은 UX를 제공하기 위해 사용했어요.",
      },
      {
        stack: "@lodable/component",
        reason:
          "Code Spitting 을 활용하여, 불필요한 페이지의 컴포넌트까지 읽어오는것을 막아\n초기 로딩속도를 빠르게하여 UX를 높이고 싶어 채택하였어요.",
      },
    ],
    links: [
      {
        name: "GitHub Repo",
        url: "https://github.com/Dae-une/WeeklyRun-FE",
      },
    ],
  },
];

export default projects;
