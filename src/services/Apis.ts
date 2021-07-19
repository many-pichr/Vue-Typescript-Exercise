import http from "./apiClient";

class Apis {
  getAll(): Promise<any> {
    return http.get("/users?per_page=20");
  }

  getFollower(uri: string): Promise<any> {
    return http.get(uri);
  }
}

export default new Apis();