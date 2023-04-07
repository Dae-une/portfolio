import { ProjectType } from "../../../types/type";

const PROJECTS: ProjectType[] = [
  {
    title: "소심한 총무",
    param: "sosim",
    desc: "소심한 성격의 총무들을 위한 벌금 관리 서비스",
    done: [
      { title: "Webpack, Babel, Ts, Eslint, Prettier 세팅" },
      { title: "개발 편의성을 위한 공용 컴포넌트 개발 (모달, 드롭다운, 버튼)" },
      {
        title: "무한 스크롤 개발",
        desc: [
          "페이지네이션 과 무한스크롤 중 디자인 과 사용자의 편의성을 고려 하였을때 무한스크롤이 더 적합하다고 판단",
        ],
      },
      {
        title: "소셜 로그인 (카카오),회원가입,회원 탈퇴 개발",
        desc: [
          "보안성 및 유저의 편의성을 위해 accessToken과 refreshToken을이용",
        ],
      },
      { title: "달력 컴포넌트 개발" },
      { title: "모임 관리 (수정, 탈퇴, 추가) 기능 개발" },
      {
        title:
          "Gtihub Actions를 이용한 CI/CD 자동화 및 CloudFront를 이용한 배포",
      },
    ],

    stacks: [
      "JavaScript",
      "React",
      "TypeScript",
      "Emotion",
      "Recoil",
      "React-Query",
      "Yarn Berry",
    ],
    links: [
      { name: "GitHub Repo", url: "https://github.com/so-sim/front" },
      { name: "사이트 바로가기", url: "https://sosim-manager.com/" },
    ],
  },
  {
    title: "COPYT",
    param: "copyt",
    desc: "ChatGPT를 활용한 문자 A/B테스트를 제공해주는 서비스",
    done: [
      { title: "Webpack, Babel, Ts, Eslint, Prettier 세팅" },
      {
        title:
          "공용 컴포넌트 개발 (모달, 버튼, 드롭다운, 페이지네이션, 아코디언 컴포넌트 )",
      },
      {
        title: "카피(문자 추천 기능) CRUD, 캠페인(문자 발송 기능) CRUD 개발",
      },
      {
        title:
          "카피 및 캠페인 생성 미완료 시, 모달 및 팝업을 이용하여 실수로 인한 페이지 이탈 방지",
      },
      { title: "로그인, 회원가입 기능 개발" },
      {
        title:
          "Gtihub Actions를 이용한 CI/CD 자동화 및 CloudFront를 이용한 배포",
      },
    ],
    stacks: [
      "JavaScript",
      "React",
      "TypeScript",
      "Styled-component",
      "Recoil",
      "React-Query",
      "Yarn Berry",
    ],
    links: [
      {
        name: "GitHub Repo",
        url: "https://github.com/swcamp-teamP03/COPYT_Frontend",
      },
      { name: "사이트 바로가기", url: "https://copyt.softr.app/" },
    ],
  },
  {
    title: "감정을 먹는 다마고치",
    param: "gamdago",
    desc: "일기를 기록하여 다마고치와 감정을 공유하며 성장시키는 서비스",
    done: [
      {
        title: "메인 화면 개발",
        desc: [
          "다마고치 감정 및 성장 액션 구현",
          "초기엔 WebM을 이용하였으나 아이폰 미 호환 이슈와 용량을 줄이기위해 svg를 이용하여 애니메이션 구현",
          "다마고치 성장률 프로그레스 바 구현",
        ],
      },
    ],
    stacks: ["JavaScript", "React", "TypeScript", "Styled-component", "Recoil"],
    links: [
      {
        name: "GitHub Repo",
        url: "https://github.com/egghit/gammeokda",
      },
      { name: "사이트 바로가기", url: "https://gammeokda.vercel.app/" },
    ],
  },
  {
    title: "개인 블로그",
    param: "blog",
    desc: "개인 공부 기록 저장소",
    done: [
      { title: "mdx 를 html로 변환하여 게시글 작성" },
      {
        title: "Giscus를 이용한 댓글 기능",
      },
      {
        title: "Table of Contents 를 이용하여 목차를 한 눈에 볼 수 있도록 구현",
      },
      {
        title: "검색 기능 및 태그 별 조회 기능 ",
      },
      { title: "모바일 반응형 디자인 적용" },
    ],
    stacks: ["JavaScript", "React", "TypeScript", "Emotion", "Next.Js"],
    links: [
      {
        name: "GitHub Repo",
        url: "https://github.com/Dae-une/Daeeun.dev",
      },
      { name: "사이트 바로가기", url: "https://daeeun-dev.vercel.app/" },
    ],
  },
  {
    title: "포트폴리오 사이트",
    param: "portfolio",
    desc: "포트폴리오 웹 사이트",
    done: [{ title: "마우스 스크롤을 이용한 애니메이션 구현" }],
    stacks: [
      "JavaScript",
      "React",
      "TypeScript",
      "@Vanilla-extract",
      "Next.Js",
    ],
    links: [
      {
        name: "GitHub Repo",
        url: "https://github.com/Dae-une/portfolio",
      },
      {
        name: "사이트 바로가기",
        url: "https://portfolio-two-theta-38.vercel.app/",
      },
    ],
  },
  {
    title: "당프소 클론 코딩",
    param: "daangpso",
    desc: "당근마켓 프로덕트 디자이너 채용 사이트 클론 코딩",
    done: [{ title: "마우스 스크롤을 이용한 애니메이션 구현" }],
    stacks: ["JavaScript", "React", "Emotion", "Next.Js"],
    links: [
      {
        name: "GitHub Repo",
        url: "https://github.com/Dae-une/daangn_product-designer_clone",
      },
    ],
  },
  {
    title: "Weekly Run",
    param: "weekly_run",
    desc: "러닝 기록 및 공유 SNS 서비스",
    done: [
      { title: "Team Leader, PM" },
      {
        title: "Webpack, TS , Eslint, Prettier, PWA 세팅",
      },
      {
        title: "소셜 로그인 (카카오) 개발",
      },
      {
        title: "러닝 기록 CRUD, 댓글 CURD 기능 개발",
      },
      {
        title: "랭킹 시스템 개발",
      },
      {
        title: "추천 검색어 기능",
        desc: ["디바운스를 이용하여 불필요하거나, 과도한 요청 방지"],
      },
      {
        title:
          "Gtihub Actions를 이용한 CI/CD 자동화 및 CloudFront를 이용한 배포",
      },
    ],
    stacks: [
      "JavaScript",
      "React",
      "React-Query",
      "Recoil",
      "Yarn Berry",
      "Styled-components",
    ],
    links: [
      {
        name: "GitHub Repo",
        url: "https://github.com/Dae-une/WeeklyRun-FE",
      },
      {
        name: "Demo",
        url: "https://www.youtube.com/watch?v=wmHWVBSeeHE",
      },
    ],
  },
];

export default PROJECTS;
