export async function getIp() {
  try {
    const response = await fetch("http://localhost:8080/get-ip");
    const data = await response.json();
    return ("나의 IP: "+data.ip);
  } catch (error) {
    console.error("IP 조회 실패:", error);
    return "IP를 가져올 수 없습니다.";
  }
}