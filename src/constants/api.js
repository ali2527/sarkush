
// export const BASE_URL = "https://secure.demo243.webhostlabs.net:3002/api/"
// export const UPLOADS_URL = "https://secure.demo243.webhostlabs.net:3002/Uploads/"

export const BASE_URL = "http://localhost:3002/api"
export const UPLOADS_URL = "http://localhost:3002/Uploads"
export const SOCKET_URL = "http://localhost:3002"


export const AUTH = {
    signin: "/coach/auth/signin",
    signup:"/coach/auth/register",
    emailCode:"/coach/auth/emailVerificationCode",
    verifyCode:"/coach/auth/verifyRecoverCode",
    resetPassword:"/coach/auth/resetPassword",
}


export const USERS = {
    get: "/auth/signin",
    getAllCoaches:"/admin/user/getAllCoaches",
    getAllTutors:"/admin/user/getAllTutors",
    getCoachById:"/admin/user/getCoachById/"
}

export const COACH = {
    updateProfile : "/coach/profile/updateProfile",
    changePassword:"/coach/profile/changePassword",
    getMyStudents:"/coach/profile/getMyStudents",
}

export const SERVICES = {
    getAll: "/service/getAllServices"
}

export const RATES = {
    getMyRates: "/rates/getMyRates",
    setRates : "/rates/setRates"
}

export const COMISSSION = {
    getComission : "/comission/getComission"
}

export const SCHEDULE = {
    addSchedule: "/schedule/addSchedule",
    getMySchedule:"/schedule/getMySchedule"
}


export const CHAT = {
    createChat: "/chat/createChat",
    getMyChats:"/chat/getMyChats",
}


export const MESSAGE = {
    createMessage: "/message/createMessage",
    getChatMessages:"/message/getChatMessages/",
}


export const REVIEWS={
    getAll:"/review/getAllReviewsByCoachId/",
    getCoachRatings:"/review/getCoachRatings/"
}

export const NOTIFICATION={
    getAllMyNotifications:"/notification/getAllMyNotifications",
    getUnreadNotifications:"/notification/getUnreadNotifications",
    toggleNotification:"/notification/toggleNotification/"
}



export const LESSON={
    bookLesson:"/lesson/addLesson",
    getUpcomingLessons:"/lesson/getAllUpcomingLessons",
    getCompletedLessons:"/lesson/getAllCompletedLessons",
    getLiveLessons:"/lesson/getAllLiveLessons",
    getLessonById:"/lesson/getLessonById/",
    updateLesson:"/lesson/updateLesson/",
    createLessonSignature:"/lesson/createLessonSignature"
}





