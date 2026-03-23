import type { Dictionary } from "./en";

const ko: Dictionary = {
  // Navbar
  nav: {
    metrics: "성과",
    services: "서비스",
    workflow: "워크플로우",
    caseStudies: "사례 연구",
    skills: "스킬",
    trackRecord: "실적",
    pricing: "요금",
    contact: "문의",
    getQuote: "견적 받기",
  },

  // Hero
  hero: {
    badge: "새 프로젝트 수주 가능",
    name: "Andrew, Yu",
    subtitle: "한국어 로컬라이제이션,",
    subtitleHighlight: "개발자 수준의",
    subtitleEnd: "정밀함",
    description:
      "개발팀과 한국 시장 사이의 간극을 메워드립니다. 단순한 번역이 아닌 — 빌드를 깨뜨리지 않는 기술적 로컬라이제이션을 제공합니다.",
    ctaCaseStudies: "사례 연구 보기",
    ctaPricing: "요금 확인",
  },

  // Metrics
  metrics: {
    tag: "실적",
    title: "숫자로 증명하는 성과",
    description: "추정이 아닌, 실제 프로덕션 로컬라이제이션 작업의 측정 가능한 결과입니다.",
    cards: [
      {
        unit: "년",
        subtitle: "지속적인 협업",
        description: "2023년부터 Tiimo ApS와 장기 파트너십",
      },
      {
        unit: "크래시",
        subtitle: "포맷 관련 오류",
        description: "24개월 이상 로컬라이제이션으로 인한 런타임 오류 제로",
      },
      {
        unit: "플랫폼",
        subtitle: "iOS, Android, Web",
        description: "모든 사용자 접점에서 일관된 품질",
      },
      {
        unit: "검증완료",
        subtitle: "실기기 테스트",
        description: "모든 문자열을 실제 앱 UI에서 출시 전 테스트",
      },
    ],
  },

  // Pillars
  pillars: {
    tag: "차별화 요소",
    title: "번역 그 이상",
    description:
      "일반 번역가는 텍스트를 납품합니다. 저는 개발 워크플로우에 원활하게 통합되는 프로덕션 준비 로컬라이즈드 에셋을 납품합니다.",
    items: [
      {
        title: "기술적 이해",
        description:
          "문자열뿐만 아니라 코드베이스를 읽습니다. 포맷 지정자, 복수형 규칙, 플랫폼별 제약 조건을 이해하여 로컬라이제이션으로 인한 크래시를 방지합니다.",
        checklist: [
          "플랫폼별 플레이스홀더 관리 (iOS: %@, Android: %1$s)",
          "ICU MessageFormat 처리",
          "API 연동 (Lokalise, Localazy, Localizely)",
          "의미 있는 커밋으로 버전 관리",
        ],
        tags: ["문자열 보간", "복수형 규칙", "포맷 지정자"],
      },
      {
        title: "문맥 인식 로컬라이제이션",
        description:
          "한국어 경어법, 텍스트 길이 확장, 문화적 뉴앙스를 정밀하게 처리합니다. 사전적 정의가 아닌 UI 문맥을 고려합니다.",
        checklist: [
          "번역 전 UI 문맥 확인",
          '이중 의미 단어 해소 ("Plan" 예시)',
          "직역 번역 대신 자연스러운 한국어 표현",
          "제품 변경사항 추적 (Plan 탭 → Today 탭)",
        ],
        tags: ["경어법", "문화적 뉴앙스", "길이 제약"],
      },
      {
        title: "UI/UX 테스트",
        description:
          "모든 번역은 실제 디바이스에서 문맥 내에서 검증됩니다. 텍스트 잘림, 레이아웃 오버플로우, 엣지 케이스를 사용자가 보기 전에 잡아냅니다.",
        checklist: [
          "플랫폼이 아닌 실제 앱에서 모든 문자열 테스트",
          "실제 iOS 디바이스에서 레이아웃 검증",
          "다중 문맥 문자열 검증",
          "한국어 텍스트 확장에 대한 길이 최적화",
        ],
        tags: ["디바이스 테스트", "레이아웃 QA", "스크린샷 리뷰"],
      },
      {
        title: "개발자 워크플로우",
        description:
          "CI/CD 파이프라인에 직접 통합됩니다. 풀 리퀘스트, 브랜치 기반 워크플로우, 자동화 우선 배포로 수동 파일 관리가 필요 없습니다.",
        checklist: [
          "구조화된 커밋을 통한 Git 기반 워크플로우",
          "프로젝트별 용어집 및 문맥 문서",
          "자동화된 포맷 검증",
          "번역 플랫폼 API 스크립팅",
        ],
        tags: ["CI/CD", "Git 워크플로우", "API 연동"],
      },
    ],
  },

  // Workflow
  workflow: {
    tag: "작업 방식",
    title: "로컬라이제이션 워크플로우",
    description:
      "개발 주기에 직접 통합되는 구조화된 반복 가능한 프로세스입니다. 각 단계를 클릭하여 세부 사항을 확인하세요.",
    steps: [
      {
        title: "문맥 파악",
        details: [
          "영어로 앱 설치 및 사용",
          "사용자 여정 문서화",
          "모호한 용어 식별",
          "기존 번역 검토",
        ],
      },
      {
        title: "기술적 검증",
        details: [
          "플랫폼별 포맷 확인 (iOS/Android)",
          "ICU MessageFormat 구문 검증",
          "플레이스홀더 보존 테스트",
          "API 문서 검토",
        ],
      },
      {
        title: "번역 + 테스트",
        details: [
          "로컬라이제이션 플랫폼에서 번역",
          "TestFlight 빌드에서 테스트",
          "실제 디바이스에서 UI 레이아웃 검증",
          "다중 문맥 문자열 재사용 확인",
        ],
      },
      {
        title: "개발자 협업",
        details: [
          "구조화된 메시지로 커밋",
          "용어집에 변경사항 문서화",
          "삭제 예정 문자열 플래그",
          "사전적인 기능 업데이트",
        ],
      },
      {
        title: "지속적 유지보수",
        details: [
          '제품 변경사항 추적 (예: "Plan" → "Today" 탭)',
          "FAQ/문서 업데이트",
          "사용자 피드백 모니터링",
          "분기별 품질 감사",
        ],
      },
    ],
  },

  // Case Studies
  caseStudies: {
    tag: "Before / After 예시",
    title: "번역 vs. 로컬라이제이션",
    description:
      "앱을 망가뜨리는 것과 한국 사용자를 만족시키는 것의 차이는 단어 지식이 아닌 문맥 이해에 달려 있습니다.",
    tabs: {
      precision: "기술적 정밀함",
      cultural: "문화적 적응",
      disambiguation: "의미 해소",
      conciseness: "간결성",
    },
    englishSource: "영문 소스:",
    whyItMatters: "중요한 이유",
    impact: "영향",
    studies: {
      precision: {
        title: "기술적 정밀함",
        context: "iOS 문자열 포맷팅",
        commentBefore: "// 구분자 변경으로 일관성 깨짐",
        commentAfter: "// 정확한 포맷 마커 보존",
        checks: ["3/3 포맷 지정자 보존", "구분자 문자 일관성 유지", "NSString 포맷 규칙 대비 검증"],
      },
      cultural: {
        title: "문화적 적응",
        context: "루틴 계획용 태스크 템플릿",
        codeComment: "// 태스크 템플릿 문자열",
        literalTranslation: "직역",
        machineOutput: "기계 번역 결과",
        contextAware: "문맥 인식",
        humanLocalization: "사람이 한 로컬라이제이션",
      },
      disambiguation: {
        title: "의미 해소",
        context: '두 가지 문맥에서 사용된 "Plan"',
        codeComment: "// 여러 UI 위치에서 사용",
        problem: "같은 영어 단어, 다른 의미 — 요금제 페이지: 구독 등급 vs. 앱 기능: 일정/계획",
        contextDependent: "문맥 의존적 해결",
        subscriptionContext: "구독 문맥",
        planningContext: "계획 문맥",
      },
      conciseness: {
        title: "간결성",
        context: "공간 제약이 있는 버튼 텍스트",
        challenge:
          "한국어 텍스트는 일반적으로 영어보다 1.3–1.5배 깁니다. 버튼 텍스트는 UI에 맞아야 합니다.",
        overflow: "오버플로우",
        fits: "적합",
        before: "수정 전",
        after: "수정 후",
      },
    },
  },

  // Skills
  skills: {
    tag: "기술 도구",
    title: "스킬 및 도구",
    description:
      "프로덕션 준비 한국어 로컬라이제이션을 위해 매일 사용하는 플랫폼, 포맷, 워크플로우입니다. 각 스킬 위에 마우스를 올려 자세히 알아보세요.",
    categories: {
      localizationPlatforms: "로컬라이제이션 플랫폼",
      technicalFormats: "기술 포맷",
      developerTools: "개발자 도구",
      qualityAssurance: "품질 보증",
    },
  },

  // Track Record
  trackRecord: {
    tag: "입증된 결과",
    title: "입증된 실적",
    description:
      "신경다양성 사용자를 위한 생산성 앱에 프로덕션 급 한국어 로컬라이제이션을 제공하는 장기 파트너십.",
    keyAchievements: "주요 성과",
    achievementsSubtitle: "진행 중인 프로덕션 파트너십의 측정 가능한 결과",
    achievements: [
      "2년 이상 포맷 관련 크래시 제로",
      "4.5+ 별점 평가와 긍정적인 로컬라이제이션 피드백",
      "사전 품질 관리: Android 문자열 삭제 후 플래그",
      "팀 효율성: 한국어 재검토 없이 배포",
      "문서화: 용어집 및 문맥 가이드라인 유지",
    ],
    platformsManaged: "관리 플랫폼",
    platforms: [
      { name: "Localise.biz", role: "주요" },
      { name: "Localazy", role: "보조" },
      { name: "Contentful CMS", role: "웹 콘텐츠" },
    ],
    ndaNotice:
      "NDA로 보호되는 코드베이스가 포함된 작업입니다. 여기에 제시된 방법론과 품질 기준은 모든 협업에 적용 가능합니다.",
    scopeLabels: {
      platforms: "플랫폼",
      duration: "기간",
      crashes: "크래시",
      rating: "평점",
    },
    scopeValues: {
      platforms: "3",
      duration: "2년+",
      crashes: "0",
      rating: "4.5+",
    },
  },

  // Pricing
  pricing: {
    tag: "요금",
    title: "투명하고 확장 가능한 요금제",
    description:
      "릴리스 주기와 팀 규모에 맞는 플랜을 선택하세요. 모든 플랜에 포맷 검증 및 기술 QA가 포함됩니다.",
    mostPopular: "가장 인기",
    getStarted: "시작하기",
    contactMe: "문의하기",
    tiers: [
      {
        name: "Starter",
        description: "첫 한국어 릴리스를 준비하는 인디 개발자 및 소규모 팀을 위한 플랜.",
        price: "$0.08",
        unit: "/단어",
        features: [
          "기술 검토 포함 한국어 번역",
          "포맷 지정자 검증",
          "월 최대 5,000단어",
          "7일 내 완료",
          "1회 수정 포함",
          "이메일 지원",
        ],
      },
      {
        name: "Pro",
        description:
          "주간 배포하며 워크플로우에 통합된 로컬라이제이션 파트너가 필요한 팀을 위한 플랜.",
        price: "$0.12",
        unit: "/단어",
        features: [
          "Starter의 모든 기능 포함:",
          "Git/CI 파이프라인 통합",
          "문맥 내 UI/UX 리뷰",
          "48시간 내 완료",
          "무제한 수정",
          "Slack/Teams 우선 지원",
          "월간 용어 보고서",
          "네이버 SEO 최적화",
        ],
      },
      {
        name: "Enterprise",
        description: "복잡하고 규제가 있거나 대량 로컬라이제이션이 필요한 조직을 위한 플랜.",
        price: "별도 문의",
        unit: "",
        features: [
          "Pro의 모든 기능 포함:",
          "전담 계정 매니저",
          "맞춤형 API 연동",
          "규정 준수 검토",
          "온콜 대응",
          "SLA 보장",
          "분기별 비즈니스 리뷰",
          "다국어 조율",
        ],
      },
    ],
  },

  // Contact
  contact: {
    tag: "연락하기",
    title: "함께 한국어를 십합시다",
    description: "프로젝트에 대해 알려주시면 24시간 이내에 맞춤형 제안서를 보내드립니다.",
    form: {
      name: "이름",
      namePlaceholder: "이름을 입력하세요",
      email: "이메일",
      emailPlaceholder: "you@company.com",
      company: "회사 / 앱 이름",
      companyPlaceholder: "Acme Inc.",
      platform: "플랫폼",
      details: "프로젝트 세부사항",
      detailsPlaceholder: "앱 소개, 예상 단어 수, 일정, 특수 기술 요구사항 등을 알려주세요...",
      submit: "메시지 보내기",
    },
    success: {
      title: "메시지 전송 완료",
      description:
        "문의해 주셔서 감사합니다! 프로젝트 세부사항을 검토한 후 24시간 이내에 답변드리겠습니다.",
      sendAnother: "다시 보내기",
    },
    calendly: {
      title: "디스커버리 콜 예약",
      description:
        "직접 대화를 선호하시나요? 30분 통화를 예약하여 프로젝트 요구사항과 워크플로우를 논의하세요.",
      button: "Calendly에서 예약",
    },
    directContact: {
      title: "직접 연락",
      email: "hello@koreanlocalize.dev",
      location: "서울, 대한민국 (KST / UTC+9)",
      responseTime: "24시간 이내 응답",
    },
    toolsTitle: "사용 도구",
  },

  // Footer
  footer: {
    tagline: "Next.js로 만들고. 정성을 담아 로컬라이즈.",
  },
};

export default ko;
