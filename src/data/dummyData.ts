// CrickTribe Dummy Data

export interface Player {
  id: string;
  name: string;
  avatar: string;
  role: 'Batsman' | 'Bowler' | 'All-rounder' | 'Wicket-keeper';
  battingStyle: string;
  bowlingStyle: string;
  age: number;
  location: string;
  matches: number;
  runs: number;
  wickets: number;
  highestScore: number;
  bestBowling: string;
  average: number;
  strikeRate: number;
  centuries: number;
  fifties: number;
  ranking: number;
  achievements: string[];
  recentForm: ('W' | 'L' | 'D')[];
}

export interface Team {
  id: string;
  name: string;
  logo: string;
  captain: string;
  captainId: string;
  players: string[];
  wins: number;
  losses: number;
  draws: number;
  nrr: string;
  trophies: number;
  homeGround: string;
}

export interface Match {
  id: string;
  team1: { name: string; logo: string; score?: string; overs?: string };
  team2: { name: string; logo: string; score?: string; overs?: string };
  status: 'live' | 'upcoming' | 'completed';
  matchType: 'T20' | 'ODI' | 'Test' | 'T10';
  ground: string;
  date: string;
  time: string;
  result?: string;
  toss?: string;
  playerOfMatch?: string;
}

export interface Tournament {
  id: string;
  name: string;
  logo: string;
  status: 'ongoing' | 'upcoming' | 'completed';
  teams: number;
  matches: number;
  startDate: string;
  endDate: string;
  format: string;
  prize: string;
  location: string;
}

export interface FeedPost {
  id: string;
  author: string;
  authorAvatar: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  timestamp: string;
  type: 'achievement' | 'match' | 'post';
}

export interface Ground {
  id: string;
  name: string;
  location: string;
  capacity: number;
  image: string;
  rating: number;
}

export interface Commentary {
  over: string;
  ball: number;
  runs: number;
  text: string;
  type: 'normal' | 'wicket' | 'boundary' | 'six';
}

export const players: Player[] = [
  {
    id: '1',
    name: 'Vikram Sharma',
    avatar: '👨‍🦱',
    role: 'Batsman',
    battingStyle: 'Right-handed',
    bowlingStyle: 'Right-arm medium',
    age: 28,
    location: 'Mumbai, India',
    matches: 156,
    runs: 5420,
    wickets: 12,
    highestScore: 167,
    bestBowling: '2/24',
    average: 42.5,
    strikeRate: 138.2,
    centuries: 8,
    fifties: 32,
    ranking: 1,
    achievements: ['Century King', 'MVP 2024', 'Best Batsman', 'Tournament Winner'],
    recentForm: ['W', 'W', 'L', 'W', 'W'],
  },
  {
    id: '2',
    name: 'Arjun Patel',
    avatar: '👨',
    role: 'Bowler',
    battingStyle: 'Left-handed',
    bowlingStyle: 'Left-arm spin',
    age: 25,
    location: 'Ahmedabad, India',
    matches: 134,
    runs: 890,
    wickets: 178,
    highestScore: 45,
    bestBowling: '6/18',
    average: 18.4,
    strikeRate: 95.2,
    centuries: 0,
    fifties: 2,
    ranking: 2,
    achievements: ['Purple Cap', 'Best Bowler 2024', 'Hat-trick Hero'],
    recentForm: ['W', 'W', 'W', 'L', 'W'],
  },
  {
    id: '3',
    name: 'Rohit Malhotra',
    avatar: '🧔',
    role: 'All-rounder',
    battingStyle: 'Right-handed',
    bowlingStyle: 'Right-arm fast',
    age: 30,
    location: 'Delhi, India',
    matches: 189,
    runs: 4200,
    wickets: 145,
    highestScore: 134,
    bestBowling: '5/32',
    average: 35.8,
    strikeRate: 128.5,
    centuries: 5,
    fifties: 28,
    ranking: 3,
    achievements: ['All-rounder Award', 'Match Winner', 'Consistent Performer'],
    recentForm: ['W', 'L', 'W', 'W', 'D'],
  },
  {
    id: '4',
    name: 'Karthik Nair',
    avatar: '👱',
    role: 'Wicket-keeper',
    battingStyle: 'Right-handed',
    bowlingStyle: 'None',
    age: 26,
    location: 'Chennai, India',
    matches: 112,
    runs: 2890,
    wickets: 0,
    highestScore: 98,
    bestBowling: '-',
    average: 32.1,
    strikeRate: 142.8,
    centuries: 0,
    fifties: 22,
    ranking: 4,
    achievements: ['Best Keeper', 'Quick Hands Award', 'Stumping King'],
    recentForm: ['L', 'W', 'W', 'W', 'W'],
  },
  {
    id: '5',
    name: 'Sameer Khan',
    avatar: '🧑',
    role: 'Batsman',
    battingStyle: 'Left-handed',
    bowlingStyle: 'Left-arm orthodox',
    age: 24,
    location: 'Hyderabad, India',
    matches: 98,
    runs: 3450,
    wickets: 34,
    highestScore: 145,
    bestBowling: '3/28',
    average: 38.9,
    strikeRate: 145.2,
    centuries: 4,
    fifties: 24,
    ranking: 5,
    achievements: ['Rising Star', 'Fastest Fifty', 'Clean Striker'],
    recentForm: ['W', 'W', 'W', 'W', 'L'],
  },
];

