import axiosAdmin from "./axiosAdmin";

const QuanlyGameApi = {
    getAllGames(){
        const url = "/games/";
        return axiosAdmin.get(url);
    },

    getGameById(){
        const url = "/games/:id";
        return axiosAdmin.get(url);
    },

    createGame(){
        const url = "/games/create";
        return axiosAdmin.post(url);
    },

    updateGame(){
        const url = "/games/update/:id";
        return axiosAdmin.put(url);
    },
    deleteGame(){
        const url = "/games/delete/:id";
        return axiosAdmin.delete(url);
    },
    getGameByTag(tag) {
        const url = `/games/tag/${tag}`;
        return axiosAdmin.get(url);
    }

}
export default QuanlyGameApi;