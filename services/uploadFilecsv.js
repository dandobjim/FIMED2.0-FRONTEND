import http from "../shared/CAxios";

class UploadFileService {

    cookie = Cookies.get("fimedtk");

    upload(file, onUploadProgress){
        let formData = new FormData();

        formData.append("file", file);

        return http.post("/api/v2/patient/create_by_csv", formData,{
            headers:{
                Authorization: `Bearer ${cookie}`
            },
            onUploadProgress,
        });

    }
}

export default UploadFileService;