export const teams: Team[] = [
  {
    id: '1',
    name: 'Mumbai Strikers',
    logo: '🔴',
    captain: 'Vikram Sharma',
    captainId: '1',
    players: ['1', '2', '3', '4', '5'],
    wins: 45,
    losses: 12,
    draws: 3,
    nrr: '+1.245',
    trophies: 5,
    homeGround: 'Wankhede Stadium',
  },
  {
    id: '2',
    name: 'Delhi Dragons',
    logo: '🔵',
    captain: 'Rohit Malhotra',
    captainId: '3',
    players: ['3'],
    wins: 38,
    losses: 18,
    draws: 4,
    nrr: '+0.892',
    trophies: 3,
    homeGround: 'Feroz Shah Kotla',
  },
  {
    id: '3',
    name: 'Chennai Kings',
    logo: '🟡',
    captain: 'Karthik Nair',
    captainId: '4',
    players: ['4'],
    wins: 42,
    losses: 15,
    draws: 3,
    nrr: '+1.102',
    trophies: 4,
    homeGround: 'MA Chidambaram Stadium',
  },
  {
    id: '4',
    name: 'Kolkata Warriors',
    logo: '🟣',
    captain: 'Amit Sen',
    captainId: '6',
    players: [],
    wins: 35,
    losses: 20,
    draws: 5,
    nrr: '+0.654',
    trophies: 2,
    homeGround: 'Eden Gardens',
  },
  {
    id: '5',
    name: 'Bangalore Bulls',
    logo: '🟠',
    captain: 'Rahul Dravid Jr',
    captainId: '7',
    players: [],
    wins: 40,
    losses: 16,
    draws: 4,
    nrr: '+0.998',
    trophies: 3,
    homeGround: 'M Chinnaswamy Stadium',
  },
];

export const matches: Match[] = [
  {
    id: '1',
    team1: { name: 'Mumbai Strikers', logo: '🔴', score: '185/4', overs: '18.2' },
    team2: { name: 'Delhi Dragons', logo: '🔵', score: '142/8', overs: '20' },
    status: 'live',
    matchType: 'T20',
    ground: 'Wankhede Stadium',
    date: '2024-12-12',
    time: '7:30 PM',
    toss: 'Mumbai Strikers won and chose to bat',
  },
  {
    id: '2',
    team1: { name: 'Chennai Kings', logo: '🟡', score: '178/6', overs: '20' },
    team2: { name: 'Kolkata Warriors', logo: '🟣', score: '165/9', overs: '20' },
    status: 'completed',
    matchType: 'T20',
    ground: 'MA Chidambaram Stadium',
    date: '2024-12-11',
    time: '3:30 PM',
    result: 'Chennai Kings won by 13 runs',
    playerOfMatch: 'Karthik Nair',
  },
  {
    id: '3',
    team1: { name: 'Bangalore Bulls', logo: '🟠' },
    team2: { name: 'Mumbai Strikers', logo: '🔴' },
    status: 'upcoming',
    matchType: 'T20',
    ground: 'M Chinnaswamy Stadium',
    date: '2024-12-15',
    time: '7:30 PM',
  },
  {
    id: '4',
    team1: { name: 'Delhi Dragons', logo: '🔵' },
    team2: { name: 'Kolkata Warriors', logo: '🟣' },
    status: 'upcoming',
    matchType: 'ODI',
    ground: 'Eden Gardens',
    date: '2024-12-18',
    time: '2:00 PM',
  },
  {
    id: '5',
    team1: { name: 'Chennai Kings', logo: '🟡', score: '245/7', overs: '50' },
    team2: { name: 'Bangalore Bulls', logo: '🟠', score: '248/5', overs: '48.3' },
    status: 'completed',
    matchType: 'ODI',
    ground: 'M Chinnaswamy Stadium',
    date: '2024-12-08',
    time: '9:30 AM',
    result: 'Bangalore Bulls won by 5 wickets',
    playerOfMatch: 'Sameer Khan',
  },
];

