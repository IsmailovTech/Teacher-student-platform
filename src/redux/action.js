export const get_student = (studentdata) => {
    return {
        type: "GET_STUDENT",
        studentdata,
    };
}

export const get_teacher = (teacherdata) => {
    return {
        type: "GET_TEACHER",
        teacherdata,
    };
}