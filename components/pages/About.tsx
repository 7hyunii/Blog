import { Github, Mail, Linkedin } from 'lucide-react';

export function About() {
  return (
    <div>
      <div className="mb-10 sm:mb-12 lg:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          About
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          안녕하세요, 개발자입니다
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8 sm:mb-10 lg:mb-14">
          <h2 className="text-xl sm:text-2xl lg:text-3xl tracking-tight mb-4 sm:mb-5 text-gray-100">소개</h2>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
            프론트엔드부터 백엔드까지, 웹 개발 전반에 관심이 많은 개발자입니다.
            새로운 기술을 배우고 실제 프로젝트에 적용하는 것을 좋아합니다.
          </p>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            이 블로그는 제가 공부하며 배운 것들을 정리하고 기록하는 공간입니다.
            글을 쓰면서 배운 내용을 더 깊이 이해하고, 언젠가 비슷한 문제를 만났을 때
            다시 참고할 수 있도록 만들었습니다.
          </p>
        </section>

        <section className="mb-8 sm:mb-10 lg:mb-14">
          <h2 className="text-xl sm:text-2xl lg:text-3xl tracking-tight mb-4 sm:mb-5 text-gray-100">관심사</h2>
          <ul className="space-y-2 sm:space-y-2.5 lg:space-y-3">
            {[
              'React, TypeScript를 활용한 프론트엔드 개발',
              '사용자 경험(UX)을 고려한 인터페이스 설계',
              'Clean Code와 좋은 설계 패턴',
              '성능 최적화와 웹 접근성',
              '지속 가능한 개발 문화'
            ].map((item, idx) => (
              <li key={idx} className="flex gap-2 sm:gap-2.5 lg:gap-3 text-gray-400 text-sm sm:text-base leading-relaxed">
                <span className="text-blue-400 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8 sm:mb-10 lg:mb-14">
          <h2 className="text-xl sm:text-2xl lg:text-3xl tracking-tight mb-4 sm:mb-5 text-gray-100">기술 스택</h2>
          
          <div className="mb-5 sm:mb-6 lg:mb-8">
            <h3 className="text-base sm:text-lg lg:text-xl tracking-tight mb-3 sm:mb-4 text-gray-200">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Zustand'].map(tech => (
                <span key={tech} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-lg text-blue-300 tracking-tight text-xs sm:text-sm shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-5 sm:mb-6 lg:mb-8">
            <h3 className="text-base sm:text-lg lg:text-xl tracking-tight mb-3 sm:mb-4 text-gray-200">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Express', 'PostgreSQL', 'REST API'].map(tech => (
                <span key={tech} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg text-green-300 tracking-tight text-xs sm:text-sm shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg lg:text-xl tracking-tight mb-3 sm:mb-4 text-gray-200">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {['Git', 'GitHub', 'VS Code', 'Figma'].map(tech => (
                <span key={tech} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg text-purple-300 tracking-tight text-xs sm:text-sm shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl p-5 sm:p-6 lg:p-8 border border-gray-800">
          <h2 className="text-xl sm:text-2xl lg:text-3xl tracking-tight mb-4 sm:mb-5 lg:mb-6 text-gray-100">Contact</h2>
          <div className="flex flex-col gap-3 sm:gap-3.5 lg:gap-4">
            <a 
              href="mailto:your@email.com"
              className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-all group"
            >
              <div className="w-9 sm:w-10 h-9 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow transition-all flex-shrink-0">
                <Mail className="w-4 h-4" strokeWidth={2} />
              </div>
              <span className="text-sm sm:text-base tracking-tight truncate">your@email.com</span>
            </a>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-all group"
            >
              <div className="w-9 sm:w-10 h-9 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow transition-all flex-shrink-0">
                <Github className="w-4 h-4" strokeWidth={2} />
              </div>
              <span className="text-sm sm:text-base tracking-tight">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-all group"
            >
              <div className="w-9 sm:w-10 h-9 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow transition-all flex-shrink-0">
                <Linkedin className="w-4 h-4" strokeWidth={2} />
              </div>
              <span className="text-sm sm:text-base tracking-tight">LinkedIn</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}