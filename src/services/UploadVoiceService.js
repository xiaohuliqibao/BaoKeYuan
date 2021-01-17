import http from "../plugins/axios";

class UploadVoiceService {
  uploadVoice(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/voice/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  getFiles() {
    return http.get("/voice/files");
  }

  getTest() {
    return http.get("/config");
  }
}

export default new UploadVoiceService();
