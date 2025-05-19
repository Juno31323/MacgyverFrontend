export async function getIp() {
    try {
      const response = await fetch("http://localhost:8080/get-ip");
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error("IP 조회 실패:", error);
      return null;
    }
  }