export const tournaments: Tournament[] = [
  {
    id: '1',
    name: 'CrickTribe Premier League',
    logo: '🏆',
    status: 'ongoing',
    teams: 8,
    matches: 32,
    startDate: '2024-11-01',
    endDate: '2024-12-30',
    format: 'T20',
    prize: '₹10,00,000',
    location: 'Multiple Cities',
  },
  {
    id: '2',
    name: 'Winter Cricket Championship',
    logo: '❄️',
    status: 'upcoming',
    teams: 16,
    matches: 48,
    startDate: '2025-01-15',
    endDate: '2025-02-28',
    format: 'ODI',
    prize: '₹5,00,000',
    location: 'Delhi NCR',
  },
  {
    id: '3',
    name: 'Corporate Cricket Cup',
    logo: '🏢',
    status: 'completed',
    teams: 12,
    matches: 24,
    startDate: '2024-09-01',
    endDate: '2024-10-15',
    format: 'T10',
    prize: '₹3,00,000',
    location: 'Mumbai',
  },
  {
    id: '4',
    name: 'Night Cricket League',
    logo: '🌙',
    status: 'ongoing',
    teams: 6,
    matches: 15,
    startDate: '2024-12-01',
    endDate: '2024-12-25',
    format: 'T20',
    prize: '₹2,00,000',
    location: 'Bangalore',
  },
];

export const feedPosts: FeedPost[] = [
  {
    id: '1',
    author: 'Vikram Sharma',
    authorAvatar: '👨‍🦱',
    content: '🎉 Just scored my 8th century! What a match against Delhi Dragons. Thanks to my team for the amazing support! #CrickTribe #Century',
    likes: 245,
    comments: 32,
    timestamp: '2 hours ago',
    type: 'achievement',
  },
  {
    id: '2',
    author: 'CrickTribe Official',
    authorAvatar: '🏏',
    content: '🔥 LIVE NOW: Mumbai Strikers vs Delhi Dragons! Tune in for an epic T20 showdown. Current score: 185/4 in 18.2 overs.',
    likes: 1024,
    comments: 156,
    timestamp: '30 mins ago',
    type: 'match',
  },
  {
    id: '3',
    author: 'Arjun Patel',
    authorAvatar: '👨',
    content: 'Practice session done! Working on my variations. New googly coming soon 🎯 #BowlingLife',
    image: 'cricket-practice',
    likes: 89,
    comments: 12,
    timestamp: '5 hours ago',
    type: 'post',
  },
  {
    id: '4',
    author: 'Mumbai Strikers',
    authorAvatar: '🔴',
    content: 'Registration open for our youth cricket camp! Ages 12-18. Learn from the pros. Limited seats available!',
    likes: 456,
    comments: 78,
    timestamp: '1 day ago',
    type: 'post',
  },
];

export const grounds: Ground[] = [
  {
    id: '1',
    name: 'Wankhede Stadium',
    location: 'Mumbai, Maharashtra',
    capacity: 33000,
    image: 'stadium-1',
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Eden Gardens',
    location: 'Kolkata, West Bengal',
    capacity: 68000,
    image: 'stadium-2',
    rating: 4.9,
  },
  {
    id: '3',
    name: 'M Chinnaswamy Stadium',
    location: 'Bangalore, Karnataka',
    capacity: 40000,
    image: 'stadium-3',
    rating: 4.7,
  },
  {
    id: '4',
    name: 'Local Cricket Ground',
    location: 'Your Area',
    capacity: 500,
    image: 'stadium-4',
    rating: 4.2,
  },
];

