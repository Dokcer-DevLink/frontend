export type MentoringType = {
  menteeUuid: string;
  mentorUuid: string;
  mentoringPlace: string;
  mentoringUuid: string;
  onOffline: 'ONLINE' | 'OFFLINE';
  postUuid: string;
  startTime: string;
  status: 'ONGOING' | 'COMPLETED';
  unitTimeCount: number;
};
