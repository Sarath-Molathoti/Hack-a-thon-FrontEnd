export interface Student{
    studentId ?: number,
    name ?: string,
    age ?: number,
    emailId ?: string,
    password ?: string,
    collegeName ?: string,
    address ?: string,
    cgpa ?: number,
    mobile ?: number,
    aptitudeScore ?: number,
    codingScore ?: number
}

export interface Questions{
    questionId ?: number,
    question ?: string,
    option1 ?: string,
    option2 ?: string
    option3 ?: string
    option4 ?: string
    answer ?: string
    questionType ?: string
}