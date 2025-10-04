import svgPaths from "./imports/svg-qj1idrm187";

function Frame35() {
  return (
    <div className="absolute h-[684px] left-[292px] top-[566px] w-[1216px]">
      <div className="absolute h-[684px] left-0 rounded-[12px] top-0 w-[1216px]" data-name="image 10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
          <video 
            className="absolute h-[103.8%] left-[-7.05%] max-w-none top-0 w-[110.07%] object-cover rounded-[12px]"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="src/assets/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

function Links() {
  return (
    <div className="absolute content-stretch flex font-['Lato:Regular',_sans-serif] gap-[24px] items-center leading-[0] left-[82px] not-italic text-[16px] text-nowrap text-white top-[4px]" data-name="Links">
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
        <g clipPath="url(#clip0_13_267)" id="logo">
          <g id="Vector">
            <mask fill="white" id="path-1-inside-1_13_267">
              <path clipRule="evenodd" d={svgPaths.p3c291500} fillRule="evenodd" />
            </mask>
            <path d={svgPaths.p346fe580} fill="var(--stroke-0, #008CFF)" mask="url(#path-1-inside-1_13_267)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_13_267">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ULinkedin() {
  return (
    <div className="absolute left-[1096px] size-[24px] top-[4px]" data-name="u:linkedin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="u:linkedin">
          <path d={svgPaths.p276eae00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Mail() {
  return (
    <div className="absolute left-[1144px] size-[24px] top-[4px]" data-name="mail">
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
        <g clipPath="url(#clip0_13_270)" id="mode">
          <path d={svgPaths.pee04100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 1V3" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 21V23" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M4.21875 4.22L5.63875 5.64" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M18.3594 18.36L19.7794 19.78" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M1 12H3" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M21 12H23" id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M4.21875 19.78L5.63875 18.36" id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M18.3594 5.64L19.7794 4.22" id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_13_270">
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
      <ULinkedin />
      <Mail />
      <Mode />
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] items-start left-[260px] px-[32px] py-[16px] top-0 w-[1280px]" data-name="Navbar">
      <Container />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[36px] items-start relative shrink-0 w-full">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[0px] text-nowrap text-white">
        <p className="leading-[normal] text-[16px] whitespace-pre">
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid text-white tracking-[0.32px] underline">Linkedin</span>
          <span className="text-white tracking-[0.32px]">{`  •  `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid text-white tracking-[0.32px] underline">Resume</span>
          <span className="tracking-[0.32px]">{`  •  `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">hello@gonzalo.com</span>
        </p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute bg-[#2c2c2c] box-border content-stretch flex flex-col gap-[4px] items-start left-[292px] p-[8px] rounded-[4px] top-[445px]">
      <Frame17 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute h-[300px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[400px]">
      <div className="absolute h-[284.499px] left-[113.3px] top-[8px] w-[283.017px] bg-gray-600 rounded" data-name="image 5" />
      <div className="absolute h-[284.499px] left-[4px] top-[8px] w-[116.22px] bg-gray-600 rounded" data-name="image 6" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute bg-[#2b2b2b] h-[366px] left-[292px] rounded-[12px] top-[1492px] w-[600px]">
      <div aria-hidden="true" className="absolute border border-[#1a1a1a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame15 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute h-[300px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[400px]">
      <div className="absolute h-[284.499px] left-[113.3px] top-[8px] w-[283.017px] bg-gray-600 rounded" data-name="image 5" />
      <div className="absolute h-[284.499px] left-[4px] top-[8px] w-[116.22px] bg-gray-600 rounded" data-name="image 6" />
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute bg-[#2b2b2b] h-[366px] left-[292px] rounded-[12px] top-[2011px] w-[600px]">
      <div aria-hidden="true" className="absolute border border-[#1a1a1a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame18 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute h-[300px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[400px]">
      <div className="absolute h-[284.499px] left-[113.3px] top-[8px] w-[283.017px] bg-gray-600 rounded" data-name="image 5" />
      <div className="absolute h-[284.499px] left-[4px] top-[8px] w-[116.22px] bg-gray-600 rounded" data-name="image 6" />
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute bg-[#2b2b2b] h-[366px] left-[908px] rounded-[12px] top-[1492px] w-[600px]">
      <div aria-hidden="true" className="absolute border border-[#1a1a1a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame19 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute h-[300px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[400px]">
      <div className="absolute h-[284.499px] left-[113.3px] top-[8px] w-[283.017px] bg-gray-600 rounded" data-name="image 5" />
      <div className="absolute h-[284.499px] left-[4px] top-[8px] w-[116.22px] bg-gray-600 rounded" data-name="image 6" />
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute bg-[#2b2b2b] h-[366px] left-[908px] rounded-[12px] top-[2011px] w-[600px]">
      <div aria-hidden="true" className="absolute border border-[#1a1a1a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame20 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute h-[684px] left-[292px] top-[3001px] w-[1216px]">
      <div className="absolute h-[684px] left-0 rounded-[12px] top-0 w-[1216px]" data-name="image 10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
          <div className="absolute h-[101.69%] left-[-3.71%] max-w-none top-[-1.1%] w-[107.92%] bg-gray-700 rounded-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute h-[684px] left-[292px] top-[4078px] w-[1216px]">
      <div className="absolute h-[684px] left-0 rounded-[12px] top-0 w-[1216px]" data-name="image 10">
        <div className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full bg-gray-700" />
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute h-[684px] left-[292px] top-[5181px] w-[1216px]">
      <div className="absolute h-[684px] left-0 rounded-[12px] top-0 w-[1216px]" data-name="image 10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
          <div className="absolute h-[129.75%] left-0 max-w-none top-[-12.36%] w-full bg-gray-700 rounded-[12px]" />
        </div>
      </div>
      <div className="absolute bg-black h-[36px] left-[24px] top-[553px] w-[185px]" />
    </div>
  );
}

function UArrowCircleDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="u:arrow-circle-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="u:arrow-circle-down">
          <path d={svgPaths.p24570b00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-[292px] top-[524px]">
      <UArrowCircleDown />
      <div className="font-['Lato:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.32px]">
        <p className="[text-underline-position:from-font] decoration-solid leading-[24px] underline whitespace-pre">Explore my work</p>
      </div>
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

function ULinkedin1() {
  return (
    <div className="absolute bottom-[12.5%] left-0 right-[98.03%] top-[12.5%]" data-name="u:linkedin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="u:linkedin">
          <path d={svgPaths.p276eae00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Mail1() {
  return (
    <div className="absolute inset-[12.5%_94.08%_12.5%_3.95%]" data-name="mail">
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
    <div className="h-[32px] relative shrink-0 w-[1216px]">
      <Frame3 />
      <ULinkedin1 />
      <Mail1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-[#2f2f2f] bottom-0 box-border content-stretch flex flex-col gap-[10px] items-center left-0 px-[32px] py-[16px] w-full">
      <Frame4 />
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-[#1a1a1a] relative min-w-[1800px] h-[7000px] mx-auto" data-name="+1280">
      <Frame35 />
      
      {/* Hero Section */}
      <div className="absolute font-['Lato:Bold',_sans-serif] leading-[0] left-[292px] not-italic text-[76px] text-white top-[117px] tracking-[1.52px] uppercase w-[395px]">
        <p className="leading-[1.03]">Gonzalo Vasquez</p>
      </div>
      <div className="absolute font-['Lato:Regular',_sans-serif] leading-[0] left-[704px] not-italic text-[#919191] text-[46px] top-[122px] tracking-[0.92px] w-[599px]">
        <p className="leading-[1.06]">Creative design systems technologist, mentor and speaker.</p>
      </div>
      
      <Navbar />
      <Frame25 />
      
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[292px] not-italic text-[#aeaaaa] text-[0px] top-[317px] w-[1011px]">
        <p className="font-['Lato:Regular',_sans-serif] leading-[28px] mb-0 text-[18px]">
          <span>{`Sr. Product designer `}</span>
          <span className="text-white">specialised in Design systems</span>
          <span>{` based in Dublin, Ireland. I currently work at Zalando as part of the design system team `}</span>
          <span className="text-white">supporting and enabling around 200 designers and 500 engineers</span>.
        </p>
        <p className="leading-[28px] text-[18px] tracking-[0.36px]">
          <span className="font-['Lato:Regular',_sans-serif] text-[#aeaaaa]">{`Take a look at some of my recent `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Lato:Bold',_sans-serif] text-white underline">work</span>
          <span className="font-['Lato:Regular',_sans-serif] text-[#aeaaaa]">{`, enjoy one of my `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Lato:Bold',_sans-serif] text-white underline">talks</span>
          <span className="font-['Lato:Regular',_sans-serif] text-white"> </span>
          <span className="font-['Lato:Regular',_sans-serif]">and</span>
          <span className="font-['Lato:Regular',_sans-serif] text-[#aeaaaa]"> </span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Lato:Bold',_sans-serif] text-white underline">articles</span>
          <span className="font-['Lato:Regular',_sans-serif] text-[#aeaaaa]">{`, or feel free to `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Lato:Bold',_sans-serif] text-white underline">get in touch</span>
          <span className="font-['Lato:Regular',_sans-serif] text-[#aeaaaa]">.</span>
        </p>
      </div>
      
      {/* Work Section */}
      <div className="absolute font-['Lato:Bold',_sans-serif] leading-[0] left-[353.5px] not-italic text-[48px] text-center text-nowrap text-white top-[1370px] translate-x-[-50%]">
        <p className="leading-[normal] whitespace-pre">Work</p>
      </div>
      
      {/* Work Projects */}
      <div className="absolute font-['Lato:Bold',_sans-serif] leading-[0] left-[292px] not-italic text-[24px] text-nowrap text-white top-[1874px]">
        <p className="leading-[normal] whitespace-pre">Design tokens and multi theme architecture</p>
      </div>
      <div className="absolute font-['Lato:Bold',_sans-serif] leading-[0] left-[911px] not-italic text-[24px] text-white top-[1874px] w-[400px]">
        <p className="leading-[normal]">Unified documentation</p>
      </div>
      <div className="absolute font-['Lato:Bold',_sans-serif] leading-[0] left-[292px] not-italic text-[24px] text-white top-[2393px] w-[400px]">
        <p className="leading-[normal]">Designer theme</p>
      </div>
      <div className="absolute font-['Lato:Bold',_sans-serif] leading-[0] left-[911px] not-italic text-[24px] text-white top-[2393px] w-[400px]">
        <p className="leading-[normal]">ZDS plugins and tooling</p>
      </div>
      
      {/* Work Descriptions */}
      <div className="absolute font-['Lato:Regular',_sans-serif] leading-[0] left-[292px] not-italic text-[#aeaaaa] text-[18px] top-[1915px] w-[546px]">
        <p className="leading-[28px]">A global solution to enable theming to all Zalando premises from a single set of tokens configuration for Web, iOS, Android and Figma.</p>
      </div>
      <div className="absolute font-['Lato:Regular',_sans-serif] leading-[0] left-[292px] not-italic text-[#aeaaaa] text-[18px] top-[2434px] w-[510px]">
        <p className="leading-[28px]">The first internal brand theme built on to of our design tokens and theming solution.</p>
      </div>
      <div className="absolute font-['Lato:Regular',_sans-serif] leading-[0] left-[908px] not-italic text-[#aeaaaa] text-[18px] top-[2434px] w-[562px]">
        <p className="leading-[28px]">A collection of automation tooling to manage tokens migration, documentation and tokens sync with our Style dictionary configuration.</p>
      </div>
      <div className="absolute font-['Lato:Regular',_sans-serif] leading-[0] left-[908px] not-italic text-[#aeaaaa] text-[18px] top-[1915px] w-[510px]">
        <p className="leading-[28px]">An internal tailored product to manage documentation for the Design system and Brand team.</p>
      </div>
      
      {/* Work Cards */}
      <Frame16 />
      <Frame28 />
      <Frame27 />
      <Frame29 />
      <Frame32 />
      <Frame33 />
      <Frame34 />
      
      {/* Talks Section */}
      <div className="absolute font-['Lato:Bold',_sans-serif] leading-[0] left-[346.5px] not-italic text-[48px] text-center text-nowrap text-white top-[2598px] translate-x-[-50%]">
        <p className="leading-[normal] whitespace-pre">Talks</p>
      </div>
      
      <div className="absolute font-['Lato:Regular',_sans-serif] leading-[0] left-[292px] not-italic opacity-50 text-[28px] text-nowrap text-white top-[2779px]">
        <p className="leading-[normal] whitespace-pre">Config 2024, San Francisco U.S.A.</p>
      </div>
      <div className="absolute font-['Lato:Regular',_sans-serif] leading-[0] left-[292px] not-italic opacity-50 text-[28px] text-nowrap text-white top-[3866px]">
        <p className="leading-[normal] whitespace-pre">Schema 2022, London U.K.</p>
      </div>
      <div className="absolute font-['Lato:Regular',_sans-serif] leading-[0] left-[292px] not-italic opacity-50 text-[28px] text-nowrap text-white top-[4943px]">
        <p className="leading-[normal] whitespace-pre">Garaje Inspirational Fest 2025, Spain (online)</p>
      </div>
      
      <div className="absolute font-['Lato:Regular',_sans-serif] leading-[0] left-[292px] not-italic opacity-50 text-[22px] text-nowrap text-white top-[3701px]">
        <p className="leading-[normal] whitespace-pre">Gonzalo Vasquez, Leonie Proske, Sheryl Bagga</p>
      </div>
      <div className="absolute font-['Lato:Regular',_sans-serif] leading-[0] left-[292px] not-italic opacity-50 text-[22px] text-nowrap text-white top-[4778px]">
        <p className="leading-[normal] whitespace-pre">Gonzalo Vasquez, Leonie Proske</p>
      </div>
      
      <div className="absolute font-['Lato:SemiBold',_sans-serif] leading-[0] left-[292px] not-italic text-[36px] text-nowrap text-white top-[2720px]">
        <p className="[text-underline-position:from-font] decoration-solid leading-[normal] underline whitespace-pre">Delivering a multi-sub-brand design system for e-commerce</p>
      </div>
      <div className="absolute font-['Lato:SemiBold',_sans-serif] leading-[0] left-[292px] not-italic text-[36px] text-nowrap text-white top-[3807px]">
        <p className="[text-underline-position:from-font] decoration-solid leading-[normal] underline whitespace-pre">Navigating complex system updates</p>
      </div>
      <div className="absolute font-['Lato:SemiBold',_sans-serif] leading-[0] left-[292px] not-italic text-[36px] text-nowrap text-white top-[4884px]">
        <p className="[text-underline-position:from-font] decoration-solid leading-[normal] underline whitespace-pre">Introducción al pensamiento en sistemas (Systems thinking)</p>
      </div>
      <div className="absolute font-['Lato:SemiBold',_sans-serif] leading-[0] left-[292px] not-italic text-[36px] text-nowrap text-white top-[5945px]">
        <p className="leading-[normal] whitespace-pre">Other talks</p>
      </div>
      
      {/* Talk Descriptions */}
      <div className="absolute font-['Lato:Regular',_sans-serif] leading-[0] left-[292px] not-italic text-[18px] text-white top-[2837px] w-[1011px]">
        <p className="leading-[28px]">In 2023 the Zalando design system went through a huge revamp of its foundations to support an increasing need for more variation in the visual language. This transformation was driven by Zalando's multi proposition strategy through which they aim to differentiate experiences like Fashion, Beauty or Premium/Designer and tailor them based on their specific needs through Themes. In this talk, the Zalando team want to take you through their journey of developing the capabilities while crafting the first new theme.</p>
      </div>
      <div className="absolute font-['Lato:Regular',_sans-serif] leading-[0] left-[292px] not-italic text-[18px] text-white top-[3924px] w-[1011px]">
        <p className="leading-[26px]">{`Zalando is a leading European online platform for fashion and lifestyle. In such a large scale organisation, we are used to dealing with a lot of complexity. For our design system team, this means supporting 50+ teams and counting more than 140k component inserts per week. Updating one core component can require cross library changes while small enhancements have a huge potential to accelerate designers' workflow. Based on one example, we are excited to share how branching, contribution processes and custom built tools help us navigate system updates in close collaboration with embedded teams.`}</p>
      </div>
      <div className="absolute font-['Lato:Regular',_sans-serif] leading-[26px] left-[292px] not-italic text-[18px] text-white top-[5001px] w-[1011px]">
        <p className="mb-0">A talk about why the ability of systems thinking is critical for designers and professionals working in technology. We will delve into how this skill allows us to see problems comprehensively, and the importance of understanding the relationships between the interacting parts of a system.</p>
        <p className="mb-0">&nbsp;</p>
        <p>We will analyze how the world is formed by systems, flows, stocks, and feedback loops, and how we can make use of these concepts to intervene in systems and produce better outcomes.</p>
      </div>
      
      {/* Articles Section */}
      <div className="absolute font-['Lato:Bold',_sans-serif] leading-[0] left-[376px] not-italic text-[48px] text-center text-nowrap text-white top-[6276px] translate-x-[-50%]">
        <p className="leading-[normal] whitespace-pre">Articles</p>
      </div>
      
      <div className="absolute font-['Lato:Regular',_sans-serif] leading-[0] left-[292px] not-italic text-[28px] text-nowrap text-white top-[6398px]">
        <p className="[text-underline-position:from-font] decoration-solid leading-[normal] underline whitespace-pre">Bringing more character to the Zalando Design System with theming</p>
      </div>
      <div className="absolute font-['Lato:Regular',_sans-serif] leading-[0] left-[292px] not-italic text-[28px] text-white top-[6544px] w-[479px]">
        <p className="[text-underline-position:from-font] decoration-solid leading-[normal] underline">{`Design Tokens on your Design System `}</p>
      </div>
      <div className="absolute font-['Lato:Regular',_sans-serif] leading-[0] left-[292px] not-italic text-[28px] text-nowrap text-white top-[6666px]">
        <p className="[text-underline-position:from-font] decoration-solid leading-[normal] underline whitespace-pre">{`De Chile a Irlanda como UX (spanish) `}</p>
      </div>
      
      <div className="absolute font-['Lato:Regular',_sans-serif] leading-[0] left-[292px] not-italic text-[18px] text-white top-[6448px] w-[822px]">
        <p className="leading-[24px]">Senior Product Designer Gonzalo Vasquez shares how the Zalando Design System team built theming capabilities for our Fashion Store and what they learnt from the process.</p>
      </div>
      <div className="absolute font-['Lato:Regular',_sans-serif] leading-[0] left-[292px] not-italic text-[18px] text-nowrap text-white top-[6594px]">
        <p className="leading-[24px] whitespace-pre">If you are starting to work on a Design System, consider make a pause and define your Design Tokens first.</p>
      </div>
      <div className="absolute font-['Lato:Regular',_sans-serif] leading-[0] left-[292px] not-italic text-[18px] text-nowrap text-white top-[6716px]">
        <p className="leading-[24px] whitespace-pre">Consejos para profesionales que buscan relocación en Europa.</p>
      </div>
      <div className="absolute font-['Lato:Regular',_sans-serif] leading-[0] left-[292px] not-italic text-[28px] text-nowrap text-white top-[6788px]">
        <p className="[text-underline-position:from-font] decoration-solid leading-[normal] underline whitespace-pre">All articles</p>
      </div>
      
      {/* Other Talks List */}
      <div className="absolute font-['Lato:Regular',_sans-serif] leading-[0] left-[292px] not-italic text-[28px] text-nowrap text-white top-[6012px]">
        <ul className="css-ed5n1g list-disc">
          <li className="leading-[48px] mb-0 ms-[42px]">
            <span>{`Inspect & Reflect: Monday.com's Vibe Design System`}</span>
            <span>{` | 2025`}</span>
          </li>
          <li className="leading-[48px] mb-0 ms-[42px]">
            <span>{`Inspect & Reflect: Uber.com's Base Design System`}</span>
            <span>{` | 2025`}</span>
          </li>
          <li className="leading-[48px] ms-[42px]">
            <span className="[text-underline-position:from-font] decoration-solid underline">{`Design Systems Community: `}</span>Adopción de los sistemas de diseño (Spanish)<span>{` | 2022`}</span>
          </li>
        </ul>
      </div>
      
      <Frame24 />
      <Frame6 />
    </div>
  );
}