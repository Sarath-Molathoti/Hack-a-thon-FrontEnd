import { User } from './user';

export class Task {
    planId: number;
    task: string;
    assessment: number;
    referenceLink: string;
    associateList? = [];
}

export class AssociateData {
    name: string;
    email: string;
    password: string;
    mentorDTO: User;
    plans: Task[];
}

export class MentorData {
    name: string;
    email: string;
    password: string;
    organization: string;
    role: string;
    interest: string;
    expertise: string;
    associateList: AssociateData[];
}