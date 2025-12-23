import { MessageSquare, ThumbsUp, Reply } from 'lucide-react';
import { useState } from 'react';
import { mockComments, type Comment } from '../../data/mockComments';

export function Comments() {
  const [comments] = useState<Comment[]>(mockComments);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock Data - 실제로는 여기서 댓글을 서버에 전송하거나 GitHub API를 사용합니다
    console.log('New comment:', newComment);
    setNewComment('');
  };

  return (
    <div className="mt-12 sm:mt-20 pt-8 sm:pt-12 border-t border-gray-800">
      <div className="flex items-center gap-2 mb-6 sm:mb-8">
        <MessageSquare className="w-4 sm:w-5 h-4 sm:h-5 text-blue-400" strokeWidth={2} />
        <h3 className="text-xl sm:text-2xl tracking-tight text-gray-100">
          댓글 {comments.length}
        </h3>
      </div>

      {/* 댓글 작성 폼 */}
      <form onSubmit={handleSubmit} className="mb-8 sm:mb-10">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="댓글을 작성해보세요..."
          className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none text-sm leading-relaxed"
          rows={4}
        />
        <div className="flex justify-end mt-3">
          <button
            type="submit"
            disabled={!newComment.trim()}
            className="px-4 sm:px-6 py-2 sm:py-2.5 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-800 disabled:text-gray-600 text-white rounded-lg transition-all shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 disabled:shadow-none text-sm tracking-tight"
          >
            댓글 작성
          </button>
        </div>
      </form>

      {/* 댓글 목록 */}
      <div className="space-y-4 sm:space-y-6">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>

      {/* GitHub 기반 댓글 시스템 안내 */}
      <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-800">
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
          💡 <strong className="text-gray-300">Tip:</strong> GitHub Pages에 배포할 때는{' '}
          <a 
            href="https://giscus.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            Giscus
          </a>
          {' '}또는{' '}
          <a 
            href="https://utteranc.es" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            Utterances
          </a>
          를 연동하여 GitHub Discussions/Issues 기반의 실제 댓글 시스템을 사용할 수 있습니다.
        </p>
      </div>
    </div>
  );
}

interface CommentItemProps {
  comment: Comment;
  isReply?: boolean;
}

function CommentItem({ comment, isReply = false }: CommentItemProps) {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleReply = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock Data - 실제로는 여기서 답글을 서버에 전송합니다
    console.log('Reply:', replyText);
    setReplyText('');
    setShowReplyForm(false);
  };

  return (
    <div className={isReply ? 'ml-8 sm:ml-12' : ''}>
      <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-4 sm:p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 sm:w-9 h-8 sm:h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs sm:text-sm">
                {comment.author.charAt(0)}
              </span>
            </div>
            <div>
              <div className="text-gray-200 text-xs sm:text-sm tracking-tight">
                {comment.author}
              </div>
              <div className="text-gray-600 text-xs">
                {comment.date}
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-400 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">
          {comment.content}
        </p>

        <div className="flex items-center gap-3 sm:gap-4">
          <button className="flex items-center gap-1.5 sm:gap-2 text-gray-500 hover:text-blue-400 transition-colors text-xs">
            <ThumbsUp className="w-3 sm:w-3.5 h-3 sm:h-3.5" strokeWidth={2} />
            <span>{comment.likes}</span>
          </button>
          
          {!isReply && (
            <button
              onClick={() => setShowReplyForm(!showReplyForm)}
              className="flex items-center gap-1.5 sm:gap-2 text-gray-500 hover:text-blue-400 transition-colors text-xs"
            >
              <Reply className="w-3 sm:w-3.5 h-3 sm:h-3.5" strokeWidth={2} />
              <span>답글</span>
            </button>
          )}
        </div>

        {showReplyForm && (
          <form onSubmit={handleReply} className="mt-3 sm:mt-4">
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="답글을 작성하세요..."
              className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none text-xs sm:text-sm"
              rows={3}
            />
            <div className="flex justify-end gap-2 mt-2">
              <button
                type="button"
                onClick={() => setShowReplyForm(false)}
                className="px-3 sm:px-4 py-1.5 sm:py-2 text-gray-500 hover:text-gray-300 transition-colors text-xs"
              >
                취소
              </button>
              <button
                type="submit"
                disabled={!replyText.trim()}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-800 disabled:text-gray-600 text-white rounded-lg transition-all text-xs"
              >
                답글 작성
              </button>
            </div>
          </form>
        )}
      </div>

      {/* 답글 목록 */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
          {comment.replies.map((reply) => (
            <CommentItem key={reply.id} comment={reply} isReply={true} />
          ))}
        </div>
      )}
    </div>
  );
}
