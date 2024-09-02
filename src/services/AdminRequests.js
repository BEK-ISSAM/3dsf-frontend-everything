import axios from 'axios';


axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE';

export const createCourse = (course) => {
    return axios.post(AdminRequests.AllCoursesURL(), course);
};
export const getAllCourses = () => {
    return axios.get(AdminRequests.AllCoursesURL());
};
export const getCourse = (id) => {
    return axios.get(AdminRequests.courseURL(id));
};

export const updateCourse = (id, course) => {
    return axios.put(AdminRequests.courseURL(id), course);
};
    export const deleteCourse = (id) => {
    return axios.delete(AdminRequests.courseURL(id));
};
    export const getAllUsers = () => {
    return axios.get(AdminRequests.AllUsersURL());
};
    export const getUser = (id) => {
    return axios.get(AdminRequests.userURL(id));
};
    export const updateUser = (id, user) => {
    return axios.put(AdminRequests.userURL(id), user);
};
    export const deleteUser = (id) => {
    return axios.delete(AdminRequests.userURL(id));
};
    export const getAllCategories = () => {
        console.log(AdminRequests.AllCategoriesURL());
    return axios.get(AdminRequests.AllCategoriesURL());
};
    export const getCategory = (id) => {
    return axios.get(AdminRequests.categoryURL(id));
};
    export const updateCategory = (id, category) => {
    return axios.put(AdminRequests.categoryURL(id), category);
};
    export const deleteCategory = (id) => {
    return axios.delete(AdminRequests.categoryURL(id));
};
    export const createCategory = (category) => {
    axios.post(AdminRequests.AllCategoriesURL(), category)
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            console.error(error)
        });

}

const AdminRequests = {
    BASE_URL:  'http://localhost:8080/api/',
    USERS : 'users',
    COURSES : 'courses',
    CATEGORIES : 'categories',

    userURL : (id ) => { return `${AdminRequests.BASE_URL}${AdminRequests.USERS}/${id}`},
    AllUsersURL : () => { return `${AdminRequests.BASE_URL}${AdminRequests.USERS}`},
    AllCoursesURL : () => { return `${AdminRequests.BASE_URL}${AdminRequests.COURSES}`},
    courseURL : (id ) => { return `${AdminRequests.BASE_URL}${AdminRequests.COURSES}/${id}`},
    categoryURL : (id ) => { return `${AdminRequests.BASE_URL}${AdminRequests.CATEGORIES}/${id}`},
    AllCategoriesURL : () => { return `${AdminRequests.BASE_URL}${AdminRequests.CATEGORIES}`},
    CreateCourseURL : (id ) => { return `${AdminRequests.BASE_URL}${AdminRequests.COURSES}/${id}`},

    createCourse,
    getAllCourses,
    getCourse,
    updateCourse,
    deleteCourse,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    getAllCategories,
    getCategory,
    updateCategory,
    deleteCategory,
    createCategory
};

export default AdminRequests;