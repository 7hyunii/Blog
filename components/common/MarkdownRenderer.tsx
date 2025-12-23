'use client';

import { type ComponentPropsWithoutRef, useMemo, useSyncExternalStore } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const remarkPlugins = [remarkGfm, remarkMath];
const rehypePlugins = [rehypeKatex];

interface MarkdownRendererProps {
  content: string;
}

type CodeComponentProps = ComponentPropsWithoutRef<'code'> & {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const useIsClient = () =>
  useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const isClient = useIsClient();

  const components = useMemo<Components>(
    () => ({
      h1: ({ children }) => (
        <h1 className="text-2xl sm:text-3xl tracking-tight mt-8 sm:mt-10 mb-4 sm:mb-5 text-gray-100">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-xl sm:text-2xl tracking-tight mt-10 sm:mt-12 mb-3 sm:mb-4 text-gray-100">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-lg sm:text-xl tracking-tight mt-6 sm:mt-8 mb-2 sm:mb-3 text-gray-200">
          {children}
        </h3>
      ),
      h4: ({ children }) => (
        <h4 className="text-base sm:text-lg tracking-tight mt-5 sm:mt-6 mb-2 text-gray-300">
          {children}
        </h4>
      ),
      p: ({ children }) => (
        <p className="mb-4 sm:mb-5 text-gray-400 leading-relaxed text-sm sm:text-base break-words">
          {children}
        </p>
      ),
      ul: ({ children }) => (
        <ul className="space-y-2 my-5 sm:my-6 ml-4 sm:ml-6 break-words">
          {children}
        </ul>
      ),
      ol: ({ children }) => (
        <ol className="space-y-2 my-5 sm:my-6 ml-4 sm:ml-6 list-decimal list-inside break-words">
          {children}
        </ol>
      ),
      li: ({ children }) => (
        <li className="flex gap-2 sm:gap-3 text-gray-400 leading-relaxed text-sm sm:text-base">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 sm:mt-2.5 flex-shrink-0"></span>
          <span className="flex-1">{children}</span>
        </li>
      ),
      code: ({ inline, className, children, ...props }: CodeComponentProps) => {
        const match = /language-(\w+)/.exec(className || '');
        const language = match ? match[1] : '';
        const codeContent = Array.isArray(children) ? children.join('') : children;
        const codeString = String(codeContent ?? '').replace(/\n$/, '');

        if (inline) {
          return (
            <code
              className="bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded text-xs sm:text-sm font-mono"
              {...props}
            >
              {children}
            </code>
          );
        }

        return (
          <div className="my-6 rounded-xl w-full overflow-x-auto bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl shadow-gray-900/20">
            {language && (
              <div className="px-3 sm:px-4 py-2 bg-gray-800/50 border-b border-gray-700/50 text-gray-400 text-xs tracking-wide uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                {language}
              </div>
            )}
            {isClient ? (
              <SyntaxHighlighter
                language={language || 'text'}
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  padding: '1.25rem',
                  background: 'transparent',
                  fontSize: '0.875rem',
                }}
                codeTagProps={{
                  style: {
                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                  },
                }}
              >
                {codeString}
              </SyntaxHighlighter>
            ) : (
              <pre
                className="m-0 px-4 sm:px-5 py-4 text-xs sm:text-sm font-mono text-gray-200 bg-transparent overflow-x-auto"
              >
                {codeString}
              </pre>
            )}
          </div>
        );
      },
      table: ({ children }) => (
        <div className="my-6 sm:my-8 overflow-x-auto rounded-xl border border-gray-800">
          <table className="w-full border-collapse">
            {children}
          </table>
        </div>
      ),
      thead: ({ children }) => (
        <thead className="bg-gray-900/50">
          {children}
        </thead>
      ),
      tbody: ({ children }) => (
        <tbody className="divide-y divide-gray-800">
          {children}
        </tbody>
      ),
      tr: ({ children }) => (
        <tr className="hover:bg-gray-900/30 transition-colors">
          {children}
        </tr>
      ),
      th: ({ children }) => (
        <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm text-gray-300 tracking-tight border-b border-gray-800">
          {children}
        </th>
      ),
      td: ({ children }) => (
        <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-400">
          {children}
        </td>
      ),
      a: ({ href, children }) => (
        <a
          href={href}
          className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/30 hover:decoration-blue-400/50 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-blue-500/50 pl-4 sm:pl-6 my-5 sm:my-6 text-gray-400 italic">
          {children}
        </blockquote>
      ),
      hr: () => (
        <hr className="my-10 sm:my-12 border-gray-800" />
      ),
      strong: ({ children }) => (
        <strong className="text-gray-200">
          {children}
        </strong>
      ),
      em: ({ children }) => (
        <em className="text-gray-300 italic">
          {children}
        </em>
      ),
    }),
    [isClient]
  );

  return (
    <div className="markdown-content w-full max-w-full break-words">
      <ReactMarkdown remarkPlugins={remarkPlugins} rehypePlugins={rehypePlugins} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