export const commentary: Commentary[] = [
  { over: '18.2', ball: 2, runs: 4, text: 'FOUR! Sharma drives through covers beautifully!', type: 'boundary' },
  { over: '18.1', ball: 1, runs: 1, text: 'Single to mid-on, good running between the wickets', type: 'normal' },
  { over: '17.6', ball: 6, runs: 6, text: 'SIX! Massive hit over long-on! Into the stands!', type: 'six' },
  { over: '17.5', ball: 5, runs: 0, text: 'Dot ball, good yorker from Khan', type: 'normal' },
  { over: '17.4', ball: 4, runs: 2, text: 'Two runs, swept to fine leg', type: 'normal' },
  { over: '17.3', ball: 3, runs: 0, text: 'WICKET! Caught at deep midwicket! Patel departs', type: 'wicket' },
  { over: '17.2', ball: 2, runs: 4, text: 'FOUR! Edged but safe, flies to third man', type: 'boundary' },
  { over: '17.1', ball: 1, runs: 1, text: 'Quick single, good intent', type: 'normal' },
];

export const pointsTable = [
  { position: 1, team: 'Mumbai Strikers', played: 8, won: 7, lost: 1, nrr: '+1.245', points: 14 },
  { position: 2, team: 'Chennai Kings', played: 8, won: 6, lost: 2, nrr: '+1.102', points: 12 },
  { position: 3, team: 'Bangalore Bulls', played: 8, won: 5, lost: 3, nrr: '+0.998', points: 10 },
  { position: 4, team: 'Delhi Dragons', played: 8, won: 4, lost: 4, nrr: '+0.892', points: 8 },
  { position: 5, team: 'Kolkata Warriors', played: 8, won: 3, lost: 5, nrr: '+0.654', points: 6 },
];

export const runRateData = [
  { over: 1, teamA: 8, teamB: 6 },
  { over: 2, teamA: 7, teamB: 9 },
  { over: 3, teamA: 10, teamB: 7 },
  { over: 4, teamA: 6, teamB: 8 },
  { over: 5, teamA: 12, teamB: 10 },
  { over: 6, teamA: 9, teamB: 11 },
  { over: 7, teamA: 8, teamB: 7 },
  { over: 8, teamA: 11, teamB: 9 },
  { over: 9, teamA: 7, teamB: 6 },
  { over: 10, teamA: 10, teamB: 8 },
  { over: 11, teamA: 9, teamB: 10 },
  { over: 12, teamA: 12, teamB: 7 },
  { over: 13, teamA: 8, teamB: 9 },
  { over: 14, teamA: 11, teamB: 8 },
  { over: 15, teamA: 10, teamB: 11 },
  { over: 16, teamA: 14, teamB: 9 },
  { over: 17, teamA: 12, teamB: 10 },
  { over: 18, teamA: 11, teamB: 8 },
];

export const wormData = [
  { over: 0, teamA: 0, teamB: 0 },
  { over: 2, teamA: 15, teamB: 12 },
  { over: 4, teamA: 32, teamB: 28 },
  { over: 6, teamA: 52, teamB: 45 },
  { over: 8, teamA: 68, teamB: 62 },
  { over: 10, teamA: 89, teamB: 78 },
  { over: 12, teamA: 108, teamB: 95 },
  { over: 14, teamA: 128, teamB: 112 },
  { over: 16, teamA: 152, teamB: 128 },
  { over: 18, teamA: 178, teamB: 142 },
  { over: 20, teamA: 185, teamB: 142 },
];

export const leaderboard = {
  orangeCap: [
    { rank: 1, player: 'Vikram Sharma', team: 'Mumbai Strikers', runs: 542, matches: 8 },
    { rank: 2, player: 'Sameer Khan', team: 'Bangalore Bulls', runs: 498, matches: 8 },
    { rank: 3, player: 'Rohit Malhotra', team: 'Delhi Dragons', runs: 456, matches: 8 },
  ],
  purpleCap: [
    { rank: 1, player: 'Arjun Patel', team: 'Mumbai Strikers', wickets: 18, matches: 8 },
    { rank: 2, player: 'Deepak Kumar', team: 'Chennai Kings', wickets: 15, matches: 8 },
    { rank: 3, player: 'Rahul Singh', team: 'Kolkata Warriors', wickets: 14, matches: 8 },
  ],
};

export const userStats = {
  totalRuns: 5420,
  totalWickets: 12,
  matchesPlayed: 156,
  ranking: 1,
  winRate: 78,
  recentMatches: 5,
  centuries: 8,
  fifties: 32,
};
