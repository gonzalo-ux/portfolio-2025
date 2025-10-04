import svgPaths from "./svg-fu3ulr3piv";

function Frame17() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',_sans-serif] font-normal gap-[36px] items-start leading-[0] not-italic relative shrink-0 text-nowrap text-white w-full">
      <div className="relative shrink-0 text-[0px]">
        <p className="leading-[normal] text-[13px] text-nowrap tracking-[0.26px] whitespace-pre">
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">Linkedin</span>
          <span>{` | `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">Resume</span>
        </p>
      </div>
      <div className="relative shrink-0 text-[13px] tracking-[0.26px]">
        <p className="[text-underline-position:from-font] decoration-solid leading-[normal] text-nowrap underline whitespace-pre">hello@gonzalo.com</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[36px] items-start left-[32px] opacity-70 top-[160px] w-[640px]">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[57px] text-white tracking-[1.14px] uppercase w-full">
        <p className="leading-[normal]">Gonzalo Vasquez</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[36px] text-white tracking-[0.72px] w-full">
        <p className="mb-0">{`Sr. Product designer `}</p>
        <p>specialised in Design systems</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[normal] mb-0 tracking-[0.32px]">Senior product designer based in Dublin, Ireland.</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p className="leading-[normal] mb-0 tracking-[0.32px]">Currently I work at Zalando as part of the design system team supporting and enabling around 200 designers and 500 engineers.</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p className="leading-[normal] tracking-[0.32px]">
          <span>{`Take a look at some recent `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">work</span>
          <span>{`, enjoy one of my `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">articles</span>
          <span>{` and `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">talks</span>
          <span>{`, or feel free to `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">get in touch</span>.
        </p>
      </div>
      <Frame17 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute h-[300px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[400px]">
      <div className="absolute h-[284.499px] left-[113.3px] top-[8px] w-[283.017px]" data-name="image 5" />
      <div className="absolute h-[284.499px] left-[4px] top-[8px] w-[116.22px]" data-name="image 6" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute bg-[#2b2b2b] h-[300px] left-[24px] rounded-[12px] top-[905px] w-[400px]">
      <div aria-hidden="true" className="absolute border border-[#1a1a1a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame15 />
    </div>
  );
}

function Links() {
  return (
    <div className="absolute content-stretch flex font-['Inter:Regular',_sans-serif] font-normal gap-[24px] items-center leading-[0] left-[82px] not-italic text-[16px] text-nowrap text-white top-[4px]" data-name="Links">
      <div className="relative shrink-0">
        <p className="[text-underline-position:from-font] decoration-solid leading-[24px] text-nowrap underline whitespace-pre">Work</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[24px] text-nowrap whitespace-pre">Talks</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[24px] text-nowrap whitespace-pre">Articles</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[24px] text-nowrap whitespace-pre">About me</p>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute bottom-0 left-0 right-[97.37%] top-0" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_7_129)" id="logo">
          <path d={svgPaths.p4692480} id="Vector" stroke="var(--stroke-0, #008CFF)" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_7_129">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Linkedin() {
  return (
    <div className="absolute left-[944px] size-[24px] top-[4px]" data-name="linkedin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="linkedin">
          <path d={svgPaths.p30958080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6 9H2V21H6V9Z" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1bb3a100} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Mail() {
  return (
    <div className="absolute left-[1016px] size-[24px] top-[4px]" data-name="mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mail">
          <path d={svgPaths.p1d50cd00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M22 6L12 13L2 6" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Mode() {
  return (
    <div className="absolute left-[1192px] size-[24px] top-[4px]" data-name="mode">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_7_109)" id="mode">
          <path d={svgPaths.pee04100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 1V3" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 21V23" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M4.21973 4.22L5.63973 5.64" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M18.3604 18.36L19.7804 19.78" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M1 12H3" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M21 12H23" id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M4.21973 19.78L5.63973 18.36" id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M18.3604 5.64L19.7804 4.22" id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_7_109">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Links />
      <Logo />
      <Linkedin />
      <Mail />
      <Mode />
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] items-start left-0 px-[32px] py-[16px] top-0 w-[1280px]" data-name="Navbar">
      <Container />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[48px] items-center left-1/2 top-[4px] translate-x-[-50%]">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">{`Website design and content  © 2025 Gonzalo Vásquez`}</p>
      </div>
    </div>
  );
}

function Linkedin1() {
  return (
    <div className="absolute inset-[12.5%_97.7%_12.5%_0.33%]" data-name="linkedin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="linkedin">
          <path d={svgPaths.p30958080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6 9H2V21H6V9Z" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1bb3a100} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Mail1() {
  return (
    <div className="absolute inset-[12.5%_94%_12.5%_4.03%]" data-name="mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mail">
          <path d={svgPaths.p1d50cd00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M22 6L12 13L2 6" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[32px] relative shrink-0 w-full">
      <Frame3 />
      <Linkedin1 />
      <Mail1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-[#2f2f2f] bottom-0 box-border content-stretch flex flex-col gap-[10px] items-start left-0 px-[32px] py-[16px] w-[1280px]">
      <Frame4 />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#1a1a1a] relative size-full" data-name="Home">
      <div className="absolute h-[679px] left-0 opacity-5 top-[60px] w-[1280px]" data-name="image 10" />
      <div className="absolute h-[679px] left-0 top-[1725px] w-[1280px]" data-name="image 11" />
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[85px] not-italic opacity-50 text-[44px] text-center text-nowrap text-white top-[750.35px] translate-x-[-50%]">
        <p className="leading-[normal] whitespace-pre">Work</p>
      </div>
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[86px] not-italic opacity-50 text-[44px] text-center text-nowrap text-white top-[1382px] translate-x-[-50%]">
        <p className="leading-[normal] whitespace-pre">Talks</p>
      </div>
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[111px] not-italic opacity-50 text-[44px] text-center text-nowrap text-white top-[3486px] translate-x-[-50%]">
        <p className="leading-[normal] whitespace-pre">Articles</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[32px] not-italic text-[28px] text-nowrap text-white top-[1477px]">
        <p className="leading-[normal] whitespace-pre">Config 2024, San Francisco U.S.A.</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[32px] not-italic text-[28px] text-nowrap text-white top-[2481px]">
        <p className="leading-[normal] whitespace-pre">Schema 2022, London U.K.</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[32px] not-italic text-[28px] text-nowrap text-white top-[1511px]">
        <p className="leading-[normal] whitespace-pre">Delivering a multi-sub-brand design system for e-commerce</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[32px] not-italic text-[28px] text-nowrap text-white top-[2515px]">
        <p className="leading-[normal] whitespace-pre">Delivering a multi-sub-brand design system for e-commerce</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[32px] not-italic text-[16px] text-white top-[1557px] w-[774px]">
        <p className="leading-[24px]">In 2023 the Zalando design system went through a huge revamp of its foundations to support an increasing need for more variation in the visual language. This transformation was driven by Zalando’s multi proposition strategy through which they aim to differentiate experiences like Fashion, Beauty or Premium/Designer and tailor them based on their specific needs through Themes. In this talk, the Zalando team want to take you through their journey of developing the capabilities while crafting the first new theme.</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[16px] text-white top-[1229px] w-[400px]">
        <p className="mb-0">Design tokens and multi theme architecture</p>
        <p>Zalando - 2023</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-[441px] not-italic text-[16px] text-white top-[1229px] w-[400px]">
        <p className="mb-0">Unified documentation</p>
        <p>Zalando - 2024</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-[857px] not-italic text-[16px] text-white top-[1229px] w-[400px]">
        <p className="mb-0">Designer theme</p>
        <p>Zalando - 2023</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[32px] not-italic text-[16px] text-white top-[816px] w-[611px]">
        <p className="leading-[24px]">
          <span>{`Most of my work is under NDA. If you want to know more about some projects, feel free to `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">reach out</span>.
        </p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[32px] not-italic text-[16px] text-white top-[2561px] w-[774px]">
        <p className="leading-[24px]">In 2023 the Zalando design system went through a huge revamp of its foundations to support an increasing need for more variation in the visual language. This transformation was driven by Zalando’s multi proposition strategy through which they aim to differentiate experiences like Fashion, Beauty or Premium/Designer and tailor them based on their specific needs through Themes. In this talk, the Zalando team want to take you through their journey of developing the capabilities while crafting the first new theme.</p>
      </div>
      <Frame1 />
      <div className="absolute h-[679.516px] left-1/2 top-[2729px] translate-x-[-50%] w-[1280px]" data-name="image 3" />
      <Frame16 />
      <div className="absolute bg-[#2b2b2b] h-[300px] left-[440.58px] rounded-[12px] top-[905px] w-[400px]" />
      <div className="absolute bg-[#2b2b2b] h-[300px] right-[22.85px] rounded-[12px] top-[905px] w-[400px]" />
      <Navbar />
      <Frame6 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[32px] not-italic text-[20px] text-white top-[3563px] w-[479px]">
        <p className="[text-underline-position:from-font] decoration-solid leading-[24px] underline">Bringing more character to the Zalando Design System with theming</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[32px] not-italic text-[20px] text-white top-[3727px] w-[479px]">
        <p className="[text-underline-position:from-font] decoration-solid leading-[24px] underline">{`Design Tokens on your Design System `}</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[32px] not-italic text-[20px] text-white top-[3843px] w-[479px]">
        <p className="[text-underline-position:from-font] decoration-solid leading-[24px] underline">{`De Chile a Irlanda como UX (spanish) `}</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[32px] not-italic text-[14px] text-white top-[3619px] w-[479px]">
        <p className="leading-[24px]">Senior Product Designer Gonzalo Vasquez shares how the Zalando Design System team built theming capabilities for our Fashion Store and what they learnt from the process.</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[32px] not-italic text-[14px] text-white top-[3759px] w-[479px]">
        <p className="leading-[24px]">If you are starting to work on a Design System, consider make a pause and define your Design Tokens first.</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[32px] not-italic text-[14px] text-white top-[3875px] w-[479px]">
        <p className="leading-[24px]">Consejos para profesionales que buscan relocación en Europa.</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[32px] not-italic text-[14px] text-nowrap text-white top-[3923px]">
        <p className="[text-underline-position:from-font] decoration-solid leading-[24px] underline whitespace-pre">All articles</p>
      </div>
    </div>
  );
}