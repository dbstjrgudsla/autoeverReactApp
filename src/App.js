import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // GET 요청을 통해 데이터를 가져오기
    axios.get('http://localhost:8080/users')
      .then(response => {
        setUsers(response.data); // 데이터 상태에 저장
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <pre>
        {JSON.stringify(users, null, 2)} {/* JSON 데이터를 보기 좋게 출력 */}
      </pre>
    </div>
  );
};

export default App;
