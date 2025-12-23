// Mock Data - 실제 배포시에는 Giscus, Utterances 등의 GitHub 기반 댓글 시스템을 사용하세요
export interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
  likes: number;
  replies?: Comment[];
}

export const mockComments: Comment[] = [
  {
    id: 1,
    author: "김개발",
    content: "정말 유익한 글이네요! React 18의 Concurrent Rendering에 대해 이해하는데 많은 도움이 되었습니다.",
    date: "2024-12-21",
    likes: 5,
    replies: [
      {
        id: 2,
        author: "이코딩",
        content: "저도 이 글 보고 프로젝트에 바로 적용해봤어요. 성능이 확실히 개선되더라구요!",
        date: "2024-12-21",
        likes: 2
      }
    ]
  },
  {
    id: 3,
    author: "박프론트",
    content: "useTransition 예제 코드가 특히 도움이 됐습니다. 감사합니다 👍",
    date: "2024-12-22",
    likes: 3
  }
];
