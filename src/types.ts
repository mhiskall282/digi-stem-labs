export interface Lab {
  id: string;
  title: string;
  description: string;
  category: 'physics' | 'chemistry' | 'biology' | 'robotics' | 'computer-science';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // in minutes
  image: string;
}

export interface Certificate {
  id: string;
  title: string;
  issueDate: string;
  labId: string;
  blockchain: string;
  tokenId: string;
}

export interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  likes: number;
  replies: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'educator' | 'researcher';
  institution: string;
  joinDate: string;
  completedLabs: number;
  certificates: number;
  expertise: string[];
  achievements: Achievement[];
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  date?: string;
  icon?: string;
}

export interface Resource {
  id: number;
  title: string;
  type: 'PDF' | 'Video' | 'Course';
  category: string;
  size?: string;
  duration?: string;
  downloads?: number;
  views?: number;
  modules?: number;
  students?: number;
}